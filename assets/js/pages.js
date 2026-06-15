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
    icon: '✈️', bg: '#fff',
    title_fr: 'Crédit vacances',
    title_hero: 'Crédit vacances : sous le soleil des tropiques',
    desc_fr: 'Envie de soleil, de découverte ou de détente ? Le crédit vacances SOrloz vous permet de partir sereinement et de rembourser à votre rythme, sans vous priver.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-projet', label: 'Crédit projet' },
    ],
    testimonial: {
      monthly: '241,88', months: 48, names: 'Julie & Lucille',
      amount: '10 000', rate: '7,78', total_due: '11 610,24',
      purpose: 'voyage à Bali',
    },
    content: {
      heading: 'Crédit vacances : qu\'est-ce que c\'est ?',
      subheading: 'Un financement souple pour vos voyages',
      body: 'Le crédit vacances est un prêt personnel non affecté qui vous permet de financer vos vacances sans justificatif de dépense. Vous pouvez l\'utiliser pour réserver vos billets d\'avion, votre hôtel, votre location de vacances ou tout autre frais lié à votre voyage. Avec SOrloz, vous empruntez entre 5 500 € et 60 000 € et choisissez librement votre durée de remboursement.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit vacances SOrloz ?',
      intro: 'Parce que vos projets méritent mieux qu\'une attente. Le crédit vacances SOrloz vous donne les moyens de partir sans rogner sur votre qualité de vie.',
      sections: [
        { title: 'Souplesse', body: 'Partez quand vous le souhaitez et remboursez à votre rythme. Vous choisissez librement la durée et le montant de votre crédit, de 12 à 84 mois.' },
        { title: 'Conditions transparentes', body: 'Aucun frais caché. Votre taux est fixe pour toute la durée du crédit, ce qui vous garantit des mensualités stables et prévisibles.' },
        { title: 'Accompagnement personnalisé', body: 'Nos conseillers sont disponibles pour répondre à toutes vos questions et vous aider à trouver la solution de financement la plus adaptée à votre projet de voyage.' },
      ],
    },
    crosssell: {
      question: 'Vous préparez votre voyage de noces ?',
      body: 'Profitez également de notre crédit mariage pour financer la totalité de votre grand jour, de la cérémonie au voyage de noces inclus.',
      link_href: '/prets-personnels/credit-projet/credit-mariage',
      link_text: 'Découvrir le crédit mariage',
    },
    example: { amount: 10000, months: 48, rate: 7.78 },
    faq: [
      { q: 'Comment obtenir un crédit vacances SOrloz ?', a: 'Faites votre simulation en ligne, renseignez vos informations et obtenez une réponse de principe immédiate. Votre dossier est entièrement dématérialisé.' },
      { q: 'Quel montant puis-je emprunter pour mes vacances ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € pour financer votre voyage, selon votre profil et votre capacité de remboursement.' },
      { q: 'Dois-je fournir des justificatifs pour ma destination ?', a: 'Non, le crédit vacances SOrloz est un prêt personnel non affecté. Vous n\'avez pas à justifier l\'utilisation des fonds.' },
      { q: 'Puis-je rembourser mon crédit vacances par anticipation ?', a: 'Oui, le remboursement anticipé total ou partiel est possible à tout moment. Des indemnités peuvent s\'appliquer dans la limite légale.' },
    ],
    features_name: 'Vacances',
    articles: [
      { tag: 'Voyage', href: '/conseils', title: 'Comment bien préparer son budget vacances ?', excerpt: 'Découvrez nos conseils pour estimer le coût de votre voyage et choisir le bon montant à emprunter.' },
      { tag: 'Conseil', href: '/conseils', title: 'Crédit vacances ou épargne : quelle est la meilleure solution ?', excerpt: 'Comparez les avantages du crédit personnel face à l\'épargne préalable pour financer vos vacances.' },
      { tag: 'Pratique', href: '/conseils', title: 'Les 5 destinations les plus financées par les Français', excerpt: 'Tour d\'horizon des voyages les plus populaires et de leur coût moyen, pour mieux préparer votre budget.' },
    ],
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
    icon: '💍', bg: '#fff',
    title_fr: 'Crédit mariage',
    title_hero: 'Crédit mariage : le plus beau jour de votre vie',
    desc_fr: 'Salle de réception, traiteur, robe, voyage de noces… Le crédit mariage SOrloz vous permet d\'organiser la cérémonie de vos rêves sans compromis.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-projet', label: 'Crédit projet' },
    ],
    testimonial: {
      monthly: '312,45', months: 60, names: 'Sophie & Thomas',
      amount: '15 000', rate: '7,60', total_due: '18 747,00',
      purpose: 'mariage en Provence',
    },
    content: {
      heading: 'Crédit mariage : qu\'est-ce que c\'est ?',
      subheading: 'Financez chaque détail de votre grand jour',
      body: 'Le crédit mariage est un prêt personnel qui vous permet de financer l\'intégralité de votre mariage : lieu de réception, traiteur, fleurs, photographe, robe, costume, musique, et même le voyage de noces. Avec SOrloz, empruntez entre 5 500 € et 60 000 € et remboursez à votre rythme de 12 à 84 mois.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit mariage SOrloz ?',
      intro: 'Votre mariage est un moment unique. SOrloz vous donne les moyens de le rendre inoubliable sans compromis financier.',
      sections: [
        { title: 'Liberté totale', body: 'Utilisez les fonds comme bon vous semble : salle, traiteur, voyage de noces, tenue… Aucun justificatif de dépense n\'est exigé.' },
        { title: 'Taux fixe garanti', body: 'Votre taux est fixe pour toute la durée du crédit. Vos mensualités ne changent pas, vous pouvez planifier sereinement.' },
        { title: 'Réponse rapide', body: 'Obtenez une réponse de principe immédiate en ligne et recevez les fonds sous 48h après validation de votre dossier.' },
      ],
    },
    crosssell: {
      question: 'Vous partez en voyage de noces ?',
      body: 'Combinez votre crédit mariage avec notre crédit vacances pour financer votre lune de miel sans vous priver.',
      link_href: '/prets-personnels/credit-projet/credit-vacances',
      link_text: 'Découvrir le crédit vacances',
    },
    example: { amount: 15000, months: 60, rate: 7.60 },
    faq: [
      { q: 'Quel montant peut-on emprunter pour un mariage ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € selon votre budget et votre capacité de remboursement.' },
      { q: 'Le crédit mariage est-il un crédit affecté ?', a: 'Non, c\'est un prêt personnel non affecté. Vous êtes libre d\'utiliser les fonds comme vous le souhaitez.' },
      { q: 'Peut-on faire une demande à deux ?', a: 'Oui, vous pouvez faire une demande de crédit mariage à deux emprunteurs pour augmenter votre capacité d\'emprunt.' },
      { q: 'Quand reçoit-on les fonds ?', a: 'Une fois votre dossier validé et le délai légal de rétractation passé, les fonds sont disponibles sous 48h sur votre compte.' },
    ],
    features_name: 'Mariage',
    articles: [
      { tag: 'Mariage', href: '/conseils', title: 'Budget mariage : combien faut-il prévoir en France ?', excerpt: 'Découvrez le coût moyen d\'un mariage en France et comment optimiser votre budget pour votre grand jour.' },
      { tag: 'Conseil', href: '/conseils', title: 'Comment financer son mariage sans se ruiner ?', excerpt: 'Nos conseils pour trouver le bon équilibre entre le mariage de vos rêves et votre budget réel.' },
      { tag: 'Pratique', href: '/conseils', title: 'Les postes de dépenses incontournables d\'un mariage', excerpt: 'De la salle au voyage de noces : tour d\'horizon des frais à anticiper pour votre mariage.' },
    ],
  },

  // ── Prêt éco-responsable
  '/prets-personnels/pret-eco-responsable': {
    icon: '🌿', bg: '#fff',
    title_fr: 'Prêt éco-responsable',
    title_hero: 'Prêt éco-responsable : agissez pour la planète',
    desc_fr: 'Véhicule électrique ou hybride, travaux de rénovation énergétique… Profitez d\'un taux préférentiel pour vos projets éco-responsables avec SOrloz.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
    testimonial: {
      monthly: '198,32', months: 60, names: 'Marie & Paul',
      amount: '12 000', rate: '4,90', total_due: '11 899,20',
      purpose: 'installation de panneaux solaires',
    },
    content: {
      heading: 'Le prêt éco-responsable : qu\'est-ce que c\'est ?',
      subheading: 'Un taux préférentiel pour vos projets verts',
      body: 'Le prêt éco-responsable SOrloz est un crédit personnel à taux réduit dédié aux projets respectueux de l\'environnement : achat d\'un véhicule électrique ou hybride, travaux d\'isolation, installation de panneaux solaires, pompe à chaleur, etc. Bénéficiez d\'un TAEG fixe à partir de 4,90% pour vos projets éco-responsables.',
    },
    why: {
      heading: 'Pourquoi choisir le prêt éco-responsable SOrloz ?',
      intro: 'Parce que faire du bien à la planète ne devrait pas coûter plus cher. SOrloz récompense vos choix responsables avec un taux préférentiel.',
      sections: [
        { title: 'Taux préférentiel', body: 'Profitez d\'un TAEG fixe à partir de 4,90%, bien en dessous du taux standard, réservé à vos projets éco-responsables.' },
        { title: 'Projets éligibles variés', body: 'Véhicule électrique, hybride, isolation thermique, panneaux solaires, pompe à chaleur, chaudière à basse consommation… De nombreux projets sont éligibles.' },
        { title: 'Démarche 100% en ligne', body: 'Faites votre demande en quelques minutes depuis chez vous. Réponse immédiate, fonds disponibles sous 48h après validation.' },
      ],
    },
    crosssell: {
      question: 'Vous achetez un véhicule électrique ?',
      body: 'Notre crédit voiture électrique est spécialement conçu pour l\'achat de votre nouveau véhicule écologique, avec un taux préférentiel.',
      link_href: '/prets-personnels/credit-auto/credit-voiture-electrique',
      link_text: 'Découvrir le crédit voiture électrique',
    },
    example: { amount: 12000, months: 60, rate: 4.90 },
    faq: [
      { q: 'Quels projets sont éligibles au prêt éco-responsable ?', a: 'Véhicule électrique ou hybride, isolation thermique, panneaux solaires, pompe à chaleur, chaudière à haute performance énergétique, et autres travaux d\'amélioration énergétique.' },
      { q: 'Quel taux pour le prêt éco-responsable ?', a: 'Le TAEG fixe est à partir de 4,90% pour les projets éco-responsables éligibles, contre 7,60% pour les prêts personnels classiques.' },
      { q: 'Faut-il des justificatifs pour le prêt éco ?', a: 'Vous devrez justifier la nature éco-responsable de votre projet (devis, facture pro-forma ou certificat de conformité du véhicule).' },
      { q: 'Peut-on cumuler le prêt éco-responsable avec des aides de l\'État ?', a: 'Oui, le prêt éco-responsable SOrloz est cumulable avec les aides publiques comme MaPrimeRénov\', le bonus écologique ou les aides de l\'ANAH.' },
    ],
    features_name: 'Éco-responsable',
    articles: [
      { tag: 'Écologie', href: '/conseils', title: 'Voiture électrique : toutes les aides disponibles en 2025', excerpt: 'Bonus écologique, prime à la conversion, leasing social… Tour d\'horizon des aides pour passer à l\'électrique.' },
      { tag: 'Travaux', href: '/conseils', title: 'Rénovation énergétique : quels travaux sont les plus rentables ?', excerpt: 'Isolation, fenêtres, chauffage… Découvrez les travaux qui offrent le meilleur retour sur investissement.' },
      { tag: 'Conseil', href: '/conseils', title: 'Comment financer ses panneaux solaires ?', excerpt: 'Prêt éco-responsable, MaPrimeRénov\', autoconsommation… Toutes les solutions pour financer votre projet solaire.' },
    ],
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
    icon: '🚘', bg: '#fff',
    title_fr: 'Crédit voiture neuve',
    title_hero: 'Crédit voiture neuve : roulez avec le sourire',
    desc_fr: 'Vous rêvez d\'une voiture neuve ? Le crédit voiture neuve SOrloz vous permet de financer l\'achat de votre nouvelle automobile avec des mensualités adaptées à votre budget.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-auto', label: 'Crédit auto' },
    ],
    testimonial: {
      monthly: '398,56', months: 60, names: 'Marc & Isabelle',
      amount: '22 000', rate: '7,60', total_due: '23 913,60',
      purpose: 'achat d\'une Peugeot 308',
    },
    content: {
      heading: 'Crédit voiture neuve : tout ce qu\'il faut savoir',
      subheading: 'Un financement adapté à votre voiture neuve',
      body: 'Le crédit voiture neuve SOrloz est un prêt personnel non affecté qui vous permet de financer votre véhicule neuf sans avoir à passer par le concessionnaire. Vous bénéficiez d\'un taux fixe et de mensualités stables sur toute la durée du crédit, sans frais de dossier.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit voiture neuve SOrloz ?',
      intro: 'Parce que votre nouvelle voiture ne devrait pas attendre. SOrloz vous offre un financement rapide et transparent.',
      sections: [
        { title: 'Indépendance totale', body: 'Négociez le prix de votre voiture comme un acheteur comptant. Votre financement est distinct du vendeur, ce qui vous donne un meilleur pouvoir de négociation.' },
        { title: 'Taux fixe et transparent', body: 'Votre TAEG est fixé dès le départ et ne change pas pendant toute la durée de votre crédit. Aucune mauvaise surprise.' },
        { title: 'Rapidité', body: 'Réponse de principe en quelques minutes, fonds disponibles sous 48h. Vous pouvez aller chercher votre voiture dès que vous le souhaitez.' },
      ],
    },
    crosssell: {
      question: 'Vous préférez une voiture électrique ?',
      body: 'Bénéficiez d\'un taux préférentiel avec notre prêt éco-responsable pour financer votre véhicule électrique ou hybride.',
      link_href: '/prets-personnels/credit-auto/credit-voiture-electrique',
      link_text: 'Découvrir le crédit voiture électrique',
    },
    example: { amount: 20000, months: 60, rate: 7.60 },
    faq: [
      { q: 'Quel montant puis-je emprunter pour une voiture neuve ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € selon votre profil et le prix du véhicule.' },
      { q: 'Dois-je passer par le concessionnaire ?', a: 'Non, le crédit voiture neuve SOrloz est un prêt personnel indépendant. Vous négociez directement avec le vendeur de votre choix.' },
      { q: 'Quel est le taux pour un crédit voiture neuve ?', a: 'Le TAEG fixe est à partir de 7,60% pour un crédit voiture standard. Un taux préférentiel de 4,90% est disponible pour les véhicules électriques ou hybrides.' },
      { q: 'Puis-je rembourser mon crédit voiture par anticipation ?', a: 'Oui, à tout moment. Des indemnités de remboursement anticipé peuvent s\'appliquer dans les limites légales.' },
    ],
    features_name: 'Voiture neuve',
  },
  '/prets-personnels/credit-auto/credit-voiture-occasion': {
    icon: '🚙', bg: '#fff',
    title_fr: 'Crédit voiture occasion',
    title_hero: 'Crédit voiture occasion : le bon plan malin',
    desc_fr: 'Achetez la voiture d\'occasion de vos rêves avec le financement SOrloz. Des taux compétitifs et des conditions flexibles pour votre projet automobile.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-auto', label: 'Crédit auto' },
    ],
    testimonial: {
      monthly: '267,34', months: 48, names: 'Kevin & Aurélie',
      amount: '12 000', rate: '7,60', total_due: '12 832,32',
      purpose: 'achat d\'une Golf occasion',
    },
    content: {
      heading: 'Crédit voiture occasion : comment ça marche ?',
      subheading: 'Financer une voiture d\'occasion, c\'est simple avec SOrloz',
      body: 'Le crédit voiture occasion fonctionne comme un prêt personnel classique. Vous choisissez votre véhicule d\'occasion entre particuliers ou chez un professionnel, et SOrloz vous avance les fonds. Vous remboursez ensuite en mensualités fixes, sans frais cachés.',
    },
    why: {
      heading: 'Les avantages du crédit voiture occasion SOrloz',
      intro: 'Financer une voiture d\'occasion avec SOrloz, c\'est bénéficier des mêmes avantages qu\'un crédit neuf, avec encore plus de flexibilité.',
      sections: [
        { title: 'Achat entre particuliers possible', body: 'Contrairement à certains crédits auto classiques, le prêt SOrloz vous permet d\'acheter votre véhicule aussi bien chez un professionnel que chez un particulier.' },
        { title: 'Pas de limite d\'âge du véhicule', body: 'Qu\'il soit récent ou plus ancien, votre véhicule d\'occasion peut être financé par SOrloz sans restriction d\'âge ou de kilométrage.' },
        { title: 'Mensualités fixes', body: 'Votre taux et vos mensualités sont fixes pour toute la durée du crédit. Vous savez exactement ce que vous remboursez chaque mois.' },
      ],
    },
    crosssell: {
      question: 'Vous préférez une voiture neuve ?',
      body: 'Découvrez notre crédit voiture neuve avec les mêmes avantages : taux fixe, 0€ de frais de dossier et fonds disponibles sous 48h.',
      link_href: '/prets-personnels/credit-auto/credit-voiture-neuve',
      link_text: 'Découvrir le crédit voiture neuve',
    },
    example: { amount: 12000, months: 48, rate: 7.60 },
    faq: [
      { q: 'Puis-je acheter une voiture d\'occasion entre particuliers avec le crédit SOrloz ?', a: 'Oui, le crédit voiture occasion SOrloz est un prêt personnel qui vous permet d\'acheter votre véhicule aussi bien chez un professionnel que chez un particulier.' },
      { q: 'Y a-t-il une limite d\'âge pour le véhicule ?', a: 'Non, il n\'y a pas de limite d\'âge ou de kilométrage pour le véhicule financé avec un crédit personnel SOrloz.' },
      { q: 'Quel montant pour un crédit voiture occasion ?', a: 'Vous pouvez emprunter de 5 500 € à 60 000 € selon le prix du véhicule et votre profil.' },
      { q: 'Comment prouver l\'achat à SOrloz ?', a: 'Pour un prêt personnel non affecté, aucun justificatif n\'est requis. Vous êtes libre d\'utiliser les fonds comme vous le souhaitez.' },
    ],
    features_name: 'Voiture occasion',
  },
  '/prets-personnels/credit-auto/credit-voiture-electrique': {
    icon: '⚡', bg: '#fff',
    title_fr: 'Crédit voiture électrique',
    title_hero: 'Crédit voiture électrique : branchez-vous sur l\'avenir',
    desc_fr: 'Faites le choix de la mobilité propre ! Le crédit voiture électrique SOrloz vous propose un taux préférentiel pour financer votre passage à l\'électrique.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-auto', label: 'Crédit auto' },
    ],
    testimonial: {
      monthly: '285,12', months: 48, names: 'Julien & Camille',
      amount: '14 000', rate: '4,90', total_due: '13 685,76',
      purpose: 'achat d\'une Renault Zoé',
    },
    content: {
      heading: 'Crédit voiture électrique : un taux préférentiel pour vos projets verts',
      subheading: 'Profitez du taux éco-responsable SOrloz',
      body: 'Le crédit voiture électrique SOrloz est un prêt personnel à taux préférentiel réservé à l\'achat d\'un véhicule 100% électrique. Avec un TAEG fixe à partir de 4,90%, vous bénéficiez de l\'un des meilleurs taux du marché pour financer votre mobilité propre.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit voiture électrique SOrloz ?',
      intro: 'Parce que rouler propre ne doit pas coûter plus cher. SOrloz vous récompense pour votre choix écologique.',
      sections: [
        { title: 'Taux préférentiel à 4,90%', body: 'Bénéficiez d\'un TAEG fixe à partir de 4,90% — le taux éco-responsable SOrloz réservé aux véhicules électriques et hybrides.' },
        { title: 'Cumulable avec les aides de l\'État', body: 'Bonus écologique, prime à la conversion, leasing social… Le crédit SOrloz est cumulable avec toutes les aides publiques disponibles pour l\'achat d\'un véhicule électrique.' },
        { title: 'Économies sur le long terme', body: 'En plus du taux préférentiel, profitez des économies liées à l\'usage d\'un véhicule électrique : recharge moins coûteuse, entretien réduit, bonus malus favorable.' },
      ],
    },
    crosssell: {
      question: 'Vous souhaitez aussi rénover votre logement ?',
      body: 'Notre prêt éco-responsable finance aussi vos travaux d\'isolation, panneaux solaires, pompe à chaleur, avec le même taux préférentiel à 4,90%.',
      link_href: '/prets-personnels/pret-eco-responsable',
      link_text: 'Découvrir le prêt éco-responsable',
    },
    example: { amount: 15000, months: 48, rate: 4.90 },
    faq: [
      { q: 'Le crédit voiture électrique est-il différent d\'un crédit auto classique ?', a: 'Oui, le crédit voiture électrique SOrloz bénéficie d\'un taux préférentiel de 4,90% au lieu de 7,60%, réservé aux véhicules 100% électriques ou hybrides.' },
      { q: 'Puis-je cumuler le crédit SOrloz avec le bonus écologique ?', a: 'Oui, le crédit voiture électrique SOrloz est cumulable avec le bonus écologique et toutes les autres aides publiques.' },
      { q: 'Les véhicules hybrides sont-ils éligibles ?', a: 'Oui, les véhicules hybrides rechargeables (PHEV) et hybrides non-rechargeables (HEV) sont éligibles au taux préférentiel selon les conditions en vigueur.' },
      { q: 'Quel montant maximum pour un crédit voiture électrique ?', a: 'Vous pouvez emprunter jusqu\'à 60 000 €, ce qui couvre l\'achat de la grande majorité des véhicules électriques disponibles sur le marché.' },
    ],
    features_name: 'Voiture électrique',
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
    icon: '🔥', bg: '#fff',
    title_fr: 'Crédit chauffage',
    title_hero: 'Crédit chauffage : chaleur garantie toute l\'année',
    desc_fr: 'Poêle à bois, chaudière, pompe à chaleur, plancher chauffant… Le crédit chauffage SOrloz finance votre confort thermique tout au long de l\'année.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-travaux', label: 'Crédit travaux' },
    ],
    testimonial: {
      monthly: '156,78', months: 60, names: 'Bernard & Martine',
      amount: '8 500', rate: '7,60', total_due: '9 406,80',
      purpose: 'installation d\'une pompe à chaleur',
    },
    content: {
      heading: 'Crédit chauffage : qu\'est-ce que c\'est ?',
      subheading: 'Un financement dédié à votre confort thermique',
      body: 'Le crédit chauffage SOrloz est un prêt personnel destiné au financement de vos installations et travaux de chauffage : chaudière à condensation, pompe à chaleur air-eau, poêle à bois, plancher chauffant, radiateurs… Empruntez de 5 500 € à 60 000 € et remboursez à votre rythme.',
    },
    why: {
      heading: 'Pourquoi financer votre chauffage avec SOrloz ?',
      intro: 'Renouveler votre système de chauffage est un investissement rentable. SOrloz vous aide à le financer dès aujourd\'hui pour économiser sur le long terme.',
      sections: [
        { title: 'Économies d\'énergie durables', body: 'Un nouveau système de chauffage performant peut réduire votre facture énergétique de 30 à 50%. Le crédit SOrloz vous permet de réaliser cet investissement dès maintenant.' },
        { title: 'Eligible aux aides de l\'État', body: 'Votre projet de chauffage peut être éligible à MaPrimeRénov\' ou aux Certificats d\'Économie d\'Énergie (CEE), cumulables avec votre crédit SOrloz.' },
        { title: 'Fonds disponibles rapidement', body: 'Obtenez une réponse immédiate et les fonds sous 48h pour démarrer vos travaux sans attendre l\'hiver.' },
      ],
    },
    crosssell: {
      question: 'Vous pensez aussi à l\'isolation ?',
      body: 'Combinez votre crédit chauffage avec un crédit isolation pour maximiser vos économies d\'énergie et votre confort thermique.',
      link_href: '/prets-personnels/credit-travaux/credit-isolation',
      link_text: 'Découvrir le crédit isolation',
    },
    example: { amount: 8500, months: 60, rate: 7.60 },
    faq: [
      { q: 'Quels travaux de chauffage peut-on financer avec SOrloz ?', a: 'Chaudière à condensation, pompe à chaleur air-eau ou géothermique, poêle à granulés ou à bois, plancher chauffant, radiateurs, installation complète de chauffage central.' },
      { q: 'Le crédit chauffage est-il cumulable avec MaPrimeRénov\' ?', a: 'Oui, le crédit personal SOrloz est cumulable avec toutes les aides publiques à la rénovation énergétique, dont MaPrimeRénov\' et les CEE.' },
      { q: 'Quel montant pour des travaux de chauffage ?', a: 'Vous pouvez emprunter de 5 500 € à 60 000 € selon l\'ampleur de vos travaux et votre capacité de remboursement.' },
      { q: 'Faut-il fournir des devis pour obtenir le crédit chauffage ?', a: 'Non, le crédit SOrloz est un prêt personnel non affecté. Aucun justificatif de travaux n\'est requis.' },
    ],
    features_name: 'Chauffage',
    articles: [
      { tag: 'Énergie', href: '/conseils', title: 'Pompe à chaleur : avantages, coûts et aides disponibles', excerpt: 'Tout ce qu\'il faut savoir pour choisir et financer votre pompe à chaleur en 2025.' },
      { tag: 'Travaux', href: '/conseils', title: 'Changer sa chaudière : quand et comment ?', excerpt: 'Durée de vie, signes de vieillissement et solutions de remplacement pour votre chaudière.' },
      { tag: 'Conseil', href: '/conseils', title: 'Les aides pour la rénovation énergétique en 2025', excerpt: 'MaPrimeRénov\', CEE, éco-PTZ… Tour d\'horizon des dispositifs d\'aide pour financer vos travaux.' },
    ],
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
    { key: 'deux-roues', icon: '\u{1F3CD}️', label: 'Deux roues' },
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
    return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
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
      + '<span class="sp-step-lbl">Étape ' + stepNum() + ' sur ' + total() + '</span>'
      + '<div class="sp-bar"><div class="sp-bar-fill" style="width:' + pct + '%"></div></div>'
      + '</div>';
  }

  function amountBadge() {
    return '<div class="sp-amount-badge-wrap"><div class="sp-amount-badge">Montant souhaité&nbsp;<strong>'
      + state.amount.toLocaleString('fr-FR') + '&nbsp;€</strong></div></div>';
  }

  function renderProject() {
    const btns = PROJECT_TYPES.map(function(p) {
      return '<button class="sp-proj-btn' + (state.projectType === p.key ? ' active' : '') + '" data-key="' + p.key + '">'
        + '<span class="sp-proj-icon">' + p.icon + '</span>' + p.label + '</button>';
    }).join('');
    return '<h1 class="sp-title">Faire une simulation</h1>'
      + '<p class="sp-sub">Répondez à quelques questions en une minute pour préciser votre projet</p>'
      + progressBar()
      + '<p class="sp-question">Quel projet voulez-vous financer&nbsp;?</p>'
      + '<div class="sp-proj-grid">' + btns + '</div>'
      + '<div class="sp-actions sp-actions-end">'
      + '<button class="btn btn-primary sp-next"' + (state.projectType ? '' : ' disabled') + '>Passer à l\'étape suivante</button>'
      + '</div>';
  }

  function renderAmount() {
    return '<h1 class="sp-title">Faire une simulation</h1>'
      + '<p class="sp-sub">Répondez à quelques questions en une minute pour préciser votre projet</p>'
      + progressBar()
      + '<p class="sp-question">Quel montant souhaitez-vous emprunter&nbsp;?</p>'
      + '<div class="sp-amt-wrap">'
      + '<input class="sp-amt-input" type="number" min="5500" max="60000" value="' + state.amount + '">'
      + '<span class="sp-amt-unit">€</span>'
      + '</div>'
      + '<p class="sp-hint">Entre 5 500 € et 60 000 €</p>'
      + '<div class="sp-actions">'
      + '<button class="btn btn-outline sp-prev">← Précédent</button>'
      + '<button class="btn btn-primary sp-next">Passer à l\'étape suivante</button>'
      + '</div>';
  }

  function renderSliders() {
    const m = Math.round(pmt(state.amount, state.months, 7.6));
    return amountBadge()
      + '<h1 class="sp-title">Faire une simulation</h1>'
      + '<p class="sp-sub">Répondez à quelques questions en une minute pour préciser votre projet</p>'
      + progressBar()
      + '<p class="sp-question">Précisez vos besoins</p>'
      + '<div class="sp-sliders-box">'
      + '<div class="sp-slider-row"><label class="sp-slider-lbl">Pour une durée de</label>'
      + '<div class="sp-slider-inner">'
      + '<input type="range" class="sp-range" id="sp-dur" min="12" max="84" step="6" value="' + state.months + '">'
      + '<span class="sp-range-val" id="sp-dur-val">' + state.months + ' mois</span>'
      + '</div></div>'
      + '<div class="sp-or">ou</div>'
      + '<div class="sp-slider-row"><label class="sp-slider-lbl">Pour une mensualité de</label>'
      + '<div class="sp-slider-inner">'
      + '<input type="range" class="sp-range" id="sp-mth" min="50" max="3000" step="5" value="' + m + '">'
      + '<span class="sp-range-val" id="sp-mth-val">' + m + ' €/mois</span>'
      + '</div></div>'
      + '</div>'
      + '<div class="sp-actions">'
      + '<button class="btn btn-outline sp-prev">← Précédent</button>'
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
        + '<tr><td>Taux débiteur fixe</td><td>' + rateStr + ' %</td></tr>'
        + '<tr><td>Montant du crédit</td><td>' + fmt(P) + '</td></tr>'
        + '<tr><td>Montant total dû</td><td>' + fmt(total) + '</td></tr>'
        + '<tr><td>Coût du crédit</td><td>' + fmt(cost) + '</td></tr>'
        + '</table>'
        + '<button class="btn ' + (hl ? 'btn-outline-white' : 'btn-primary') + ' sp-card-btn sp-choose" data-months="' + months + '">'
        + 'Choisir cette offre</button>'
        + '</div>';
    }

    return amountBadge()
      + '<h1 class="sp-title">Nos propositions</h1>'
      + '<p class="sp-sub">Votre résultat pour votre ' + proj + '</p>'
      + '<div class="sp-cards">'
      + card('Remboursement plus rapide', fast, 7.6, false)
      + card('Offre Éco-Finance', n, 4.9, true)
      + card('Remboursement plus facile', easy, 7.6, false)
      + '</div>'
      + '<p class="sp-legal">Simulation non contractuelle. TAEG fixe 7,60 % hors offre éco-responsable (4,90 %). Sous réserve d\'acceptation de votre dossier.</p>'
      + '<div class="sp-actions">'
      + '<button class="btn btn-outline sp-prev">← Précédent</button>'
      + '<button class="btn btn-primary sp-next">Passer à l\'étape suivante</button>'
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
      + '<div class="sp-field"><label>Situation maritale</label><select class="sp-select"><option value="">Sélectionner</option><option>Célibataire</option><option>Marié(e)</option><option>Pacsé(e)</option><option>Divorcé(e)</option><option>Veuf/Veuve</option></select></div>'
      + '<div class="sp-field"><label>Prénom</label><input type="text" class="sp-input" placeholder="Au choix"></div>'
      + '<div class="sp-field"><label>Nom</label><input type="text" class="sp-input" placeholder="Au choix"></div>'
      + '<div class="sp-field"><label>Nom de naissance</label><input type="text" class="sp-input" placeholder="Au prénom"></div>'
      + '<div class="sp-field"><label>Date de naissance</label><input type="text" class="sp-input" placeholder="JJ/MM/AAAA"></div>'
      + '<div class="sp-field sp-field-full"><label class="sp-checkbox-wrap"><input type="checkbox"> Je suis né(e) à l\'étranger</label></div>'
      + '<div class="sp-field"><label>Ville de naissance</label><input type="text" class="sp-input" placeholder="Ville"></div>'
      + '<div class="sp-field"><label>Nationalité</label><select class="sp-select"><option value="">Sélectionner</option><option>Française</option><option>Autre</option></select></div>'
      + '</div></div>'
      + '<div class="sp-form-block">'
      + '<h2 class="sp-form-block-title">Vos coordonnées</h2>'
      + '<div class="sp-form-grid">'
      + '<div class="sp-field"><label>Téléphone portable</label><input type="tel" class="sp-input" placeholder="06 00 00 00 00"></div>'
      + '<div class="sp-field"><label>Email</label><input type="email" class="sp-input" placeholder="exemple@email.com"></div>'
      + '</div>'
      + '<label class="sp-checkbox-wrap sp-consent"><input type="checkbox"> J\'autorise SOrloz Financial Services à me contacter par voie électronique dans le cadre de ma demande de crédit en ligne.</label>'
      + '</div>'
      + '<div class="sp-actions">'
      + '<button class="btn btn-outline sp-prev">← Précédent</button>'
      + '<button class="btn btn-primary sp-submit">Passer à l\'étape suivante</button>'
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
        + '<div style="font-size:72px;margin-bottom:24px">✅</div>'
        + '<h1 class="sp-title">Demande envoyée !</h1>'
        + '<p class="sp-sub">Votre dossier a été pris en compte. Un conseiller vous contactera sous 24h.</p>'
        + '<a href="/" class="btn btn-primary" style="margin-top:32px;display:inline-flex">Retour à l\'accueil</a>'
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
        document.getElementById('sp-mth-val').textContent = m + ' €/mois';
      });
      mthR.addEventListener('input', function() {
        var m = parseInt(mthR.value);
        document.getElementById('sp-mth-val').textContent = m + ' €/mois';
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
      + '<a href="/infos/mentions-legales">Mentions légales</a>'
      + '<a href="/infos/accessibilite">Accessibilité&nbsp;: partiellement conforme</a>'
      + '<a href="/infos/politique-de-confidentialite">Informatique et libertés</a>'
      + '<a href="/infos/cookies-et-statistiques">Cookies et statistiques</a>'
      + '<a href="/infos/cookies-et-statistiques">Gestion des cookies</a>'
      + '</div>'
      + '</div>';

    bind();
  }

  draw();
}

