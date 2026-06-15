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

// ─── Multi-step Simulator ────────────────────────────────────────────────────

function renderSimulator() {
  document.title = 'Faire une simulation | SOrloz';
  document.body.classList.add('sim-fullpage');

  const heroEl = document.getElementById('page-hero');
  const contentEl = document.getElementById('page-content');
  if (contentEl) contentEl.innerHTML = '';
  if (!heroEl) return;

  const params = new URLSearchParams(window.location.search);
  const rawAmt = parseFloat(params.get('amount'));
  const hasAmount = !isNaN(rawAmt) && rawAmt >= 5500 && rawAmt <= 60000;

  const PROJECT_TYPES = [
    { key: 'projets',     icon: '\u{1F464}', label: 'Projets' },
    { key: 'travaux',    icon: '\u{1F528}', label: 'Travaux' },
    { key: 'voiture',    icon: '\u{1F697}', label: 'Voiture' },
    { key: 'deux-roues', icon: '\u{1F3CD}\uFE0F', label: 'Deux roues' },
  ];

  // If amount pre-filled from homepage: skip the amount step
  const STAGES = hasAmount
    ? ['project', 'sliders', 'proposals', 'form']
    : ['project', 'amount', 'sliders', 'proposals', 'form'];

  const state = {
    idx: 0,
    projectType: null,
    amount: hasAmount ? rawAmt : 15000,
    months: 36,
  };

  function stage() { return STAGES[state.idx]; }
  function total() { return STAGES.length; }
  function stepNum() { return state.idx + 1; }

  function pmt(P, n, rate) {
    const r = rate / 100 / 12;
    if (r === 0) return P / n;
    const pow = Math.pow(1 + r, n);
    return P * r * pow / (pow - 1);
  }

  function fmt(n) {
    return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' \u20AC';
  }

  function monthsFromPayment(P, target, rate) {
    const r = rate / 100 / 12;
    if (target <= P * r) return 84;
    const n = -Math.log(1 - P * r / target) / Math.log(1 + r);
    return Math.max(12, Math.min(84, Math.round(n / 6) * 6));
  }

  function progressBar() {
    const pct = Math.round((stepNum() / total()) * 100);
    return '<div class="sp-progress">'
      + '<span class="sp-step-lbl">\u00C9tape ' + stepNum() + ' sur ' + total() + '</span>'
      + '<div class="sp-bar"><div class="sp-bar-fill" style="width:' + pct + '%"></div></div>'
      + '</div>';
  }

  function amountBadge() {
    return '<div class="sp-amount-badge-wrap"><div class="sp-amount-badge">Montant souhait\u00E9&nbsp;<strong>'
      + state.amount.toLocaleString('fr-FR') + '&nbsp;\u20AC</strong></div></div>';
  }

  function renderProject() {
    const btns = PROJECT_TYPES.map(function(p) {
      return '<button class="sp-proj-btn' + (state.projectType === p.key ? ' active' : '') + '" data-key="' + p.key + '">'
        + '<span class="sp-proj-icon">' + p.icon + '</span>' + p.label + '</button>';
    }).join('');
    return '<h1 class="sp-title">Faire une simulation</h1>'
      + '<p class="sp-sub">R\u00E9pondez \u00E0 quelques questions en une minute pour pr\u00E9ciser votre projet</p>'
      + progressBar()
      + '<p class="sp-question">Quel projet voulez-vous financer&nbsp;?</p>'
      + '<div class="sp-proj-grid">' + btns + '</div>'
      + '<div class="sp-actions sp-actions-end">'
      + '<button class="btn btn-primary sp-next"' + (state.projectType ? '' : ' disabled') + '>Passer \u00E0 l\'\u00E9tape suivante</button>'
      + '</div>';
  }

  function renderAmount() {
    return '<h1 class="sp-title">Faire une simulation</h1>'
      + '<p class="sp-sub">R\u00E9pondez \u00E0 quelques questions en une minute pour pr\u00E9ciser votre projet</p>'
      + progressBar()
      + '<p class="sp-question">Quel montant souhaitez-vous emprunter&nbsp;?</p>'
      + '<div class="sp-amt-wrap">'
      + '<input class="sp-amt-input" type="number" min="5500" max="60000" value="' + state.amount + '">'
      + '<span class="sp-amt-unit">\u20AC</span>'
      + '</div>'
      + '<p class="sp-hint">Entre 5 500 \u20AC et 60 000 \u20AC</p>'
      + '<div class="sp-actions">'
      + '<button class="btn btn-outline sp-prev">\u2190 Pr\u00E9c\u00E9dent</button>'
      + '<button class="btn btn-primary sp-next">Passer \u00E0 l\'\u00E9tape suivante</button>'
      + '</div>';
  }

  function renderSliders() {
    const m = Math.round(pmt(state.amount, state.months, 7.6));
    return amountBadge()
      + '<h1 class="sp-title">Faire une simulation</h1>'
      + '<p class="sp-sub">R\u00E9pondez \u00E0 quelques questions en une minute pour pr\u00E9ciser votre projet</p>'
      + progressBar()
      + '<p class="sp-question">Pr\u00E9cisez vos besoins</p>'
      + '<div class="sp-sliders-box">'
      + '<div class="sp-slider-row"><label class="sp-slider-lbl">Pour une dur\u00E9e de</label>'
      + '<div class="sp-slider-inner">'
      + '<input type="range" class="sp-range" id="sp-dur" min="12" max="84" step="6" value="' + state.months + '">'
      + '<span class="sp-range-val" id="sp-dur-val">' + state.months + ' mois</span>'
      + '</div></div>'
      + '<div class="sp-or">ou</div>'
      + '<div class="sp-slider-row"><label class="sp-slider-lbl">Pour une mensualit\u00E9 de</label>'
      + '<div class="sp-slider-inner">'
      + '<input type="range" class="sp-range" id="sp-mth" min="50" max="3000" step="5" value="' + m + '">'
      + '<span class="sp-range-val" id="sp-mth-val">' + m + ' \u20AC/mois</span>'
      + '</div></div>'
      + '</div>'
      + '<div class="sp-actions">'
      + '<button class="btn btn-outline sp-prev">\u2190 Pr\u00E9c\u00E9dent</button>'
      + '<button class="btn btn-primary sp-next">Voir les simulations</button>'
      + '</div>';
  }

  function renderProposals() {
    const proj = (PROJECT_TYPES.find(function(p){ return p.key === state.projectType; }) || {label:'Projet'}).label;
    const P = state.amount;
    const n = state.months;
    const fast = Math.max(12, Math.round(n * 0.55 / 6) * 6);
    const easy = Math.min(84, Math.round(n * 1.6 / 6) * 6);

    function card(label, months, rate, hl) {
      const monthly = pmt(P, months, rate);
      const total = monthly * months;
      const cost = total - P;
      const rateStr = rate.toFixed(2).replace('.', ',');
      return '<div class="sp-card' + (hl ? ' sp-card-hl' : '') + '">'
        + '<div class="sp-card-label">' + label + '</div>'
        + '<div class="sp-card-monthly">' + fmt(monthly) + '<span>/mois</span></div>'
        + '<div class="sp-card-dur">sur ' + months + ' mois</div>'
        + '<table class="sp-card-table">'
        + '<tr><td>TAEG fixe</td><td>' + rateStr + ' %</td></tr>'
        + '<tr><td>Taux d\u00E9biteur fixe</td><td>' + rateStr + ' %</td></tr>'
        + '<tr><td>Montant du cr\u00E9dit</td><td>' + fmt(P) + '</td></tr>'
        + '<tr><td>Montant total d\u00FB</td><td>' + fmt(total) + '</td></tr>'
        + '<tr><td>Co\u00FBt du cr\u00E9dit</td><td>' + fmt(cost) + '</td></tr>'
        + '</table>'
        + '<button class="btn ' + (hl ? 'btn-outline-white' : 'btn-primary') + ' sp-card-btn sp-choose" data-months="' + months + '">'
        + 'Choisir cette offre</button>'
        + '</div>';
    }

    return amountBadge()
      + '<h1 class="sp-title">Nos propositions</h1>'
      + '<p class="sp-sub">Votre r\u00E9sultat pour votre ' + proj + '</p>'
      + '<div class="sp-cards">'
      + card('Remboursement plus rapide', fast, 7.6, false)
      + card('Offre \u00C9co-Finance', n, 4.9, true)
      + card('Remboursement plus facile', easy, 7.6, false)
      + '</div>'
      + '<p class="sp-legal">Simulation non contractuelle. TAEG fixe 7,60\u00A0% hors offre \u00E9co-responsable (4,90\u00A0%). Sous r\u00E9serve d\'acceptation de votre dossier.</p>'
      + '<div class="sp-actions">'
      + '<button class="btn btn-outline sp-prev">\u2190 Pr\u00E9c\u00E9dent</button>'
      + '<button class="btn btn-primary sp-next">Passer \u00E0 l\'\u00E9tape suivante</button>'
      + '</div>';
  }

  function renderForm() {
    return amountBadge()
      + '<p class="sp-form-section-head">Emprunteur</p>'
      + '<h1 class="sp-title sp-title-left">Informations</h1>'
      + progressBar()
      + '<div class="sp-form-block">'
      + '<h2 class="sp-form-block-title">Vos informations personnelles</h2>'
      + '<div class="sp-form-row">'
      + '<label class="sp-radio-wrap"><input type="radio" name="civility" value="M"> Monsieur</label>'
      + '<label class="sp-radio-wrap"><input type="radio" name="civility" value="F"> Madame</label>'
      + '</div>'
      + '<div class="sp-form-grid">'
      + '<div class="sp-field"><label>Situation maritale</label><select class="sp-select"><option value="">S\u00E9lectionner</option><option>C\u00E9libataire</option><option>Mari\u00E9(e)</option><option>Pacs\u00E9(e)</option><option>Divorc\u00E9(e)</option><option>Veuf/Veuve</option></select></div>'
      + '<div class="sp-field"><label>Pr\u00E9nom</label><input type="text" class="sp-input" placeholder="Au choix"></div>'
      + '<div class="sp-field"><label>Nom</label><input type="text" class="sp-input" placeholder="Au choix"></div>'
      + '<div class="sp-field"><label>Nom de naissance</label><input type="text" class="sp-input" placeholder="Au pr\u00E9nom"></div>'
      + '<div class="sp-field"><label>Date de naissance</label><input type="text" class="sp-input" placeholder="JJ/MM/AAAA"></div>'
      + '<div class="sp-field sp-field-full"><label class="sp-checkbox-wrap"><input type="checkbox"> Je suis n\u00E9(e) \u00E0 l\'\u00E9tranger</label></div>'
      + '<div class="sp-field"><label>Ville de naissance</label><input type="text" class="sp-input" placeholder="Ville"></div>'
      + '<div class="sp-field"><label>Nationalit\u00E9</label><select class="sp-select"><option value="">S\u00E9lectionner</option><option>Fran\u00E7aise</option><option>Autre</option></select></div>'
      + '</div></div>'
      + '<div class="sp-form-block">'
      + '<h2 class="sp-form-block-title">Vos coordonn\u00E9es</h2>'
      + '<div class="sp-form-grid">'
      + '<div class="sp-field"><label>T\u00E9l\u00E9phone portable</label><input type="tel" class="sp-input" placeholder="06 00 00 00 00"></div>'
      + '<div class="sp-field"><label>Email</label><input type="email" class="sp-input" placeholder="exemple@email.com"></div>'
      + '</div>'
      + '<label class="sp-checkbox-wrap sp-consent"><input type="checkbox"> J\'autorise SOrloz Financial Services \u00E0 me contacter par voie \u00E9lectronique dans le cadre de ma demande de cr\u00E9dit en ligne.</label>'
      + '</div>'
      + '<div class="sp-actions">'
      + '<button class="btn btn-outline sp-prev">\u2190 Pr\u00E9c\u00E9dent</button>'
      + '<button class="btn btn-primary sp-submit">Passer \u00E0 l\'\u00E9tape suivante</button>'
      + '</div>';
  }

  function bind() {
    heroEl.querySelectorAll('.sp-proj-btn').forEach(function(b) {
      b.addEventListener('click', function() {
        state.projectType = b.dataset.key;
        heroEl.querySelectorAll('.sp-proj-btn').forEach(function(x){ x.classList.remove('active'); });
        b.classList.add('active');
        var nb = heroEl.querySelector('.sp-next');
        if (nb) nb.removeAttribute('disabled');
      });
    });

    var prev = heroEl.querySelector('.sp-prev');
    if (prev) prev.addEventListener('click', function() { state.idx--; draw(); });

    var next = heroEl.querySelector('.sp-next');
    if (next) next.addEventListener('click', function() {
      if (stage() === 'amount') {
        var inp = heroEl.querySelector('.sp-amt-input');
        if (inp) {
          var v = parseFloat(inp.value);
          if (!v || v < 5500 || v > 60000) { inp.style.borderColor = '#C8102E'; return; }
          state.amount = v;
        }
      }
      state.idx++;
      draw();
    });

    heroEl.querySelectorAll('.sp-choose').forEach(function(b) {
      b.addEventListener('click', function() {
        if (b.dataset.months) state.months = parseInt(b.dataset.months);
        state.idx = STAGES.indexOf('form');
        draw();
      });
    });

    var submit = heroEl.querySelector('.sp-submit');
    if (submit) submit.addEventListener('click', function() {
      heroEl.querySelector('.sp-inner').innerHTML =
        '<div style="text-align:center;padding:64px 0">'
        + '<div style="font-size:72px;margin-bottom:24px">\u2705</div>'
        + '<h1 class="sp-title">Demande envoy\u00E9e\u00A0!</h1>'
        + '<p class="sp-sub">Votre dossier a \u00E9t\u00E9 pris en compte. Un conseiller vous contactera sous 24h.</p>'
        + '<a href="/" class="btn btn-primary" style="margin-top:32px;display:inline-flex">Retour \u00E0 l\'accueil</a>'
        + '</div>';
    });

    var durR = document.getElementById('sp-dur');
    var mthR = document.getElementById('sp-mth');
    if (durR && mthR) {
      durR.addEventListener('input', function() {
        state.months = parseInt(durR.value);
        document.getElementById('sp-dur-val').textContent = state.months + ' mois';
        var m = Math.round(pmt(state.amount, state.months, 7.6));
        mthR.value = m;
        document.getElementById('sp-mth-val').textContent = m + ' \u20AC/mois';
      });
      mthR.addEventListener('input', function() {
        var m = parseInt(mthR.value);
        document.getElementById('sp-mth-val').textContent = m + ' \u20AC/mois';
        var n = monthsFromPayment(state.amount, m, 7.6);
        state.months = n;
        durR.value = n;
        document.getElementById('sp-dur-val').textContent = n + ' mois';
      });
    }
  }

  function draw() {
    var stepHTML = '';
    var s = stage();
    if (s === 'project')   stepHTML = renderProject();
    else if (s === 'amount')    stepHTML = renderAmount();
    else if (s === 'sliders')   stepHTML = renderSliders();
    else if (s === 'proposals') stepHTML = renderProposals();
    else if (s === 'form')      stepHTML = renderForm();

    heroEl.innerHTML =
      '<div class="sp-wrap">'
      + '<div class="sp-hdr">'
      + '<a href="/" class="sp-help">Besoin d\'aide</a>'
      + '<a href="/" class="sp-logo">S<span>O</span>rloz</a>'
      + '<a href="/" class="sp-quit">Quitter</a>'
      + '</div>'
      + '<div class="sp-body"><div class="sp-inner">' + stepHTML + '</div></div>'
      + '<div class="sp-ftr">'
      + '<a href="/infos/mentions-legales">Mentions l\u00E9gales</a>'
      + '<a href="/infos/accessibilite">Accessibilit\u00E9&nbsp;: partiellement conforme</a>'
      + '<a href="/infos/politique-de-confidentialite">Informatique et libert\u00E9s</a>'
      + '<a href="/infos/cookies-et-statistiques">Cookies et statistiques</a>'
      + '<a href="/infos/cookies-et-statistiques">Gestion des cookies</a>'
      + '</div>'
      + '</div>';

    bind();
  }

  draw();
}

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

  if (pathname === '/simulateur') {
    renderSimulator();
    return;
  }

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
