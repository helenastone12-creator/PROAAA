// Page configuration keyed by full pathname (matching exact Meia URL structure)
const PAGE_CONFIG = {

  // ── Prêts personnels hub
  '/prets-personnels': {
    icon: '📋', bg: '#FDEAEA',
    title_fr: 'Prêts personnels',
    hero_fr: 'Financement de vos projets personnels',
    desc_fr: 'Que ce soit pour un voyage, des travaux, une voiture ou tout autre projet de vie, SOrloz vous propose des crédits personnels adaptés à votre situation et à votre budget.',
    children: [
      { href: '/prets-personnels/credit-projet', icon: '💼', title_fr: 'Crédit projet' },
      { href: '/prets-personnels/credit-auto', icon: '🚗', title_fr: 'Crédit auto' },
      { href: '/prets-personnels/credit-moto', icon: '🏍️', title_fr: 'Crédit moto' },
      { href: '/prets-personnels/credit-travaux', icon: '🔨', title_fr: 'Crédit travaux' },
      { href: '/prets-personnels/pret-eco-responsable', icon: '🌿', title_fr: 'Prêt éco-responsable' },
    ],
  },

  // ── Crédit projet hub
  '/prets-personnels/credit-projet': {
    icon: '💼', bg: '#FDEAEA',
    title_fr: 'Crédit projet',
    hero_fr: 'Financez tous vos projets',
    desc_fr: 'Mariage, naissance, divorce, retraite, loisirs, déménagement… SOrloz vous accompagne dans tous les moments de votre vie avec un crédit projet sur mesure.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
    children: [
      { href: '/prets-personnels/credit-projet/credit-vacances', icon: '✈️', title_fr: 'Crédit vacances' },
      { href: '/prets-personnels/credit-projet/credit-demenagement', icon: '📦', title_fr: 'Crédit déménagement' },
      { href: '/prets-personnels/credit-projet/credit-loisirs', icon: '🎯', title_fr: 'Crédit loisirs' },
      { href: '/prets-personnels/credit-projet/credit-divorce', icon: '⚖️', title_fr: 'Crédit divorce' },
      { href: '/prets-personnels/credit-projet/credit-retraite', icon: '🏖️', title_fr: 'Crédit retraite' },
      { href: '/prets-personnels/credit-projet/credit-naissance', icon: '👶', title_fr: 'Crédit naissance' },
      { href: '/prets-personnels/credit-projet/credit-mariage', icon: '💍', title_fr: 'Crédit mariage' },
    ],
  },

  // ── Crédit projet sub-pages
  '/prets-personnels/credit-projet/credit-vacances': {
    icon: '✈️', bg: '#FDEAEA',
    title_fr: 'Crédit vacances',
    hero_fr: 'Partez en vacances sans attendre',
    desc_fr: 'Envie de soleil, de découverte ou de détente ? Le crédit vacances SOrloz vous permet de partir sereinement et de rembourser à votre rythme, sans vous priver.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },
  '/prets-personnels/credit-projet/credit-demenagement': {
    icon: '📦', bg: '#FDEAEA',
    title_fr: 'Crédit déménagement',
    hero_fr: 'Déménagez l\'esprit tranquille',
    desc_fr: 'Location de camion, frais d\'agence, premiers loyers, achats mobilier… Le crédit déménagement SOrloz couvre toutes vos dépenses liées à votre nouvelle installation.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },
  '/prets-personnels/credit-projet/credit-loisirs': {
    icon: '🎯', bg: '#FDEAEA',
    title_fr: 'Crédit loisirs',
    hero_fr: 'Profitez pleinement de vos loisirs',
    desc_fr: 'Sport, culture, hi-fi, instruments de musique, animaux… Le crédit loisirs SOrloz finance toutes vos passions et vos plaisirs du quotidien.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },
  '/prets-personnels/credit-projet/credit-divorce': {
    icon: '⚖️', bg: '#FDEAEA',
    title_fr: 'Crédit divorce',
    hero_fr: 'Rebondir après un divorce',
    desc_fr: 'Un divorce entraîne de nombreux frais : honoraires d\'avocat, nouvelle installation, rachat de soulte… Le crédit divorce SOrloz vous aide à traverser cette étape et à repartir du bon pied.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },
  '/prets-personnels/credit-projet/credit-retraite': {
    icon: '🏖️', bg: '#FDEAEA',
    title_fr: 'Crédit retraite',
    hero_fr: 'Profitez pleinement de votre retraite',
    desc_fr: 'La retraite est une nouvelle aventure ! Voyages, loisirs, aménagement de votre maison… Le crédit retraite SOrloz vous aide à financer vos projets pour en profiter pleinement.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },
  '/prets-personnels/credit-projet/credit-naissance': {
    icon: '👶', bg: '#FDEAEA',
    title_fr: 'Crédit naissance',
    hero_fr: 'Préparez l\'arrivée de bébé',
    desc_fr: 'L\'arrivée d\'un enfant est un bonheur qui s\'accompagne de nombreux achats. Poussette, chambre, équipement… Le crédit naissance SOrloz vous aide à tout préparer.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },
  '/prets-personnels/credit-projet/credit-mariage': {
    icon: '💍', bg: '#FDEAEA',
    title_fr: 'Crédit mariage',
    hero_fr: 'Le plus beau jour de votre vie',
    desc_fr: 'Salle de réception, traiteur, robe, voyage de noces… Le crédit mariage SOrloz vous permet d\'organiser la cérémonie de vos rêves sans compromis.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },

  // ── Prêt éco-responsable
  '/prets-personnels/pret-eco-responsable': {
    icon: '🌿', bg: '#EBF5EE',
    title_fr: 'Prêt éco-responsable',
    hero_fr: 'Financez vos projets respectueux de l\'environnement',
    desc_fr: 'Véhicule électrique ou hybride, travaux de rénovation énergétique… Profitez d\'un taux préférentiel pour vos projets éco-responsables avec SOrloz.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
  },

  // ── Crédit auto hub
  '/prets-personnels/credit-auto': {
    icon: '🚗', bg: '#EBF5EE',
    title_fr: 'Crédit auto',
    hero_fr: 'Financez votre voiture avec SOrloz',
    desc_fr: 'Que vous souhaitiez acquérir une voiture neuve ou d\'occasion, SOrloz vous propose des solutions de financement adaptées à votre budget et à votre projet automobile.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
    children: [
      { href: '/prets-personnels/credit-auto/credit-voiture-neuve', icon: '🚘', title_fr: 'Crédit voiture neuve' },
      { href: '/prets-personnels/credit-auto/credit-voiture-occasion', icon: '🚙', title_fr: 'Crédit voiture occasion' },
      { href: '/prets-personnels/credit-auto/credit-voiture-electrique', icon: '⚡', title_fr: 'Crédit voiture électrique' },
      { href: '/prets-personnels/credit-auto/credit-voiture-hybride', icon: '🔋', title_fr: 'Crédit voiture hybride' },
      { href: '/prets-personnels/credit-auto/credit-voiture-thermique', icon: '⛽', title_fr: 'Crédit voiture thermique' },
    ],
  },

  // ── Crédit auto sub-pages
  '/prets-personnels/credit-auto/credit-voiture-neuve': {
    icon: '🚘', bg: '#EBF5EE',
    title_fr: 'Crédit voiture neuve',
    hero_fr: 'Financez votre nouvelle voiture',
    desc_fr: 'Vous rêvez d\'une voiture neuve ? Le crédit voiture neuve SOrloz vous permet de financer l\'achat de votre nouvelle automobile avec des mensualités adaptées à votre budget.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
  },
  '/prets-personnels/credit-auto/credit-voiture-occasion': {
    icon: '🚙', bg: '#EBF5EE',
    title_fr: 'Crédit voiture occasion',
    hero_fr: 'Financez votre voiture d\'occasion',
    desc_fr: 'Achetez la voiture d\'occasion de vos rêves avec le financement SOrloz. Des taux compétitifs et des conditions flexibles pour votre projet automobile.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
  },
  '/prets-personnels/credit-auto/credit-voiture-electrique': {
    icon: '⚡', bg: '#EBF5EE',
    title_fr: 'Crédit voiture électrique',
    hero_fr: 'Passez à l\'électrique avec SOrloz',
    desc_fr: 'Faites le choix de la mobilité propre ! Le crédit voiture électrique SOrloz vous propose un taux préférentiel pour financer votre passage à l\'électrique.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
  },
  '/prets-personnels/credit-auto/credit-voiture-hybride': {
    icon: '🔋', bg: '#EBF5EE',
    title_fr: 'Crédit voiture hybride',
    hero_fr: 'Financez votre voiture hybride',
    desc_fr: 'Le meilleur des deux mondes ! Avec le crédit voiture hybride SOrloz, profitez d\'un financement avantageux pour votre véhicule hybride et réduisez votre empreinte carbone.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
  },
  '/prets-personnels/credit-auto/credit-voiture-thermique': {
    icon: '⛽', bg: '#EBF5EE',
    title_fr: 'Crédit voiture thermique',
    hero_fr: 'Financez votre voiture thermique',
    desc_fr: 'Vous optez pour un véhicule thermique ? SOrloz vous propose un financement personnalisé pour l\'achat de votre voiture essence ou diesel.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
  },

  // ── Crédit moto hub
  '/prets-personnels/credit-moto': {
    icon: '🏍️', bg: '#E6F3F5',
    title_fr: 'Crédit moto',
    hero_fr: 'Financez votre moto avec SOrloz',
    desc_fr: 'Passionné de deux-roues ? SOrloz vous propose des solutions de financement adaptées pour l\'achat de votre moto neuve ou d\'occasion.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
    children: [
      { href: '/prets-personnels/credit-moto/credit-moto-neuve', icon: '🏍️', title_fr: 'Crédit moto neuve' },
      { href: '/prets-personnels/credit-moto/credit-moto-occasion', icon: '🏍️', title_fr: 'Crédit moto occasion' },
      { href: '/prets-personnels/credit-moto/credit-moto-hybride', icon: '🔋', title_fr: 'Crédit moto hybride' },
      { href: '/prets-personnels/credit-moto/credit-moto-thermique', icon: '⛽', title_fr: 'Crédit moto thermique' },
    ],
  },

  // ── Crédit moto sub-pages
  '/prets-personnels/credit-moto/credit-moto-neuve': {
    icon: '🏍️', bg: '#E6F3F5',
    title_fr: 'Crédit moto neuve',
    hero_fr: 'Financez votre nouvelle moto',
    desc_fr: 'Offrez-vous la moto de vos rêves ! Le crédit moto neuve SOrloz vous permet de financer votre deux-roues avec des mensualités adaptées.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
  },
  '/prets-personnels/credit-moto/credit-moto-occasion': {
    icon: '🏍️', bg: '#E6F3F5',
    title_fr: 'Crédit moto occasion',
    hero_fr: 'Financez votre moto d\'occasion',
    desc_fr: 'Trouvez la moto d\'occasion idéale et financez-la avec SOrloz. Des conditions avantageuses pour votre projet deux-roues.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
  },
  '/prets-personnels/credit-moto/credit-moto-hybride': {
    icon: '🔋', bg: '#E6F3F5',
    title_fr: 'Crédit moto hybride',
    hero_fr: 'Financez votre moto hybride',
    desc_fr: 'Adoptez la mobilité hybride pour vos deux-roues. SOrloz vous propose un financement avantageux pour votre moto hybride.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
  },
  '/prets-personnels/credit-moto/credit-moto-thermique': {
    icon: '⛽', bg: '#E6F3F5',
    title_fr: 'Crédit moto thermique',
    hero_fr: 'Financez votre moto thermique',
    desc_fr: 'Vous préférez la puissance d\'un moteur thermique ? SOrloz finance votre moto thermique avec des taux compétitifs.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
  },

  // ── Crédit travaux hub
  '/prets-personnels/credit-travaux': {
    icon: '🔨', bg: '#FFF4C2',
    title_fr: 'Crédit travaux',
    hero_fr: 'Financez vos travaux avec SOrloz',
    desc_fr: 'Rénovation, salle de bain, cuisine, piscine, véranda… SOrloz finance tous vos projets de travaux avec des conditions adaptées à votre budget.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
    children: [
      { href: '/prets-personnels/credit-travaux-interieur', icon: '🏠', title_fr: 'Crédit travaux intérieur' },
      { href: '/prets-personnels/credit-travaux-exterieur', icon: '🏡', title_fr: 'Crédit travaux extérieur' },
      { href: '/prets-personnels/credit-travaux/credit-renovation', icon: '🔧', title_fr: 'Crédit rénovation' },
      { href: '/prets-personnels/credit-travaux/credit-salle-de-bain', icon: '🛁', title_fr: 'Crédit salle de bain' },
      { href: '/prets-personnels/credit-travaux/credit-piscine', icon: '🏊', title_fr: 'Crédit piscine' },
      { href: '/prets-personnels/credit-travaux/credit-cuisine', icon: '🍳', title_fr: 'Crédit cuisine' },
      { href: '/prets-personnels/credit-travaux/credit-veranda', icon: '🌿', title_fr: 'Crédit véranda' },
      { href: '/prets-personnels/credit-travaux/credit-terrasse', icon: '🏡', title_fr: 'Crédit terrasse' },
      { href: '/prets-personnels/credit-travaux/credit-chauffage', icon: '🔥', title_fr: 'Crédit chauffage' },
      { href: '/prets-personnels/credit-travaux/credit-isolation', icon: '🏠', title_fr: 'Crédit isolation' },
      { href: '/prets-personnels/credit-travaux/credit-amenagement', icon: '🛋️', title_fr: 'Crédit aménagement' },
    ],
  },

  '/prets-personnels/credit-travaux-interieur': {
    icon: '🏠', bg: '#FFF4C2',
    title_fr: 'Crédit travaux intérieur',
    hero_fr: 'Financez vos travaux intérieurs',
    desc_fr: 'Rénovez votre intérieur avec le financement SOrloz. Peinture, parquet, isolation, électricité… Tous vos travaux intérieurs financés à des conditions avantageuses.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux-exterieur': {
    icon: '🏡', bg: '#FFF4C2',
    title_fr: 'Crédit travaux extérieur',
    hero_fr: 'Financez vos travaux extérieurs',
    desc_fr: 'Façade, toiture, terrasse, jardin… Le crédit travaux extérieur SOrloz vous permet de financer l\'aménagement et la rénovation de l\'extérieur de votre maison.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux/credit-renovation': {
    icon: '🔧', bg: '#FFF4C2',
    title_fr: 'Crédit rénovation',
    hero_fr: 'Financez la rénovation de votre logement',
    desc_fr: 'Transformez votre logement avec le crédit rénovation SOrloz. Des fonds disponibles rapidement pour démarrer vos travaux de rénovation.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux/credit-salle-de-bain': {
    icon: '🛁', bg: '#FFF4C2',
    title_fr: 'Crédit salle de bain',
    hero_fr: 'Financez votre nouvelle salle de bain',
    desc_fr: 'Créez la salle de bain de vos rêves avec le financement SOrloz. Baignoire, douche à l\'italienne, double vasque… Réalisez votre projet sans attendre.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux/credit-piscine': {
    icon: '🏊', bg: '#FFF4C2',
    title_fr: 'Crédit piscine',
    hero_fr: 'Financez votre piscine avec SOrloz',
    desc_fr: 'Une piscine dans votre jardin, c\'est possible ! Le crédit piscine SOrloz finance la construction ou la rénovation de votre espace aquatique.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux/credit-cuisine': {
    icon: '🍳', bg: '#FFF4C2',
    title_fr: 'Crédit cuisine',
    hero_fr: 'Financez votre nouvelle cuisine',
    desc_fr: 'Réaménagez votre cuisine avec le crédit cuisine SOrloz. Plan de travail, électroménager, mobilier… Concrétisez votre projet de cuisine idéale.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux/credit-veranda': {
    icon: '🌿', bg: '#FFF4C2',
    title_fr: 'Crédit véranda',
    hero_fr: 'Financez votre véranda',
    desc_fr: 'Agrandissez votre espace de vie avec une véranda financée par SOrloz. Un investissement qui valorise votre bien immobilier.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux/credit-terrasse': {
    icon: '🏡', bg: '#FFF4C2',
    title_fr: 'Crédit terrasse',
    hero_fr: 'Financez votre terrasse avec SOrloz',
    desc_fr: 'Créez ou rénovez votre terrasse avec le financement SOrloz. Bois, composite, béton… Un espace extérieur de qualité pour profiter des beaux jours.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux/credit-chauffage': {
    icon: '🔥', bg: '#FFF4C2',
    title_fr: 'Crédit chauffage',
    hero_fr: 'Financez votre système de chauffage',
    desc_fr: 'Poêle à bois, chaudière, pompe à chaleur, plancher chauffant… Le crédit chauffage SOrloz finance votre confort thermique tout au long de l\'année.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux/credit-isolation': {
    icon: '🏠', bg: '#FFF4C2',
    title_fr: 'Crédit isolation',
    hero_fr: 'Financez vos travaux d\'isolation',
    desc_fr: 'Isolation des combles, des murs, du plancher… Réduisez votre consommation d\'énergie et améliorez votre confort avec le crédit isolation SOrloz.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux/credit-amenagement': {
    icon: '🛋️', bg: '#FFF4C2',
    title_fr: 'Crédit aménagement',
    hero_fr: 'Financez vos travaux d\'aménagement',
    desc_fr: 'Parquet, peinture, électricité, plomberie… Le crédit aménagement SOrloz vous aide à transformer votre intérieur selon vos envies et votre budget.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/credit-travaux-maison': {
    icon: '🏠', bg: '#FFF4C2',
    title_fr: 'Crédit travaux maison',
    hero_fr: 'Financez les travaux de votre maison',
    desc_fr: 'Tous les travaux de votre maison, de la cave au grenier, financés par SOrloz. Des conditions adaptées à votre projet pour réaliser la maison de vos rêves.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  // ── Crédit économie d'énergie / vehicule vert
  '/prets-personnels/credit-economie-energie': {
    icon: '♻️', bg: '#EBF5EE',
    title_fr: 'Crédit économie d\'énergie',
    hero_fr: 'Financez vos travaux d\'économie d\'énergie',
    desc_fr: 'Isolation, pompe à chaleur, panneaux solaires, chaudière… Réduisez votre consommation énergétique et vos factures avec le crédit économie d\'énergie SOrloz.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
  },
  '/prets-personnels/credit-vehicule-vert': {
    icon: '🌿', bg: '#EBF5EE',
    title_fr: 'Crédit véhicule vert',
    hero_fr: 'Financez votre véhicule écologique',
    desc_fr: 'Vélo électrique, trottinette, voiture électrique ou hybride… Le crédit véhicule vert SOrloz vous propose un financement avantageux pour une mobilité plus propre.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
  },

  // ── Assurance
  '/assurance/nos-assurances-de-prets': {
    icon: '🛡️', bg: '#E6F3F5',
    title_fr: 'Nos assurances de prêts',
    hero_fr: 'Protégez votre crédit avec SOrloz',
    desc_fr: 'Décès, invalidité, incapacité de travail, perte d\'emploi… Les assurances SOrloz vous protègent ainsi que vos proches en cas d\'accident de la vie.',
  },

  // ── Conseils
  '/conseils': {
    icon: '💡', bg: '#FDEAEA',
    title_fr: 'Nos conseils',
    hero_fr: 'Conseils et guides pour vos projets',
    desc_fr: 'Retrouvez tous nos conseils pour bien choisir votre crédit, comprendre les taux, préparer votre dossier et financer vos projets dans les meilleures conditions.',
  },

  // ── Contact / FAQ
  '/contact': {
    icon: '📞', bg: '#FFF4C2',
    title_fr: 'Aide et contact',
    hero_fr: 'Nous sommes là pour vous',
    desc_fr: 'Une question sur votre crédit ou votre dossier ? Notre équipe est disponible du lundi au vendredi de 8h30 à 19h pour vous accompagner.',
  },
  '/faq': {
    icon: '❓', bg: '#FDEAEA',
    title_fr: 'Foire aux questions',
    hero_fr: 'Toutes les réponses à vos questions',
    desc_fr: 'Retrouvez ici les réponses aux questions les plus fréquentes sur nos crédits, nos taux, nos assurances et nos services.',
  },
  '/faq/faire-une-reclamation': {
    icon: '📝', bg: '#FDEAEA',
    title_fr: 'Faire une réclamation',
    hero_fr: 'Soumettre une réclamation',
    desc_fr: 'Vous souhaitez nous soumettre une réclamation ? Expliquez-nous votre situation et notre équipe s\'engage à vous répondre dans les meilleurs délais.',
    parent: { href: '/faq', label_fr: 'FAQ' },
  },

  // ── Infos légales
  '/infos/qui-sommes-nous': {
    icon: '🏢', bg: '#E6F3F5',
    title_fr: 'Qui sommes-nous ?',
    hero_fr: 'SOrloz, votre partenaire financier',
    desc_fr: 'Découvrez l\'histoire de SOrloz, nos valeurs et notre engagement pour un financement responsable au service de vos projets de vie.',
  },
  '/infos/mentions-legales': {
    icon: '📄', bg: '#E6F3F5',
    title_fr: 'Mentions légales',
    hero_fr: 'Mentions légales SOrloz',
    desc_fr: 'Informations légales relatives au site SOrloz et à la société SOrloz.',
  },
  '/infos/politique-de-confidentialite': {
    icon: '🔒', bg: '#E6F3F5',
    title_fr: 'Politique de confidentialité',
    hero_fr: 'Protection de vos données personnelles',
    desc_fr: 'Découvrez comment SOrloz collecte, utilise et protège vos données personnelles conformément au RGPD.',
  },
  '/infos/cookies-et-statistiques': {
    icon: '🍪', bg: '#E6F3F5',
    title_fr: 'Cookies et statistiques',
    hero_fr: 'Notre politique de cookies',
    desc_fr: 'Informations sur les cookies utilisés par SOrloz et comment gérer vos préférences.',
  },
  '/infos/plan-site': {
    icon: '🗺️', bg: '#E6F3F5',
    title_fr: 'Plan du site',
    hero_fr: 'Plan du site SOrloz',
    desc_fr: 'Retrouvez ici l\'ensemble des pages du site SOrloz.',
  },
  '/infos/service-sourds-et-malentendants': {
    icon: '👂', bg: '#E6F3F5',
    title_fr: 'Service sourds et malentendants',
    hero_fr: 'Un service accessible à tous',
    desc_fr: 'SOrloz propose un service dédié aux personnes sourdes et malentendantes pour faciliter l\'accès à nos solutions de financement.',
  },
  '/espace-client': {
    icon: '👤', bg: '#E6F3F5',
    title_fr: 'Espace client',
    hero_fr: 'Gérez votre contrat en ligne',
    desc_fr: 'Consultez vos contrats, suivez vos remboursements et gérez vos documents depuis votre espace client sécurisé SOrloz.',
  },

  // ── Simulateur & simulations
  '/simulateur': {
    icon: '🧮', bg: '#FDEAEA',
    title_fr: 'Simulateur de crédit',
    hero_fr: 'Simulez votre crédit en ligne',
    desc_fr: 'Calculez vos mensualités en quelques secondes. Montant, durée, taux… Notre simulateur vous donne une réponse immédiate et sans engagement.',
  },
  '/prets-personnels/simulation-credit-auto': {
    icon: '🚗', bg: '#EBF5EE',
    title_fr: 'Simulation crédit voiture',
    hero_fr: 'Simulez votre crédit voiture',
    desc_fr: 'Calculez vos mensualités pour l\'achat de votre voiture. Renseignez le montant et la durée, obtenez votre estimation immédiatement.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
  },
  '/prets-personnels/simulation-credit-moto': {
    icon: '🏍️', bg: '#E6F3F5',
    title_fr: 'Simulation crédit moto',
    hero_fr: 'Simulez votre crédit moto',
    desc_fr: 'Estimez vos mensualités pour l\'achat de votre moto en quelques clics. Sans engagement, réponse immédiate.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
  },
  '/prets-personnels/simulation-credit-travaux': {
    icon: '🔨', bg: '#FFF4C2',
    title_fr: 'Simulation crédit travaux',
    hero_fr: 'Simulez votre crédit travaux',
    desc_fr: 'Obtenez une estimation de vos mensualités pour financer vos travaux. Rapide, gratuit et sans engagement.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },
  '/prets-personnels/simulation-credit-projet': {
    icon: '💼', bg: '#FDEAEA',
    title_fr: 'Simulation crédit projet',
    hero_fr: 'Simulez votre crédit projet',
    desc_fr: 'Estimez le coût de votre crédit projet en quelques secondes. Montant, durée, mensualités — obtenez une réponse immédiate.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },
  '/prets-personnels/simulation-credit-mariage': {
    icon: '💍', bg: '#FDEAEA',
    title_fr: 'Simulation crédit mariage',
    hero_fr: 'Simulez votre crédit mariage',
    desc_fr: 'Préparez votre budget mariage grâce à notre simulateur. Calculez vos mensualités sans engagement en quelques clics.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },
  '/prets-personnels/simulation-credit-vacances': {
    icon: '✈️', bg: '#FDEAEA',
    title_fr: 'Simulation crédit vacances',
    hero_fr: 'Simulez votre crédit vacances',
    desc_fr: 'Partez l\'esprit tranquille ! Estimez vos mensualités pour financer vos vacances avec SOrloz.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },

  // ── Infos accessibilité
  '/infos/accessibilite': {
    icon: '♿', bg: '#E6F3F5',
    title_fr: 'Accessibilité',
    hero_fr: 'Accessibilité numérique SOrloz',
    desc_fr: 'SOrloz s\'engage pour l\'accessibilité numérique. Découvrez notre déclaration d\'accessibilité et les mesures mises en place.',
  },
};

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function buildBreadcrumb(page) {
  if (!page.parent) {
    return `<a href="/prets-personnels" class="breadcrumb">← Prêts personnels</a>`;
  }
  return `<a href="${page.parent.href}" class="breadcrumb">← ${page.parent.label_fr}</a>`;
}

// ─── Children cards ───────────────────────────────────────────────────────────

function buildChildrenSection(children) {
  const cards = children.map(c => `
    <a href="${c.href}" class="product-card" style="display:flex;flex-direction:column;align-items:flex-start;gap:12px;background:#fff;border-radius:16px;padding:28px 24px;text-decoration:none;box-shadow:0 2px 12px rgba(0,0,0,.06);transition:transform .2s,box-shadow .2s;color:inherit">
      <span style="font-size:36px" aria-hidden="true">${c.icon}</span>
      <span style="font-size:16px;font-weight:700;color:var(--dark)">${c.title_fr}</span>
      <span style="font-size:13px;color:var(--text-light)">En savoir plus →</span>
    </a>`).join('');
  return `
    <section style="padding:48px 0">
      <div class="container">
        <h2 style="font-size:24px;font-weight:800;color:var(--dark);margin-bottom:32px">Nos solutions de financement</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px">
          ${cards}
        </div>
      </div>
    </section>`;
}

// ─── Main render ──────────────────────────────────────────────────────────────

function renderPage(t) {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const page = PAGE_CONFIG[pathname];
  const heroEl = document.getElementById('page-hero');
  const contentEl = document.getElementById('page-content');

  if (!page) {
    if (heroEl) heroEl.innerHTML = `
      <div class="container" style="padding:80px 24px;text-align:center">
        <h1 style="font-size:48px;color:var(--dark)">404</h1>
        <p style="color:var(--text-light);margin-top:12px">Page introuvable</p>
        <a href="/" class="btn btn-primary" style="margin-top:24px;display:inline-flex">← Accueil</a>
      </div>`;
    return;
  }

  document.title = `${page.title_fr} | SOrloz`;

  if (heroEl) {
    heroEl.innerHTML = `
      <section class="hero" style="background:${page.bg};padding:64px 0 40px" aria-labelledby="page-title">
        <div class="container">
          <div class="page-hero-inner">
            <div>
              ${buildBreadcrumb(page)}
              <div class="page-icon" aria-hidden="true">${page.icon}</div>
              <h1 class="hero-title" id="page-title">${page.hero_fr}</h1>
              <p class="page-hero-desc">${page.desc_fr}</p>
              <div class="hero-sim" style="margin-top:32px">
                <input class="sim-input" type="number" min="500" max="75000"
                  placeholder="${t('hero.input.placeholder') || 'Saisir un montant entre 500 € et 75 000 €'}"
                  aria-label="Montant du crédit">
                <select class="sim-duration" style="padding:14px 12px;border:2px solid #e5e7eb;border-radius:10px;font-size:15px;background:#fff;cursor:pointer">
                  <option value="12">12 mois</option>
                  <option value="24">24 mois</option>
                  <option value="36">36 mois</option>
                  <option value="48">48 mois</option>
                  <option value="60" selected>60 mois</option>
                  <option value="72">72 mois</option>
                  <option value="84">84 mois</option>
                  <option value="96">96 mois</option>
                  <option value="120">120 mois</option>
                </select>
                <button class="btn btn-primary sim-btn">${t('hero.cta') || 'Simuler mon prêt'}</button>
              </div>
            </div>
            <div class="page-rate-card">
              <p class="hero-promo-teaser">${t('hero.promo.teaser') || 'Vous voulez une bonne nouvelle ?'}</p>
              <p class="hero-promo-rate-label">${t('hero.promo.rate.prefix') || 'TAEG fixe à partir de'}</p>
              <p class="hero-promo-rate-value">${t('hero.promo.rate.value') || '4,90%'}</p>
              <p class="hero-promo-rate-detail">${t('hero.promo.rate.detail') || 'Pour 12 000 € sur 12 mois**'}</p>
              <a href="/contact" class="hero-promo-cta">${t('hero.promo.cta') || 'Voir les conditions'}</a>
            </div>
          </div>
        </div>
      </section>`;
  }

  if (contentEl) {
    let html = '';

    if (page.children && page.children.length > 0) {
      html += buildChildrenSection(page.children);
    }

    html += `
      <section class="process" aria-labelledby="process-title" style="margin-top:0">
        <div class="container">
          <p class="process-tagline" id="process-title">${t('process.tagline') || 'Transparent, sécurisé et fiable'}</p>
          <div class="process-steps">
            <div class="process-step"><div class="process-step-icon"><div class="process-step-num">1</div></div><p>${t('process.step1') || 'Simulez votre demande en quelques clics'}</p></div>
            <div class="process-step"><div class="process-step-icon"><div class="process-step-num">2</div></div><p>${t('process.step2') || 'Complétez vos informations et signez en ligne'}</p></div>
            <div class="process-step"><div class="process-step-icon"><div class="process-step-num">3</div></div><p>${t('process.step3') || 'Recevez les fonds sous 48h'}</p></div>
          </div>
          <div class="process-cta"><a href="/contact" class="btn btn-primary">${t('process.cta') || 'Simuler mon prêt'}</a></div>
        </div>
      </section>
      <section class="features" style="padding:48px 0">
        <div class="container">
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon-wrap" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1B3A4B" stroke-width="2"/><path d="M13 20l5 5 9-9" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
              <h3 class="feature-title">${t('features.title1') || 'Simple et rapide'}</h3>
              <ul class="feature-list"><li>${t('features.1.1') || 'Réponse de principe en quelques clics'}</li><li>${t('features.1.2') || '100% en ligne'}</li><li>${t('features.1.3') || 'Fonds disponibles en 48h'}</li></ul>
            </div>
            <div class="feature-card">
              <div class="feature-icon-wrap" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1B3A4B" stroke-width="2"/><circle cx="20" cy="16" r="5" stroke="#1B3A4B" stroke-width="2"/><path d="M10 32c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round"/></svg></div>
              <h3 class="feature-title">${t('features.title2') || 'Suivi humain'}</h3>
              <ul class="feature-list"><li>${t('features.2.1') || 'Chaque projet est unique'}</li><li>${t('features.2.2') || 'Accompagnement personnalisé'}</li><li>${t('features.2.3') || 'Experts à votre écoute'}</li></ul>
            </div>
            <div class="feature-card">
              <div class="feature-icon-wrap" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1B3A4B" stroke-width="2"/><path d="M14 20h12M20 14v12" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round"/></svg></div>
              <h3 class="feature-title">${t('features.title3') || 'Nos petits plus'}</h3>
              <ul class="feature-list"><li>${t('features.3.1') || 'Remboursez à votre rythme'}</li><li>${t('features.3.2') || 'Taux compétitifs'}</li><li>${t('features.3.3') || 'Espace client pour gérer votre contrat'}</li></ul>
            </div>
          </div>
        </div>
      </section>`;

    contentEl.innerHTML = html;
  }
}
