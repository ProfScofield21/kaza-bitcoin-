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
//    passages   : [optionnel] tableau de citations marquantes supplémentaires
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
    img:        "timothy_may.webp",
    type:       "Manifeste",
    ere:        "precurseurs",
    rubrique:   "Le texte prophétique de 1988 qui annonce l'avènement de la crypto-anarchie : des échanges anonymes, intraçables, hors du contrôle des États, rendus possibles par la cryptographie à clé publique.",
    extrait:    "Un spectre surgit dans le monde moderne, le spectre de la crypto-anarchie.",
    passages: [
      "De même que l'imprimerie a transformé et réduit le pouvoir des guildes médiévales et la structure du pouvoir social, les méthodes cryptographiques vont fondamentalement changer la nature des entreprises et de l'intervention de l'État dans les transactions économiques.",
      "Levez-vous, vous n'avez rien à perdre que vos barbelés !"
    ],
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
    img:        "eric_hughes.webp",
    type:       "Manifeste",
    ere:        "cypherpunks",
    rubrique:   "Le texte fondateur du mouvement cypherpunk. En quelques paragraphes fulgurants, Eric Hughes pose les bases d'une philosophie de la vie privée par la cryptographie — directement à l'origine de Bitcoin.",
    extrait:    "La vie privée est nécessaire pour une société ouverte dans l'ère électronique.",
    passages: [
      "Nous devons défendre notre propre vie privée si nous voulons en avoir.",
      "Les cypherpunks écrivent du code. Ils savent que quelqu'un doit écrire des logiciels pour défendre la vie privée, et c'est ce que nous allons faire."
    ],
    versions: [
      { label: "🇫🇷 Version française", file: "White Paper/Cypherpunk/cypherpunk-manifesto-fr.pdf" },
      { label: "🇬🇧 English version",   file: "White Paper/Cypherpunk/cypherpunk-manifesto-en.pdf" }
    ],
    lien: "https://nakamotoinstitute.org/library/cypherpunk-manifesto/"
  },

  {
    id:         "declaration-cyberspace",
    titre:      "Déclaration d'indépendance du cyberespace",
    titre_orig: "A Declaration of the Independence of Cyberspace",
    auteur:     "John Perry Barlow",
    annee:      1996,
    img:        "barlow_declaration.webp",
    type:       "Manifeste",
    ere:        "cypherpunks",
    rubrique:   "Le manifeste fondateur des libertés numériques. Cofondateur de l'EFF, Barlow somme les États de laisser le cyberespace libre — un texte qui irrigue toute la culture de souveraineté en ligne, jusqu'à Bitcoin.",
    extrait:    "Gouvernements du monde industriel, géants fatigués de chair et d'acier, je viens du Cyberespace, la nouvelle demeure de l'Esprit. Au nom de l'avenir, je vous demande, à vous qui êtes du passé, de nous laisser tranquilles.",
    versions: [
      { label: "🇬🇧 English version", file: "White Paper/Precurseurs/declaration-cyberspace-barlow-1996.pdf" }
    ],
    lien: "https://www.eff.org/cyberspace-independence"
  },

  // ── Précurseurs directs de Bitcoin (1997–2008) ───────────

  {
    id:         "hashcash",
    titre:      "Hashcash",
    titre_orig: "Hashcash — A Denial of Service Counter-Measure",
    auteur:     "Adam Back",
    annee:      1997,
    img:        "adam_back.webp",
    type:       "White Paper",
    ere:        "cypherpunks",
    rubrique:   "La preuve de travail (proof-of-work) avant Bitcoin. Proposée par Adam Back en 1997 et formalisée en 2002, Hashcash impose un coût de calcul pour limiter le spam — le mécanisme exact que Satoshi reprendra pour sécuriser Bitcoin, et qu'il citera dans son white paper.",
    extrait:    "Hashcash calcule un jeton qui sert de preuve de travail : le produire coûte du temps de calcul, ce qui rend l'abus coûteux — sans aucun tiers de confiance.",
    versions: [
      { label: "🇬🇧 English version", file: "White Paper/Precurseurs/hashcash-back-2002.pdf" }
    ],
    lien: "http://www.hashcash.org/"
  },

  {
    id:         "bit-gold",
    titre:      "Bit Gold",
    titre_orig: "Bit Gold",
    auteur:     "Nick Szabo",
    annee:      2005,
    img:        "nick_szabo.webp",
    type:       "Essai",
    ere:        "bitcoin",
    rubrique:   "L'ancêtre conceptuel de Bitcoin. Szabo imagine une monnaie faite de bits coûteux à produire et impossibles à contrefaire, stockés et échangés sans tiers de confiance — l'idée que Satoshi rendra concrète trois ans plus tard.",
    extrait:    "Il serait très souhaitable qu'existe un protocole permettant de créer en ligne des bits impossibles à contrefaire sans effort, puis de les stocker, les transférer et les vérifier en ne faisant qu'un minimum confiance à un tiers. Bit gold.",
    versions: [
      { label: "🇬🇧 English version", file: "White Paper/Precurseurs/bit-gold-szabo-2005.pdf" }
    ],
    lien: "https://nakamotoinstitute.org/library/bit-gold/"
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