// ─── PMT helper ──────────────────────────────────────────────────────────────

function calcPmt(amount, months, rate) {
  var r = rate / 100 / 12;
  if (r === 0) return amount / months;
  var pow = Math.pow(1 + r, months);
  return amount * r * pow / (pow - 1);
}

function fmtEur(n) {
  return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ─── Section builders ────────────────────────────────────────────────────────

function buildBreadcrumbNav(page) {
  var parts = [];
  if (page.breadcrumbs && page.breadcrumbs.length) {
    page.breadcrumbs.forEach(function(b) {
      parts.push('<a href="' + b.href + '" style="color:var(--text-light);text-decoration:none;font-size:13px">' + b.label + '</a>');
    });
  } else if (page.parent) {
    parts.push('<a href="' + page.parent.href + '" style="color:var(--text-light);text-decoration:none;font-size:13px">' + page.parent.label_fr + '</a>');
  } else {
    parts.push('<a href="/prets-personnels" style="color:var(--text-light);text-decoration:none;font-size:13px">Prêts personnels</a>');
  }
  var title = page.title_fr || '';
  parts.push('<span style="color:var(--dark);font-size:13px;font-weight:600">' + title + '</span>');
  return '<nav style="display:flex;align-items:center;gap:8px;margin-bottom:20px;flex-wrap:wrap">'
    + parts.join('<span style="color:var(--text-light);font-size:13px"> › </span>')
    + '</nav>';
}

function buildTestimonial(t) {
  if (!t) return '';
  function tag(v) { return '<span style="display:inline-block;background:#f0fdf4;color:#166534;border:1px solid #bbf7d0;border-radius:6px;padding:1px 6px;font-weight:700;font-size:inherit">' + v + '</span>'; }
  return '<p style="font-size:14px;color:var(--text-light);line-height:1.7;margin-top:20px">'
    + 'Avec une mensualité de ' + tag(t.monthly + ' €/mois') + ' pendant ' + tag(t.months + ' mois') + ', '
    + t.names + ' ont pu emprunter ' + tag(t.amount + ' €') + ' à ' + tag(t.rate + ' %') + ' pour un montant dû de '
    + tag(t.total_due + ' €') + ' et ont pu profiter de leur ' + t.purpose
    + '</p>'
    + '<p style="margin-top:10px"><a href="/infos/mentions-legales" style="color:var(--text-light);font-size:13px;text-decoration:underline">Voir les conditions de l\'offre</a></p>';
}

function buildHero(page) {
  var title = page.title_hero || page.hero_fr || page.title_fr || '';
  var desc = page.desc_fr || '';
  return '<section style="background:#fff;padding:56px 0 40px">'
    + '<div class="container">'
    + buildBreadcrumbNav(page)
    + '<h1 style="font-size:clamp(26px,4vw,42px);font-weight:800;color:var(--dark);line-height:1.2;margin-bottom:20px">' + title + '</h1>'
    + '<p style="font-size:17px;color:var(--text-light);line-height:1.7;max-width:680px;margin-bottom:28px">' + desc + '</p>'
    + '<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:24px">'
    + '<input class="sim-input" type="number" min="5500" max="60000" placeholder="Saisir un montant entre 5 500 € et 60 000 €" style="flex:1;min-width:220px;padding:14px 16px;border:2px solid #e5e7eb;border-radius:10px;font-size:15px" aria-label="Montant du crédit">'
    + '<button class="btn btn-primary sim-btn" style="white-space:nowrap">Faire une simulation</button>'
    + '</div>'
    + buildTestimonial(page.testimonial)
    + '</div>'
    + '</section>';
}

function buildContent(page) {
  var c = page.content;
  if (!c) return '';
  return '<section style="background:#fff;padding:48px 0">'
    + '<div class="container" style="max-width:760px">'
    + '<h2 style="font-size:28px;font-weight:700;color:var(--dark);margin-bottom:10px">' + (c.heading || '') + '</h2>'
    + '<p style="color:#C8102E;font-weight:600;font-size:15px;margin-bottom:16px">' + (c.subheading || '') + '</p>'
    + '<p style="font-size:16px;color:var(--text-light);line-height:1.8">' + (c.body || '') + '</p>'
    + '</div>'
    + '</section>';
}

function buildWhy(page) {
  var w = page.why;
  if (!w) return '';
  var sectionsHtml = '';
  if (w.sections && w.sections.length) {
    sectionsHtml = w.sections.map(function(s) {
      return '<div style="margin-bottom:24px">'
        + '<h3 style="font-size:18px;font-weight:700;color:var(--dark);margin-bottom:8px">' + s.title + '</h3>'
        + '<p style="font-size:15px;color:var(--text-light);line-height:1.7">' + s.body + '</p>'
        + '</div>';
    }).join('');
  }
  return '<section style="background:#f9fafb;padding:48px 0">'
    + '<div class="container" style="max-width:760px">'
    + '<h2 style="font-size:24px;font-weight:700;color:var(--dark);margin-bottom:14px">' + (w.heading || '') + '</h2>'
    + '<p style="font-size:15px;color:var(--text-light);line-height:1.7;margin-bottom:28px">' + (w.intro || '') + '</p>'
    + sectionsHtml
    + '</div>'
    + '</section>';
}

function buildInsurance() {
  return '<section style="background:#e0f2f1;padding:48px 0;text-align:center">'
    + '<div class="container">'
    + '<div style="width:80px;height:80px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:36px;box-shadow:0 2px 12px rgba(0,0,0,.08)">🛡️</div>'
    + '<h2 style="font-size:22px;font-weight:700;color:var(--dark);max-width:520px;margin:0 auto 16px">Couvrez vos arrières et ne laissez place à aucun imprévu.</h2>'
    + '<p style="font-size:15px;color:var(--text-light);max-width:560px;margin:0 auto">Une assurance facultative est disponible pour vous protéger, vous et vos proches, en cas d\'accident de la vie : décès, invalidité, incapacité de travail ou perte d\'emploi. Parce que votre sérénité est notre priorité.</p>'
    + '</div>'
    + '</section>';
}

function buildAideContact() {
  return '<section style="background:var(--dark,#1B3A4B);padding:20px 0;text-align:center">'
    + '<div class="container">'
    + '<a href="/contact" style="color:#fff;font-size:16px;font-weight:600;text-decoration:none">Aide et contact →</a>'
    + '</div>'
    + '</section>';
}

function buildFeatures(page) {
  var name = page.features_name || page.title_fr || '';
  var items = [
    '100% en ligne et 0 € de frais de dossier',
    'Un prêt entre 5 500 € et 60 000 €',
    'Un taux fixe pendant toute la durée de votre crédit.',
    'Réception des fonds sous 48h (1) sur votre compte bancaire.',
    'Une mensualité qui s\'adapte à vos besoins, modulable sur demande. (2)',
  ];
  var listHtml = items.map(function(item) {
    return '<li style="display:flex;align-items:flex-start;gap:14px;padding:16px 0;border-bottom:1px solid #f0f0f0">'
      + '<span style="color:#22c55e;font-size:18px;flex-shrink:0;margin-top:1px">✓</span>'
      + '<span style="font-size:15px;color:var(--dark)">' + item + '</span>'
      + '</li>';
  }).join('');
  return '<section style="background:#fff;padding:64px 0">'
    + '<div class="container" style="max-width:680px">'
    + '<h2 style="font-size:26px;font-weight:700;color:var(--dark);margin-bottom:32px">Le Prêt Personnel ' + name + ' : SOrloz vous accompagne</h2>'
    + '<ul style="list-style:none;padding:0;margin:0">' + listHtml + '</ul>'
    + '</div>'
    + '</section>';
}

function buildCrosssell(page) {
  var cs = page.crosssell;
  if (!cs) return '';
  return '<section style="background:#f9fafb;padding:40px 0">'
    + '<div class="container" style="max-width:680px">'
    + '<div style="border:2px solid #e5e7eb;border-radius:16px;padding:32px;background:#fff">'
    + '<h3 style="font-size:20px;font-weight:700;color:var(--dark);margin-bottom:10px">' + cs.question + '</h3>'
    + '<p style="font-size:14px;font-weight:700;color:var(--text-light);margin-bottom:14px">Découvrez nos autres offres de prêt personnel adaptées à vos projets</p>'
    + '<p style="font-size:15px;color:var(--text-light);line-height:1.7;margin-bottom:20px">' + cs.body + '</p>'
    + '<a href="' + cs.link_href + '" class="btn btn-primary" style="display:inline-flex">' + cs.link_text + '</a>'
    + '</div>'
    + '</div>'
    + '</section>';
}

function buildExample(page) {
  var ex = page.example;
  if (!ex) return '';
  var amount = ex.amount;
  var months = ex.months;
  var rate = ex.rate;
  var r = rate / 100 / 12;
  var pow = Math.pow(1 + r, months);
  var monthly = amount * r * pow / (pow - 1);
  var total = monthly * months;
  var cost = total - amount;
  var titleLow = (page.title_fr || '').toLowerCase();
  function row(label, val) {
    return '<tr><td style="padding:8px 0;color:rgba(255,255,255,.8);font-size:14px">' + label + '</td>'
      + '<td style="padding:8px 0;text-align:right;font-weight:600;font-size:14px">' + val + '</td></tr>';
  }
  return '<section style="background:#f0fdf4;padding:64px 0;text-align:center">'
    + '<div class="container">'
    + '<h2 style="font-size:24px;font-weight:700;color:var(--dark);margin-bottom:24px">Un exemple de prêt ' + titleLow + ' et ce qu\'il faut en retenir</h2>'
    + '<a href="/simulateur" class="btn btn-primary" style="display:inline-flex;margin-bottom:32px">Faire une simulation</a>'
    + '<div style="background:#2d6a4f;color:#fff;border-radius:16px;padding:32px;max-width:480px;margin:0 auto">'
    + '<p style="font-size:14px;opacity:.7;margin-bottom:4px">Montant emprunté</p>'
    + '<p style="font-size:36px;font-weight:700;margin-bottom:4px">' + amount.toLocaleString('fr-FR') + ' €</p>'
    + '<p style="font-size:14px;opacity:.7;margin-bottom:24px">Pendant ' + months + ' mois</p>'
    + '<table style="width:100%;border-collapse:collapse">'
    + row('TAEG fixe', rate.toFixed(2).replace('.', ',') + ' %')
    + row('Mensualités', fmtEur(monthly) + ' €')
    + row('Coût total du crédit', fmtEur(cost) + ' €')
    + row('Montant total dû par l\'emprunteur', fmtEur(total) + ' €')
    + '</table>'
    + '</div>'
    + '</div>'
    + '</section>';
}

function buildProcess(tFn) {
  var step1 = (tFn && tFn('process.step1')) || 'Simulez votre demande en quelques clics';
  return '<section style="background:#fffbeb;padding:64px 0;text-align:center">'
    + '<div class="container">'
    + '<p style="font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:var(--text-light);margin-bottom:24px">Transparent, sécurisé et fiable</p>'
    + '<div style="background:#fff;max-width:480px;margin:0 auto;border-radius:16px;padding:40px;box-shadow:0 4px 24px rgba(0,0,0,.08)">'
    + '<div style="width:48px;height:48px;background:#fffbeb;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:20px;font-weight:700;color:var(--dark)">1</div>'
    + '<p style="font-size:16px;color:var(--dark);line-height:1.6">' + step1 + '</p>'
    + '</div>'
    + '<p style="margin:20px 0;font-size:22px;letter-spacing:4px;color:var(--dark)">●○○</p>'
    + '<a href="/simulateur" class="btn btn-primary" style="display:inline-flex">Simuler mon prêt</a>'
    + '</div>'
    + '</section>';
}

function buildFaq(page) {
  var defaultFaq = [
    { q: 'Comment faire une demande de crédit SOrloz ?', a: 'Faites votre demande directement en ligne depuis notre simulateur. Répondez à quelques questions et obtenez une réponse de principe immédiate.' },
    { q: 'Quels sont les taux proposés par SOrloz ?', a: 'SOrloz propose un TAEG fixe à partir de 4,90% pour les projets éco-responsables et de 7,60% pour les autres projets personnels.' },
    { q: 'Quand vais-je recevoir les fonds ?', a: 'Une fois votre dossier validé et le délai de rétractation passé, les fonds sont disponibles sous 48h sur votre compte bancaire.' },
    { q: 'Puis-je rembourser mon crédit par anticipation ?', a: 'Oui, le remboursement anticipé total ou partiel est possible. Des frais peuvent s\'appliquer selon les conditions de votre contrat.' },
  ];
  var items = (page.faq && page.faq.length) ? page.faq : defaultFaq;
  var titleFr = page.title_fr || '';
  var faqTitle = page.faq_title || ('Vos questions sur le ' + (titleFr ? titleFr.toLowerCase() : 'crédit'));
  var itemsHtml = items.map(function(item) {
    return '<div class="faq-item" style="border-bottom:1px solid #f0f0f0">'
      + '<button class="faq-question" style="display:flex;justify-content:space-between;align-items:center;width:100%;background:none;border:none;padding:18px 0;cursor:pointer;text-align:left;font-size:16px;font-weight:600;color:var(--dark)" aria-expanded="false">'
      + item.q
      + '<span style="font-size:20px;flex-shrink:0;margin-left:12px;transition:transform .2s">+</span>'
      + '</button>'
      + '<div class="faq-answer" style="overflow:hidden;max-height:0;transition:max-height .3s ease">'
      + '<div style="padding:0 0 18px;font-size:15px;color:var(--text-light);line-height:1.7">' + item.a + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
  return '<section style="background:#fff;padding:64px 0">'
    + '<div class="container" style="max-width:720px">'
    + '<h2 style="font-size:26px;font-weight:700;color:var(--dark);text-align:center;margin-bottom:40px">' + faqTitle + '</h2>'
    + '<div>' + itemsHtml + '</div>'
    + '</div>'
    + '</section>';
}

function buildArticles(page) {
  if (!page.articles || !page.articles.length) return '';
  var titleFr = page.title_fr || 'vos projets';
  var heading = 'Vous saurez tout sur le financement de ' + titleFr.toLowerCase();
  var cardsHtml = page.articles.map(function(a) {
    return '<a href="' + a.href + '" style="display:block;text-decoration:none;color:inherit;background:#fff;border:1px solid #f0f0f0;border-radius:12px;padding:20px;transition:box-shadow .2s">'
      + '<span style="display:inline-block;background:#dcfce7;color:#166534;font-size:11px;font-weight:600;border-radius:20px;padding:3px 10px;margin-bottom:12px">' + a.tag + '</span>'
      + '<h3 style="font-size:16px;font-weight:700;color:var(--dark);margin-bottom:8px;line-height:1.4">' + a.title + '</h3>'
      + '<p style="font-size:13px;color:var(--text-light);line-height:1.6;margin-bottom:10px">' + a.excerpt + '</p>'
      + '<span style="font-size:12px;color:var(--text-light)">17 mars 2025</span>'
      + '</a>';
  }).join('');
  return '<section style="background:#f9fafb;padding:64px 0">'
    + '<div class="container">'
    + '<h2 style="font-size:22px;font-weight:700;color:var(--dark);margin-bottom:32px">' + heading + '</h2>'
    + '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px">' + cardsHtml + '</div>'
    + '</div>'
    + '</section>';
}

function buildChildrenGrid(children) {
  var cards = children.map(function(c) {
    return '<a href="' + c.href + '" style="display:flex;flex-direction:column;align-items:flex-start;gap:12px;background:#fff;border-radius:16px;padding:28px 24px;text-decoration:none;box-shadow:0 2px 12px rgba(0,0,0,.06);transition:transform .2s,box-shadow .2s;color:inherit">'
      + '<span style="font-size:36px" aria-hidden="true">' + c.icon + '</span>'
      + '<span style="font-size:16px;font-weight:700;color:var(--dark)">' + c.title_fr + '</span>'
      + '<span style="font-size:13px;color:var(--text-light)">En savoir plus →</span>'
      + '</a>';
  }).join('');
  return '<section style="background:#fff;padding:64px 0">'
    + '<div class="container">'
    + '<h2 style="font-size:24px;font-weight:700;color:var(--dark);margin-bottom:32px">Nos solutions de financement</h2>'
    + '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:20px">' + cards + '</div>'
    + '</div>'
    + '</section>';
}

// ─── Main render ──────────────────────────────────────────────────────────────

function renderPage(tFn) {
  var pathname = window.location.pathname.replace(/\/$/, '') || '/';

  if (pathname === '/simulateur') {
    renderSimulator();
    return;
  }

  var page = PAGE_CONFIG[pathname];
  var heroEl = document.getElementById('page-hero');
  var contentEl = document.getElementById('page-content');

  if (!page) {
    if (heroEl) heroEl.innerHTML = '<div class="container" style="padding:80px 24px;text-align:center">'
      + '<h1 style="font-size:48px;color:var(--dark)">404</h1>'
      + '<p style="color:var(--text-light);margin-top:12px">Page introuvable</p>'
      + '<a href="/" class="btn btn-primary" style="margin-top:24px;display:inline-flex">← Accueil</a>'
      + '</div>';
    return;
  }

  document.title = (page.title_fr || '') + ' | SOrloz';

  if (heroEl) heroEl.innerHTML = buildHero(page);

  if (contentEl) {
    var html = '';

    if (page.children && page.children.length) {
      html += buildChildrenGrid(page.children);
      html += buildInsurance();
      html += buildAideContact();
      html += buildProcess(tFn);
      html += buildFaq(page);
    } else {
      html += buildContent(page);
      html += buildWhy(page);
      html += buildInsurance();
      html += buildAideContact();
      html += buildFeatures(page);
      html += buildCrosssell(page);
      html += buildExample(page);
      html += buildProcess(tFn);
      html += buildFaq(page);
      html += buildArticles(page);
    }

    contentEl.innerHTML = html;
    if (typeof initFaq === 'function') initFaq();
    if (typeof initSimulator === 'function') initSimulator();
  }
}
