# 🤖 Bot Telegram de disponibilité — Kaz'a Bitcoin

Ce bot te permet de marquer un livre **emprunté / rendu** depuis Telegram.
À chaque changement, il met à jour `data/kaza-dispo.js`, le pousse sur GitHub,
et **Netlify redéploie le site tout seul**. Aucune édition de fichier à la main.

- 📗 = disponible · 📕 = emprunté
- Le bot **n'obéit qu'à toi** (ton identifiant Telegram).
- Zéro dépendance : juste **Python 3** et **git** (déjà présents sur la plupart des nœuds).

Il tourne sur ton **nœud Bitcoin** (allumé 24/7), idéalement.

---

## Étape 1 — Créer le bot Telegram (2 min)

1. Sur Telegram, écris à **[@BotFather](https://t.me/BotFather)**.
2. Envoie `/newbot`, choisis un nom et un identifiant (ex. `kaza_dispo_bot`).
3. BotFather te donne un **token** du type `123456789:AA...` → garde-le.
4. Écris à **[@userinfobot](https://t.me/userinfobot)** : il te renvoie ton
   **id** (des chiffres). C'est ton `KAZA_BOT_CHAT_ID`.

> Pense à envoyer un premier message (`/start`) à TON bot, sinon il ne pourra
> pas t'écrire en retour.

---

## Étape 2 — Donner au nœud l'accès en écriture au dépôt

Comme pour le Mac, on crée une **deploy key** dédiée, sur le nœud :

```bash
ssh-keygen -t ed25519 -f ~/.ssh/kaza_deploy -N "" -C "kaza-bitcoin deploy (noeud)"
cat ~/.ssh/kaza_deploy.pub
```

Copie la clé publique affichée, puis sur GitHub :
**dépôt → Settings → Deploy keys → Add deploy key** → colle-la →
✅ **Allow write access** → Add.

> GitHub refuse deux fois la même clé : c'est pour ça qu'on en génère une
> **propre au nœud**, différente de celle du Mac.

---

## Étape 3 — Cloner le dépôt sur le nœud

```bash
cd ~
GIT_SSH_COMMAND="ssh -i ~/.ssh/kaza_deploy -o IdentitiesOnly=yes" \
  git clone git@github.com:ProfScofield21/kaza-bitcoin-.git kaza-bitcoin

cd kaza-bitcoin
git config core.sshCommand "ssh -i ~/.ssh/kaza_deploy -o IdentitiesOnly=yes"
git config user.name  "Kaza Bot"
git config user.email "bot@kaza-bitcoin.local"
```

---

## Étape 4 — Configurer le bot

```bash
cd ~/kaza-bitcoin
cp scripts/bot.env.example scripts/bot.env
nano scripts/bot.env      # remplis TOKEN, CHAT_ID, REPO_DIR, SSH_KEY
```

`scripts/bot.env` n'est **pas** versionné (ton token reste privé).

---

## Étape 5 — Tester puis lancer en continu

**Test manuel :**
```bash
cd ~/kaza-bitcoin
set -a; . scripts/bot.env; set +a
python3 scripts/kaza-bot.py
```
Sur Telegram, envoie `/liste` à ton bot : tu dois voir tes livres.
Tape un livre → il bascule, et le site se met à jour en ~1 min. `Ctrl-C` pour arrêter.

**En continu (recommandé) — systemd :**
```bash
sudo cp scripts/kaza-bot.service /etc/systemd/system/
# adapte User= et les chemins dans le fichier si besoin
sudo systemctl daemon-reload
sudo systemctl enable --now kaza-bot
journalctl -u kaza-bot -f          # voir les logs
```

**Sans systemd (Start9, ou accès limité) — tmux :**
```bash
tmux new -s kaza
set -a; . scripts/bot.env; set +a
python3 scripts/kaza-bot.py
# détache avec Ctrl-b puis d ; le bot continue de tourner
```

---

## Commandes du bot

| Commande | Effet |
|---|---|
| `/liste` | Affiche tous les livres ; **tape un livre pour basculer** son état |
| `/emprunte <recherche>` | Marque emprunté (ex. `/emprunte etalon fiat`) |
| `/rendu <recherche>` | Marque rendu / disponible |
| `/aide` | Aide |

---

## Notes selon ton nœud

- **Umbrel** : tu as un accès SSH (`ssh umbrel@umbrel.local`). Python 3 et git
  sont présents. systemd fonctionne. Utilisateur typique : `umbrel`.
- **Start9** : plus verrouillé. Le plus simple est de lancer le bot dans un
  conteneur ou via une machine annexe (un Raspberry Pi, un mini-PC). La méthode
  tmux marche si tu as un shell.
- **Autre (Debian/Ubuntu, Pi OS…)** : systemd, rien de particulier.

Si tu me dis quel nœud tu utilises exactement, je t'adapte les commandes.
