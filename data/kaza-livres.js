// ============================================================
//  KAZA_LIVRES — source unique pour tous les livres
//  Modifiez ce fichier dans VS Code pour mettre à jour le site.
//
//  Champs disponibles par livre :
//    titre      : titre complet (obligatoire)
//    auteur     : nom(s) de l'auteur, séparés par " & " (obligatoire)
//    img        : nom du fichier image dans /images/ (obligatoire)
//    genre      : genre littéraire (obligatoire)
//    annee      : année de publication (obligatoire)
//    cat        : catégorie principale (obligatoire)
//    cats       : [optionnel] tableau de catégories supplémentaires
//    rubrique   : description courte pour la carte (obligatoire)
//    ebook      : [optionnel] chemin vers l'ebook téléchargeable
//    versions   : [optionnel] tableau de versions PDF pour les White Papers
//                 Format : [{label:"...", file:"..."}, ...]
//    id         : [optionnel] identifiant stable du livre. Si absent, il est
//                 dérivé du titre (slug). Sert au suivi de disponibilité.
//    DISPONIBILITÉ : ne se gère plus ici. Voir data/kaza-dispo.js, mis à jour
//                 par le bot Telegram (commandes /emprunte, /rendu).
//    coupDeCoeur: [optionnel] true pour afficher le badge Coup de cœur
//    img4       : [optionnel] nom du fichier 4ème de couverture dans /images/
//    quatrieme  : [optionnel] texte de la 4ème de couverture officielle
//                 Mettre "" pour masquer même si img4 est défini
//    passages   : [optionnel] tableau de citations/passages marquants
// ============================================================

