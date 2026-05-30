#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Kaz'a Bitcoin — Bot Telegram de disponibilité
==============================================

Permet de basculer la disponibilité des livres (emprunté / rendu) depuis
Telegram. À chaque changement, le bot réécrit data/kaza-dispo.js, commit et
pousse sur GitHub -> Netlify redéploie automatiquement le site.

• Aucune dépendance externe (Python 3 standard + git).
• Ne répond qu'à un seul utilisateur autorisé (KAZA_BOT_CHAT_ID).

Configuration (variables d'environnement, voir scripts/bot.env.example) :
    KAZA_BOT_TOKEN     token donné par @BotFather
    KAZA_BOT_CHAT_ID   ton id Telegram (chiffres) — seul autorisé à piloter
    KAZA_REPO_DIR      chemin absolu du dépôt cloné sur le nœud
    KAZA_GIT_SSH_KEY   [optionnel] chemin de la clé SSH de déploiement du nœud

Lancement :  python3 scripts/kaza-bot.py
"""

import json
import os
import re
import subprocess
import sys
import time
import unicodedata
import urllib.parse
import urllib.request

# ── Configuration ───────────────────────────────────────────
TOKEN    = os.environ.get("KAZA_BOT_TOKEN", "").strip()
CHAT_ID  = os.environ.get("KAZA_BOT_CHAT_ID", "").strip()
REPO_DIR = os.environ.get("KAZA_REPO_DIR", os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SSH_KEY  = os.environ.get("KAZA_GIT_SSH_KEY", "").strip()

LIVRES_JS = os.path.join(REPO_DIR, "data", "kaza-livres.js")
DISPO_JS  = os.path.join(REPO_DIR, "data", "kaza-dispo.js")
API       = "https://api.telegram.org/bot%s/" % TOKEN

DISPO_HEADER = """// ============================================================
//  KAZA-DISPO.JS — Disponibilité des livres
//
//  Ce fichier est géré AUTOMATIQUEMENT par le bot Telegram
//  (voir scripts/kaza-bot.py). Évitez de l'éditer à la main :
//  utilisez les commandes du bot (/emprunte, /rendu, /liste).
//
//  KAZA_EMPRUNTES = liste des identifiants des livres empruntés.
// ============================================================

var KAZA_EMPRUNTES = %s;
"""


# ── Utilitaires données ─────────────────────────────────────
def slugify(s):
    """Réplique exacte du slugify() du site (index.html)."""
    s = s.lower()
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def read_books():
    """Renvoie [(id, titre), ...] à partir de data/kaza-livres.js."""
    with open(LIVRES_JS, encoding="utf-8") as fh:
        txt = fh.read()
    books = []
    seen = set()
    # Chaque livre : on prend le 1er `id:` s'il existe, sinon slug du titre.
    for m in re.finditer(r'titre:\s*"((?:[^"\\]|\\.)*)"', txt):
        titre = m.group(1)
        # cherche un champ id: dans les ~200 caractères suivant le titre
        window = txt[m.end():m.end() + 300]
        idm = re.search(r'id:\s*"([^"]+)"', window)
        bid = idm.group(1) if idm else slugify(titre)
        if bid in seen:
            continue
        seen.add(bid)
        books.append((bid, titre))
    return books


def read_borrowed():
    """Renvoie la liste des id empruntés depuis data/kaza-dispo.js."""
    if not os.path.exists(DISPO_JS):
        return []
    with open(DISPO_JS, encoding="utf-8") as fh:
        txt = fh.read()
    m = re.search(r'KAZA_EMPRUNTES\s*=\s*(\[[^\]]*\])', txt, re.S)
    if not m:
        return []
    raw = m.group(1)
    return re.findall(r'"([^"]+)"', raw)


def write_borrowed(ids):
    ids = sorted(set(ids))
    arr = "[\n" + ",\n".join('  "%s"' % i for i in ids) + "\n]" if ids else "[]"
    with open(DISPO_JS, "w", encoding="utf-8") as fh:
        fh.write(DISPO_HEADER % arr)


def git(args):
    env = dict(os.environ)
    if SSH_KEY:
        env["GIT_SSH_COMMAND"] = "ssh -i %s -o IdentitiesOnly=yes" % SSH_KEY
    return subprocess.run(["git", "-C", REPO_DIR] + args, env=env,
                          capture_output=True, text=True)


def deploy(message):
    """commit + push de kaza-dispo.js. Renvoie (ok, detail)."""
    git(["add", "data/kaza-dispo.js"])
    c = git(["commit", "-m", message])
    if c.returncode != 0 and "nothing to commit" in (c.stdout + c.stderr):
        return True, "aucun changement"
    # rebase au cas où le dépôt a bougé ailleurs, puis push
    git(["pull", "--rebase", "--autostash"])
    p = git(["push"])
    if p.returncode != 0:
        return False, (p.stderr or p.stdout).strip()[:300]
    return True, "déployé"


# ── API Telegram (urllib, sans dépendance) ──────────────────
def api(method, params=None):
    data = urllib.parse.urlencode(params or {}).encode() if params else None
    req = urllib.request.Request(API + method, data=data)
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read().decode())
    except Exception as e:  # noqa: BLE001
        print("API err %s: %s" % (method, e), file=sys.stderr)
        return {"ok": False}


def send(text, keyboard=None):
    params = {"chat_id": CHAT_ID, "text": text, "parse_mode": "HTML"}
    if keyboard is not None:
        params["reply_markup"] = json.dumps({"inline_keyboard": keyboard})
    api("sendMessage", params)


def keyboard_livres():
    books = read_books()
    borrowed = set(read_borrowed())
    rows = []
    for bid, titre in books:
        emp = bid in borrowed
        label = ("📕 " if emp else "📗 ") + (titre[:48])
        rows.append([{"text": label, "callback_data": "t:" + bid}])
    return rows, books, borrowed


# ── Logique des commandes ───────────────────────────────────
HELP = (
    "<b>Kaz'a Bitcoin — Bot dispo</b> ⚡\n\n"
    "📗 = disponible · 📕 = emprunté\n\n"
    "/liste — afficher les livres et basculer en un tap\n"
    "/emprunte &lt;recherche&gt; — marquer emprunté\n"
    "/rendu &lt;recherche&gt; — marquer rendu/disponible\n"
    "/aide — ce message"
)


def find_book(query):
    """Trouve un livre par id exact ou par texte dans le titre."""
    q = query.strip().lower()
    books = read_books()
    for bid, titre in books:
        if bid == q:
            return [(bid, titre)]
    matches = [(bid, titre) for bid, titre in books
               if q in titre.lower() or q in bid]
    return matches


def set_state(bid, titre, borrow):
    borrowed = read_borrowed()
    changed = False
    if borrow and bid not in borrowed:
        borrowed.append(bid); changed = True
    elif not borrow and bid in borrowed:
        borrowed = [x for x in borrowed if x != bid]; changed = True
    if not changed:
        return "« %s » était déjà %s." % (titre, "emprunté" if borrow else "disponible")
    write_borrowed(borrowed)
    ok, detail = deploy("dispo: %s %s" % ("emprunté" if borrow else "rendu", bid))
    etat = "📕 emprunté" if borrow else "📗 disponible"
    return ("« %s » → %s\n%s" % (titre, etat, "✅ site mis à jour" if ok else "⚠️ push KO : " + detail))


def handle_text(text):
    parts = text.strip().split(None, 1)
    cmd = parts[0].lower()
    arg = parts[1] if len(parts) > 1 else ""
    if cmd in ("/start", "/aide", "/help"):
        send(HELP)
    elif cmd == "/liste":
        rows, books, borrowed = keyboard_livres()
        send("📚 %d livres · %d empruntés. Tape un livre pour basculer :"
             % (len(books), len(borrowed)), keyboard=rows)
    elif cmd in ("/emprunte", "/rendu"):
        if not arg:
            send("Précise un livre. Ex : <code>%s etalon fiat</code>" % cmd)
            return
        matches = find_book(arg)
        if not matches:
            send("Aucun livre trouvé pour « %s »." % arg)
        elif len(matches) > 1:
            lst = "\n".join("• %s" % t for _, t in matches[:10])
            send("Plusieurs livres correspondent, précise :\n" + lst)
        else:
            bid, titre = matches[0]
            send(set_state(bid, titre, cmd == "/emprunte"))
    else:
        send("Commande inconnue. /aide pour l'aide.")


def handle_callback(cb):
    data = cb.get("data", "")
    if not data.startswith("t:"):
        return
    bid = data[2:]
    books = dict(read_books())
    titre = books.get(bid, bid)
    borrowed = read_borrowed()
    msg = set_state(bid, titre, bid not in borrowed)
    api("answerCallbackQuery", {"callback_query_id": cb["id"], "text": msg[:190]})
    # rafraîchit le clavier du message
    rows, _b, _bo = keyboard_livres()
    api("editMessageReplyMarkup", {
        "chat_id": CHAT_ID,
        "message_id": cb["message"]["message_id"],
        "reply_markup": json.dumps({"inline_keyboard": rows}),
    })


# ── Boucle principale (long polling) ────────────────────────
def authorized(obj):
    chat = (obj.get("chat") or obj.get("from") or {})
    return str(chat.get("id")) == CHAT_ID


def main():
    if not TOKEN or not CHAT_ID:
        sys.exit("KAZA_BOT_TOKEN et KAZA_BOT_CHAT_ID doivent être définis "
                 "(voir scripts/bot.env.example).")
    print("Bot Kaz'a démarré. Dépôt : %s" % REPO_DIR)
    me = api("getMe")
    if me.get("ok"):
        print("Connecté en tant que @%s" % me["result"].get("username"))
    offset = None
    while True:
        params = {"timeout": 30}
        if offset is not None:
            params["offset"] = offset
        upd = api("getUpdates", params)
        if not upd.get("ok"):
            time.sleep(3)
            continue
        for u in upd["result"]:
            offset = u["update_id"] + 1
            try:
                if "message" in u and "text" in u["message"]:
                    if authorized(u["message"]):
                        handle_text(u["message"]["text"])
                elif "callback_query" in u:
                    cb = u["callback_query"]
                    if authorized(cb):
                        handle_callback(cb)
            except Exception as e:  # noqa: BLE001
                print("Erreur traitement update : %s" % e, file=sys.stderr)


if __name__ == "__main__":
    main()
