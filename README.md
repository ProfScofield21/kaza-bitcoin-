# Kaz'a Bitcoin — Bibliothèque Lightning ⚡

Bibliothèque communautaire Bitcoin & économie autrichienne, basée en Guadeloupe.

Site statique HTML/CSS/JS présentant une collection de livres avec couvertures 3D interactives, fiches auteurs, et accès aux white papers Bitcoin & Lightning Network.

## Fonctionnalités

- **Couvertures 3D** : animation flip front/back avec reliure, tranche et épaisseur simulées en CSS 3D transforms
- **Zoom au survol** : agrandissement de la couverture ou de la 4ème de couverture au passage de la souris
- **Fiches livres** : résumé, quatrième de couverture, passages clés, téléchargement ebook
- **Fiches auteurs** : biographies, spécialités, liens Twitter/site web
- **Adresses Lightning** : dons aux auteurs via adresses Lightning Network avec QR codes
- **Recherche** : barre de recherche par titre ou auteur sur chaque page
- **Filtres** : catégories (fondamentaux, économie, technique, philosophie…), coups de cœur, ebooks, disponibilité
- **White Papers** : Bitcoin (FR/EN) et Lightning Network
- **Ebooks** : accès direct aux fichiers EPUB/PDF de la bibliothèque
- **Retour en haut** : bouton flottant pour remonter en haut de page
- **Accessibilité** : rôles ARIA sur les modals, `aria-pressed` sur les filtres, navigation clavier (Echap pour fermer)
- **Copie presse-papier** : copie des adresses Lightning compatible `file://` (fallback `execCommand`)

## Structure

```
kaza-bitcoin/
├── index.html              # Page principale (bibliothèque)
├── textes.html             # Textes fondateurs (manifestes & white papers)
├── auteurs.html            # Biographies des auteurs
├── auteurs-ln.html         # Adresses Lightning des auteurs (dons)
├── mentions-legales.html   # Mentions légales
├── data/
│   ├── kaza-data.js        # Données auteurs (KAZA_AUTEURS) + config (KAZA_CONFIG)
│   ├── kaza-livres.js      # Données livres (KAZA_LIVRES)
│   └── kaza-textes.js      # Textes fondateurs (KAZA_TEXTES)
├── ebooks/                 # EPUB et PDF
├── images/                 # Couvertures et 4èmes de couverture
└── White Paper/            # White papers Bitcoin & Lightning
```

Les données sont chargées via `<script src>` (pas de `fetch`), donc le site
fonctionne aussi bien en ouverture locale (`file://`) qu'en hébergement.

## Utilisation locale

Ouvrir `index.html` directement dans un navigateur (aucun serveur requis).

## Hébergement

Le site est déployé sur **Netlify** à partir de ce dépôt GitHub
(chaque `git push` sur `main` redéploie automatiquement).

## Licence

Le **code** (HTML/CSS/JS) est sous licence [MIT](LICENSE).

Les **images de couvertures** et **textes de quatrièmes de couverture** restent la propriété de leurs éditeurs et auteurs respectifs — reproduits ici à des fins éducatives et non commerciales.

---

*Fait avec 🧡⚡ en Guadeloupe*
