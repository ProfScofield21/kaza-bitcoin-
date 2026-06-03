#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Génère le contrat de prêt de la Bibliothèque Kaz'a Bitcoin.
PDF A4, thème du site, avec champs de formulaire remplissables/signables à l'écran
(et tout aussi imprimable).
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import Paragraph
from reportlab.pdfgen import canvas
from reportlab.pdfbase.pdfmetrics import stringWidth

OUT = "contrat-kaza-bitcoin.pdf"

# ---- Palette (thème du site) ----
PAGE_BG = HexColor("#fbf7ef")
BAND    = HexColor("#231507")
GOLD    = HexColor("#e08a12")   # accent vif (sur fond sombre)
GOLD_D  = HexColor("#9a5e00")   # doré foncé (sur fond clair)
TEXT    = HexColor("#241a0e")
MUTED   = HexColor("#7a6a50")
BORDER  = HexColor("#cdbf9e")
FIELD_BG= HexColor("#fffdf8")
CREAMSUB= HexColor("#c8a86a")

W, H = A4
LM, RM = 52, 52
CW = W - LM - RM

c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle("Contrat de prêt — Bibliothèque Kaz'a Bitcoin")
c.setAuthor("Kaz'a Bitcoin")

# ---- Fond de page ----
c.setFillColor(PAGE_BG)
c.rect(0, 0, W, H, stroke=0, fill=1)

# ---- Bandeau d'en-tête ----
band_h = 74
c.setFillColor(BAND)
c.rect(0, H - band_h, W, band_h, stroke=0, fill=1)
# filet doré sous le bandeau
c.setFillColor(GOLD)
c.rect(0, H - band_h - 3, W, 3, stroke=0, fill=1)

# Titre "Kaz'a Bitcoin" (deux couleurs), centré
t1, t2 = "Kaz'a ", "Bitcoin"
f, fs = "Times-Bold", 25
w1 = stringWidth(t1, f, fs)
w2 = stringWidth(t2, f, fs)
x0 = (W - (w1 + w2)) / 2
ty = H - 40
c.setFont(f, fs)
c.setFillColor(HexColor("#f5e8c8"))
c.drawString(x0, ty, t1)
c.setFillColor(GOLD)
c.drawString(x0 + w1, ty, t2)
# Sous-titre
c.setFont("Times-Italic", 11)
c.setFillColor(CREAMSUB)
c.drawCentredString(W / 2, H - 58, "Bibliothèque Lightning  ·  Guadeloupe")

# ---- Titre du document ----
y = H - band_h - 34
c.setFont("Times-Bold", 19)
c.setFillColor(GOLD_D)
c.drawCentredString(W / 2, y, "CONTRAT DE PRÊT")
y -= 16
c.setFont("Times-Italic", 9.5)
c.setFillColor(MUTED)
c.drawCentredString(W / 2, y, "Conditions d'emprunt d'un ouvrage de la bibliothèque")
y -= 22

# ---- Styles de paragraphe ----
body = ParagraphStyle("body", fontName="Times-Roman", fontSize=9.7, leading=13.2,
                      textColor=TEXT, alignment=TA_LEFT)
bullet = ParagraphStyle("bullet", parent=body, leftIndent=14, bulletIndent=2,
                        spaceAfter=1.5)
h_sec = ParagraphStyle("hsec", fontName="Times-Bold", fontSize=11, leading=14,
                       textColor=GOLD_D, spaceBefore=0, spaceAfter=3)

def draw_para(text, style, gap=3.0, indent=0.0, width=None):
    """Dessine un Paragraph en partant du haut (y courant) et met à jour y."""
    global y
    w = (width if width is not None else CW) - indent
    p = Paragraph(text, style)
    pw, ph = p.wrap(w, 1000)
    p.drawOn(c, LM + indent, y - ph)
    y -= ph + gap

def section(title):
    global y
    y -= 4
    draw_para(title, h_sec, gap=3)

# ---- 1. Les parties ----
section("1.  Les parties")
draw_para("<b>Le prêteur</b> : la bibliothèque <b>Kaz'a Bitcoin</b>, représentée par son responsable.",
          bullet, gap=4, indent=0)
draw_para("<b>L'emprunteur</b> (à compléter ci-dessous) :", body, gap=6)

# Champs Nom + Contact (sur une ligne label + champ)
form = c.acroForm
def textfield(name, x, fy, w, h=15, fontsize=10, tooltip=""):
    form.textfield(name=name, tooltip=tooltip or name, x=x, y=fy, width=w, height=h,
                   borderStyle="underlined", borderWidth=1, borderColor=BORDER,
                   fillColor=FIELD_BG, textColor=TEXT, forceBorder=True,
                   fontName="Helvetica", fontSize=fontsize, relative=False)

# Ligne 1 : Nom / Pseudo
c.setFont("Times-Roman", 9.7); c.setFillColor(TEXT)
c.drawString(LM, y - 11, "Nom / Pseudo :")
lbl_w = stringWidth("Nom / Pseudo :", "Times-Roman", 9.7)
textfield("nom_pseudo", LM + lbl_w + 8, y - 15, CW - lbl_w - 8, tooltip="Votre nom ou pseudo")
y -= 24
# Ligne 2 : Contact
c.setFont("Times-Roman", 9.7); c.setFillColor(TEXT)
c.drawString(LM, y - 11, "Contact (Telegram / email) :")
lbl_w = stringWidth("Contact (Telegram / email) :", "Times-Roman", 9.7)
textfield("contact", LM + lbl_w + 8, y - 15, CW - lbl_w - 8, tooltip="Telegram ou email")
y -= 26