var KAZA_LIVRES = [

  // ── Bitcoin Fondamentaux ──────────────────────────────────

  {
    titre:     "The Bitcoin Standard",
    auteur:    "Saifedean Ammous",
    genre:     "Économique",
    annee:     2018,
    cat:       "Bitcoin Fondamentaux",
    img:       "bitcoin_standard.webp",
    rubrique:  "Le livre fondateur qui a converti des milliers de personnes à Bitcoin. Ammous retrace l'histoire de la monnaie solide et explique pourquoi Bitcoin est l'or numérique du XXIᵉ siècle.",
    img4:      "4eme-de-couverture/back_bitcoin_standard.webp",
    quatrieme: "In The Bitcoin Standard, economist Saifedean Ammous walks readers through the fascinating history of the technologies of money and explores what properties these technologies their monetary role, how they lost it, what that teaches us about the desirable features of money, and how bitcoin is designed to improve on these technologies. Ammous elucidates the economic, social, cultural, and political benefits of sound money over unsound money, drawing an informed discussion of the potential role bitcoin could play in the digital economy of the future.\n\nRather than as a currency for criminals or a cheap mass consumer payment network, this book argues bitcoin is emerging as a decentralized, politically neutral, free-market alternative to national central banks, with potentially enormous implications for individual freedom and prosperity. For anyone looking for a clear understanding of this new digital money, The Bitcoin Standard is the essential resource.",
    passages:  [
      "History shows it is not possible to insulate yourself from the consequences of others holding money that is harder than yours.",
      "Bitcoin can be best understood as distributed software that allows for transfer of value using a currency protected from unexpected inflation without trusting any third parties."
    ]
  },

  {
    titre:     "21 Leçons",
    auteur:    "Gigi",
    genre:     "Philosophie",
    annee:     2019,
    cat:       "Bitcoin Fondamentaux",
    img:       "21_lecons_hq.webp",
    rubrique:  "Gigi explore Bitcoin sous l'angle de la philosophie, de l'économie et de la technologie en 21 réflexions profondes. Un voyage intellectuel unique pour comprendre ce que Bitcoin nous enseigne sur nous-mêmes.",
    img4:      "4eme-de-couverture/back_21_lecons.webp",
    quatrieme: "Qu'est-ce que Bitcoin ? Il est étonnamment complexe de répondre à cette innocente question. Bitcoin est un réseau d'ordinateurs, un nouveau type de monnaie, un système de paiement résistant à la censure, une révolution financière, une forme pacifique de protestation et bien plus que cela.\n\nCe livre n'essaie pas de définir ce qu'est Bitcoin. Il tente de répondre à une autre question, plus personnelle : Qu'ai-je appris de Bitcoin ?",
    passages:  []
  },

  {
    titre:     "Bitcoin, la monnaie acéphale (2e éd.)",
    auteur:    "Adli Takkal Bataille & Jacques Favier",
    genre:     "Analyse & culture",
    annee:     2017,
    cat:       "Bitcoin Fondamentaux",
    img:       "bitcoin_monnaie_acephale_hq.webp",
    rubrique:  "Un regard franco-français sur Bitcoin : Bataille et Favier analysent avec finesse ce phénomène sans tête, sans chef, et pourtant irrésistible. La référence incontournable de la littérature Bitcoin francophone."
  },

  {
    titre:     "L'Étalon Bitcoin",
    auteur:    "Saifedean Ammous",
    genre:     "Économique",
    annee:     2019,
    cat:       "Bitcoin Fondamentaux",
    img:       "etalon_bitcoin_hq.webp",
    rubrique:  "Suite au Standard Bitcoin, Ammous approfondit la vision d'un monde fonctionnant sur un étalon Bitcoin. Un livre ambitieux qui dessine les contours d'une économie radicalement différente.",
    img4:      "4eme-de-couverture/back_etalon_bitcoin.webp",
    quatrieme: "Saifedean Ammous analyse le contexte historique de l'émergence de Bitcoin et ses propriétés spécifiques qui en font une monnaie forte. L'auteur brosse un tableau passionnant des technologies de la monnaie depuis les systèmes primitifs à nos jours avec, en toile de fond, cette question qui revient comme une constante : quelles sont les caractéristiques d'une bonne monnaie et ses conséquences sur la paix, le commerce, la culture, l'art et l'accumulation du capital.",
    passages:  []
  },

  {
    titre:     "L'Étincelle Bitcoin",
    auteur:    "Jon Black",
    genre:     "Liberté financière",
    annee:     2024,
    cat:       "Bitcoin Fondamentaux",
    img:       "etincelle_bitcoin_hq.webp",
    rubrique:  "Jon Black raconte comment Bitcoin peut être l'étincelle d'une émancipation financière mondiale. Un texte court, percutant, taillé pour convaincre ceux qui hésitent encore.",
    img4:      "4eme-de-couverture/back_etincelle_bitcoin.webp",
    quatrieme: "À première vue, Bitcoin semble n'être qu'une simple monnaie virtuelle dont l'impact sur notre monde sera limité. Mais nous découvrirons dans ces pages que Bitcoin est bien plus que cela.\n\nDans L'Étincelle Bitcoin, le Youtubeur Jon Black présente une perspective unique : « Bitcoin est l'une des plus grandes découvertes de l'histoire de l'humanité, une étincelle qui déclenchera des transformations profondes et durables pour notre société. »\n\nL'auteur y explore 21 façons dont Bitcoin est sur le point de bouleverser notre monde. Il met en lumière les caractéristiques uniques et révolutionnaires de Bitcoin qui font de l'invention de Satoshi Nakamoto une découverte capable de redéfinir le cours de l'Histoire.\n\nBien plus qu'une simple avancée technologique ou une simple révolution des paiements en ligne, Bitcoin introduit des concepts radicalement nouveaux pour l'humanité, avec des implications profondes sur la souveraineté personnelle, les interactions humaines, les tendances économiques et géopolitiques, la stabilité de nos systèmes monétaires, les équilibres de pouvoir, et même l'avenir de notre civilisation.",
    passages:  []
  },

  {
    titre:     "L'Énergie, la face cachée de la monnaie",
    auteur:    "Pierre Noizat",
    genre:     "Économique",
    annee:     2024,
    cat:       "Bitcoin Fondamentaux",
    img:       "energie_face_cachee_hq.webp",
    rubrique:  "Pierre Noizat démontre que l'énergie est au cœur de toute valeur monétaire, et que Bitcoin en est la manifestation la plus pure. Une perspective originale sur la nature profonde de la monnaie.",
    img4:      "4eme-de-couverture/back_energie_monnaie.webp",
    quatrieme: "Transitions énergétique et numérique sont au cœur des préoccupations du public mais les liens physiques entre énergie et information restent méconnus.\n\nLes principes du fonctionnement de l'énergie et de l'information qui expliquent les phénomènes naturels et les comportements sociaux sont trop souvent ignorés.\n\nRéintroduire la rationalité dans un débat public dominé par l'idéologie passe par la pédagogie. Après avoir rappelé simplement les 3 principes thermodynamiques de base, ce livre décrit comment ils s'appliquent dans nos vies, à travers des exemples concrets.\n\nLes notions d'énergie potentielle et d'entropie, la différence entre données et information, les liens entre information, monnaie et énergie n'auront plus de secrets pour vous.",
    passages:  []
  },

  {
    titre:    "Objective Thune",
    auteur:   "Philippe Ratte & Jacques Favier",
    genre:    "BD / Finance personnelle",
    annee:    2019,
    cat:      "Bande dessinee",
    cats:     ["Bande dessinee", "Initiation"],
    img:      "objectif_thune.webp",
    rubrique: "Ratte et Favier offrent un guide pratique et décalé pour comprendre Bitcoin depuis zéro. Accessible, drôle et instructif — le livre idéal pour les curieux qui veulent passer à l'action."
  },

  {
    titre:    "Cryptocommunisme",
    auteur:   "Mark Alizart",
    genre:    "Philosophique",
    annee:    2019,
    cat:      "Bitcoin Fondamentaux",
    img:      "cryptocommunisme_hq.webp",
    rubrique: "Mark Alizart, philosophe, explore la dimension politique et révolutionnaire de Bitcoin avec un regard inattendu. Un essai court mais stimulant qui bouscule les catégories habituelles."
  },

  {
    titre:     "Pour une vraie concurrence des monnaies",
    auteur:    "Friedrich Hayek",
    genre:     "Économique libéral",
    annee:     1976,
    cat:       "Economie Liberte",
    img:       "concurrence_monnaies_hq.webp",
    rubrique:  "Le texte fondateur de Hayek sur la dénationalisation de la monnaie, écrit 40 ans avant Bitcoin. Visionnaire et rigoureux, il pose les bases théoriques de tout ce qui a suivi.",
    img4:      "4eme-de-couverture/back_concurrence_monnaies.webp",
    quatrieme: "Comment garantir la stabilité monétaire ? Friedrich A. Hayek propose une réponse radicalement nouvelle à cette question. Selon lui, le contrôle par l'État de l'émission monétaire conduit à des crises économiques récurrentes. En 1976, Hayek défend au contraire, parallèlement aux monnaies nationales, l'émission de monnaies privées concurrentes. Les banques privées émettraient alors des monnaies distinctes et seraient incitées à stabiliser leur valeur, permettant sur le long terme une inflation bien inférieure à celle que nous connaissons depuis plusieurs décennies.\n\nPour Hayek, la réforme monétaire est urgente, car ce qui est en jeu n'est pas seulement une question d'ordre purement technique, mais « le futur de la civilisation » : la création monétaire par les banques centrales sape le bon fonctionnement du marché et nourrit la croissance de l'État. L'avenir de la société libre est donc lié à celui du système monétaire.",
    passages:  []
  },

  {
    titre:     "Changement de Paradigme",
    auteur:    "Benoît Berenger",
    genre:     "Pédagogie / Essai",
    annee:     2025,
    cat:       "Bitcoin Fondamentaux",
    img:       "Changement de Paradigme.webp",
    img4:      "4eme-de-couverture/Changement de Paradigme.webp",
    rubrique:  "Benoît Berenger propose un parcours clair et sans jargon pour comprendre Bitcoin non comme un actif spéculatif, mais comme un véritable changement de paradigme — une remise en question profonde de la monnaie, de la confiance et du pouvoir.",
    quatrieme: "Lorsque j'ai découvert Bitcoin, je n'ai pas tout de suite compris ce que c'était. Je percevais avant d'avoir analysé la technologie, peut-être un placement risqué, un outil pour génies ou rebelles.\n\nAvec le temps, j'ai compris que Bitcoin est bien plus que simplement une nouvelle monnaie. C'est un changement de paradigme.\n\nUne remise en question de tout ce qui constitue notre vision de la monnaie, sur la confiance, sur le pouvoir, et même sur le temps.\n\nL'État-nation, produit de l'ère industrielle, est condamné à s'estomper devant cette période de transition. J'en suis persuadé, une immense majorité continuera de passer à côté de l'essentiel.\n\nCe livre est pour ceux qui sentent qu'il y a quelque chose qui cloche, sans forcément pouvoir mettre les mots dessus, et ceux qui veulent comprendre, sans jargon.\n\nCe livre offre un parcours accessible et honnête pour comprendre la révolution. Identifier les forces du changement à l'œuvre, et comprendre Bitcoin comme une réponse possible.\n\nJ'espère que ce voyage changera votre regard sur le monde, comme il a changé le mien.",
    passages:  []
  },

  // ── Économie & Liberté ────────────────────────────────────

  {
    titre:       "L'Étalon Fiat",
    auteur:      "Saifedean Ammous",
    genre:       "Économique",
    annee:       2021,
    cat:         "Economie Liberte",
    img:         "etalon_fiat_hq.webp",
    coupDeCoeur: true,
    rubrique:    "Saifedean Ammous démonte avec rigueur les ravages du système monétaire fiat sur l'économie et la société. Un indispensable pour comprendre pourquoi Bitcoin n'est pas une option, mais une nécessité.",
    img4:        "4eme-de-couverture/back_etalon_fiat.webp",
    quatrieme:   "« La perspicacité de Saifedean réside dans son explication originale du fonctionnement du système fiat par analogie au fonctionnement de bitcoin. Loin d'être une attaque ciblée contre le système fiat, L'Étalon-Fiat illustre et explique clairement les avantages qui ont rendu possible l'adoption mondiale des monnaies d'État. Ce cadre constitue également la base pour analyser la montée en puissance de bitcoin, son modèle de sécurité, et ses chances de succès à long terme. »\n— Ross Stevens, fondateur et président exécutif, NYDIG\n\n« J'AI PASSÉ TOUTE MA CARRIÈRE à étudier des ouvrages sur la théorie monétaire, l'étalon-or, les systèmes monétaires, les banques centrales, et les propositions de réformes monétaires et financières. Le livre du Dr Ammous, L'Étalon-Fiat, contient une excellente analyse de tous ces sujets en un remarquable compte rendu de théorie bitcoin. C'est une lecture essentielle pour toute personne intéressée à apprendre le rôle que bitcoin pourrait jouer dans un futur régime de monnaie libre et saine. »\n— Joseph Salerno, vice-président académique, the Mises Institute\n\n« CE LIVRE M'A BLUFFÉ ; c'est une œuvre de génie. Ce livre est l'élément qui a eu le plus d'impact sur notre façon de penser à MicroStrategy, et il nous a donné envie de basculer notre activité vers un étalon-bitcoin. »\n— Michael Saylor, cofondateur, président et PDG de MicroStrategy",
    passages:    []
  },

  {
    titre:     "L'Économie en une leçon",
    auteur:    "Henry Hazlitt",
    genre:     "Économique",
    annee:     1946,
    cat:       "Economie Liberte",
    img:       "economie_une_lecon_hq.webp",
    rubrique:  "Le classique absolu de Henry Hazlitt : en une seule leçon, comprendre pourquoi toute politique économique doit être évaluée sur ses effets à long terme pour tous. Simple, clair, dévastateur.",
    img4:      "4eme-de-couverture/back_economie_une_lecon.webp",
    quatrieme: "",
    passages:  []
  },

  {
    titre:     "La Route de la servitude",
    auteur:    "Friedrich Hayek",
    genre:     "Politique / Liberté",
    annee:     1944,
    cat:       "Economie Liberte",
    img:       "route_servitude_hq.webp",
    rubrique:  "L'avertissement de Hayek contre le collectivisme et la planification centrale, écrit en 1944. Un livre qui a changé le cours de la pensée libérale et reste d'une actualité brûlante."
  },

  {
    titre:       "Ce qu'on voit et ce qu'on ne voit pas",
    auteur:      "Frédéric Bastiat",
    genre:       "Économique",
    annee:       1850,
    cat:         "Economie Liberte",
    img:         "ce_qu_on_voit.webp",
    coupDeCoeur: true,
    rubrique:    "Le chef-d'œuvre de Bastiat en quelques pages lumineuses : toute politique économique produit des effets visibles… et des effets invisibles souvent désastreux. Une leçon inépuisable, écrite en 1850 et plus actuelle que jamais.",
    passages:  [
      "Entre un mauvais et un bon Économiste, voici toute la différence : l'un s'en tient à l'effet visible ; l'autre tient compte et de l'effet qu'on voit et de ceux qu'il faut prévoir.",
      "On ne voit pas que, puisque notre bourgeois a dépensé six francs à une chose, il ne pourra plus les dépenser à une autre."
    ]
  },

  {
    titre:    "La Loi",
    auteur:   "Frédéric Bastiat",
    genre:    "Politique / Liberté",
    annee:    1850,
    cat:      "Economie Liberte",
    img:      "la_loi.webp",
    rubrique: "En 50 pages, Bastiat démoli l'idée que l'État peut tout régler par la loi sans créer de la spoliation. Un texte lapidaire et lumineux, aussi très accessible comme point d'entrée dans la pensée libérale.",
    passages: [
      "Qu'est-ce donc que la Loi ? Ainsi que je l'ai dit ailleurs, c'est l'organisation collective du Droit individuel de légitime défense.",
      "La loi pervertie ! La loi — et à sa suite toutes les forces collectives de la nation, — la Loi, dis-je, non seulement détournée de son but, mais appliquée à poursuivre un but directement contraire !"
    ]
  },

  {
    titre:     "L'Anatomie de l'État",
    auteur:    "Murray Rothbard",
    genre:     "Libertarien",
    annee:     1974,
    cat:       "Economie Liberte",
    img:       "anatomie_etat.webp",
    rubrique:  "Rothbard dissèque l'État avec une précision chirurgicale : ce qu'il est, comment il survit, et pourquoi il tend toujours à croître. Un essai court et implacable pour comprendre le pouvoir.",
    img4:      "4eme-de-couverture/back_anatomie_etat.webp",
    quatrieme: "Murray Rothbard était connu comme le plus grand ennemi vivant de l'État, et ce livre est sa déclaration la plus puissante à ce sujet. Il explique ce qu'est un État et ce qu'il n'est pas. Il montre que c'est une institution qui viole tout ce que nous considérons comme honnête et moral, et comment elle fonctionne sous un faux prétexte. Il montre comment l'État détruit la liberté, détruit la civilisation et menace toutes les vies, les biens et le bien-être social, le tout sous le couvert de « bonnes intentions ».",
    passages:  []
  },

  {
    titre:    "L'Éducation gratuite et obligatoire",
    auteur:   "Murray Rothbard",
    genre:    "Libéral / Éducation",
    annee:    1972,
    cat:      "Economie Liberte",
    img:      "education_rothbard.webp",
    rubrique: "Rothbard questionne le monopole étatique sur l'éducation et défend la liberté des familles. Un texte provocateur et documenté qui remet en cause des évidences bien ancrées."
  },

  {
    titre:     "L'École autrichienne",
    auteur:    "Jesús Huerta de Soto",
    genre:     "Manuel / Histoire économique",
    annee:     2010,
    cat:       "Economie Liberte",
    img:       "ecole_autrichienne_hq.webp",
    rubrique:  "De Soto présente l'histoire et les idées de l'école autrichienne d'économie avec une clarté pédagogique remarquable. Le manuel de référence pour comprendre Mises, Hayek et leurs héritiers.",
    img4:      "4eme-de-couverture/back_ecole_autrichienne.webp",
    quatrieme: "",
    passages:  []
  },

  {
    titre:     "Les Dérives de la surveillance financière",
    auteur:    "Alexandre Stachtchenko",
    genre:     "Liberté numérique",
    annee:     2023,
    cat:       "Economie Liberte",
    img:       "derives_surveillance.webp",
    rubrique:  "Stachtchenko dresse un tableau alarmant de la surveillance financière de masse et montre pourquoi Bitcoin est bien plus qu'une monnaie : un rempart pour la vie privée et la liberté individuelle.",
    img4:      "4eme-de-couverture/back_derives_surveillance.webp",
    quatrieme: "Dans cet essai, Alexandre Stachtchenko dénonce les dérives de la surveillance à outrance et la répression excessive envers les développeurs d'outils permettant d'y échapper. Loin d'avoir fait ses preuves pour lutter contre la criminalité et le terrorisme, cette insidieuse répression représente un piétinement des droits fondamentaux des citoyens et un gouffre financier pour les États qui la pratiquent. À l'aide d'exemples actuels, l'auteur démontre que, sous couvert de lutte contre le blanchiment d'argent, la censure financière menace la protection de la vie privée autant que l'indépendance des individus.\n\nEt si les réflexes sécuritaires étaient contreproductifs pour assurer notre sécurité ? Et si l'on imaginait une lutte contre la criminalité financière plus respectueuse des libertés individuelles ?",
    passages:  []
  },

  {
    titre:     "L'Individu Souverain",
    auteur:    "James Dale Davidson & Lord William Rees-Mogg",
    genre:     "Liberté / Futurisme",
    annee:     2026,
    cat:       "Economie Liberte",
    img:       "L'individu Souverain.webp",
    img4:      "4eme-de-couverture/L'individu Souverain.webp",
    rubrique:  "Écrit en 1997, L'Individu Souverain a prédit avec une précision stupéfiante la montée des cryptomonnaies, le déclin des États-nations et l'avènement de la souveraineté individuelle à l'ère de l'information. Un livre visionnaire devenu manuel de survie.",
    quatrieme: "En 1997, deux investisseurs ont prédit l'avènement des cryptomonnaies, la montée du nomadisme digital et l'effondrement progressif de l'État-nation. Ils avaient raison sur toute la ligne.\n\nL'Individu souverain est aujourd'hui considéré comme l'un des livres les plus visionnaires du XXe siècle sur la liberté financière et la souveraineté individuelle. Préfacé par Peter Thiel dans sa version originale — l'édition française s'ouvre sur une préface de Francis Pouliot et se referme sur une postface d'Olivier Roland — ce livre est devenu une référence incontournable pour tous ceux qui veulent comprendre la révolution de l'information et s'y préparer.\n\nCe que Davidson et Rees-Mogg ont prédit dès 1997 :\n— L'émergence d'une monnaie numérique cryptographique hors du contrôle des États\n— La mobilité internationale du capital et l'optimisation fiscale mondiale\n— Le déclin de l'État-nation et la montée des souverainismes\n— Le développement de l'intelligence artificielle et son impact sur le marché du travail\n— L'essor du commerce numérique et la fin des frontières économiques\n\nÀ l'heure où chacune de ces prédictions se réalise, ce livre n'est plus un objet de curiosité intellectuelle. C'est un manuel de survie — une feuille de route — pour ceux qui veulent prendre le contrôle de leur liberté, de leur patrimoine et de leur destin dans l'ère de l'information.\n\nUne lecture indispensable pour tout esprit libre.",
    passages:  []
  },

  // ── Technique & Pratique ─────────────────────────────────


  {
    titre:       "L'Élégance de Bitcoin",
    auteur:      "Ludovic Lars",
    genre:       "Technique",
    annee:       2023,
    cat:         "Technique Pratique",
    img:         "elegance_bitcoin_hq.webp",
    coupDeCoeur: true,
    rubrique:    "La référence technique en français sur Bitcoin. Ludovic Lars y démontre avec clarté et rigueur la beauté mathématique du protocole : un livre rare, profond et accessible à la fois.",
    img4:        "4eme-de-couverture/back_elegance_bitcoin.webp",
    quatrieme:   "Bitcoin est un modèle novateur de monnaie numérique décentralisée, dont l'existence vient bousculer l'ordre établi en proposant une alternative audacieuse au système bancaire classique.\n\nDepuis son énigmatique conception par Satoshi Nakamoto en 2008, Bitcoin a connu une croissance fulgurante qui a marqué les esprits. Il a déchaîné toutes les passions, de l'enthousiasme démesuré de ses promoteurs au rejet épidermique de ses détracteurs.\n\nPlongez dans cet ouvrage captivant où l'auteur propose un point de vue réaliste et pragmatique sur Bitcoin. Vous découvrirez sa fantastique histoire, ainsi que les principes économiques, idéologiques et techniques qui ont assuré sa survie dans un environnement hostile.\n\nVous en ressortirez avec une compréhension de Bitcoin susceptible de transformer votre vision du monde.",
    passages:    []
  },

  {
    titre:     "Dictionnaire de Bitcoin",
    auteur:    "Loïc Morel",
    genre:     "Référence / Technique",
    annee:     2026,
    cat:       "Technique Pratique",
    img:       "dictionnaire_bitcoin_hq.webp",
    rubrique:  "Loïc Morel compile et définit avec précision tous les termes essentiels de l'écosystème Bitcoin. Un outil de référence indispensable pour ne plus être perdu face au vocabulaire technique et se forger un vocabulaire solide.",
    img4:      "4eme-de-couverture/back_dictionnaire_bitcoin.webp",
    quatrieme: "Cet ouvrage recense tous les termes techniques en rapport avec Bitcoin et son environnement, ainsi que les définitions correspondantes. Rédigé par Loïc Morel (Pandul), il est accessible gratuitement en open-source sur GitHub et vendu au format papier.\n\nDictionnaire de Bitcoin est un projet ouvert : vous êtes libre de proposer des modifications, des corrections ou de soumettre de nouvelles définitions manquantes sur le dépôt GitHub du projet.\n\nLoïc Morel est rédacteur spécialisé sur Bitcoin et son écosystème. Il est l'auteur de plus de 200 articles techniques, formations et tutoriels sur Bitcoin en français, dont certains sont devenus des références. Tous ses ouvrages techniques sont disponibles gratuitement et sous licence libre.",
    passages:  []
  },

  {
    titre:     "Le Manuel du Bitcoin",
    auteur:    "Anil Patel",
    genre:     "Guide pratique",
    annee:     2023,
    cat:       "Technique Pratique",
    img:       "manuel_bitcoin_hq.webp",
    rubrique:  "Un guide pratique et complet pour comprendre et utiliser Bitcoin au quotidien. Anil Patel couvre tout, des bases aux aspects les plus techniques, avec clarté et pédagogie.",
    img4:      "4eme-de-couverture/back_manuel_bitcoin.webp",
    quatrieme: "Le Manuel Du Bitcoin est un recueil des concepts, modèles mentaux et principes heuristiques les plus utiles pour comprendre l'argent à l'ère numérique.\n\nRédigé à l'intention d'un public non technique et illustré de nombreux visuels qui incitent à la réflexion, il constitue une ressource précieuse pour des lecteurs de tous niveaux. Il s'agit d'un guide pratique qui vous accompagnera tout au long de votre voyage dans le terrier du lapin.",
    passages:  []
  },

  // ── Histoire & Culture ────────────────────────────────────

  {
    titre:     "Le Livre de Satoshi",
    auteur:    "Phil Champagne",
    genre:     "Compilation / Histoire",
    annee:     2014,
    cat:       "Histoire Culture",
    img:       "livre_satoshi_hq.webp",
    rubrique:  "Phil Champagne compile les écrits de Satoshi Nakamoto : emails, posts de forum et extraits du White Paper. La source primaire pour comprendre la pensée et les intentions du créateur de Bitcoin.",
    img4:      "4eme-de-couverture/back_livre_satoshi.webp",
    quatrieme: "Dans ce livre, Phil Champagne a passé en revue chaque message de Satoshi Nakamoto afin d'en identifier les plus importants, et a donné le contexte de l'époque du message pour expliquer pourquoi ils sont essentiels. Cela crée une chronologie logique de l'évolution de Bitcoin, directement depuis le clavier de Satoshi Nakamoto, et pourrait être décrite comme l'autobiographie de Bitcoin.\n— Jeff Berwick, rédacteur en chef de The Dollar Vigilante\n\nLe Livre de Satoshi offre un moyen pratique de parcourir ce que le créateur de Bitcoin a écrit au cours des quelques années qu'il a passées en ligne avant de disparaître d'Internet… du moins, en tant que « Satoshi Nakamoto ».\n\nLa véritable identité de Nakamoto ne sera peut-être jamais connue. Par conséquent, les écrits reproduits dans ce livre sont probablement les seules interventions publiques de Satoshi concernant la création, le fonctionnement et la base théorique de Bitcoin. Voulez-vous en savoir plus sur Bitcoin ? Allez directement à la source — les écrits du créateur lui-même, Satoshi Nakamoto !",
    passages:  []
  },

  {
    titre:     "La Guerre des blocs",
    auteur:    "Jonathan Bier",
    genre:     "Récit historique",
    annee:     2021,
    cat:       "Histoire Culture",
    img:       "guerre_blocs.webp",
    rubrique:  "Jonathan Bier raconte de l'intérieur la guerre civile qui a déchiré la communauté Bitcoin entre 2015 et 2017. Un récit haletant sur les enjeux de gouvernance d'un protocole décentralisé.",
    img4:      "4eme-de-couverture/back_guerre_blocs.webp",
    quatrieme: "Ce livre relate la guerre des blocs qui a fait rage d'août 2015 à novembre 2017 au sein de la communauté de Bitcoin. En apparence, la bataille portait sur la quantité de données autorisées dans chaque bloc de Bitcoin (la taille des blocs), mais elle a révélé des enjeux bien plus profonds, comme la question de savoir qui contrôle les règles du protocole Bitcoin.\n\nIl n'est pas possible de couvrir toutes les péripéties de ce conflit extrêmement complexe, ni toutes les querelles liées, mais ce livre propose une chronologie des événements les plus importants. Il présente quelques-unes des grandes figures qui ont marqué le conflit et couvre certaines des phases les plus aiguës de la lutte, au front comme dans les coulisses.\n\nLe récit de ce livre comprend des discussions avec les acteurs clés des deux camps impliqués dans la guerre, et explore leurs motivations, leurs stratégies et leurs cheminements de pensée au fur et à mesure que cette épuisante campagne se déroulait.",
    passages:  []
  },

  // ── Fiction & Dystopie ────────────────────────────────────

  {
    titre:    "Le Culte de Bitcoin",
    auteur:   "Ludovic Lars",
    genre:    "Fiction / Dystopie",
    annee:    2026,
    cat:      "Fiction Dystopie",
    img:      "culte_bitcoin.webp",
    ebook:    "ebooks/ludovic-lars-culte-bitcoin-2026.epub",
    rubrique: "Ludovic Lars explore la dimension culturelle et quasi-religieuse que Bitcoin inspire chez ses adeptes. Un essai original qui interroge la fascination profonde exercée par le protocole sur ceux qui le découvrent."
  },

  {
    titre:     "Crypto Dystopies 2035",
    auteur:    "Benjamin Loiseau",
    genre:     "Fiction / Dystopie",
    annee:     2023,
    cat:       "Fiction Dystopie",
    img:       "crypto_dystopies_hq.webp",
    rubrique:  "Benjamin Loiseau imagine un futur où les cryptomonnaies ont transformé — ou fracturé — nos sociétés. Des nouvelles de science-fiction qui interrogent les dérives possibles de la révolution numérique.",
    img4:      "4eme-de-couverture/back_crypto_dystopies.webp",
    quatrieme: "Bitcoin et les cryptomonnaies vous intéressent, mais leur complexité vous effraie ? Découvrez ce nouvel univers à travers 21 histoires. Dystopies.\n\nCes récits construisent un imaginaire entier en milieu cypherpunk, bien souvent abstrait et difficile à appréhender. Au gré des pages, sans même vous en apercevoir, familiarisez-vous avec les aspects fondateurs de cette révolution monétaire !\n\nCe recueil explore l'univers des cryptomonnaies de manière inédite, via l'imaginaire. Élancez-vous à l'aventure dans le futur avec des robots, intelligences artificielles et extraterrestres.\n\nPartez dès à présent à la conquête de ce nouveau vocabulaire en embarquant à bord de la DeLorean des cryptomonnaies, direction 2035 !",
    passages:  []
  },

  // ── Bande dessinée ───────────────────────────────────────

  {
    titre:    "Les grandes leçons de Marx - T01 : Le grand goûter égalitaire",
    auteur:   "Scuba Wizard",
    genre:    "BD / Satire",
    annee:    2024,
    cat:      "Bande dessinee",
    cats:     ["Bande dessinee", "Enfants"],
    img:      "grandes_lecons_marx_t01.webp",
    ebook:    "ebooks/grandes_lecons_marx_t01.pdf",
    rubrique: "Scuba Wizard croque le marxisme avec humour dans cette BD satirique dès 7 ans. Entre plan quinquennal du goûter et boulangerie collective, un album décapant pour initier les enfants — et leurs parents — aux absurdités du collectivisme."
  },

  {
    titre:     "Les petites leçons de Frédéric - T00 : Le grand carnet des idées",
    auteur:    "Scuba Wizard",
    genre:     "BD / Économie libérale",
    annee:     2026,
    cat:       "Bande dessinee",
    cats:      ["Bande dessinee", "Enfants"],
    collection: "Les petites leçons de Frédéric",
    collectionDesc: "Série de BD illustrées pour les enfants à partir de 7 ans. Frédéric Bastiat guide Lina, Tom et Milo à travers les grandes idées de l'économie libérale : liberté, effets invisibles, coût d'opportunité, monnaie saine... Inspirée des œuvres de Frédéric Bastiat.",
    img:       "petites-lecons-frederic-t00.webp",
    img4:      "4eme-de-couverture/petites-lecons-frederic-t00.webp",
    rubrique:  "Le tome 0 de la série : une introduction à l'univers, aux personnages et aux grands penseurs qui guideront la saga. Pour commencer dans le bon sens et apprendre à observer, expérimenter, puis choisir.",
    quatrieme: "Bienvenue dans Les petites leçons de Frédéric.\nIci, on apprend sans se disputer : on observe, on expérimente, puis on choisit mieux.\n\nCe Tome 00 présente l'univers, les personnages, et les grands penseurs qui guideront la saga, pour aider les enfants à comprendre les règles, les échanges, la confiance... et le temps.\n\nUne introduction simple et lumineuse pour commencer la série dans le bon sens.",
    passages:  []
  },

  {
    titre:     "Les petites leçons de Frédéric - T01 : Les marchands de chandelles",
    auteur:    "Scuba Wizard",
    genre:     "BD / Économie libérale",
    annee:     2026,
    cat:       "Bande dessinee",
    cats:      ["Bande dessinee", "Enfants"],
    collection: "Les petites leçons de Frédéric",
    img:       "petites-lecons-frederic-t01.webp",
    img4:      "4eme-de-couverture/petites-lecons-frederic-t01.webp",
    rubrique:  "Inspiré de la célèbre pétition de Bastiat, Frédéric explique à Lina, Tom et Milo pourquoi certains marchands veulent priver tout le monde de la lumière du soleil. Une première leçon sur la liberté, le choix et les effets invisibles.",
    quatrieme: "Frédéric explique à Lina, Tom et Milo pourquoi certains petits marchands veulent empêcher tout le monde de profiter de la lumière du soleil.\n\nGrâce à leur ami, les enfants découvrent la part cachée des choses... et comprennent que la vraie lumière est celle que l'on choisit librement.\n\nUne première histoire douce et ludique pour apprendre aux enfants les notions de liberté, de choix et d'effets invisibles.",
    passages:  []
  },

  {
    titre:     "Les petites leçons de Frédéric - T02 : La vitre magique",
    auteur:    "Scuba Wizard",
    genre:     "BD / Économie libérale",
    annee:     2026,
    cat:       "Bande dessinee",
    cats:      ["Bande dessinee", "Enfants"],
    collection: "Les petites leçons de Frédéric",
    img:       "petites-lecons-frederic-t02.webp",
    img4:      "4eme-de-couverture/petites-lecons-frederic-t02.webp",
    rubrique:  "Quand la fenêtre de la boulangerie se brise, tout le village croit que c'est une bonne nouvelle. Inspiré du sophisme de la vitre cassée de Bastiat, une leçon sur le coût d'opportunité et les effets invisibles de nos choix.",
    quatrieme: "Une vitre cassée... et une grande leçon cachée derrière.\nQuand la fenêtre de la boulangerie se brise, tout le village pense que c'est une bonne nouvelle.\n\nAvec douceur et humour, cette aventure aide les enfants à comprendre le coût d'opportunité, la différence entre réparer et créer, et pourquoi un dégât n'est jamais une richesse.\n\nUne histoire chaleureuse pour apprendre à regarder au-delà des apparences et découvrir les effets invisibles de nos choix.",
    passages:  []
  },

  {
    titre:     "Les petites leçons de Frédéric - T03 : La grande fabrique des règles",
    auteur:    "Scuba Wizard",
    genre:     "BD / Économie libérale",
    annee:     2026,
    cat:       "Bande dessinee",
    cats:      ["Bande dessinee", "Enfants"],
    collection: "Les petites leçons de Frédéric",
    img:       "petites-lecons-frederic-t03.webp",
    img4:      "4eme-de-couverture/petites-lecons-frederic-t03.webp",
    rubrique:  "Fred et ses amis découvrent une fabrique qui produit des règles sans fin. Avec humour et douceur, Frédéric leur montre que trop de règles peuvent éteindre la liberté — une leçon sur l'équilibre, la responsabilité et le bon sens.",
    quatrieme: "Dans ce tome, Fred, Lina, Tom et Milo découvrent une fabrique bien étrange : une machine qui produit des règles sans fin !\n\nAvec humour et douceur, Fred leur montre que trop de règles... peuvent finir par éteindre la liberté.\n\nUne histoire lumineuse pour comprendre l'importance du bon sens, de la responsabilité... et d'un juste équilibre.",
    passages:  []
  },

  {
    titre:     "Les petites leçons de Frédéric - T04 : Le mystérieux argent de papier",
    auteur:    "Scuba Wizard",
    genre:     "BD / Économie libérale",
    annee:     2026,
    cat:       "Bande dessinee",
    cats:      ["Bande dessinee", "Enfants"],
    collection: "Les petites leçons de Frédéric",
    img:       "petites-lecons-frederic-t04.webp",
    img4:      "4eme-de-couverture/petites-lecons-frederic-t04.webp",
    rubrique:  "Fred et ses amis découvrent une fabrique où l'on crée de l'argent en papier. Quand les prix augmentent, les enfants comprennent que la vraie richesse ne se fabrique pas — et qu'une monnaie plus honnête est possible.",
    quatrieme: "Fred découvre avec ses amis une étrange Fabrique où l'on crée de l'argent en papier.\nMais quand tout le monde se met à utiliser ces billets tout neufs... les prix augmentent.\n\nLes enfants apprennent alors que la vraie richesse ne se fabrique pas comme du papier, et que certaines inventions du futur pourraient offrir une monnaie plus honnête...",
    passages:  []
  },

  // ── Initiation ────────────────────────────────────────────

  {
    titre:    "Alice au pays des Cryptos",
    auteur:   "Nicolas Balas & Daniel Villa Monteiro",
    genre:    "BD / Initiation",
    annee:    2023,
    cat:      "Initiation",
    cats:     ["Initiation", "Bande dessinee"],
    img:      "alice_cryptos_hq.webp",
    rubrique: "En suivant Alice, cette BD entraîne les lecteurs de tous âges dans le monde des cryptomonnaies avec humour et pédagogie. La porte d'entrée idéale pour les néophytes."
  },

  {
    titre:    "Bitcoin et les cryptomonnaies faciles",
    auteur:   "Claire Balva & Alexandre Stachtchenko",
    genre:    "Guide d'initiation",
    annee:    2022,
    cat:      "Initiation",
    img:      "crypto_faciles_hq.webp",
    rubrique: "Balva et Stachtchenko démystifient Bitcoin et les cryptos avec un langage accessible et des exemples concrets. Le guide parfait pour démarrer sans se perdre dans le jargon technique."
  },

  {
    titre:     "Le Petit Satoshi",
    auteur:    "Goku & Tewoz",
    genre:     "BD / Jeunesse",
    annee:     2023,
    cat:       "Bande dessinee",
    cats:      ["Bande dessinee", "Enfants"],
    img:       "petit_satoshi.webp",
    rubrique:  "Une BD jeunesse qui explique Bitcoin aux enfants avec des personnages attachants et une histoire simple. À lire en famille pour parler monnaie autrement — et planter une graine dès le plus jeune âge.",
    img4:      "4eme-de-couverture/back_petit_satoshi.webp",
    quatrieme: "Le Petit Satoshi vous emmène dans un voyage éducatif et passionnant à la découverte de la création du Bitcoin.\n\nAux côtés de tous ses amis, vous découvrirez de façon simple comment fonctionne cette monnaie numérique, ainsi que les bases de la blockchain et de l'utilisation du Bitcoin.\n\nEmbarquez pour cette aventure unique et apprenez en vous amusant.",
    passages:  []
  },

  {
    titre:     "Tout sur Bitcoin : Le comprendre et l'utiliser",
    auteur:    "David St-Onge",
    genre:     "Guide d'initiation",
    annee:     2021,
    cat:       "Initiation",
    img:       "tout_sur_bitcoin_hq.webp",
    rubrique:  "David St-Onge couvre tous les aspects de Bitcoin : histoire, technologie, économie et pratique. Un panorama complet pour celui qui veut tout savoir avant de se lancer.",
    img4:      "4eme-de-couverture/back_tout_bitcoin.webp",
    quatrieme: "Tout sur Bitcoin s'adresse à un public large et va assez loin sur plusieurs sujets tout en restant accessible. Il vous permettra d'acquérir une bonne connaissance de Bitcoin sans jamais tomber dans l'hyper-technique. Il vous fournira toutes les informations nécessaires pour comprendre le fonctionnement de Bitcoin mais surtout, il vous fera découvrir les immenses atouts d'une bonne monnaie et ce qui la caractérise. Comment utiliser Bitcoin, en envoyer, en recevoir, en acheter. Grâce à ce livre, vous saurez « tout sur Bitcoin » ! En annexe, plusieurs témoignages de bitcoiners, ces pionniers qui nous ont ouvert la voie.",
    passages:  []
  }

];
