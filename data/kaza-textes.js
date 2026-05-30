// ============================================================
//  KAZA-TEXTES.JS — Textes fondateurs de la bibliothèque
//  Manifestes, White Papers, documents librement téléchargeables.
//  Modifiez ce fichier pour ajouter ou mettre à jour les textes.
//
//  Champs disponibles :
//    id         : identifiant unique slug (obligatoire)
//    titre      : titre principal affiché (obligatoire)
//    titre_orig : titre original si différent (optionnel)
//    auteur     : auteur(s) (obligatoire)
//    annee      : année de rédaction (obligatoire)
//    img        : image de couverture dans /images/ (obligatoire)
//    type       : "Manifeste" | "White Paper" | "Essai" (obligatoire)
//    rubrique   : description courte (obligatoire)
//    extrait    : première phrase ou citation marquante (optionnel)
//    versions   : [{label, file}] téléchargements PDF (optionnel)
//    lien       : URL du texte original en ligne (optionnel)
//    ere        : "precurseurs" | "cypherpunks" | "bitcoin" (obligatoire)
// ============================================================

var KAZA_TEXTES = [

  // ── ÈRE 1 : Précurseurs (1985–1992) ──────────────────────

  {
    id:         "crypto-anarchist-manifesto",
    titre:      "Le Manifeste Crypto-Anarchiste",
    titre_orig: "The Crypto Anarchist Manifesto",
    auteur:     "Timothy C. May",
    annee:      1988,
    img:        "whitepaper_crypto_anarchy_v1.webp",
    type:       "Manifeste",
    ere:        "precurseurs",
    rubrique:   "Le texte prophétique de 1988 qui annonce l'avènement de la crypto-anarchie : des échanges anonymes, intraçables, hors du contrôle des États, rendus possibles par la cryptographie à clé publique.",
    extrait:    "Un spectre surgit dans le monde moderne, le spectre de la crypto-anarchie.",
    versions: [
      { label: "🇫🇷 Version française", file: "White Paper/Cypherpunk/crypto-anarchist-manifesto-fr.pdf" },
      { label: "🇬🇧 English version",   file: "White Paper/Cypherpunk/crypto-anarchist-manifesto-en.pdf" }
    ],
    lien: "https://www.activism.net/cypherpunk/crypto-anarchy.html"
  },

  // ── ÈRE 2 : Cypherpunks (1993–2002) ──────────────────────

  {
    id:         "cypherpunk-manifesto",
    titre:      "Manifeste d'un Cypherpunk",
    titre_orig: "A Cypherpunk's Manifesto",
    auteur:     "Eric Hughes",
    annee:      1993,
    img:        "whitepaper_cypherpunk_v2.webp",
    type:       "Manifeste",
    ere:        "cypherpunks",
    rubrique:   "Le texte fondateur du mouvement cypherpunk. En quelques paragraphes fulgurants, Eric Hughes pose les bases d'une philosophie de la vie privée par la cryptographie — directement à l'origine de Bitcoin.",
    extrait:    "La vie privée est nécessaire pour une société ouverte dans l'ère électronique.",
    versions: [
      { label: "🇫🇷 Version française", file: "White Paper/Cypherpunk/cypherpunk-manifesto-fr.pdf" },
      { label: "🇬🇧 English version",   file: "White Paper/Cypherpunk/cypherpunk-manifesto-en.pdf" }
    ],
    lien: "https://nakamotoinstitute.org/library/cypherpunk-manifesto/"
  },

  // ── ÈRE 3 : Bitcoin (2008–) ───────────────────────────────

  {
    id:         "bitcoin-whitepaper",
    titre:      "Bitcoin : Un système de monnaie électronique pair-à-pair",
    titre_orig: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    auteur:     "Satoshi Nakamoto",
    annee:      2008,
    img:        "whitepaper_bitcoin.svg",
    type:       "White Paper",
    ere:        "bitcoin",
    rubrique:   "Le document fondateur publié par Satoshi Nakamoto en octobre 2008, décrivant Bitcoin comme un système de monnaie électronique pair-à-pair sans tiers de confiance. Le texte qui a tout changé.",
    extrait:    "Une version purement pair-à-pair de la monnaie électronique permettrait d'envoyer des paiements en ligne directement d'une partie à une autre sans passer par une institution financière.",
    versions: [
      { label: "🇫🇷 Version française", file: "White Paper/Bitcoin/whitepaper_bitcoin_fr.pdf" },
      { label: "🇬🇧 English version",   file: "White Paper/Bitcoin/whitepaper_bitcoin_en.pdf" }
    ],
    lien: "https://nakamotoinstitute.org/bitcoin/"
  },

  {
    id:         "lightning-whitepaper",
    titre:      "Le Réseau Lightning : Paiements instantanés hors-chaîne",
    titre_orig: "The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments",
    auteur:     "Joseph Poon & Thaddeus Dryja",
    annee:      2016,
    img:        "whitepaper_lightning.svg",
    type:       "White Paper",
    ere:        "bitcoin",
    rubrique:   "Le document original de Poon et Dryja décrivant le réseau Lightning, solution de paiements instantanés hors-chaîne pour Bitcoin. Document de référence pour comprendre la couche 2 de Bitcoin.",
    extrait:    "Si Bitcoin est la monnaie souveraine de l'ère numérique, Lightning en est le système de paiement quotidien.",
    versions: [
      { label: "Draft 0.5",     file: "White Paper/Lightning/lightning_paper_draft_05.pdf" },
      { label: "Draft 0.5.9.2", file: "White Paper/Lightning/lightning_paper_draft_0592.pdf" }
    ],
    lien: "https://lightning.network/lightning-network-paper.pdf"
  },

];