# ---- 2. Objet ----
section("2.  Objet")
draw_para("La bibliothèque met <b>gratuitement</b> à disposition de l'emprunteur les ouvrages de sa "
          "collection, dans les conditions ci-dessous. Le présent contrat <b>n'est signé qu'une seule "
          "fois</b> : il reste valable pour <b>tous les emprunts suivants, sans limite de nombre</b>.",
          body, gap=6)

# ---- 3. Caution ----
section("3.  Caution")
draw_para("Pour chaque ouvrage emprunté, l'emprunteur verse une <b>caution de 25 000 sats</b> en Lightning.",
          bullet, gap=3.5)
draw_para("Cette caution est <b>intégralement remboursée</b> dès la restitution du livre en bon état.",
          bullet, gap=3.5)
draw_para("L'emprunt est <b>gratuit</b> : la caution n'est pas un loyer.", bullet, gap=6)

# ---- 4. Durée et restitution ----
section("4.  Durée et restitution")
draw_para("L'emprunt court jusqu'au <b>meet-up mensuel Bitcoin Gwada suivant</b> (environ un mois), "
          "renouvelable sur simple demande.", bullet, gap=3.5)
draw_para("La remise et la restitution des livres se font au <b>meet-up mensuel Bitcoin Gwada</b>, "
          "ou en tout autre lieu convenu d'un commun accord.", bullet, gap=6)

# ---- 5. Soin et responsabilité ----
section("5.  Soin et responsabilité")
draw_para("L'emprunteur s'engage à <b>prendre soin</b> de l'ouvrage et à le rendre dans l'état où il "
          "l'a reçu (hors usure normale).", bullet, gap=3.5)
draw_para("En cas de <b>perte, de vol ou de dégradation importante</b>, la caution est conservée à "
          "titre de dédommagement, <b>ou</b> l'emprunteur remplace l'ouvrage par un exemplaire neuf "
          "identique.", bullet, gap=6)

# ---- 6. Engagement (case à cocher) ----
section("6.  Engagement")
cb_size = 12
cb_y = y - 13
form.checkbox(name="accept", tooltip="Je reconnais avoir lu et accepté les conditions",
              x=LM, y=cb_y, size=cb_size, checked=False, buttonStyle="check",
              borderWidth=1, borderColor=GOLD_D, fillColor=FIELD_BG, textColor=GOLD_D,
              forceBorder=True, relative=False)
c.setFont("Times-Roman", 9.7); c.setFillColor(TEXT)
c.drawString(LM + cb_size + 8, y - 11, "Je reconnais avoir lu et accepté l'ensemble des conditions ci-dessus.")
y -= 30

# ---- Bloc signatures (deux colonnes) ----
col_gap = 26
col_w = (CW - col_gap) / 2
sig_h = 46
box_top = y
# Colonne gauche : l'emprunteur / droite : Kaz'a Bitcoin
cols = [
    ("L'emprunteur", "date_emp", "sig_emp", LM),
    ("Kaz'a Bitcoin", "date_kaza", "sig_kaza", LM + col_w + col_gap),
]
for label, date_name, sig_name, cx in cols:
    # titre colonne
    c.setFont("Times-Bold", 10); c.setFillColor(GOLD_D)
    c.drawString(cx, box_top - 10, label)
    # date
    c.setFont("Times-Roman", 9.2); c.setFillColor(TEXT)
    c.drawString(cx, box_top - 27, "Date :")
    dlw = stringWidth("Date :", "Times-Roman", 9.2)
    textfield(date_name, cx + dlw + 6, box_top - 31, col_w - dlw - 6, h=14, fontsize=9,
              tooltip="Date")
    # cadre signature
    sig_box_top = box_top - 40
    c.setStrokeColor(BORDER); c.setLineWidth(1)
    c.setFillColor(FIELD_BG)
    c.roundRect(cx, sig_box_top - sig_h, col_w, sig_h, 5, stroke=1, fill=1)
    # champ texte de signature (par-dessus le cadre, on peut taper OU dessiner)
    form.textfield(name=sig_name, tooltip="Signature (tapez votre nom ou signez)",
                   x=cx + 2, y=sig_box_top - sig_h + 2, width=col_w - 4, height=sig_h - 4,
                   borderStyle="solid", borderWidth=0, borderColor=white,
                   fillColor=None, textColor=TEXT, forceBorder=False,
                   fontName="Helvetica", fontSize=11, relative=False)
    c.setFont("Times-Italic", 7.5); c.setFillColor(MUTED)
    c.drawString(cx + 4, sig_box_top - sig_h - 9, "Signature")

y = box_top - 40 - sig_h - 22

# ---- Pied de page ----
c.setStrokeColor(BORDER); c.setLineWidth(0.8)
c.line(LM, 46, W - RM, 46)
c.setFont("Times-Roman", 8.2); c.setFillColor(MUTED)
c.drawCentredString(W / 2, 34,
    "Kaz'a Bitcoin  ·  kazabitcoin@proton.me  ·  Telegram Bitcoin Gwada  ·  kazabitcoin.netlify.app")

c.showPage()
c.save()
print("OK ->", OUT)
