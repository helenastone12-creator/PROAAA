// ─── PAGE_CONFIG ──────────────────────────────────────────────────────────────
// Keyed by full pathname (matching URL structure)

const PAGE_CONFIG = {

  // ── Prêts personnels hub
  '/prets-personnels': {
    icon: '📋', bg: 'var(--green-bg)',
    title_fr: 'Prêts personnels',
    hero_fr: 'Financement de vos projets personnels',
    title_hero: 'Prêts personnels : à portée de financement',
    desc_fr: 'Que ce soit pour un voyage, des travaux, une voiture ou tout autre projet de vie, SOrloz vous propose des crédits personnels adaptés à votre situation et à votre budget.',
    body_fr: 'Le prêt personnel SOrloz vous permet de concrétiser tous vos projets de vie, sans justificatif d\'utilisation des fonds. Choisissez librement le montant entre 5 500 € et 60 000 € et la durée entre 12 et 84 mois. Votre taux est fixe, vos mensualités restent stables du premier au dernier mois. Faites votre simulation en quelques clics et recevez les fonds sous 48h.',
    editorial: {
      heading: 'Tous vos projets à portée de financement',
      subheading: 'On ne vend pas du rêve, on finance les vôtres.',
      body: 'Quels sont vos projets ? SOrloz est là pour vous aider à les réaliser. Simulez le prêt personnel qui vous convient en choisissant le montant et la durée la mieux adaptés à votre situation : c\'est vous qui choisissez ! SOrloz vous propose une solution de crédit souple et vous accompagne pour financer vos envies. Et comme chaque projet est différent, vous pouvez compter sur notre expertise pour vous conseiller au mieux en fonction de vos attentes.',
    },
    testimonial: {
      monthly: '346', months: 72, names: 'Anthony &amp; Marine',
      amount: '20 000', rate: '7,78', total_due: '24 911,64', purpose: 'se dire oui',
    },
    example: { amount: 20000, months: 72, rate: 7.78 },
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
    icon: '💼', bg: 'var(--green-bg)',
    title_fr: 'Crédit projet',
    title_hero: 'Crédit projet : voyez les choses en grand',
    hero_fr: 'Financez tous vos projets',
    desc_fr: 'Tous vos projets à portée de financement avec le prêt projet SOrloz : mariage, déménagement, naissance, voyage… Laissez-vous porter ! Votre simulation de crédit en quelques clics.',
    body_fr: 'Pret Projet en ligne : concrétisez vos envies dès maintenant avec le crédit en ligne SOrloz ! Des envies et des idées plein la tête ? Partir à la découverte du monde en famille ou entre amis, préparer le plus beau jour de votre vie, refaire toute la déco de la maison ou installer votre grand qui quitte le nid ? Découvrez vite les avantages du Prêt Projet : simulez dès à présent votre crédit en indiquant le montant dont vous avez besoin, faites votre demande de crédit en ligne et recevez les fonds sur votre compte bancaire.',
    editorial: {
      heading: 'Le coup de pouce pour vos projets',
      subheading: 'On ne vend pas du rêve, on finance les vôtres.',
      body: 'Quels sont vos projets ? Meia pour vous aider à les réaliser. Simulez le prêt personnel SOrloz qui vous convient en choisissant le montant et la durée la mieux adaptée à votre situation : c\'est vous qui choisissez ! SOrloz vous propose une solution de crédit projet souple et vous accompagne pour financer vos envies. Que ce soit pour votre mariage, refaire votre décoration intérieure, ou encore accueillir bébé dans de bonnes conditions, le prêt personnel vous accompagne à chaque grande étape de votre vie. Chez SOrloz, nous savons que derrière chaque projet il y a une personne, comme vous, comme nous.',
    },
    testimonial: {
      monthly: '346', months: 72, names: 'Anthony &amp; Marine',
      amount: '20 000', rate: '7,78', total_due: '24 911,64', purpose: 'se dire oui',
    },
    example: { amount: 20000, months: 72, rate: 7.78 },
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

  // ── Crédit vacances
  '/prets-personnels/credit-projet/credit-vacances': {
    icon: '✈️', bg: 'var(--green-bg)',
    title_fr: 'Crédit vacances',
    title_hero: 'Crédit vacances : sous le soleil des tropiques',
    desc_fr: 'Envie de soleil, de découverte ou de détente ? Le crédit vacances SOrloz vous permet de partir sereinement et de rembourser à votre rythme, sans vous priver.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-projet', label: 'Crédit projet' },
    ],
    testimonial: {
      monthly: '241,88', months: 48, names: 'Julie &amp; Lucille',
      amount: '10 000', rate: '7,78', total_due: '11 610,24',
      purpose: 'voyage à Bali',
    },
    content: {
      heading: 'Crédit vacances : qu\'est-ce que c\'est ?',
      subheading: 'Un financement souple pour tous vos voyages',
      body: 'Le crédit vacances est un prêt personnel non affecté qui vous permet de financer vos vacances sans justificatif de dépense. Billets d\'avion, hôtel, location de voiture, activités… Avec SOrloz, vous empruntez entre 5 500 € et 60 000 € et choisissez librement votre durée de remboursement de 12 à 84 mois. Votre taux est fixe, vos mensualités ne changent pas.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit vacances SOrloz ?',
      intro: 'Parce que vos projets méritent mieux qu\'une attente. Le crédit vacances SOrloz vous donne les moyens de partir sans rogner sur votre qualité de vie.',
      sections: [
        { icon: '🏄', title: 'Souplesse', body: 'Partez quand vous le souhaitez et remboursez à votre rythme. Vous choisissez librement la durée et le montant, de 12 à 84 mois.' },
        { icon: '🔍', title: 'Conditions transparentes', body: 'Aucun frais caché. Votre taux est fixe pour toute la durée du crédit — des mensualités stables et prévisibles du premier au dernier mois.' },
        { icon: '🤝', title: 'Accompagnement personnalisé', body: 'Nos conseillers sont disponibles pour répondre à toutes vos questions et vous aider à trouver la solution de financement la plus adaptée.' },
      ],
    },
    crosssell: {
      question: 'Vous préparez votre voyage de noces ?',
      body: 'Profitez également de notre crédit mariage pour financer la totalité de votre grand jour, de la cérémonie au voyage de noces inclus.',
      link_href: '/prets-personnels/credit-projet/credit-mariage',
      link_text: 'Découvrir le crédit mariage',
    },
    example: { amount: 10000, months: 48, rate: 7.78 },
    faq_title: 'Vos questions sur le crédit vacances',
    faq: [
      { q: 'Comment obtenir un crédit vacances SOrloz ?', a: 'Faites votre simulation en ligne, renseignez vos informations et obtenez une réponse de principe immédiate. Votre dossier est entièrement dématérialisé.' },
      { q: 'Quel montant puis-je emprunter pour mes vacances ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € pour financer votre voyage, selon votre profil et votre capacité de remboursement.' },
      { q: 'Dois-je fournir des justificatifs pour ma destination ?', a: 'Non, le crédit vacances SOrloz est un prêt personnel non affecté. Vous n\'avez pas à justifier l\'utilisation des fonds.' },
      { q: 'Puis-je rembourser mon crédit vacances par anticipation ?', a: 'Oui, le remboursement anticipé total ou partiel est possible à tout moment. Des indemnités peuvent s\'appliquer dans la limite légale.' },
    ],
    features_name: 'Vacances',
    articles: [
      { icon: '✈️', tag: 'Voyage', href: '/conseils', title: 'Comment bien préparer son budget vacances ?', excerpt: 'Découvrez nos conseils pour estimer le coût de votre voyage et choisir le bon montant à emprunter.' },
      { icon: '💰', tag: 'Conseil', href: '/conseils', title: 'Crédit vacances ou épargne : quelle est la meilleure solution ?', excerpt: 'Comparez les avantages du crédit personnel face à l\'épargne préalable pour financer vos vacances.' },
      { icon: '🌍', tag: 'Pratique', href: '/conseils', title: 'Les 5 destinations les plus financées par les Français', excerpt: 'Tour d\'horizon des voyages les plus populaires et de leur coût moyen, pour mieux préparer votre budget.' },
    ],
  },

  '/prets-personnels/credit-projet/credit-demenagement': {
    icon: '📦', bg: 'var(--green-bg)',
    title_fr: 'Crédit déménagement',
    hero_fr: 'Déménagez l\'esprit tranquille',
    desc_fr: 'Location de camion, frais d\'agence, premiers loyers, achats mobilier… Le crédit déménagement SOrloz couvre toutes vos dépenses liées à votre nouvelle installation.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },

  '/prets-personnels/credit-projet/credit-loisirs': {
    icon: '🎯', bg: 'var(--green-bg)',
    title_fr: 'Crédit loisirs',
    hero_fr: 'Profitez pleinement de vos loisirs',
    desc_fr: 'Sport, culture, hi-fi, instruments de musique, animaux… Le crédit loisirs SOrloz finance toutes vos passions et vos plaisirs du quotidien.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },

  '/prets-personnels/credit-projet/credit-divorce': {
    icon: '⚖️', bg: 'var(--green-bg)',
    title_fr: 'Crédit divorce',
    hero_fr: 'Rebondir après un divorce',
    desc_fr: 'Un divorce entraîne de nombreux frais : honoraires d\'avocat, nouvelle installation, rachat de soulte… Le crédit divorce SOrloz vous aide à traverser cette étape et à repartir du bon pied.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },

  '/prets-personnels/credit-projet/credit-retraite': {
    icon: '🏖️', bg: 'var(--green-bg)',
    title_fr: 'Crédit retraite',
    hero_fr: 'Profitez pleinement de votre retraite',
    desc_fr: 'La retraite est une nouvelle aventure ! Voyages, loisirs, aménagement de votre maison… Le crédit retraite SOrloz vous aide à financer vos projets pour en profiter pleinement.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },

  '/prets-personnels/credit-projet/credit-naissance': {
    icon: '👶', bg: 'var(--green-bg)',
    title_fr: 'Crédit naissance',
    hero_fr: 'Préparez l\'arrivée de bébé',
    desc_fr: 'L\'arrivée d\'un enfant est un bonheur qui s\'accompagne de nombreux achats. Poussette, chambre, équipement… Le crédit naissance SOrloz vous aide à tout préparer.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },

  // ── Crédit mariage
  '/prets-personnels/credit-projet/credit-mariage': {
    icon: '💍', bg: 'var(--green-bg)',
    title_fr: 'Crédit mariage',
    title_hero: 'Crédit mariage : le plus beau jour de votre vie',
    desc_fr: 'Salle de réception, traiteur, robe, voyage de noces… Le crédit mariage SOrloz vous permet d\'organiser la cérémonie de vos rêves sans compromis.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-projet', label: 'Crédit projet' },
    ],
    testimonial: {
      monthly: '312,45', months: 60, names: 'Sophie &amp; Thomas',
      amount: '15 000', rate: '7,60', total_due: '18 747,00',
      purpose: 'mariage en Provence',
    },
    content: {
      heading: 'Crédit mariage : financez chaque détail de votre grand jour',
      subheading: 'Un prêt personnel libre d\'emploi pour votre mariage',
      body: 'Le crédit mariage est un prêt personnel qui vous permet de financer l\'intégralité de votre mariage : lieu de réception, traiteur, fleurs, photographe, robe, costume, musique, et même le voyage de noces. Avec SOrloz, empruntez entre 5 500 € et 60 000 € et remboursez à votre rythme de 12 à 84 mois. Aucun justificatif de dépense n\'est requis.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit mariage SOrloz ?',
      intro: 'Votre mariage est un moment unique. SOrloz vous donne les moyens de le rendre inoubliable, sans compromis financier.',
      sections: [
        { icon: '🎊', title: 'Liberté totale', body: 'Utilisez les fonds comme bon vous semble : salle, traiteur, voyage de noces, tenue… Aucun justificatif de dépense n\'est exigé.' },
        { icon: '📌', title: 'Taux fixe garanti', body: 'Votre taux est fixe pour toute la durée du crédit. Vos mensualités ne changent pas, vous pouvez planifier sereinement.' },
        { icon: '⚡', title: 'Réponse rapide', body: 'Obtenez une réponse de principe immédiate en ligne et recevez les fonds sous 48h après validation de votre dossier.' },
      ],
    },
    crosssell: {
      question: 'Vous partez en voyage de noces ?',
      body: 'Combinez votre crédit mariage avec notre crédit vacances pour financer votre lune de miel sans vous priver.',
      link_href: '/prets-personnels/credit-projet/credit-vacances',
      link_text: 'Découvrir le crédit vacances',
    },
    example: { amount: 15000, months: 60, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit mariage',
    faq: [
      { q: 'Quel montant peut-on emprunter pour un mariage ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € selon votre budget et votre capacité de remboursement.' },
      { q: 'Le crédit mariage est-il un crédit affecté ?', a: 'Non, c\'est un prêt personnel non affecté. Vous êtes libre d\'utiliser les fonds comme vous le souhaitez.' },
      { q: 'Peut-on faire une demande à deux ?', a: 'Oui, vous pouvez faire une demande de crédit mariage à deux emprunteurs pour augmenter votre capacité d\'emprunt.' },
      { q: 'Quand reçoit-on les fonds ?', a: 'Une fois votre dossier validé et le délai légal de rétractation passé, les fonds sont disponibles sous 48h sur votre compte.' },
    ],
    features_name: 'Mariage',
    articles: [
      { icon: '💒', tag: 'Mariage', href: '/conseils', title: 'Budget mariage : combien faut-il prévoir en France ?', excerpt: 'Découvrez le coût moyen d\'un mariage en France et comment optimiser votre budget pour votre grand jour.' },
      { icon: '💡', tag: 'Conseil', href: '/conseils', title: 'Comment financer son mariage sans se ruiner ?', excerpt: 'Nos conseils pour trouver le bon équilibre entre le mariage de vos rêves et votre budget réel.' },
      { icon: '📋', tag: 'Pratique', href: '/conseils', title: 'Les postes de dépenses incontournables d\'un mariage', excerpt: 'De la salle au voyage de noces : tour d\'horizon des frais à anticiper pour votre mariage.' },
    ],
  },

  // ── Prêt éco-responsable
  '/prets-personnels/pret-eco-responsable': {
    icon: '🌿', bg: 'var(--green-bg)',
    title_fr: 'Prêt éco-responsable',
    title_hero: 'Prêt éco-responsable : agissez pour la planète',
    desc_fr: 'Véhicule électrique ou hybride, travaux de rénovation énergétique… Profitez d\'un taux préférentiel pour vos projets éco-responsables avec SOrloz.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
    testimonial: {
      monthly: '198,32', months: 60, names: 'Marie &amp; Paul',
      amount: '12 000', rate: '4,90', total_due: '11 899,20',
      purpose: 'installation de panneaux solaires',
    },
    content: {
      heading: 'Le prêt éco-responsable : un taux préférentiel pour vos projets verts',
      subheading: 'TAEG fixe à partir de 4,90% pour vos projets éco-responsables',
      body: 'Le prêt éco-responsable SOrloz est un crédit personnel à taux réduit dédié aux projets respectueux de l\'environnement : achat d\'un véhicule électrique ou hybride, travaux d\'isolation, installation de panneaux solaires, pompe à chaleur, etc. Bénéficiez d\'un TAEG fixe à partir de 4,90% — soit la moitié du taux standard — pour vos projets verts.',
    },
    why: {
      heading: 'Pourquoi choisir le prêt éco-responsable SOrloz ?',
      intro: 'Parce que faire du bien à la planète ne devrait pas coûter plus cher. SOrloz récompense vos choix responsables.',
      sections: [
        { icon: '🌱', title: 'Taux préférentiel', body: 'Profitez d\'un TAEG fixe à partir de 4,90%, réservé à vos projets éco-responsables. Une économie significative sur le coût total de votre crédit.' },
        { icon: '🔋', title: 'Projets éligibles variés', body: 'Véhicule électrique, hybride, isolation thermique, panneaux solaires, pompe à chaleur, chaudière basse consommation… De nombreux projets sont éligibles.' },
        { icon: '💻', title: 'Démarche 100% en ligne', body: 'Faites votre demande en quelques minutes depuis chez vous. Réponse immédiate, fonds disponibles sous 48h après validation de votre dossier.' },
      ],
    },
    crosssell: {
      question: 'Vous achetez un véhicule électrique ?',
      body: 'Notre crédit voiture électrique est spécialement conçu pour l\'achat de votre nouveau véhicule écologique, avec le même taux préférentiel à 4,90%.',
      link_href: '/prets-personnels/credit-auto/credit-voiture-electrique',
      link_text: 'Découvrir le crédit voiture électrique',
    },
    example: { amount: 12000, months: 60, rate: 4.90 },
    faq_title: 'Vos questions sur le prêt éco-responsable',
    faq: [
      { q: 'Quels projets sont éligibles au prêt éco-responsable ?', a: 'Véhicule électrique ou hybride, isolation thermique, panneaux solaires, pompe à chaleur, chaudière à haute performance énergétique, et autres travaux d\'amélioration énergétique.' },
      { q: 'Quel taux pour le prêt éco-responsable ?', a: 'Le TAEG fixe est à partir de 4,90% pour les projets éco-responsables éligibles, contre 7,60% pour les prêts personnels classiques.' },
      { q: 'Faut-il des justificatifs pour le prêt éco ?', a: 'Vous devrez justifier la nature éco-responsable de votre projet (devis, facture pro-forma ou certificat de conformité du véhicule).' },
      { q: 'Peut-on cumuler le prêt éco-responsable avec des aides de l\'État ?', a: 'Oui, le prêt éco-responsable SOrloz est cumulable avec MaPrimeRénov\', le bonus écologique ou les aides de l\'ANAH.' },
    ],
    features_name: 'Éco-responsable',
    articles: [
      { icon: '🚗', tag: 'Écologie', href: '/conseils', title: 'Voiture électrique : toutes les aides disponibles en 2025', excerpt: 'Bonus écologique, prime à la conversion, leasing social… Tour d\'horizon des aides pour passer à l\'électrique.' },
      { icon: '🏠', tag: 'Travaux', href: '/conseils', title: 'Rénovation énergétique : quels travaux sont les plus rentables ?', excerpt: 'Isolation, fenêtres, chauffage… Découvrez les travaux qui offrent le meilleur retour sur investissement.' },
      { icon: '☀️', tag: 'Conseil', href: '/conseils', title: 'Comment financer ses panneaux solaires ?', excerpt: 'Prêt éco-responsable, MaPrimeRénov\', autoconsommation… Toutes les solutions pour financer votre projet solaire.' },
    ],
  },

  // ── Crédit auto hub
  '/prets-personnels/credit-auto': {
    icon: '🚗', bg: 'var(--green-bg)',
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

  // ── Crédit voiture neuve
  '/prets-personnels/credit-auto/credit-voiture-neuve': {
    icon: '🚘', bg: 'var(--green-bg)',
    title_fr: 'Crédit voiture neuve',
    title_hero: 'Crédit voiture neuve : roulez avec le sourire',
    desc_fr: 'Vous rêvez d\'une voiture neuve ? Le crédit voiture neuve SOrloz vous permet de financer l\'achat de votre nouvelle automobile avec des mensualités adaptées à votre budget.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-auto', label: 'Crédit auto' },
    ],
    testimonial: {
      monthly: '398,56', months: 60, names: 'Marc &amp; Isabelle',
      amount: '22 000', rate: '7,60', total_due: '23 913,60',
      purpose: 'achat d\'une Peugeot 308',
    },
    content: {
      heading: 'Crédit voiture neuve : tout ce qu\'il faut savoir',
      subheading: 'Un financement indépendant du concessionnaire',
      body: 'Le crédit voiture neuve SOrloz est un prêt personnel non affecté qui vous permet de financer votre véhicule neuf sans avoir à passer par le concessionnaire. Vous bénéficiez d\'un taux fixe et de mensualités stables sur toute la durée du crédit, sans frais de dossier. Négociez le prix de votre voiture comme un acheteur comptant.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit voiture neuve SOrloz ?',
      intro: 'Parce que votre nouvelle voiture ne devrait pas attendre. SOrloz vous offre un financement rapide, transparent et indépendant.',
      sections: [
        { icon: '💪', title: 'Indépendance totale', body: 'Négociez le prix de votre voiture comme un acheteur comptant. Votre financement est distinct du vendeur, ce qui vous donne un meilleur pouvoir de négociation.' },
        { icon: '🔒', title: 'Taux fixe et transparent', body: 'Votre TAEG est fixé dès le départ et ne change pas. Aucune mauvaise surprise pendant toute la durée de votre remboursement.' },
        { icon: '⚡', title: 'Rapidité', body: 'Réponse de principe en quelques minutes, fonds disponibles sous 48h. Vous pouvez aller chercher votre voiture dès que vous le souhaitez.' },
      ],
    },
    crosssell: {
      question: 'Vous préférez une voiture électrique ?',
      body: 'Bénéficiez d\'un taux préférentiel de 4,90% avec notre prêt éco-responsable pour financer votre véhicule électrique ou hybride.',
      link_href: '/prets-personnels/credit-auto/credit-voiture-electrique',
      link_text: 'Découvrir le crédit voiture électrique',
    },
    example: { amount: 20000, months: 60, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit voiture neuve',
    faq: [
      { q: 'Quel montant puis-je emprunter pour une voiture neuve ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € selon votre profil et le prix du véhicule.' },
      { q: 'Dois-je passer par le concessionnaire ?', a: 'Non, le crédit voiture neuve SOrloz est un prêt personnel indépendant. Vous négociez directement avec le vendeur de votre choix.' },
      { q: 'Quel est le taux pour un crédit voiture neuve ?', a: 'Le TAEG fixe est à partir de 7,60% pour un crédit voiture standard. Un taux préférentiel de 4,90% est disponible pour les véhicules électriques ou hybrides.' },
      { q: 'Puis-je rembourser mon crédit voiture par anticipation ?', a: 'Oui, à tout moment. Des indemnités de remboursement anticipé peuvent s\'appliquer dans les limites légales.' },
    ],
    features_name: 'Voiture neuve',
  },

  // ── Crédit voiture occasion
  '/prets-personnels/credit-auto/credit-voiture-occasion': {
    icon: '🚙', bg: 'var(--green-bg)',
    title_fr: 'Crédit voiture occasion',
    title_hero: 'Crédit voiture occasion : le bon plan malin',
    desc_fr: 'Achetez la voiture d\'occasion de vos rêves avec le financement SOrloz. Des taux compétitifs et des conditions flexibles pour votre projet automobile.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-auto', label: 'Crédit auto' },
    ],
    testimonial: {
      monthly: '267,34', months: 48, names: 'Kevin &amp; Aurélie',
      amount: '12 000', rate: '7,60', total_due: '12 832,32',
      purpose: 'achat d\'une Golf occasion',
    },
    content: {
      heading: 'Crédit voiture occasion : comment ça marche ?',
      subheading: 'Financer une voiture d\'occasion, c\'est simple avec SOrloz',
      body: 'Le crédit voiture occasion fonctionne comme un prêt personnel classique. Vous choisissez votre véhicule d\'occasion entre particuliers ou chez un professionnel, et SOrloz vous avance les fonds. Vous remboursez ensuite en mensualités fixes, sans frais cachés. Pas de limite d\'âge ni de kilométrage pour le véhicule.',
    },
    why: {
      heading: 'Les avantages du crédit voiture occasion SOrloz',
      intro: 'Financer une voiture d\'occasion avec SOrloz, c\'est bénéficier des mêmes avantages qu\'un crédit neuf, avec encore plus de flexibilité.',
      sections: [
        { icon: '🤝', title: 'Achat entre particuliers possible', body: 'Contrairement à certains crédits auto, le prêt SOrloz vous permet d\'acheter votre véhicule aussi bien chez un professionnel que chez un particulier.' },
        { icon: '🚗', title: 'Pas de limite d\'âge', body: 'Qu\'il soit récent ou plus ancien, votre véhicule d\'occasion peut être financé par SOrloz sans restriction d\'âge ou de kilométrage.' },
        { icon: '📊', title: 'Mensualités fixes', body: 'Votre taux et vos mensualités sont fixes pour toute la durée du crédit. Vous savez exactement ce que vous remboursez chaque mois.' },
      ],
    },
    crosssell: {
      question: 'Vous préférez une voiture neuve ?',
      body: 'Découvrez notre crédit voiture neuve avec les mêmes avantages : taux fixe, 0 € de frais de dossier et fonds disponibles sous 48h.',
      link_href: '/prets-personnels/credit-auto/credit-voiture-neuve',
      link_text: 'Découvrir le crédit voiture neuve',
    },
    example: { amount: 12000, months: 48, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit voiture occasion',
    faq: [
      { q: 'Puis-je acheter entre particuliers avec le crédit SOrloz ?', a: 'Oui, le crédit voiture occasion SOrloz est un prêt personnel qui vous permet d\'acheter votre véhicule chez un professionnel ou un particulier.' },
      { q: 'Y a-t-il une limite d\'âge pour le véhicule ?', a: 'Non, il n\'y a pas de limite d\'âge ou de kilométrage pour le véhicule financé avec un crédit personnel SOrloz.' },
      { q: 'Quel montant pour un crédit voiture occasion ?', a: 'Vous pouvez emprunter de 5 500 € à 60 000 € selon le prix du véhicule et votre profil.' },
      { q: 'Faut-il justifier l\'achat à SOrloz ?', a: 'Pour un prêt personnel non affecté, aucun justificatif n\'est requis. Vous êtes libre d\'utiliser les fonds comme vous le souhaitez.' },
    ],
    features_name: 'Voiture occasion',
  },

  // ── Crédit voiture électrique
  '/prets-personnels/credit-auto/credit-voiture-electrique': {
    icon: '⚡', bg: 'var(--green-bg)',
    title_fr: 'Crédit voiture électrique',
    title_hero: 'Crédit voiture électrique : branchez-vous sur l\'avenir',
    desc_fr: 'Faites le choix de la mobilité propre ! Le crédit voiture électrique SOrloz vous propose un taux préférentiel pour financer votre passage à l\'électrique.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-auto', label: 'Crédit auto' },
    ],
    testimonial: {
      monthly: '285,12', months: 48, names: 'Julien &amp; Camille',
      amount: '14 000', rate: '4,90', total_due: '13 685,76',
      purpose: 'achat d\'une Renault Zoé',
    },
    content: {
      heading: 'Crédit voiture électrique : un taux préférentiel pour vos projets verts',
      subheading: 'Profitez du taux éco-responsable SOrloz à 4,90%',
      body: 'Le crédit voiture électrique SOrloz est un prêt personnel à taux préférentiel réservé à l\'achat d\'un véhicule 100% électrique. Avec un TAEG fixe à partir de 4,90%, vous bénéficiez de l\'un des meilleurs taux du marché. Ce crédit est cumulable avec le bonus écologique, la prime à la conversion et toutes les aides publiques.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit voiture électrique SOrloz ?',
      intro: 'Parce que rouler propre ne doit pas coûter plus cher. SOrloz vous récompense pour votre choix écologique.',
      sections: [
        { icon: '🌿', title: 'Taux préférentiel 4,90%', body: 'Bénéficiez d\'un TAEG fixe à partir de 4,90% — le taux éco-responsable SOrloz réservé aux véhicules électriques et hybrides.' },
        { icon: '💶', title: 'Cumulable avec les aides', body: 'Bonus écologique, prime à la conversion, leasing social… Le crédit SOrloz est cumulable avec toutes les aides publiques disponibles.' },
        { icon: '📉', title: 'Économies sur le long terme', body: 'En plus du taux préférentiel, profitez des économies liées à l\'usage d\'un véhicule électrique : recharge moins coûteuse, entretien réduit.' },
      ],
    },
    crosssell: {
      question: 'Vous souhaitez aussi rénover votre logement ?',
      body: 'Notre prêt éco-responsable finance aussi vos travaux d\'isolation, panneaux solaires, pompe à chaleur, avec le même taux préférentiel à 4,90%.',
      link_href: '/prets-personnels/pret-eco-responsable',
      link_text: 'Découvrir le prêt éco-responsable',
    },
    example: { amount: 15000, months: 48, rate: 4.90 },
    faq_title: 'Vos questions sur le crédit voiture électrique',
    faq: [
      { q: 'En quoi le crédit voiture électrique diffère-t-il d\'un crédit auto classique ?', a: 'Le crédit voiture électrique SOrloz bénéficie d\'un taux préférentiel de 4,90% au lieu de 7,60%, réservé aux véhicules 100% électriques ou hybrides.' },
      { q: 'Puis-je cumuler le crédit SOrloz avec le bonus écologique ?', a: 'Oui, le crédit voiture électrique SOrloz est cumulable avec le bonus écologique et toutes les autres aides publiques.' },
      { q: 'Les véhicules hybrides sont-ils éligibles ?', a: 'Oui, les véhicules hybrides rechargeables (PHEV) et hybrides non-rechargeables (HEV) sont éligibles au taux préférentiel selon les conditions en vigueur.' },
      { q: 'Quel montant maximum pour un crédit voiture électrique ?', a: 'Vous pouvez emprunter jusqu\'à 60 000 €, ce qui couvre l\'achat de la grande majorité des véhicules électriques disponibles sur le marché.' },
    ],
    features_name: 'Voiture électrique',
  },

  '/prets-personnels/credit-auto/credit-voiture-hybride': {
    icon: '🔋', bg: 'var(--green-bg)',
    title_fr: 'Crédit voiture hybride',
    hero_fr: 'Financez votre voiture hybride',
    desc_fr: 'Le meilleur des deux mondes ! Avec le crédit voiture hybride SOrloz, profitez d\'un financement avantageux pour votre véhicule hybride et réduisez votre empreinte carbone.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
  },

  '/prets-personnels/credit-auto/credit-voiture-thermique': {
    icon: '⛽', bg: 'var(--green-bg)',
    title_fr: 'Crédit voiture thermique',
    hero_fr: 'Financez votre voiture thermique',
    desc_fr: 'Vous optez pour un véhicule thermique ? SOrloz vous propose un financement personnalisé pour l\'achat de votre voiture essence ou diesel.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
  },

  // ── Crédit moto hub
  '/prets-personnels/credit-moto': {
    icon: '🏍️', bg: 'var(--teal-bg)',
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

  '/prets-personnels/credit-moto/credit-moto-neuve': {
    icon: '🏍️', bg: 'var(--teal-bg)',
    title_fr: 'Crédit moto neuve',
    hero_fr: 'Financez votre nouvelle moto',
    desc_fr: 'Offrez-vous la moto de vos rêves ! Le crédit moto neuve SOrloz vous permet de financer votre deux-roues avec des mensualités adaptées.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
  },

  '/prets-personnels/credit-moto/credit-moto-occasion': {
    icon: '🏍️', bg: 'var(--teal-bg)',
    title_fr: 'Crédit moto occasion',
    hero_fr: 'Financez votre moto d\'occasion',
    desc_fr: 'Trouvez la moto d\'occasion idéale et financez-la avec SOrloz. Des conditions avantageuses pour votre projet deux-roues.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
  },

  '/prets-personnels/credit-moto/credit-moto-hybride': {
    icon: '🔋', bg: 'var(--teal-bg)',
    title_fr: 'Crédit moto hybride',
    hero_fr: 'Financez votre moto hybride',
    desc_fr: 'Adoptez la mobilité hybride pour vos deux-roues. SOrloz vous propose un financement avantageux pour votre moto hybride.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
  },

  '/prets-personnels/credit-moto/credit-moto-thermique': {
    icon: '⛽', bg: 'var(--teal-bg)',
    title_fr: 'Crédit moto thermique',
    hero_fr: 'Financez votre moto thermique',
    desc_fr: 'Vous préférez la puissance d\'un moteur thermique ? SOrloz finance votre moto thermique avec des taux compétitifs.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
  },

  // ── Crédit travaux hub
  '/prets-personnels/credit-travaux': {
    icon: '🔨', bg: 'var(--yellow-bg)',
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
    icon: '🏠', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit travaux intérieur',
    hero_fr: 'Financez vos travaux intérieurs',
    desc_fr: 'Rénovez votre intérieur avec le financement SOrloz. Peinture, parquet, isolation, électricité… Tous vos travaux intérieurs financés à des conditions avantageuses.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/credit-travaux-exterieur': {
    icon: '🏡', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit travaux extérieur',
    hero_fr: 'Financez vos travaux extérieurs',
    desc_fr: 'Façade, toiture, terrasse, jardin… Le crédit travaux extérieur SOrloz vous permet de financer l\'aménagement et la rénovation de l\'extérieur de votre maison.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/credit-travaux/credit-renovation': {
    icon: '🔧', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit rénovation',
    hero_fr: 'Financez la rénovation de votre logement',
    desc_fr: 'Transformez votre logement avec le crédit rénovation SOrloz. Des fonds disponibles rapidement pour démarrer vos travaux de rénovation.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/credit-travaux/credit-salle-de-bain': {
    icon: '🛁', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit salle de bain',
    hero_fr: 'Financez votre nouvelle salle de bain',
    desc_fr: 'Créez la salle de bain de vos rêves avec le financement SOrloz. Baignoire, douche à l\'italienne, double vasque… Réalisez votre projet sans attendre.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/credit-travaux/credit-piscine': {
    icon: '🏊', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit piscine',
    hero_fr: 'Financez votre piscine avec SOrloz',
    desc_fr: 'Une piscine dans votre jardin, c\'est possible ! Le crédit piscine SOrloz finance la construction ou la rénovation de votre espace aquatique.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/credit-travaux/credit-cuisine': {
    icon: '🍳', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit cuisine',
    hero_fr: 'Financez votre nouvelle cuisine',
    desc_fr: 'Réaménagez votre cuisine avec le crédit cuisine SOrloz. Plan de travail, électroménager, mobilier… Concrétisez votre projet de cuisine idéale.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/credit-travaux/credit-veranda': {
    icon: '🌿', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit véranda',
    hero_fr: 'Financez votre véranda',
    desc_fr: 'Agrandissez votre espace de vie avec une véranda financée par SOrloz. Un investissement qui valorise votre bien immobilier.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/credit-travaux/credit-terrasse': {
    icon: '🏡', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit terrasse',
    hero_fr: 'Financez votre terrasse avec SOrloz',
    desc_fr: 'Créez ou rénovez votre terrasse avec le financement SOrloz. Bois, composite, béton… Un espace extérieur de qualité pour profiter des beaux jours.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  // ── Crédit chauffage
  '/prets-personnels/credit-travaux/credit-chauffage': {
    icon: '🔥', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit chauffage',
    title_hero: 'Crédit chauffage : chaleur garantie toute l\'année',
    desc_fr: 'Poêle à bois, chaudière, pompe à chaleur, plancher chauffant… Le crédit chauffage SOrloz finance votre confort thermique tout au long de l\'année.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-travaux', label: 'Crédit travaux' },
    ],
    testimonial: {
      monthly: '156,78', months: 60, names: 'Bernard &amp; Martine',
      amount: '8 500', rate: '7,60', total_due: '9 406,80',
      purpose: 'installation d\'une pompe à chaleur',
    },
    content: {
      heading: 'Crédit chauffage : un financement dédié à votre confort thermique',
      subheading: 'Financez votre installation dès aujourd\'hui',
      body: 'Le crédit chauffage SOrloz est un prêt personnel destiné au financement de vos installations et travaux de chauffage : chaudière à condensation, pompe à chaleur air-eau, poêle à bois, plancher chauffant, radiateurs… Empruntez de 5 500 € à 60 000 € et remboursez à votre rythme. Les fonds sont disponibles sous 48h pour démarrer vos travaux sans attendre.',
    },
    why: {
      heading: 'Pourquoi financer votre chauffage avec SOrloz ?',
      intro: 'Renouveler votre système de chauffage est un investissement rentable. SOrloz vous aide à le financer dès aujourd\'hui pour économiser sur le long terme.',
      sections: [
        { icon: '💡', title: 'Économies durables', body: 'Un nouveau système de chauffage performant peut réduire votre facture énergétique de 30 à 50%. Le crédit SOrloz vous permet de réaliser cet investissement dès maintenant.' },
        { icon: '🏛️', title: 'Éligible aux aides de l\'État', body: 'Votre projet de chauffage peut être éligible à MaPrimeRénov\' ou aux CEE (Certificats d\'Économie d\'Énergie), cumulables avec votre crédit SOrloz.' },
        { icon: '⚡', title: 'Fonds disponibles rapidement', body: 'Obtenez une réponse immédiate et les fonds sous 48h pour démarrer vos travaux sans attendre l\'hiver.' },
      ],
    },
    crosssell: {
      question: 'Vous pensez aussi à l\'isolation ?',
      body: 'Combinez votre crédit chauffage avec un crédit isolation pour maximiser vos économies d\'énergie et votre confort thermique.',
      link_href: '/prets-personnels/credit-travaux/credit-isolation',
      link_text: 'Découvrir le crédit isolation',
    },
    example: { amount: 8500, months: 60, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit chauffage',
    faq: [
      { q: 'Quels travaux de chauffage peut-on financer avec SOrloz ?', a: 'Chaudière à condensation, pompe à chaleur air-eau ou géothermique, poêle à granulés ou à bois, plancher chauffant, radiateurs, installation complète de chauffage central.' },
      { q: 'Le crédit chauffage est-il cumulable avec MaPrimeRénov\' ?', a: 'Oui, le crédit personnel SOrloz est cumulable avec toutes les aides publiques à la rénovation énergétique, dont MaPrimeRénov\' et les CEE.' },
      { q: 'Quel montant pour des travaux de chauffage ?', a: 'Vous pouvez emprunter de 5 500 € à 60 000 € selon l\'ampleur de vos travaux et votre capacité de remboursement.' },
      { q: 'Faut-il fournir des devis pour obtenir le crédit chauffage ?', a: 'Non, le crédit SOrloz est un prêt personnel non affecté. Aucun justificatif de travaux n\'est requis.' },
    ],
    features_name: 'Chauffage',
    articles: [
      { icon: '🔥', tag: 'Énergie', href: '/conseils', title: 'Pompe à chaleur : avantages, coûts et aides disponibles', excerpt: 'Tout ce qu\'il faut savoir pour choisir et financer votre pompe à chaleur en 2025.' },
      { icon: '🔧', tag: 'Travaux', href: '/conseils', title: 'Changer sa chaudière : quand et comment ?', excerpt: 'Durée de vie, signes de vieillissement et solutions de remplacement pour votre chaudière.' },
      { icon: '💶', tag: 'Conseil', href: '/conseils', title: 'Les aides pour la rénovation énergétique en 2025', excerpt: 'MaPrimeRénov\', CEE, éco-PTZ… Tour d\'horizon des dispositifs d\'aide pour financer vos travaux.' },
    ],
  },

  '/prets-personnels/credit-travaux/credit-isolation': {
    icon: '🏠', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit isolation',
    hero_fr: 'Financez vos travaux d\'isolation',
    desc_fr: 'Isolation des combles, des murs, du plancher… Réduisez votre consommation d\'énergie et améliorez votre confort avec le crédit isolation SOrloz.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/credit-travaux/credit-amenagement': {
    icon: '🛋️', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit aménagement',
    hero_fr: 'Financez vos travaux d\'aménagement',
    desc_fr: 'Parquet, peinture, électricité, plomberie… Le crédit aménagement SOrloz vous aide à transformer votre intérieur selon vos envies et votre budget.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/credit-travaux-maison': {
    icon: '🏠', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit travaux maison',
    hero_fr: 'Financez les travaux de votre maison',
    desc_fr: 'Tous les travaux de votre maison, de la cave au grenier, financés par SOrloz. Des conditions adaptées à votre projet pour réaliser la maison de vos rêves.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/credit-economie-energie': {
    icon: '♻️', bg: 'var(--green-bg)',
    title_fr: 'Crédit économie d\'énergie',
    hero_fr: 'Financez vos travaux d\'économie d\'énergie',
    desc_fr: 'Isolation, pompe à chaleur, panneaux solaires, chaudière… Réduisez votre consommation énergétique et vos factures avec le crédit économie d\'énergie SOrloz.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
  },

  '/prets-personnels/credit-vehicule-vert': {
    icon: '🌿', bg: 'var(--green-bg)',
    title_fr: 'Crédit véhicule vert',
    hero_fr: 'Financez votre véhicule écologique',
    desc_fr: 'Vélo électrique, trottinette, voiture électrique ou hybride… Le crédit véhicule vert SOrloz vous propose un financement avantageux pour une mobilité plus propre.',
    parent: { href: '/prets-personnels', label_fr: 'Prêts personnels' },
  },

  // ── Assurance / Conseils / Contact / FAQ / Infos
  '/assurance/nos-assurances-de-prets': {
    icon: '🛡️', bg: 'var(--teal-bg)',
    title_fr: 'Nos assurances de prêts',
    hero_fr: 'Protégez votre crédit avec SOrloz',
    desc_fr: 'Décès, invalidité, incapacité de travail, perte d\'emploi… Les assurances SOrloz vous protègent ainsi que vos proches en cas d\'accident de la vie.',
  },

  '/conseils': {
    icon: '💡', bg: 'var(--green-bg)',
    title_fr: 'Nos conseils',
    hero_fr: 'Conseils et guides pour vos projets',
    desc_fr: 'Retrouvez tous nos conseils pour bien choisir votre crédit, comprendre les taux, préparer votre dossier et financer vos projets dans les meilleures conditions.',
  },

  '/contact': {
    icon: '📞', bg: 'var(--yellow-bg)',
    title_fr: 'Aide et contact',
    hero_fr: 'Nous sommes là pour vous',
    desc_fr: 'Une question sur votre crédit ou votre dossier ? Notre équipe est disponible du lundi au vendredi de 8h30 à 19h pour vous accompagner.',
  },

  '/faq': {
    icon: '❓', bg: 'var(--green-bg)',
    title_fr: 'Foire aux questions',
    hero_fr: 'Toutes les réponses à vos questions',
    desc_fr: 'Retrouvez ici les réponses aux questions les plus fréquentes sur nos crédits, nos taux, nos assurances et nos services.',
  },

  '/faq/faire-une-reclamation': {
    icon: '📝', bg: 'var(--green-bg)',
    title_fr: 'Faire une réclamation',
    hero_fr: 'Soumettre une réclamation',
    desc_fr: 'Vous souhaitez nous soumettre une réclamation ? Expliquez-nous votre situation et notre équipe s\'engage à vous répondre dans les meilleurs délais.',
    parent: { href: '/faq', label_fr: 'FAQ' },
  },

  '/infos/qui-sommes-nous': {
    icon: '🏢', bg: 'var(--teal-bg)',
    title_fr: 'Qui sommes-nous ?',
    hero_fr: 'SOrloz, votre partenaire financier',
    desc_fr: 'Découvrez l\'histoire de SOrloz, nos valeurs et notre engagement pour un financement responsable au service de vos projets de vie.',
  },

  '/infos/mentions-legales': {
    icon: '📄', bg: 'var(--teal-bg)',
    title_fr: 'Mentions légales',
    hero_fr: 'Mentions légales SOrloz',
    desc_fr: 'Informations légales relatives au site SOrloz et à la société SOrloz.',
  },

  '/infos/politique-de-confidentialite': {
    icon: '🔒', bg: 'var(--teal-bg)',
    title_fr: 'Politique de confidentialité',
    hero_fr: 'Protection de vos données personnelles',
    desc_fr: 'Découvrez comment SOrloz collecte, utilise et protège vos données personnelles conformément au RGPD.',
  },

  '/infos/cookies-et-statistiques': {
    icon: '🍪', bg: 'var(--teal-bg)',
    title_fr: 'Cookies et statistiques',
    hero_fr: 'Notre politique de cookies',
    desc_fr: 'Informations sur les cookies utilisés par SOrloz et comment gérer vos préférences.',
  },

  '/infos/plan-site': {
    icon: '🗺️', bg: 'var(--teal-bg)',
    title_fr: 'Plan du site',
    hero_fr: 'Plan du site SOrloz',
    desc_fr: 'Retrouvez ici l\'ensemble des pages du site SOrloz.',
  },

  '/infos/service-sourds-et-malentendants': {
    icon: '👂', bg: 'var(--teal-bg)',
    title_fr: 'Service sourds et malentendants',
    hero_fr: 'Un service accessible à tous',
    desc_fr: 'SOrloz propose un service dédié aux personnes sourdes et malentendantes pour faciliter l\'accès à nos solutions de financement.',
  },

  '/espace-client': {
    icon: '👤', bg: 'var(--teal-bg)',
    title_fr: 'Espace client',
    hero_fr: 'Gérez votre contrat en ligne',
    desc_fr: 'Consultez vos contrats, suivez vos remboursements et gérez vos documents depuis votre espace client sécurisé SOrloz.',
  },

  '/simulateur': {
    icon: '🧮', bg: 'var(--green-bg)',
    title_fr: 'Simulateur de crédit',
    hero_fr: 'Simulez votre crédit en ligne',
    desc_fr: 'Calculez vos mensualités en quelques secondes. Montant, durée, taux… Notre simulateur vous donne une réponse immédiate et sans engagement.',
  },

  '/prets-personnels/simulation-credit-auto': {
    icon: '🚗', bg: 'var(--green-bg)',
    title_fr: 'Simulation crédit voiture',
    hero_fr: 'Simulez votre crédit voiture',
    desc_fr: 'Calculez vos mensualités pour l\'achat de votre voiture. Renseignez le montant et la durée, obtenez votre estimation immédiatement.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
  },

  '/prets-personnels/simulation-credit-moto': {
    icon: '🏍️', bg: 'var(--teal-bg)',
    title_fr: 'Simulation crédit moto',
    hero_fr: 'Simulez votre crédit moto',
    desc_fr: 'Estimez vos mensualités pour l\'achat de votre moto en quelques clics. Sans engagement, réponse immédiate.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
  },

  '/prets-personnels/simulation-credit-travaux': {
    icon: '🔨', bg: 'var(--yellow-bg)',
    title_fr: 'Simulation crédit travaux',
    hero_fr: 'Simulez votre crédit travaux',
    desc_fr: 'Obtenez une estimation de vos mensualités pour financer vos travaux. Rapide, gratuit et sans engagement.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
  },

  '/prets-personnels/simulation-credit-projet': {
    icon: '💼', bg: 'var(--green-bg)',
    title_fr: 'Simulation crédit projet',
    hero_fr: 'Simulez votre crédit projet',
    desc_fr: 'Estimez le coût de votre crédit projet en quelques secondes. Montant, durée, mensualités — obtenez une réponse immédiate.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },

  '/prets-personnels/simulation-credit-mariage': {
    icon: '💍', bg: 'var(--green-bg)',
    title_fr: 'Simulation crédit mariage',
    hero_fr: 'Simulez votre crédit mariage',
    desc_fr: 'Préparez votre budget mariage grâce à notre simulateur. Calculez vos mensualités sans engagement en quelques clics.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },

  '/prets-personnels/simulation-credit-vacances': {
    icon: '✈️', bg: 'var(--green-bg)',
    title_fr: 'Simulation crédit vacances',
    hero_fr: 'Simulez votre crédit vacances',
    desc_fr: 'Partez l\'esprit tranquille ! Estimez vos mensualités pour financer vos vacances avec SOrloz.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
  },

  '/infos/accessibilite': {
    icon: '♿', bg: 'var(--teal-bg)',
    title_fr: 'Accessibilité',
    hero_fr: 'Accessibilité numérique SOrloz',
    desc_fr: 'SOrloz s\'engage pour l\'accessibilité numérique. Découvrez notre déclaration d\'accessibilité et les mesures mises en place.',
  },
};

// ─── Multi-step Simulator ─────────────────────────────────────────────────────

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
    { key: 'projets',     icon: '👤', label: 'Projets' },
    { key: 'travaux',    icon: '🔨', label: 'Travaux' },
    { key: 'voiture',    icon: '🚗', label: 'Voiture' },
    { key: 'deux-roues', icon: '🏍️', label: 'Deux roues' },
  ];

  const STAGES = hasAmount
    ? ['project', 'sliders', 'proposals', 'form']
    : ['project', 'amount', 'sliders', 'proposals', 'form'];

  const state = { idx: 0, projectType: null, amount: hasAmount ? rawAmt : 15000, months: 36 };

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
    return '<div class="sp-progress"><span class="sp-step-lbl">Étape ' + stepNum() + ' sur ' + total() + '</span>'
      + '<div class="sp-bar"><div class="sp-bar-fill" style="width:' + pct + '%"></div></div></div>';
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
      + '<button class="btn btn-primary sp-next"' + (state.projectType ? '' : ' disabled') + '>Passer à l\'étape suivante</button></div>';
  }
  function renderAmount() {
    return '<h1 class="sp-title">Faire une simulation</h1>'
      + '<p class="sp-sub">Répondez à quelques questions en une minute pour préciser votre projet</p>'
      + progressBar()
      + '<p class="sp-question">Quel montant souhaitez-vous emprunter&nbsp;?</p>'
      + '<div class="sp-amt-wrap"><input class="sp-amt-input" type="number" min="5500" max="60000" value="' + state.amount + '">'
      + '<span class="sp-amt-unit">€</span></div>'
      + '<p class="sp-hint">Entre 5 500 € et 60 000 €</p>'
      + '<div class="sp-actions"><button class="btn btn-outline sp-prev">← Précédent</button>'
      + '<button class="btn btn-primary sp-next">Passer à l\'étape suivante</button></div>';
  }
  function renderSliders() {
    const m = Math.round(pmt(state.amount, state.months, 7.6));
    return amountBadge()
      + '<h1 class="sp-title">Faire une simulation</h1>'
      + '<p class="sp-sub">Répondez à quelques questions en une minute pour préciser votre projet</p>'
      + progressBar() + '<p class="sp-question">Précisez vos besoins</p>'
      + '<div class="sp-sliders-box">'
      + '<div class="sp-slider-row"><label class="sp-slider-lbl">Pour une durée de</label>'
      + '<div class="sp-slider-inner"><input type="range" class="sp-range" id="sp-dur" min="12" max="84" step="6" value="' + state.months + '">'
      + '<span class="sp-range-val" id="sp-dur-val">' + state.months + ' mois</span></div></div>'
      + '<div class="sp-or">ou</div>'
      + '<div class="sp-slider-row"><label class="sp-slider-lbl">Pour une mensualité de</label>'
      + '<div class="sp-slider-inner"><input type="range" class="sp-range" id="sp-mth" min="50" max="3000" step="5" value="' + m + '">'
      + '<span class="sp-range-val" id="sp-mth-val">' + m + ' €/mois</span></div></div>'
      + '</div><div class="sp-actions"><button class="btn btn-outline sp-prev">← Précédent</button>'
      + '<button class="btn btn-primary sp-next">Voir les simulations</button></div>';
  }
  function renderProposals() {
    const proj = (PROJECT_TYPES.find(function(p){ return p.key === state.projectType; }) || {label:'Projet'}).label;
    const P = state.amount, n = state.months;
    const fast = Math.max(12, Math.round(n * 0.55 / 6) * 6);
    const easy = Math.min(84, Math.round(n * 1.6 / 6) * 6);
    function card(label, months, rate, hl) {
      const monthly = pmt(P, months, rate), total = monthly * months, cost = total - P;
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
        + '<tr><td>Coût du crédit</td><td>' + fmt(cost) + '</td></tr></table>'
        + '<button class="btn ' + (hl ? 'btn-outline-white' : 'btn-primary') + ' sp-card-btn sp-choose" data-months="' + months + '">Choisir cette offre</button></div>';
    }
    return amountBadge()
      + '<h1 class="sp-title">Nos propositions</h1><p class="sp-sub">Votre résultat pour votre ' + proj + '</p>'
      + '<div class="sp-cards">'
      + card('Remboursement plus rapide', fast, 7.6, false)
      + card('Offre Éco-Finance', n, 4.9, true)
      + card('Remboursement plus facile', easy, 7.6, false)
      + '</div>'
      + '<p class="sp-legal">Simulation non contractuelle. TAEG fixe 7,60 % hors offre éco-responsable (4,90 %). Sous réserve d\'acceptation de votre dossier.</p>'
      + '<div class="sp-actions"><button class="btn btn-outline sp-prev">← Précédent</button>'
      + '<button class="btn btn-primary sp-next">Passer à l\'étape suivante</button></div>';
  }
  function renderForm() {
    return amountBadge()
      + '<p class="sp-form-section-head">Emprunteur</p>'
      + '<h1 class="sp-title sp-title-left">Informations</h1>' + progressBar()
      + '<div class="sp-form-block"><h2 class="sp-form-block-title">Vos informations personnelles</h2>'
      + '<div class="sp-form-row"><label class="sp-radio-wrap"><input type="radio" name="civility" value="M"> Monsieur</label>'
      + '<label class="sp-radio-wrap"><input type="radio" name="civility" value="F"> Madame</label></div>'
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
      + '<div class="sp-form-block"><h2 class="sp-form-block-title">Vos coordonnées</h2>'
      + '<div class="sp-form-grid">'
      + '<div class="sp-field"><label>Téléphone portable</label><input type="tel" class="sp-input" placeholder="06 00 00 00 00"></div>'
      + '<div class="sp-field"><label>Email</label><input type="email" class="sp-input" placeholder="exemple@email.com"></div>'
      + '</div><label class="sp-checkbox-wrap sp-consent"><input type="checkbox"> J\'autorise SOrloz Financial Services à me contacter par voie électronique dans le cadre de ma demande de crédit en ligne.</label></div>'
      + '<div class="sp-actions"><button class="btn btn-outline sp-prev">← Précédent</button>'
      + '<button class="btn btn-primary sp-submit">Passer à l\'étape suivante</button></div>';
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
        if (inp) { var v = parseFloat(inp.value); if (!v || v < 5500 || v > 60000) { inp.style.borderColor = '#C8102E'; return; } state.amount = v; }
      }
      state.idx++; draw();
    });
    heroEl.querySelectorAll('.sp-choose').forEach(function(b) {
      b.addEventListener('click', function() {
        if (b.dataset.months) state.months = parseInt(b.dataset.months);
        state.idx = STAGES.indexOf('form'); draw();
      });
    });
    var submit = heroEl.querySelector('.sp-submit');
    if (submit) submit.addEventListener('click', function() {
      heroEl.querySelector('.sp-inner').innerHTML =
        '<div style="text-align:center;padding:64px 0"><div style="font-size:72px;margin-bottom:24px">✅</div>'
        + '<h1 class="sp-title">Demande envoyée !</h1>'
        + '<p class="sp-sub">Votre dossier a été pris en compte. Un conseiller vous contactera sous 24h.</p>'
        + '<a href="/" class="btn btn-primary" style="margin-top:32px;display:inline-flex">Retour à l\'accueil</a></div>';
    });
    var durR = document.getElementById('sp-dur'), mthR = document.getElementById('sp-mth');
    if (durR && mthR) {
      durR.addEventListener('input', function() {
        state.months = parseInt(durR.value);
        document.getElementById('sp-dur-val').textContent = state.months + ' mois';
        var m = Math.round(pmt(state.amount, state.months, 7.6));
        mthR.value = m; document.getElementById('sp-mth-val').textContent = m + ' €/mois';
      });
      mthR.addEventListener('input', function() {
        var m = parseInt(mthR.value);
        document.getElementById('sp-mth-val').textContent = m + ' €/mois';
        var n = monthsFromPayment(state.amount, m, 7.6);
        state.months = n; durR.value = n; document.getElementById('sp-dur-val').textContent = n + ' mois';
      });
    }
  }
  function draw() {
    var stepHTML = '';
    var s = stage();
    if (s === 'project') stepHTML = renderProject();
    else if (s === 'amount') stepHTML = renderAmount();
    else if (s === 'sliders') stepHTML = renderSliders();
    else if (s === 'proposals') stepHTML = renderProposals();
    else if (s === 'form') stepHTML = renderForm();
    heroEl.innerHTML =
      '<div class="sp-wrap"><div class="sp-hdr">'
      + '<a href="/" class="sp-help">Besoin d\'aide</a>'
      + '<a href="/" class="sp-logo">S<span>O</span>rloz</a>'
      + '<a href="/" class="sp-quit">Quitter</a></div>'
      + '<div class="sp-body"><div class="sp-inner">' + stepHTML + '</div></div>'
      + '<div class="sp-ftr">'
      + '<a href="/infos/mentions-legales">Mentions légales</a>'
      + '<a href="/infos/accessibilite">Accessibilité&nbsp;: partiellement conforme</a>'
      + '<a href="/infos/politique-de-confidentialite">Informatique et libertés</a>'
      + '<a href="/infos/cookies-et-statistiques">Cookies et statistiques</a>'
      + '</div></div>';
    bind();
  }
  draw();
}

// ─── PMT helpers ──────────────────────────────────────────────────────────────

function _pmt(amount, months, rate) {
  var r = rate / 100 / 12;
  if (r === 0) return amount / months;
  var pow = Math.pow(1 + r, months);
  return amount * r * pow / (pow - 1);
}

function _fmt(n) {
  return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ─── Section builders ─────────────────────────────────────────────────────────

// Renders breadcrumb nav with parent chain + current page title
function _breadcrumb(page) {
  var parts = [];
  if (page.breadcrumbs && page.breadcrumbs.length) {
    page.breadcrumbs.forEach(function(b) {
      parts.push('<a href="' + b.href + '" style="font-size:13px;color:var(--text-light);text-decoration:none">' + b.label + '</a>');
    });
  } else if (page.parent) {
    parts.push('<a href="' + page.parent.href + '" style="font-size:13px;color:var(--text-light);text-decoration:none">' + page.parent.label_fr + '</a>');
  }
  parts.push('<span style="font-size:13px;color:var(--dark);font-weight:600">' + (page.title_fr || '') + '</span>');
  return '<nav style="display:flex;align-items:center;gap:6px;margin-bottom:16px;flex-wrap:wrap">'
    + parts.join('<span style="color:var(--text-light);font-size:13px"> › </span>')
    + '</nav>';
}

// Inline pill tag used in hero testimonial paragraph
function _pill(text) {
  return '<span style="display:inline;background:rgba(0,0,0,.06);color:var(--dark);font-weight:700;padding:2px 10px;border-radius:14px;font-size:13px;white-space:nowrap">' + text + '</span>';
}

// Right column of hero: testimonial paragraph with pill tags, or fallback rate card
function _heroRight(page) {
  var t = page.testimonial;
  if (t) {
    return '<div style="padding:16px 0">'
      + '<p style="font-size:14px;color:var(--dark);line-height:2;margin-bottom:12px">'
      + 'Avec une mensualité de ' + _pill(t.monthly + ' €/mois')
      + ' pendant ' + _pill(t.months + ' mois') + '. '
      + _pill(t.names)
      + ' ont pu emprunter ' + _pill(t.amount + ' €')
      + ' à ' + _pill(t.rate + '%')
      + ' pour un montant dû de ' + _pill(t.total_due + ' €')
      + ' et ' + _pill(t.purpose) + '.'
      + '</p>'
      + '<a href="/infos/mentions-legales" style="font-size:12px;color:var(--dark);opacity:.55;text-decoration:underline">Voir les conditions de l\'offre</a>'
      + '</div>';
  }
  // Fallback: red TAEG rate card
  return '<div class="hero-promo">'
    + '<p class="hero-promo-teaser">Vous voulez une bonne nouvelle ?</p>'
    + '<p class="hero-promo-rate-label">TAEG fixe à partir de</p>'
    + '<p class="hero-promo-rate-value">4,90%</p>'
    + '<p class="hero-promo-rate-detail">Pour 12 000 € sur 60 mois**</p>'
    + '<a href="/simulateur" class="hero-promo-cta">Faire une simulation →</a>'
    + '</div>';
}

// Hero section injected into #page-hero
function _responsiveStyles() {
  return '<style>'
    + '.pg-grid2{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}'
    + '.pg-grid2s{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}'
    + '.pg-grid2e{display:grid;grid-template-columns:1fr 1fr;border-radius:var(--radius-lg);overflow:hidden;box-shadow:0 2px 24px rgba(0,0,0,.08)}'
    + '.pg-hub{display:grid;grid-template-columns:1fr 240px;gap:56px;align-items:start}'
    + '.pg-ed{display:grid;grid-template-columns:280px 1fr;gap:56px;align-items:start}'
    + '.pg-hero{background:#d5f0de !important;padding:64px 0 40px}'
    + '.pg-form{display:flex;gap:0;background:#fff;border-radius:50px;overflow:hidden;border:2px solid #1B3A4B;max-width:480px}'
    + '.pg-form .sim-input{flex:1 1 50% !important;min-width:120px !important;border:none !important;border-radius:0 !important;padding:14px 20px !important;font-size:15px;outline:none;background:transparent !important;width:auto !important}'
    + '.pg-form .sim-btn{flex:0 0 auto !important;border-radius:50px !important;padding:12px 22px !important;margin:4px !important;white-space:nowrap;background:var(--dark);color:#fff;border:none;font-size:14px;font-weight:600;cursor:pointer;width:auto !important}'
    + '@media(max-width:768px){'
    + '.pg-grid2,.pg-grid2s,.pg-grid2e,.pg-hub,.pg-ed{grid-template-columns:1fr !important}'
    + '.pg-grid2{gap:24px}'
    + '.pg-grid2s{gap:32px}'
    + '.pg-hub{gap:32px}'
    + '.pg-ed{gap:24px}'
    + '.pg-form{max-width:100% !important;border-radius:40px}'
    + '.pg-form .sim-input{flex:1 1 40% !important;min-width:100px !important;padding:10px 14px !important;font-size:13px !important;width:auto !important}'
    + '.pg-form .sim-btn{flex:0 0 auto !important;padding:10px 14px !important;font-size:12px !important;margin:3px !important;width:auto !important}'
    + '}'
    + '</style>';
}

function _heroSection(page) {
  var title = page.title_hero || page.hero_fr || page.title_fr || '';
  var desc = page.desc_fr || '';
  return _responsiveStyles()
    + '<section class="pg-hero">'
    + '<div class="container">'
    + '<div class="pg-grid2">'
    // Left column: breadcrumb, title, description, simulator form
    + '<div>'
    + _breadcrumb(page)
    + '<h1 style="font-size:clamp(32px,4vw,48px);font-weight:900;color:var(--dark);line-height:1.15;margin-bottom:16px">' + title + '</h1>'
    + '<p style="font-size:17px;color:var(--text-light);line-height:1.7;max-width:460px;margin-bottom:32px">' + desc + '</p>'
    + '<form class="pg-form" onsubmit="return false">'
    + '<input type="number" min="5500" max="60000" placeholder="Saisir un montant entre 5 500 € et 60 000 €" class="sim-input">'
    + '<button class="sim-btn">Faire une simulation</button>'
    + '</form>'
    + '</div>'
    // Right column: testimonial pills or rate card
    + '<div>' + _heroRight(page) + '</div>'
    + '</div>'
    + '</div>'
    + '</section>';
}

// Content intro section (heading + red subheading + body) — leaf pages only
function _contentSection(page) {
  var c = page.content;
  if (!c) return '';
  return '<section style="background:#fff;padding:56px 0">'
    + '<div class="container" style="max-width:760px">'
    + '<h2 style="font-size:clamp(24px,3vw,32px);font-weight:800;color:var(--dark);margin-bottom:10px">' + c.heading + '</h2>'
    + '<p style="color:var(--red);font-weight:700;font-size:15px;margin-bottom:18px">' + c.subheading + '</p>'
    + '<p style="font-size:16px;color:var(--text-light);line-height:1.85">' + c.body + '</p>'
    + '</div></section>';
}

// Why / features section (3 cards on pink bg) — leaf pages only
function _whySection(page) {
  var w = page.why;
  if (!w || !w.sections) return '';
  var cards = w.sections.map(function(s) {
    return '<div class="feature-card">'
      + '<div class="feature-icon-wrap" style="background:var(--yellow-bg);font-size:28px">' + (s.icon || '✦') + '</div>'
      + '<h3 class="feature-title">' + s.title + '</h3>'
      + '<p style="font-size:14px;color:var(--text-light);line-height:1.7">' + s.body + '</p>'
      + '</div>';
  }).join('');
  return '<section class="features" style="background:var(--pink-bg)">'
    + '<div class="container">'
    + '<p class="section-label" style="margin-bottom:6px">Nos avantages</p>'
    + '<h2 style="font-size:clamp(22px,3vw,28px);font-weight:800;color:var(--dark);margin-bottom:8px">' + w.heading + '</h2>'
    + '<p style="font-size:15px;color:var(--text-light);margin-bottom:40px;max-width:620px">' + w.intro + '</p>'
    + '<div class="features-grid">' + cards + '</div>'
    + '</div></section>';
}

// Insurance green card (reused in 2-column section)
function _insuranceCard() {
  return '<div style="background:var(--green-bg);border-radius:20px;padding:40px;display:flex;flex-direction:column;gap:20px">'
    + '<div style="width:72px;height:72px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;box-shadow:0 2px 12px rgba(0,0,0,.08)">🛡️</div>'
    + '<h2 style="font-size:20px;font-weight:800;color:var(--dark);line-height:1.4">Ne laissez place à aucun imprévu.</h2>'
    + '<p style="font-size:14px;color:var(--text-light);line-height:1.8">Pour votre tranquillité et celle de vos proches, vous avez la possibilité, ainsi que votre coemprunteur, de bénéficier d\'une assurance facultative. Selon votre situation à l\'adhésion et vos besoins, elle vous garantit en cas de décès, Perte Totale et Irréversible d\'Autonomie (PTIA), Incapacité Temporaire Totale de travail (ITT) et Perte d\'Emploi. Choisissez d\'être bien protégé et certain de pouvoir rembourser votre crédit en toute circonstance.</p>'
    + '<a href="/assurance/nos-assurances-de-prets" style="font-size:14px;font-weight:700;color:var(--dark);text-decoration:none">Découvrir nos assurances →</a>'
    + '</div>';
}

// Insurance (left) + checklist (right) 2-column section
function _insuranceAndChecklist(page) {
  var name = page.features_name || page.title_fr || '';
  var items = [
    '100% en ligne et 0 € de frais de dossier',
    'Un prêt entre 5 500 € et 60 000 €',
    'Un taux fixe pendant toute la durée de votre crédit',
    'Réception des fonds sous 48h sur votre compte bancaire (1)',
    'Une mensualité qui s\'adapte à vos besoins, modulable sur demande (2)',
  ];
  var checkmark = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><polyline points="1.5,6 4.5,9 10.5,3" stroke="currentColor" stroke-width="1.8"/></svg>';
  var listHtml = items.map(function(item) {
    return '<li style="display:flex;align-items:flex-start;gap:12px;padding:10px 0">'
      + '<span style="width:24px;height:24px;border-radius:50%;border:2px solid var(--dark);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">' + checkmark + '</span>'
      + '<span style="font-size:15px;color:var(--dark)">' + item + '</span>'
      + '</li>';
  }).join('');
  return '<section style="background:#fff;padding:64px 0">'
    + '<div class="container">'
    + '<div class="pg-grid2s">'
    + '<div>' + _insuranceCard() + '</div>'
    + '<div>'
    + '<h2 style="font-size:22px;font-weight:800;color:var(--dark);margin-bottom:24px">Le Prêt Personnel ' + name + ' : SOrloz vous accompagne</h2>'
    + '<ul style="list-style:none;padding:0;margin:0">' + listHtml + '</ul>'
    + '</div>'
    + '</div>'
    + '</div></section>';
}

// Cross-sell card (pink bg, white card) — leaf pages only
function _crosssellCard(page) {
  var cs = page.crosssell;
  if (!cs) return '';
  return '<section style="background:var(--pink-bg);padding:48px 0">'
    + '<div class="container" style="max-width:680px">'
    + '<div style="background:#fff;border-radius:var(--radius-lg);padding:36px;box-shadow:var(--shadow)">'
    + '<p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text-light);margin-bottom:8px">Découvrez aussi</p>'
    + '<h3 style="font-size:22px;font-weight:800;color:var(--dark);margin-bottom:12px">' + cs.question + '</h3>'
    + '<p style="font-size:15px;color:var(--text-light);line-height:1.7;margin-bottom:24px">' + cs.body + '</p>'
    + '<a href="' + cs.link_href + '" class="btn btn-primary">' + cs.link_text + ' →</a>'
    + '</div></div></section>';
}

// Example loan section: dark green amount panel (left) + white details table (right)
function _exampleSection(page) {
  var ex = page.example;
  if (!ex) return '';
  var monthly = _pmt(ex.amount, ex.months, ex.rate);
  var total = monthly * ex.months;
  var cost = total - ex.amount;
  var titleLow = (page.title_fr || '').toLowerCase();
  function row(label, val) {
    return '<tr>'
      + '<td style="padding:12px 0;color:var(--text-light);font-size:14px;border-bottom:1px solid #eee">' + label + '</td>'
      + '<td style="padding:12px 0;text-align:right;font-weight:700;font-size:14px;color:var(--dark);border-bottom:1px solid #eee">' + val + '</td>'
      + '</tr>';
  }
  return '<section style="background:#f8f6f2;padding:64px 0">'
    + '<div class="container" style="max-width:760px">'
    + '<div class="pg-grid2e">'
    + '<div style="background:#1a4731;color:#fff;padding:48px 40px;display:flex;flex-direction:column;justify-content:center">'
    + '<p style="font-size:13px;opacity:.65;margin-bottom:8px">Montant emprunté</p>'
    + '<p style="font-size:52px;font-weight:900;line-height:1;margin-bottom:8px">' + ex.amount.toLocaleString('fr-FR') + ' €</p>'
    + '<p style="font-size:14px;opacity:.65">Pendant ' + ex.months + ' mois</p>'
    + '</div>'
    + '<div style="background:#fff;padding:40px">'
    + '<h3 style="font-size:18px;font-weight:800;color:var(--dark);margin-bottom:24px;line-height:1.4">Un exemple de prêt ' + titleLow + ' et ce qu\'il faut en retenir</h3>'
    + '<table style="width:100%;border-collapse:collapse;margin-bottom:28px">'
    + row('TAEG fixe', ex.rate.toFixed(2).replace('.', ',') + ' %')
    + row('Mensualités', _fmt(monthly) + ' €')
    + row('Coût total du crédit', _fmt(cost) + ' €')
    + row('Montant total dû par l\'emprunteur', _fmt(total) + ' €')
    + '</table>'
    + '<a href="/simulateur" class="btn btn-primary">Faire une simulation</a>'
    + '</div>'
    + '</div></div></section>';
}

// Process section (yellow bg, 3 numbered steps + CTA)
function _processSection() {
  var steps = [
    'Simulez votre demande en quelques clics',
    'Complétez vos informations et signez en ligne',
    'Recevez les fonds sous 48h',
  ];
  var stepsHtml = steps.map(function(s, i) {
    return '<div class="process-step">'
      + '<div class="process-step-icon"><div class="process-step-num">' + (i + 1) + '</div></div>'
      + '<p>' + s + '</p>'
      + '</div>';
  }).join('');
  return '<section class="process">'
    + '<div class="container">'
    + '<p class="process-tagline">Transparent, sécurisé et fiable</p>'
    + '<div class="process-steps">' + stepsHtml + '</div>'
    + '<div class="process-cta"><a href="/simulateur" class="btn btn-primary">Simuler mon prêt</a></div>'
    + '</div></section>';
}

// FAQ accordion section (single column, centered)
function _faqSection(page) {
  var defaultFaq = [
    { q: 'C\'est quoi le TAEG ?', a: 'Le Taux Annuel Effectif Global (TAEG) représente le coût total de votre crédit exprimé en pourcentage annuel. Il inclut les intérêts ainsi que tous les frais obligatoires liés à l\'obtention du crédit.' },
    { q: 'Comment faire ma demande de crédit en ligne ?', a: 'Faites votre simulation en ligne, sélectionnez l\'offre adaptée à votre besoin, complétez votre dossier et signez votre contrat électroniquement. Tout se fait en quelques minutes, 100% en ligne.' },
    { q: 'Quel est le délai de mise à disposition des fonds ?', a: 'Une fois votre dossier validé et le délai légal de rétractation écoulé, les fonds sont disponibles sous 48h sur votre compte bancaire.' },
    { q: 'Pourquoi faire ma demande de crédit en ligne avec SOrloz ?', a: 'SOrloz vous propose une solution 100% en ligne, sans frais de dossier, avec un taux fixe pendant toute la durée de votre crédit. Nos conseillers sont disponibles pour vous accompagner à chaque étape.' },
  ];
  var chevron = '<svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>';
  var items = (page.faq && page.faq.length) ? page.faq : defaultFaq;
  var itemsHtml = items.map(function(item) {
    return '<div class="faq-item">'
      + '<button class="faq-question" aria-expanded="false">' + item.q + chevron + '</button>'
      + '<div class="faq-answer"><div class="faq-answer-inner">' + item.a + '</div></div>'
      + '</div>';
  }).join('');
  return '<section class="faq" style="padding:64px 0">'
    + '<div class="container" style="max-width:700px">'
    + '<h2 class="faq-title" style="text-align:center;margin-bottom:32px">Toutes les réponses à vos questions</h2>'
    + '<div class="faq-list">' + itemsHtml + '</div>'
    + '<div style="text-align:center;margin-top:32px">'
    + '<a href="/infos/mentions-legales" style="font-size:14px;color:var(--text-light);text-decoration:underline">Voir les conditions</a>'
    + '</div>'
    + '</div></section>';
}

// Articles 3-column grid — leaf pages only
function _articlesSection(page) {
  if (!page.articles || !page.articles.length) return '';
  var heading = 'Vous saurez tout sur le financement de ' + (page.title_fr || 'vos projets').toLowerCase();
  var cardsHtml = page.articles.map(function(a) {
    return '<div class="article-card">'
      + '<a href="' + a.href + '" class="article-link">'
      + '<div class="article-thumb">' + (a.icon || '📖') + '</div>'
      + '<div class="article-body">'
      + '<p><span style="background:var(--green-bg);color:var(--dark);font-size:11px;font-weight:700;border-radius:20px;padding:2px 8px">' + a.tag + '</span></p>'
      + '<p class="article-title" style="margin-top:8px">' + a.title + '</p>'
      + '<p class="article-excerpt">' + a.excerpt + '</p>'
      + '</div></a></div>';
  }).join('');
  return '<section class="articles" style="background:var(--pink-bg)">'
    + '<div class="container">'
    + '<p class="section-label">Nos conseils</p>'
    + '<h2 style="font-size:clamp(20px,3vw,26px);font-weight:800;color:var(--dark);margin-bottom:32px">' + heading + '</h2>'
    + '<div class="articles-grid">' + cardsHtml + '</div>'
    + '</div></section>';
}

// Hub: body text (left, wide) + children nav links (right, narrow)
function _hubBodyAndNav(page) {
  var body = page.body_fr || page.desc_fr || '';
  var links = (page.children || []).map(function(c) {
    return '<a href="' + c.href + '"'
      + ' style="display:flex;align-items:center;gap:10px;padding:12px 16px;margin-bottom:8px;background:#fff;border:1.5px solid #e0e4ea;border-radius:8px;color:var(--dark);text-decoration:none;font-size:14px;font-weight:600;transition:border-color .15s,background .15s"'
      + ' onmouseover="this.style.borderColor=\'var(--red)\';this.style.background=\'var(--pink-bg)\'"'
      + ' onmouseout="this.style.borderColor=\'#e0e4ea\';this.style.background=\'#fff\'">'
      + '<span style="font-size:20px">' + c.icon + '</span>'
      + '<span>' + c.title_fr + '</span>'
      + '<span style="margin-left:auto;color:var(--text-light);font-size:13px">›</span>'
      + '</a>';
  }).join('');
  return '<section style="background:#fff;padding:64px 0">'
    + '<div class="container">'
    + '<div class="pg-hub">'
    + '<div><p style="font-size:16px;color:var(--text-light);line-height:1.9">' + body + '</p></div>'
    + '<nav>' + links + '</nav>'
    + '</div>'
    + '</div></section>';
}

// Hub: editorial 2-column section (big heading left, content right)
function _editorialSection(page) {
  var ed = page.editorial;
  if (!ed) return '';
  return '<section style="background:#fff;padding:56px 0;border-top:1px solid #f0f0f0">'
    + '<div class="container">'
    + '<div class="pg-ed">'
    + '<h2 style="font-size:28px;font-weight:900;color:var(--dark);line-height:1.3;margin:0">' + ed.heading + '</h2>'
    + '<div>'
    + '<p style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;color:var(--red);margin-bottom:16px">' + ed.subheading + '</p>'
    + '<p style="font-size:15px;color:var(--text-light);line-height:1.9">' + ed.body + '</p>'
    + '</div>'
    + '</div></div></section>';
}

// ─── Main render ──────────────────────────────────────────────────────────────

function renderPage(tFn) {
  var pathname = window.location.pathname.replace(/\/$/, '') || '/';

  // Simulator gets its own full-page experience
  if (pathname === '/simulateur') { renderSimulator(); return; }

  var page = PAGE_CONFIG[pathname];
  var heroEl = document.getElementById('page-hero');
  var contentEl = document.getElementById('page-content');

  // 404 fallback
  if (!page) {
    if (heroEl) heroEl.innerHTML = '<div class="container" style="padding:80px 24px;text-align:center">'
      + '<h1 style="font-size:48px;color:var(--dark)">404</h1>'
      + '<p style="color:var(--text-light);margin-top:12px">Page introuvable</p>'
      + '<a href="/" class="btn btn-primary" style="margin-top:24px;display:inline-flex">← Accueil</a></div>';
    return;
  }

  document.title = (page.title_fr || '') + ' | SOrloz';

  // Hero always rendered the same way for all pages
  if (heroEl) heroEl.innerHTML = _heroSection(page);

  if (contentEl) {
    var html = '';

    if (page.children && page.children.length) {
      // HUB page: body+nav, insurance+checklist, editorial, example, process, FAQ
      html += _hubBodyAndNav(page);
      html += _insuranceAndChecklist(page);
      html += _editorialSection(page);
      html += _exampleSection(page);
      html += _processSection();
      html += _faqSection(page);
    } else {
      // LEAF page: content, why, insurance+checklist, crosssell, example, process, FAQ, articles
      html += _contentSection(page);
      html += _whySection(page);
      html += _insuranceAndChecklist(page);
      html += _crosssellCard(page);
      html += _exampleSection(page);
      html += _processSection();
      html += _faqSection(page);
      html += _articlesSection(page);
    }

    contentEl.innerHTML = html;

    // Initialise interactive components defined in app.js
    if (typeof initFaq === 'function') initFaq();
    if (typeof initSimulator === 'function') initSimulator();
  }
}
