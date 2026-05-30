// ============================================================
//  KAZA-DATA.JS — Source de vérité unique pour Kaz'a Bitcoin
//  Modifiez ce fichier pour mettre à jour toutes les pages.
// ============================================================

// ── Configuration générale ────────────────────────────────
//  Modifiez ici l'adresse Lightning de la bibliothèque.
var KAZA_CONFIG = {
  bibLN:   "profscofield@marmottoshis.com",  // adresse LN de la bibliothèque
  bibNom:  "Bibliothèque Lightning",          // nom affiché dans les modales
};

const KAZA_AUTEURS = [

  {
    nom:        "Adli Takkal Bataille",
    bio:        "Diplômé en sciences du langage, entrepreneur et consultant en Bitcoin et blockchain, Adli Takkal Bataille a découvert Bitcoin en 2012 et s'y est plongé sérieusement en 2013. Convaincu que les sciences humaines et sociales sont indispensables pour rendre intelligibles les révolutions technologiques, il cofonde Le Cercle du Coin et s'implique dans l'écosystème francophone. Il est co-auteur, avec Jacques Favier, de Bitcoin, la monnaie acéphale (CNRS Éditions, 2017), l'une des analyses les plus rigoureuses en français sur la nature politique et économique de Bitcoin.",
    specialite: "Sciences humaines appliquées à Bitcoin, stratégie blockchain",
    twitter:    "https://twitter.com/AdliTB",
    site:       null,
    ln:         null,
    livres:     ["Bitcoin, la monnaie acéphale"]
  },

  {
    nom:        "Alexandre Stachtchenko",
    bio:        "Diplômé de l'ESCP Business School, Alexandre Stachtchenko est l'un des pionniers français de l'industrie blockchain. Il cofonde Blockchain Partner en 2017 (première société de conseil française dédiée à la blockchain), rejoint KPMG France en 2021 comme directeur blockchain et crypto, puis intègre Paymium en 2024 et Bitstack en 2025. Il est cofondateur de l'ADAN (Association pour le développement des actifs numériques) et fondateur de l'Institut National du Bitcoin.",
    specialite: "Conseil blockchain, réglementation, politique des actifs numériques",
    twitter:    "https://twitter.com/StachAlex",
    site:       "https://alexstach.fr/",
    ln:         null,
    livres:     ["Les Dérives de la surveillance financière", "Bitcoin et cryptomonnaies faciles"]
  },

  {
    nom:        "Anil Patel",
    bio:        "Auteur du Manuel du Bitcoin (Konsensus Liberty Press, 2023), Anil Patel propose une collection des concepts-clés, modèles mentaux et heuristiques les plus utiles pour comprendre la monnaie à l'ère numérique. L'ouvrage, destiné à un public non technique et illustré de nombreux visuels stimulants, couvre les dimensions économiques, technologiques et psychologiques de Bitcoin avec clarté et pédagogie.",
    specialite: "Vulgarisation Bitcoin, économie comportementale",
    twitter:    "https://x.com/anilpatel",
    site:       "https://teachingbtc.com",
    ln:         null,
    livres:     ["Le Manuel du Bitcoin"]
  },

  {
    nom:        "Benjamin Loiseau",
    bio:        "Contributeur actif à l'écosystème francophone des cryptomonnaies, Benjamin Loiseau collabore notamment avec le Journal du Coin. Il est l'auteur de Crypto Dystopies 2035 (2023), un recueil de nouvelles de science-fiction se déroulant en France en 2035 et explorant les futurs possibles de Bitcoin, Ethereum, des NFT et du métavers. Son travail mêle pédagogie et narration pour rendre accessibles des sujets techniques et économiques complexes.",
    specialite: "Vulgarisation crypto, fiction spéculative",
    twitter:    "https://twitter.com/B3njj92",
    site:       "https://linktr.ee/benjamin.loiseau",
    ln:         null,
    livres:     ["Crypto Dystopies 2035"]
  },

  {
    nom:        "Benoît Berenger",
    bio:        "Ingénieur logiciel avec plus de 20 ans d'expérience et pédagogue Bitcoin, Benoît Berenger est directeur de l'éducation et de la technologie chez My First Bitcoin, où il supervise la vision pédagogique et l'architecture technologique de l'organisation. Cofondateur de l'association Normandie Bitcoin, il a consacré plus d'une décennie à rendre Bitcoin accessible, en formant des enseignants et en déployant des programmes éducatifs à grande échelle. Il est l'auteur de Changement de paradigme (2025), un parcours clair et sans jargon pour comprendre Bitcoin comme outil de souveraineté monétaire.",
    specialite: "Éducation Bitcoin, ingénierie logicielle, souveraineté monétaire",
    twitter:    null,
    site:       "https://www.benoitberenger.com",
    ln:         "normandiebtc@primal.net",
    livres:     ["Changement de Paradigme"]
  },

  {
    nom:        "Claire Balva",
    bio:        "Diplômée de l'ESCP Business School, Claire Balva est une entrepreneuse et stratège française spécialisée dans les cryptomonnaies. Elle cofonde Blockchain Partner en 2015, premier cabinet de conseil blockchain en France, intégré à KPMG en 2021. Depuis 2024, elle est Vice-Présidente Stratégie chez Deblock, une fintech combinant compte courant et portefeuille crypto. Co-autrice du livre Bitcoin et cryptomonnaies faciles (2022), elle présente depuis 2024 le podcast Unhosted.",
    specialite: "Blockchain, stratégie crypto, finance décentralisée",
    twitter:    "https://twitter.com/ClaireBalva",
    site:       "https://linktr.ee/clairebalva",
    ln:         null,
    livres:     ["Bitcoin et cryptomonnaies faciles"]
  },

  {
    nom:        "Daniel Villa Monteiro",
    bio:        "Développeur et formateur spécialisé dans les technologies blockchain, Daniel Villa Monteiro est le directeur pédagogique d'Alyra, l'une des premières écoles françaises dédiées à la blockchain. Fort de plus de 20 ans d'expérience dans le développement d'applications numériques, il s'intéresse aux blockchains sous leurs angles techniques et sociétaux. Il est le scénariste de la bande dessinée Alice au pays des Cryptos (2023), illustrée par Nicolas Balas.",
    specialite: "Formation blockchain, développement, vulgarisation",
    twitter:    "https://twitter.com/MonteiroVilla",
    site:       null,
    ln:         null,
    livres:     ["Alice au pays des Cryptos"]
  },

  {
    nom:        "David St-Onge",
    bio:        "David St-Onge est diplômé en informatique et directeur technique depuis 2016. Initié à Bitcoin début 2018, il y consacre toute son énergie pendant plus d'un an pour en maîtriser tous les aspects. Il enseigne ensuite Bitcoin au Collège de Maisonneuve à Montréal et publie Tout sur Bitcoin - Le comprendre et l'utiliser (2021), manuel d'introduction pensé pour le grand public québécois et francophone.",
    specialite: "Pédagogie Bitcoin, informatique",
    twitter:    "https://twitter.com/DavidStOnge",
    site:       "https://everythingbitcoinbook.com/",
    ln:         null,
    livres:     ["Tout sur Bitcoin"]
  },

  {
    nom:        "Eric Hughes",
    bio:        "Mathématicien et informaticien américain, Eric Hughes est l'un des fondateurs du mouvement cypherpunk. En septembre 1992, il co-organise avec Timothy C. May et John Gilmore la première réunion cypherpunk à San Francisco. Le 9 mars 1993, il publie A Cypherpunk's Manifesto, texte fondateur qui définit la philosophie du mouvement : la vie privée est un droit fondamental, et seule la cryptographie — non les lois — peut la garantir. Ce manifeste, qui se conclut par la formule « Les Cypherpunks écrivent du code », a directement inspiré les pionniers de Bitcoin.",
    specialite: "Cryptographie, vie privée, mouvement cypherpunk",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["A Cypherpunk's Manifesto"]
  },

  {
    nom:        "Frédéric Bastiat",
    naissance:  1801,
    deces:      1850,
    bio:        "Économiste, écrivain et homme politique français né à Bayonne, Frédéric Bastiat est l'une des figures les plus lumineuses du libéralisme économique du XIXe siècle. Auteur des Sophismes économiques, de La Loi (1850) et de Ce qu'on voit et ce qu'on ne voit pas (1850), il excelle à démonter par l'ironie et la logique les sophismes protectionnistes et étatistes. Mort de la tuberculose à 49 ans, il reste une source d'inspiration constante pour les économistes libéraux et les bitcoiners.",
    specialite: "Économie libérale, politique économique, libre-échange",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["La Loi", "Ce qu'on voit et ce qu'on ne voit pas"]
  },

  {
    nom:        "Friedrich Hayek",
    naissance:  1899,
    deces:      1992,
    bio:        "Économiste et philosophe politique austro-britannique, Friedrich Hayek est l'un des plus grands représentants de l'école autrichienne d'économie. Prix Nobel d'économie en 1974, il est l'auteur de La Route de la servitude (1944) et Pour une vraie concurrence des monnaies (1976), dans lequel il propose que des entreprises privées émettent leurs propres monnaies concurrentes — une idée souvent citée comme préfiguration de Bitcoin.",
    specialite: "Économie autrichienne, théorie monétaire, philosophie libérale",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["La Route de la servitude", "Pour une vraie concurrence des monnaies"]
  },

  {
    nom:        "Gigi",
    bio:        "Développeur, écrivain et philosophe du Bitcoin, Gigi est l'auteur de 21 Lessons (2019), une exploration des leçons économiques, philosophiques et technologiques tirées de Bitcoin. Il est le créateur de bitcoin-resources.com, la référence en matière de ressources éducatives sur Bitcoin. Co-fondateur du podcast Einundzwanzig, il est aujourd'hui directeur stratégie chez OpenSats, qui finance les développeurs open-source de l'écosystème Bitcoin.",
    specialite: "Philosophie bitcoin, éducation, open-source",
    twitter:    "https://twitter.com/dergigi",
    site:       "https://dergigi.com/",
    ln:         null,
    livres:     ["21 Leçons"]
  },

  {
    nom:        "Goku",
    bio:        "Auteur et illustrateur pseudonyme actif dans la communauté Bitcoin francophone, Goku publie sous le nom @Crypto_Goku. Il s'est fait connaître par ses créations visuelles et ses bandes dessinées pédagogiques dédiées à Bitcoin et à la liberté financière, accessibles au grand public et aux plus jeunes.",
    specialite: "Illustration, bande dessinée, vulgarisation Bitcoin",
    twitter:    "https://twitter.com/Crypto_Goku",
    site:       "https://linktr.ee/crypto__goku",
    ln:         null,
    livres:     ["Le Petit Satoshi"]
  },

  {
    nom:        "Tewoz",
    bio:        "Auteur et illustrateur pseudonyme de la communauté Bitcoin francophone, Tewoz est co-auteur du Petit Satoshi avec Goku, une bande dessinée jeunesse qui explique Bitcoin aux enfants de manière accessible et ludique.",
    specialite: "Illustration, bande dessinée jeunesse",
    twitter:    "https://x.com/TewozNFT",
    site:       "https://linktr.ee/tewoz",
    ln:         null,
    livres:     ["Le Petit Satoshi"]
  },

  {
    nom:        "Henry Hazlitt",
    naissance:  1894,
    deces:      1993,
    bio:        "Journaliste et économiste américain, Henry Hazlitt a collaboré au Wall Street Journal, au New York Times et à Newsweek. Figure de l'école autrichienne et cofondateur de la Foundation for Economic Education, il est l'auteur de L'Économie en une leçon (1946), un classique traduit dans des dizaines de langues. L'ouvrage, inspiré de Bastiat, démontre pourquoi toute politique économique doit être évaluée sur ses effets à long terme pour l'ensemble de la société.",
    specialite: "Économie autrichienne, journalisme économique, libéralisme",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["L'Économie en une leçon"]
  },

  {
    nom:        "Jacques Favier",
    bio:        "Normalien et agrégé d'histoire, Jacques Favier a mené une longue carrière dans le secteur bancaire tout en développant un intérêt profond pour Bitcoin comme phénomène historique et monétaire. Il cofonde Le Cercle du Coin, premier cercle de réflexion francophone dédié à Bitcoin. Il est co-auteur de Bitcoin, la monnaie acéphale (CNRS Éditions, 2017) et d'Objective Thune (2019).",
    specialite: "Histoire monétaire, Bitcoin, analyse politique",
    twitter:    "https://twitter.com/cryptosaurien",
    site:       "https://blog.lavoiedubitcoin.info/",
    ln:         null,
    livres:     ["Bitcoin, la monnaie acéphale", "Objective Thune"]
  },

  {
    nom:        "James Dale Davidson",
    bio:        "Investisseur, entrepreneur et analyste politique américain, James Dale Davidson est cofondateur et éditeur de la lettre d'investissement Strategic Investment. Auteur prolifique, il a coécrit avec Lord William Rees-Mogg plusieurs ouvrages prospectifs majeurs, dont Blood in the Streets (1987), The Great Reckoning (1991) et L'Individu Souverain (1997). Ce dernier, préfacé par Peter Thiel dans sa version originale, est devenu une référence pour les bitcoiners du monde entier pour avoir prédit l'émergence d'une monnaie numérique cryptographique hors du contrôle des États.",
    specialite: "Analyse politique, investissement, prospective",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["L'Individu Souverain"]
  },

  {
    nom:        "Jesús Huerta de Soto",
    bio:        "Professeur d'économie politique à l'Université Rey Juan Carlos de Madrid et Senior Fellow du Mises Institute, Jesús Huerta de Soto est l'un des représentants contemporains les plus reconnus de l'école autrichienne au niveau international. Il est l'auteur de Monnaie, crédit bancaire et cycles économiques (1998) et de L'École autrichienne (2010). Défenseur de l'anarcho-capitalisme, il est une référence pour les bitcoiners qui s'inscrivent dans la tradition autrichienne.",
    specialite: "École autrichienne, théorie du capital, cycles économiques",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["L'École autrichienne"]
  },

  {
    nom:        "Jon Black",
    bio:        "Autodidacte et observateur de Bitcoin depuis 2019, Jon Black est YouTubeur depuis 2021, où il publie chaque semaine des vidéos sur Bitcoin, la monnaie et l'économie. Il s'intéresse à l'impact sociétal et philosophique de Bitcoin. Il est l'auteur de L'Étincelle Bitcoin : 21 façons de transformer le monde (2024), un essai accessible qui explore comment Bitcoin pourrait bouleverser nos sociétés.",
    specialite: "Vulgarisation, impact sociétal de Bitcoin, YouTube",
    twitter:    null,
    site:       "https://www.youtube.com/@JonBlackFR",
    ln:         null,
    livres:     ["L'Étincelle Bitcoin"]
  },

  {
    nom:        "Jonathan Bier",
    bio:        "Auteur et chercheur dans l'écosystème Bitcoin, Jonathan Bier est l'auteur de The Blocksize War (2021), un récit documenté et exhaustif de la guerre des blocs (2015–2017). L'ouvrage, basé sur des entretiens avec les protagonistes des deux camps, est devenu une référence incontournable pour comprendre la gouvernance de Bitcoin.",
    specialite: "Histoire de Bitcoin, gouvernance, journalisme",
    twitter:    "https://x.com/jonathanbier",
    site:       "https://farside.co.uk",
    ln:         null,
    livres:     ["La Guerre des blocs"]
  },

  {
    nom:        "Joseph Poon",
    bio:        "Chercheur spécialisé dans la scalabilité des blockchains, Joseph Poon est co-auteur avec Thaddeus Dryja du white paper du Lightning Network (2015–2016). Le Lightning Network est aujourd'hui l'une des principales solutions de seconde couche de Bitcoin, permettant des transactions quasi-instantanées et à très faible coût.",
    specialite: "Scalabilité blockchain, protocoles de paiement",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["The Bitcoin Lightning Network (White Paper)"]
  },

  {
    nom:        "Loïc Morel",
    bio:        "Autodidacte passionné de Bitcoin, Loïc Morel se consacre à l'éducation sur la souveraineté numérique, la vie privée et la protection de soi dans un monde hyperconnecté. Il anime le site Pandul.fr, où il publie des analyses approfondies sur Bitcoin et la confidentialité on-chain. Auteur du Dictionnaire de Bitcoin (2026), il figure parmi les voix francophones les plus rigoureuses et pédagogiques de l'écosystème Bitcoin.",
    specialite: "Bitcoin, vie privée, souveraineté numérique",
    twitter:    "https://twitter.com/Loic_Pandul",
    site:       "https://pandul.fr/",
    ln:         "sats@pandul.fr",
    livres:     ["Dictionnaire de Bitcoin"]
  },

  {
    nom:        "Ludovic Lars",
    bio:        "Ludovic Lars découvre Bitcoin en 2013 et consacre les années suivantes à en comprendre les ressorts profonds, économiques, techniques et philosophiques. Il tient le blog Vires in Numeris (viresinnumeris.fr), référence francophone sur Bitcoin. Il est l'auteur de L'Élégance de Bitcoin (2024) et Le Culte de Bitcoin (2026).",
    specialite: "Économie bitcoin, histoire et philosophie du protocole",
    twitter:    "https://twitter.com/lugaxker",
    site:       "https://viresinnumeris.fr/",
    ln:         "lugaxker@bitrefill.me",
    livres:     ["L'Élégance de Bitcoin"]
  },

  {
    nom:        "Mark Alizart",
    bio:        "Philosophe français spécialisé dans les questions d'informatique, de politique et de culture numérique, Mark Alizart est l'auteur de Cryptocommunisme (PUF, 2019). Il propose une relecture originale de Marx à travers le prisme de Bitcoin et de la cryptographie, suggérant que le protocole Bitcoin pourrait constituer un levier pour repenser le commun économique. Invité régulier de France Culture.",
    specialite: "Philosophie politique, critique numérique, marxisme et Bitcoin",
    twitter:    "https://x.com/MarkAlizart",
    site:       null,
    ln:         null,
    livres:     ["Cryptocommunisme"]
  },

  {
    nom:        "Murray Rothbard",
    naissance:  1926,
    deces:      1995,
    bio:        "Économiste, historien et philosophe politique américain, Murray Rothbard est l'une des figures centrales du libertarianisme du XXe siècle et de l'école autrichienne d'économie. Formé à l'Université Columbia et influencé par Ludwig von Mises, il est l'auteur de Man, Economy, and State (1962), The Ethics of Liberty (1982) et L'Anatomie de l'État (1974).",
    specialite: "Économie autrichienne, anarcho-capitalisme, philosophie politique",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["L'Anatomie de l'État"]
  },

  {
    nom:        "Nicolas Balas",
    bio:        "Venu du monde de l'animation 2D, Nicolas Balas s'est spécialisé dans la création de vidéos explicatives pour la télévision, les musées et les entreprises. Il signe avec Alice au pays des Cryptos (Éditions du Faubourg, 2023) son premier album de bande dessinée, co-écrit avec Daniel Villa Monteiro.",
    specialite: "Illustration, animation, bande dessinée",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["Alice au pays des Cryptos"]
  },

  {
    nom:        "Phil Champagne",
    bio:        "Ingénieur passionné par les libertés civiles et les technologies décentralisées, Phil Champagne s'intéresse à Bitcoin dès 2012. Il publie en 2014 The Book of Satoshi, le premier ouvrage à compiler et contextualiser les écrits publics de Satoshi Nakamoto (emails, posts de forum, white paper). L'ouvrage reste une référence incontournable pour comprendre la pensée originelle derrière Bitcoin.",
    specialite: "Histoire de Bitcoin, cypherpunk, ingénierie",
    twitter:    "https://twitter.com/egg_descrambler",
    site:       "https://www.bookofsatoshi.com/",
    ln:         null,
    livres:     ["Le Livre de Satoshi"]
  },

  {
    nom:        "Philippe Ratte",
    bio:        "Ancien élève de l'École Normale Supérieure et agrégé d'histoire, Philippe Ratte est spécialiste de l'histoire institutionnelle française. Il co-signe avec Jacques Favier Objective Thune (2019), un essai satirique et illustré qui propose une relecture des Aventures de Tintin à travers le prisme de Bitcoin et de la philosophie de la monnaie.",
    specialite: "Histoire politique, essai satirique, culture Bitcoin",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["Objective Thune"]
  },

  {
    nom:        "Pierre Noizat",
    bio:        "Ingénieur diplômé de l'École Polytechnique et de l'Université Columbia, Pierre Noizat est une figure centrale de l'écosystème Bitcoin français. Il fonde Paymium en 2011, la première plateforme d'échange bitcoin/euro en Europe, toujours en activité. Auteur et conférencier, il s'est engagé dans la vulgarisation et la défense de Bitcoin auprès du grand public et des décideurs institutionnels.",
    specialite: "Entrepreneuriat Bitcoin, fintech, politique monétaire",
    twitter:    "https://twitter.com/PierreNoizat",
    site:       null,
    ln:         null,
    redirectDon: true,   // ses dons sont reversés à la bibliothèque
    livres:     ["L'Énergie, la face cachée de la monnaie"]
  },

  {
    nom:        "Saifedean Ammous",
    bio:        "Économiste formé à l'Université Columbia (PhD), Saifedean Ammous est l'auteur de The Bitcoin Standard (2018), traduit en 39 langues. Il a également publié The Fiat Standard (2021). Proche de l'école autrichienne, il a conseillé le gouvernement du Salvador lors de l'adoption de Bitcoin comme monnaie légale en 2021.",
    specialite: "Économie autrichienne, théorie monétaire, Bitcoin",
    twitter:    "https://twitter.com/saifedean",
    site:       "https://saifedean.com/",
    ln:         null,
    livres:     ["The Bitcoin Standard", "L'Étalon Bitcoin", "L'Étalon Fiat"]
  },

  {
    nom:        "Satoshi Nakamoto",
    bio:        "Pseudonyme du créateur (ou groupe de créateurs) de Bitcoin. Satoshi Nakamoto a publié le white paper de Bitcoin en octobre 2008, lancé le réseau le 3 janvier 2009 en minant le bloc Genesis, puis a disparu en 2011 sans jamais révéler son identité. Son invention, un système de monnaie électronique décentralisé sans tiers de confiance, est considérée comme l'une des plus importantes du XXIe siècle.",
    specialite: "Cryptographie, protocoles pair-à-pair",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["Bitcoin: A Peer-to-Peer Electronic Cash System (White Paper)"]
  },

  {
    nom:        "Scuba Wizard",
    bio:        "Auteur pseudonyme actif dans la communauté Bitcoin, Scuba Wizard publie des œuvres illustrées et des bandes dessinées sur des thèmes économiques et politiques liés à Bitcoin. Il est notamment l'auteur des Petites Leçons de Frédéric, des albums illustrés qui sont une porte d'entrée ludique vers l'économie, et des Grandes Leçons de Marx T01, une relecture critique de la pensée marxiste à l'aune de Bitcoin et de l'économie autrichienne.",
    specialite: "Illustration, bande dessinée, critique économique",
    twitter:    "https://twitter.com/Scuba_Wizard",
    site:       "https://linktr.ee/scuba_wizard",
    ln:         "scuba_wizard@getalby.com",
    livres:     ["Les Petites Leçons de Frédéric", "Les Grandes Leçons de Marx T01"]
  },

  {
    nom:        "Timothy C. May",
    bio:        "Ingénieur senior chez Intel dans les années 1970–1980, Timothy C. May est l'une des figures tutélaires du mouvement cypherpunk. En 1988, il rédige Le Manifeste Crypto-Anarchiste, texte prophétique qui imagine un monde où la cryptographie permettrait des échanges totalement anonymes, hors du contrôle des États. Il co-fonde le mouvement cypherpunk en 1992 avec Eric Hughes et John Gilmore, et anime pendant des années la liste de diffusion cypherpunks@toad.com, véritable laboratoire des idées qui ont mené à Bitcoin. Décédé en décembre 2018, il n'a pas vu la réalisation complète de sa vision.",
    specialite: "Cryptographie, anarcho-capitalisme, mouvement cypherpunk",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["Le Manifeste Crypto-Anarchiste"]
  },

  {
    nom:        "Thaddeus Dryja",
    bio:        "Chercheur au MIT Digital Currency Initiative, Thaddeus Dryja est co-auteur du white paper du Lightning Network (2015–2016) avec Joseph Poon. Il est à l'origine du concept de canaux de paiement bidirectionnels qui fonde le protocole Lightning, et a écrit le premier code de LND (Lightning Network Daemon), l'implémentation la plus utilisée du réseau.",
    specialite: "Cryptographie, protocoles Lightning, recherche MIT",
    twitter:    "https://x.com/tdryja",
    site:       null,
    ln:         null,
    livres:     ["The Bitcoin Lightning Network (White Paper)"]
  },

  {
    nom:        "William Rees-Mogg",
    naissance:  1928,
    deces:      2012,
    bio:        "Journaliste, éditeur et pair britannique, Lord William Rees-Mogg a été rédacteur en chef du Times de Londres (1967–1981) et vice-président de la BBC. Figure intellectuelle majeure du conservatisme britannique, il a coécrit avec James Dale Davidson L'Individu Souverain (1997), ouvrage visionnaire qui a prédit la montée des cryptomonnaies, le déclin des États-nations et l'avènement de la souveraineté individuelle à l'ère de l'information. Son fils, Jacob Rees-Mogg, est un homme politique britannique de premier plan.",
    specialite: "Journalisme politique, prospective, liberté individuelle",
    twitter:    null,
    site:       null,
    ln:         null,
    livres:     ["L'Individu Souverain"]
  },

];
