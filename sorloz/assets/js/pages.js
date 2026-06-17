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
      heading: 'Faites vos valises !',
      subheading: 'Préparez votre évasion avec SOrloz',
      body: 'Rêvez-vous de séjours inoubliables en famille, entre amis ou en amoureux ? Grâce au prêt personnel de SOrloz, votre rêve peut devenir réalité ! Vous pouvez financer la pause dont vous avez besoin, que ce soit un séjour détente dans une résidence de rêve en bord de mer, une aventure en croisière ou un voyage à l\'étranger. Nous vous offrons une solution de prêt personnel simple et rapide, pour que vous puissiez profiter de chaque moment sans vous soucier des finances.\n\nPour en savoir plus sur nos options, n\'hésitez pas à visiter notre page sur les <a href="/prets-personnels" style="color:var(--red);font-weight:600">prêts personnels</a>.',
    },
    why: {
      heading: 'Pourquoi choisir un crédit vacances SOrloz pour financer votre prochain voyage ?',
      intro: 'Le crédit vacances chez SOrloz présente de nombreux avantages. Il vous permet de planifier vos futurs congés sans sacrifier votre budget quotidien. Voici quelques-uns des bénéfices que vous pouvez en tirer :',
      sections: [
        { title: 'Souplesse dans l\'utilisation des fonds', body: 'Avec notre crédit vacances, vous avez la liberté d\'utiliser les fonds comme bon vous semble. Que vous souhaitiez financer un achat de matériel pour votre séjour, la réservation d\'un hôtel, le transport, ou même des activités sur place, vous pouvez le faire sans avoir à justifier vos dépenses. Par exemple, si vous partez plusieurs semaines en camping all inclusive avec des enfants, le crédit peut couvrir non seulement l\'hébergement, mais aussi les équipements nécessaires pour votre séjour.' },
        { title: 'Conditions transparentes et flexibles', body: 'Chez SOrloz, vous profitez de conditions transparentes, de taux compétitifs et de modalités de remboursement adaptées. Nous faisons tout pour vous permettre un financement accessible pour préparer votre future évasion en toute sérénité. Le monde vous attend !' },
        { title: 'Accompagnement personnalisé', body: 'Chez SOrloz, nous croyons en l\'importance d\'un service client de qualité. Nos conseillers sont à votre disposition pour vous aider à préparer votre demande et vous guider tout au long du processus. Que vous ayez des questions sur le montant, la durée ou les modalités de remboursement, nous sommes là pour vous assister.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit vacances sur mesure pour votre projet',
        subheading: 'Options de personnalisation',
        body: 'Lorsque vous choisissez un crédit vacances avec SOrloz, vous pouvez adapter le prêt à vos besoins précis.',
        bullets: [
          '<strong>Montant :</strong> Déterminez la somme dont vous avez besoin pour couvrir toutes vos dépenses. Que vous cherchiez à financer un week-end prolongé ou un voyage de plusieurs semaines, le montant peut varier en fonction de vos projets.',
          '<strong>Durée :</strong> Choisissez la période de remboursement qui correspond le mieux à vos capacités financières. Vous pouvez également opter pour une durée plus longue pour un reste à vivre plus confortable.',
          '<strong>Mensualités :</strong> Ajustez le prélèvement mensuel de remboursement de votre emprunt selon votre budget personnel pour garantir que votre prêt ne pèse pas sur vos finances.',
        ],
        outro: 'Vous pouvez ainsi utiliser votre crédit pour divers types de vacances, que ce soit un simple voyage de quelques nuits ou un grand projet comme un tour du monde.',
      },
      {
        heading: 'Comment obtenir votre crédit vacances avec SOrloz ?',
        body: 'Obtenir un prêt personnel chez SOrloz n\'a jamais été aussi simple. Voici les étapes à suivre :',
        bullets: [
          '<strong>Accédez à notre outil de simulation de crédit :</strong> Renseignez le montant envisagé pour vos vacances et choisissez l\'offre la plus adaptée à votre capacité de remboursement.',
          '<strong>Remplissez le formulaire de demande :</strong> Indiquez les informations nécessaires à l\'étude de votre dossier par nos services. Cela ne prend que quelques minutes.',
          '<strong>Signez et recevez les fonds :</strong> Connectez-vous à votre Espace Personnel Sécurisé afin de finaliser votre demande. Après acceptation par nos services, vous recevez les fonds sur votre compte bancaire sous 48h.',
        ],
        outro: 'Avec le crédit vacances de SOrloz, partez l\'esprit tranquille et réalisez le voyage de vos rêves. Grâce à nos solutions personnalisées, à notre accompagnement et à nos taux compétitifs, ce sont des vacances réussies qui vous attendent. N\'attendez plus pour démarrer votre projet, la destination de vos rêves vous tend les bras !',
      },
    ],
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
    title_hero: 'Crédit déménagement : posez vos valises sereinement',
    hero_fr: 'Déménagez l\'esprit tranquille',
    desc_fr: 'Location de camion, frais d\'agence, premiers loyers, achats mobilier… Le crédit déménagement SOrloz couvre toutes vos dépenses liées à votre nouvelle installation.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-projet', label: 'Crédit projet' },
    ],
    testimonial: {
      monthly: '249,88', months: 36, names: 'Émilie &amp; Julien',
      amount: '8 000', rate: '7,78', total_due: '8 995,67',
      purpose: 'déménagement à Lyon',
    },
    content: {
      heading: 'Déménagez sans stress financier',
      subheading: 'Un crédit personnel pour couvrir tous vos frais de déménagement',
      body: 'Un déménagement représente bien plus que le simple transport de cartons. Entre la location du camion ou les frais de déménageurs professionnels, le dépôt de garantie du nouveau logement, les premiers loyers, les frais d\'agence immobilière et l\'achat de nouveaux meubles, la facture peut vite grimper. Le crédit déménagement SOrloz est un prêt personnel non affecté qui vous permet de financer l\'ensemble de ces dépenses en toute liberté, sans avoir à justifier chaque poste.\n\nPour découvrir toutes nos solutions de financement, consultez notre page <a href="/prets-personnels" style="color:var(--red);font-weight:600">prêts personnels</a>.',
    },
    why: {
      heading: 'Pourquoi choisir un crédit déménagement SOrloz pour financer votre nouvelle installation ?',
      intro: 'Le crédit déménagement SOrloz est conçu pour vous accompagner dans cette étape importante de votre vie. Il vous permet de gérer sereinement toutes les dépenses liées à votre changement de logement sans puiser dans votre épargne. Voici ses principaux avantages :',
      sections: [
        { title: 'Liberté totale dans l\'utilisation des fonds', body: 'Le crédit déménagement SOrloz est un prêt personnel non affecté, ce qui signifie que vous êtes entièrement libre d\'utiliser les fonds comme vous le souhaitez. Que vous ayez besoin de régler les frais de déménageurs professionnels, de payer le dépôt de garantie de votre nouveau logement, d\'acheter du mobilier neuf ou de financer des travaux d\'aménagement, tout est possible. Vous n\'avez aucun justificatif à fournir quant à l\'utilisation de la somme empruntée, ce qui vous laisse une totale flexibilité pour organiser votre déménagement selon vos priorités.' },
        { title: 'Des mensualités fixes et prévisibles', body: 'Avec le crédit déménagement SOrloz, votre taux est fixe pour toute la durée de votre contrat, ce qui signifie que vos mensualités restent identiques du premier au dernier mois. Cette stabilité est particulièrement appréciable lors d\'un déménagement, période pendant laquelle vos dépenses sont déjà nombreuses et parfois imprévisibles. Vous pouvez ainsi planifier votre budget en toute sérénité, sans craindre de mauvaise surprise sur le montant de vos remboursements.' },
        { title: 'Un accompagnement rapide et personnalisé', body: 'Chez SOrloz, nous savons qu\'un déménagement se prépare souvent dans l\'urgence. C\'est pourquoi notre processus de demande est entièrement en ligne et ne prend que quelques minutes. Vous obtenez une réponse de principe immédiate et, après validation de votre dossier, les fonds sont disponibles sous 48 heures sur votre compte bancaire. Nos conseillers sont également à votre disposition pour vous aider à déterminer le montant et la durée les mieux adaptés à votre situation.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit déménagement sur mesure pour votre projet',
        subheading: 'Options de personnalisation',
        body: 'Lorsque vous choisissez un crédit déménagement avec SOrloz, vous pouvez adapter le prêt à vos besoins précis.',
        bullets: [
          '<strong>Montant :</strong> Définissez la somme dont vous avez besoin pour couvrir l\'ensemble de vos frais de déménagement. Qu\'il s\'agisse d\'un déménagement local ou d\'un changement de région, le montant peut varier entre 5 500 € et 60 000 € selon l\'ampleur de votre projet.',
          '<strong>Durée :</strong> Choisissez la période de remboursement qui convient le mieux à votre budget, de 12 à 84 mois. Vous pouvez opter pour une durée plus courte pour réduire le coût total, ou une durée plus longue pour alléger vos mensualités.',
          '<strong>Mensualités :</strong> Ajustez le montant de vos remboursements mensuels en fonction de votre capacité financière, afin que votre crédit s\'intègre harmonieusement dans votre nouveau budget logement.',
        ],
        outro: 'Grâce à cette flexibilité, vous pouvez financer aussi bien un petit déménagement au sein de la même ville qu\'une installation complète dans un nouveau logement à l\'autre bout de la France.',
      },
      {
        heading: 'Comment obtenir votre crédit déménagement avec SOrloz ?',
        body: 'Obtenir un crédit déménagement chez SOrloz est simple et rapide. Voici les étapes à suivre :',
        bullets: [
          '<strong>Simulation en ligne :</strong> Renseignez le montant envisagé pour votre déménagement et choisissez la durée de remboursement la plus adaptée à votre situation. Notre simulateur vous indique immédiatement le montant de vos mensualités.',
          '<strong>Formulaire de demande :</strong> Complétez votre dossier en quelques minutes en renseignant les informations nécessaires à l\'étude de votre demande. Aucune pièce justificative liée au déménagement n\'est requise.',
          '<strong>Signature et réception des fonds :</strong> Connectez-vous à votre Espace Personnel Sécurisé pour finaliser votre demande. Après acceptation par nos services et passé le délai légal de rétractation, les fonds sont versés sous 48h sur votre compte bancaire.',
        ],
        outro: 'Avec le crédit déménagement SOrloz, installez-vous dans votre nouveau chez-vous en toute sérénité. Nos solutions sur mesure, notre accompagnement personnalisé et nos taux compétitifs font de votre déménagement une étape plaisir plutôt qu\'une source de stress financier.',
      },
    ],
    crosssell: {
      question: 'Vous aménagez votre nouveau logement ?',
      body: 'Profitez de notre crédit travaux pour financer la rénovation ou la décoration de votre nouveau chez-vous, avec des conditions avantageuses.',
      link_href: '/prets-personnels/credit-travaux',
      link_text: 'Découvrir le crédit travaux',
    },
    example: { amount: 8000, months: 36, rate: 7.78 },
    faq_title: 'Vos questions sur le crédit déménagement',
    faq: [
      { q: 'Quel montant puis-je emprunter pour un déménagement ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € selon l\'ampleur de votre déménagement et votre capacité de remboursement.' },
      { q: 'Dois-je fournir des justificatifs de déménagement ?', a: 'Non, le crédit déménagement SOrloz est un prêt personnel non affecté. Vous n\'avez pas à justifier l\'utilisation des fonds.' },
      { q: 'Puis-je financer le dépôt de garantie avec le crédit déménagement ?', a: 'Oui, le crédit déménagement couvre toutes les dépenses liées à votre nouvelle installation : dépôt de garantie, frais d\'agence, premiers loyers, mobilier, etc.' },
      { q: 'Combien de temps faut-il pour recevoir les fonds ?', a: 'Après validation de votre dossier et passé le délai légal de rétractation, les fonds sont disponibles sous 48h sur votre compte bancaire.' },
    ],
    features_name: 'Déménagement',
    articles: [
      { icon: '📦', tag: 'Déménagement', href: '/conseils', title: 'Budget déménagement : combien prévoir en France ?', excerpt: 'Découvrez le coût moyen d\'un déménagement en France et les postes de dépenses à anticiper pour bien préparer votre budget.' },
      { icon: '💡', tag: 'Conseil', href: '/conseils', title: 'Déménagement : les aides financières à ne pas manquer', excerpt: 'Action Logement, prime de déménagement, aides locales… Tour d\'horizon des dispositifs pour alléger la facture.' },
      { icon: '📋', tag: 'Pratique', href: '/conseils', title: 'Checklist déménagement : les démarches à ne pas oublier', excerpt: 'De la résiliation des contrats au changement d\'adresse : la liste complète des démarches pour un déménagement réussi.' },
    ],
  },

  '/prets-personnels/credit-projet/credit-loisirs': {
    icon: '🎯', bg: 'var(--green-bg)',
    title_fr: 'Crédit loisirs',
    title_hero: 'Crédit loisirs : vivez vos passions à fond',
    hero_fr: 'Profitez pleinement de vos loisirs',
    desc_fr: 'Sport, culture, hi-fi, instruments de musique, animaux… Le crédit loisirs SOrloz finance toutes vos passions et vos plaisirs du quotidien.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-projet', label: 'Crédit projet' },
    ],
    testimonial: {
      monthly: '248,20', months: 24, names: 'Romain &amp; Claire',
      amount: '5 500', rate: '7,78', total_due: '5 956,77',
      purpose: 'home cinéma et piano numérique',
    },
    content: {
      heading: 'Offrez-vous la vie que vous méritez',
      subheading: 'Financez vos passions et loisirs avec SOrloz',
      body: 'Qu\'il s\'agisse d\'un équipement sportif haut de gamme, d\'un instrument de musique, d\'un home cinéma, d\'un abonnement en club ou de tout autre plaisir qui enrichit votre quotidien, le crédit loisirs SOrloz vous permet de vous faire plaisir sans attendre. Notre prêt personnel non affecté vous laisse entièrement libre d\'utiliser les fonds comme bon vous semble, sans aucun justificatif de dépense à fournir.\n\nPour en savoir plus sur nos solutions, consultez notre page <a href="/prets-personnels" style="color:var(--red);font-weight:600">prêts personnels</a>.',
    },
    why: {
      heading: 'Pourquoi choisir un crédit loisirs SOrloz pour financer vos passions ?',
      intro: 'Les loisirs contribuent à votre épanouissement personnel et à votre bien-être au quotidien. Le crédit loisirs SOrloz vous permet de les financer sans entamer votre épargne de précaution. Voici les avantages de notre solution :',
      sections: [
        { title: 'Un financement pour toutes vos envies', body: 'Le crédit loisirs SOrloz n\'est pas limité à un type d\'achat en particulier. Que vous souhaitiez acquérir un vélo électrique, un équipement de plongée sous-marine, un piano à queue, du matériel photographique professionnel ou encore aménager un espace dédié à votre passion dans votre maison, vous êtes libre d\'utiliser les fonds selon vos envies. Cette polyvalence fait du crédit loisirs un outil idéal pour tous ceux qui veulent se faire plaisir sans compromis.' },
        { title: 'Des conditions claires et sans mauvaise surprise', body: 'Chez SOrloz, la transparence est au cœur de notre démarche. Votre taux est fixe et garanti pour toute la durée du contrat, ce qui signifie que vos mensualités ne changeront jamais. Vous connaissez dès la simulation le coût total de votre crédit, le montant exact de chaque mensualité et la date de votre dernière échéance. Aucun frais caché, aucune clause ambiguë : vous savez exactement à quoi vous vous engagez.' },
        { title: 'Une démarche simple et rapide', body: 'Pas besoin de vous déplacer en agence ni de constituer un dossier papier volumineux. Tout se fait en ligne, depuis votre canapé, en quelques minutes seulement. Vous renseignez le montant et la durée souhaités, remplissez un formulaire simple et recevez une réponse de principe immédiate. Après validation de votre dossier, les fonds sont versés sur votre compte bancaire sous 48 heures. De quoi profiter rapidement de vos nouveaux équipements.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit loisirs sur mesure pour votre projet',
        subheading: 'Options de personnalisation',
        body: 'Lorsque vous choisissez un crédit loisirs avec SOrloz, vous pouvez adapter le prêt à vos besoins précis.',
        bullets: [
          '<strong>Montant :</strong> Déterminez la somme dont vous avez besoin pour financer vos loisirs. Que ce soit pour un achat ponctuel ou un ensemble d\'équipements, le montant peut varier de 5 500 € à 60 000 € selon vos projets.',
          '<strong>Durée :</strong> Choisissez la période de remboursement la plus adaptée à votre budget, de 12 à 84 mois. Une durée plus courte réduit le coût total, tandis qu\'une durée plus longue allège vos mensualités.',
          '<strong>Mensualités :</strong> Ajustez le montant de vos remboursements mensuels pour qu\'ils s\'intègrent confortablement dans votre budget sans impacter votre train de vie.',
        ],
        outro: 'Avec cette flexibilité, vous pouvez financer aussi bien un petit plaisir personnel qu\'un projet loisirs d\'envergure, comme l\'aménagement complet d\'un studio de musique à domicile.',
      },
      {
        heading: 'Comment obtenir votre crédit loisirs avec SOrloz ?',
        body: 'Obtenir un crédit loisirs chez SOrloz est un jeu d\'enfant. Voici les étapes à suivre :',
        bullets: [
          '<strong>Simulation en ligne :</strong> Renseignez le montant envisagé pour vos loisirs et choisissez la durée de remboursement qui vous convient. Notre simulateur calcule instantanément vos mensualités et le coût total du crédit.',
          '<strong>Formulaire de demande :</strong> Complétez votre dossier en quelques minutes avec les informations nécessaires à l\'étude de votre demande. Aucun justificatif d\'achat n\'est requis.',
          '<strong>Signature et réception des fonds :</strong> Connectez-vous à votre Espace Personnel Sécurisé pour finaliser votre demande. Après acceptation et passé le délai légal de rétractation, les fonds sont versés sous 48h sur votre compte.',
        ],
        outro: 'Avec le crédit loisirs SOrloz, n\'attendez plus pour vivre pleinement vos passions. Nos taux compétitifs, notre accompagnement personnalisé et notre processus 100 % en ligne vous permettent de concrétiser vos envies en toute simplicité.',
      },
    ],
    crosssell: {
      question: 'Vous partez en vacances pour pratiquer vos loisirs ?',
      body: 'Combinez votre crédit loisirs avec notre crédit vacances pour financer un séjour sportif, culturel ou de détente, en toute sérénité.',
      link_href: '/prets-personnels/credit-projet/credit-vacances',
      link_text: 'Découvrir le crédit vacances',
    },
    example: { amount: 5500, months: 24, rate: 7.78 },
    faq_title: 'Vos questions sur le crédit loisirs',
    faq: [
      { q: 'Quels types de loisirs puis-je financer avec ce crédit ?', a: 'Tous les loisirs sont éligibles : sport, musique, high-tech, culture, animaux de compagnie, jardinage, bricolage… Le crédit loisirs SOrloz est un prêt personnel sans justificatif d\'utilisation.' },
      { q: 'Quel montant puis-je emprunter pour mes loisirs ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € selon votre projet et votre capacité de remboursement.' },
      { q: 'Dois-je fournir un devis ou une facture ?', a: 'Non, le crédit loisirs SOrloz est un prêt personnel non affecté. Vous n\'avez aucun justificatif à fournir quant à l\'utilisation des fonds.' },
      { q: 'Puis-je rembourser mon crédit loisirs par anticipation ?', a: 'Oui, le remboursement anticipé total ou partiel est possible à tout moment. Des indemnités peuvent s\'appliquer dans la limite légale.' },
    ],
    features_name: 'Loisirs',
    articles: [
      { icon: '🎯', tag: 'Loisirs', href: '/conseils', title: 'Quel budget pour s\'équiper dans un nouveau sport ?', excerpt: 'Du vélo au golf en passant par la plongée : combien coûte vraiment l\'équipement pour débuter un nouveau sport ?' },
      { icon: '🎵', tag: 'Culture', href: '/conseils', title: 'Financer un instrument de musique : nos conseils', excerpt: 'Piano, guitare, batterie… Comment choisir et financer l\'instrument qui correspond à votre niveau et vos ambitions.' },
      { icon: '💡', tag: 'Conseil', href: '/conseils', title: 'Loisirs et bien-être : pourquoi investir dans ses passions ?', excerpt: 'Les loisirs ne sont pas un luxe mais un investissement dans votre qualité de vie. Découvrez comment les financer intelligemment.' },
    ],
  },

  '/prets-personnels/credit-projet/credit-divorce': {
    icon: '⚖️', bg: 'var(--green-bg)',
    title_fr: 'Crédit divorce',
    title_hero: 'Crédit divorce : tournez la page sereinement',
    hero_fr: 'Rebondir après un divorce',
    desc_fr: 'Un divorce entraîne de nombreux frais : honoraires d\'avocat, nouvelle installation, rachat de soulte… Le crédit divorce SOrloz vous aide à traverser cette étape et à repartir du bon pied.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-projet', label: 'Crédit projet' },
    ],
    testimonial: {
      monthly: '302,57', months: 60, names: 'Caroline',
      amount: '15 000', rate: '7,78', total_due: '18 154,14',
      purpose: 'rachat de soulte et frais d\'avocat',
    },
    content: {
      heading: 'Traversez cette étape sans pression financière',
      subheading: 'Un prêt personnel pour financer sereinement votre séparation',
      body: 'Un divorce ou une séparation engendre des frais considérables souvent difficiles à anticiper : honoraires d\'avocat, frais de notaire, rachat de soulte pour conserver le bien immobilier commun, caution et premiers loyers d\'un nouveau logement, achat de mobilier… Le crédit divorce SOrloz est un prêt personnel non affecté qui vous permet de faire face à l\'ensemble de ces dépenses, sans avoir à justifier chaque euro dépensé.\n\nPour découvrir toutes nos solutions de financement adaptées à vos projets de vie, consultez notre page <a href="/prets-personnels" style="color:var(--red);font-weight:600">prêts personnels</a>.',
    },
    why: {
      heading: 'Pourquoi choisir un crédit divorce SOrloz pour financer votre nouveau départ ?',
      intro: 'Un divorce est une épreuve humaine et financière. SOrloz vous accompagne avec une solution de financement discrète, rapide et flexible pour vous permettre de vous concentrer sur l\'essentiel : reconstruire votre vie. Voici les avantages de notre crédit divorce :',
      sections: [
        { title: 'Financer le rachat de soulte et les frais juridiques', body: 'Le rachat de soulte est souvent le poste de dépense le plus important lors d\'un divorce : il s\'agit de racheter la part de votre ex-conjoint sur le bien immobilier commun afin de le conserver. À cela s\'ajoutent les honoraires d\'avocat, les frais de notaire et éventuellement les frais de médiation familiale. Le crédit divorce SOrloz vous permet de financer l\'ensemble de ces frais en une seule solution, avec un taux fixe et des mensualités prévisibles sur toute la durée du prêt.' },
        { title: 'Se réinstaller dans un nouveau logement', body: 'Après une séparation, il faut souvent trouver un nouveau logement et l\'équiper entièrement. Dépôt de garantie, premiers loyers, achat de meubles, électroménager, équipement pour les enfants dans le nouveau foyer… Les dépenses s\'accumulent rapidement. Le crédit divorce SOrloz couvre toutes ces dépenses d\'installation, vous permettant de créer un environnement confortable et stable pour vous et vos enfants, sans attendre d\'avoir constitué l\'épargne nécessaire.' },
        { title: 'Un processus discret et respectueux', body: 'Chez SOrloz, nous comprenons que le divorce est une période sensible. C\'est pourquoi notre processus de demande est entièrement en ligne, confidentiel et sans jugement. Vous n\'avez pas à justifier les raisons de votre emprunt ni à fournir de pièces liées à votre procédure de divorce. Nos conseillers sont formés pour vous accompagner avec tact et professionnalisme, en vous aidant à trouver la solution de financement la plus adaptée à votre nouvelle situation.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit divorce sur mesure pour votre situation',
        subheading: 'Options de personnalisation',
        body: 'Lorsque vous choisissez un crédit divorce avec SOrloz, vous pouvez adapter le prêt à votre situation personnelle et financière.',
        bullets: [
          '<strong>Montant :</strong> Déterminez la somme dont vous avez besoin pour couvrir l\'ensemble de vos frais liés à la séparation. Qu\'il s\'agisse d\'un rachat de soulte, de frais d\'avocat ou d\'une nouvelle installation, le montant peut varier de 5 500 € à 60 000 € selon votre projet.',
          '<strong>Durée :</strong> Choisissez une période de remboursement adaptée à votre nouvelle capacité financière, de 12 à 84 mois. Après un divorce, vos revenus peuvent évoluer : nous vous aidons à trouver le juste équilibre.',
          '<strong>Mensualités :</strong> Ajustez le montant de vos remboursements mensuels pour préserver votre reste à vivre et celui de vos enfants, dans cette période de transition financière.',
        ],
        outro: 'Le crédit divorce SOrloz s\'adapte à toutes les situations : divorce par consentement mutuel, divorce contentieux, séparation de corps ou dissolution de PACS.',
      },
      {
        heading: 'Comment obtenir votre crédit divorce avec SOrloz ?',
        body: 'Obtenir un crédit divorce chez SOrloz est simple, rapide et confidentiel. Voici les étapes à suivre :',
        bullets: [
          '<strong>Simulation en ligne :</strong> Renseignez le montant nécessaire pour couvrir vos frais de divorce et choisissez la durée de remboursement adaptée à votre nouvelle situation. Notre simulateur vous indique immédiatement le montant de vos mensualités.',
          '<strong>Formulaire de demande :</strong> Complétez votre dossier en quelques minutes. Aucun justificatif lié à votre procédure de divorce n\'est requis. Votre demande est traitée avec la plus grande confidentialité.',
          '<strong>Signature et réception des fonds :</strong> Connectez-vous à votre Espace Personnel Sécurisé pour finaliser votre demande. Après acceptation et passé le délai légal de rétractation, les fonds sont versés sous 48h sur votre compte bancaire.',
        ],
        outro: 'Avec le crédit divorce SOrloz, vous pouvez tourner la page et construire un nouveau chapitre de votre vie en toute sérénité financière. Notre accompagnement discret et nos conditions transparentes sont à vos côtés dans cette période de transition.',
      },
    ],
    crosssell: {
      question: 'Vous devez aménager votre nouveau logement ?',
      body: 'Découvrez notre crédit déménagement pour financer votre installation dans votre nouveau chez-vous : mobilier, dépôt de garantie, travaux d\'aménagement.',
      link_href: '/prets-personnels/credit-projet/credit-demenagement',
      link_text: 'Découvrir le crédit déménagement',
    },
    example: { amount: 15000, months: 60, rate: 7.78 },
    faq_title: 'Vos questions sur le crédit divorce',
    faq: [
      { q: 'Quels frais de divorce puis-je financer avec ce crédit ?', a: 'Tous les frais liés à votre séparation : honoraires d\'avocat, frais de notaire, rachat de soulte, caution et premiers loyers, mobilier, déménagement… Le crédit divorce est un prêt personnel sans justificatif.' },
      { q: 'Puis-je emprunter seul(e) après un divorce ?', a: 'Oui, le crédit divorce SOrloz est un prêt personnel individuel. Vous empruntez en votre nom propre, sans besoin du consentement de votre ex-conjoint.' },
      { q: 'Le crédit divorce est-il confidentiel ?', a: 'Oui, votre demande est entièrement confidentielle. Aucune information n\'est communiquée à un tiers sans votre accord.' },
      { q: 'Quel montant puis-je emprunter pour faire face à un divorce ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € selon vos besoins et votre capacité de remboursement.' },
    ],
    features_name: 'Divorce',
    articles: [
      { icon: '⚖️', tag: 'Divorce', href: '/conseils', title: 'Combien coûte un divorce en France ?', excerpt: 'Honoraires d\'avocat, frais de notaire, rachat de soulte… Découvrez le budget moyen d\'un divorce et les postes à anticiper.' },
      { icon: '💡', tag: 'Conseil', href: '/conseils', title: 'Rachat de soulte : comment ça marche ?', excerpt: 'Tout comprendre sur le rachat de soulte pour conserver le bien immobilier après un divorce ou une séparation.' },
      { icon: '📋', tag: 'Pratique', href: '/conseils', title: 'Divorce et finances : les démarches à connaître', excerpt: 'Comptes joints, crédits en cours, partage des biens… Les étapes financières clés pour bien gérer votre séparation.' },
    ],
  },

  '/prets-personnels/credit-projet/credit-retraite': {
    icon: '🏖️', bg: 'var(--green-bg)',
    title_fr: 'Crédit retraite',
    title_hero: 'Crédit retraite : profitez de chaque instant',
    hero_fr: 'Profitez pleinement de votre retraite',
    desc_fr: 'La retraite est une nouvelle aventure ! Voyages, loisirs, aménagement de votre maison… Le crédit retraite SOrloz vous aide à financer vos projets pour en profiter pleinement.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-projet', label: 'Crédit projet' },
    ],
    testimonial: {
      monthly: '291,72', months: 48, names: 'Jean-Pierre &amp; Monique',
      amount: '12 000', rate: '7,78', total_due: '14 002,44',
      purpose: 'aménagement véranda et voyage au Portugal',
    },
    content: {
      heading: 'La retraite, c\'est maintenant que tout commence',
      subheading: 'Financez vos projets de retraite avec SOrloz',
      body: 'La retraite est bien plus qu\'une fin de carrière : c\'est le début d\'un nouveau chapitre riche en projets. Voyages que vous avez toujours repoussés, aménagement de votre maison pour plus de confort, activités sportives ou culturelles, aide à vos petits-enfants… Le crédit retraite SOrloz vous permet de concrétiser toutes ces envies sans puiser dans votre épargne de précaution. Notre prêt personnel non affecté s\'adapte à votre nouveau rythme de vie et à votre budget de retraité.\n\nPour découvrir toutes nos solutions de financement, consultez notre page <a href="/prets-personnels" style="color:var(--red);font-weight:600">prêts personnels</a>.',
    },
    why: {
      heading: 'Pourquoi choisir un crédit retraite SOrloz pour financer vos projets ?',
      intro: 'La retraite s\'accompagne souvent d\'une baisse de revenus, mais pas d\'une baisse d\'envies. Le crédit retraite SOrloz vous offre la possibilité de réaliser vos projets tout en préservant votre épargne. Voici les avantages de notre solution :',
      sections: [
        { title: 'Préservez votre épargne de précaution', body: 'À la retraite, votre épargne constitue un filet de sécurité essentiel pour faire face aux imprévus. Plutôt que d\'y puiser pour financer un voyage ou des travaux d\'aménagement, le crédit retraite vous permet de répartir la dépense dans le temps grâce à des mensualités adaptées à votre pension. Vous conservez ainsi votre capital tout en profitant pleinement de vos projets, sans vous priver ni compromettre votre sécurité financière à long terme.' },
        { title: 'Des mensualités adaptées à votre pension', body: 'Chez SOrloz, nous prenons en compte la réalité de vos revenus de retraité pour vous proposer des mensualités confortables. Votre taux est fixe pour toute la durée du contrat, ce qui signifie que vos remboursements ne changeront jamais, même si les conditions du marché évoluent. Cette prévisibilité est particulièrement précieuse lorsque vos revenus sont stables et que vous devez gérer votre budget avec rigueur. Nous vous accompagnons pour trouver le bon équilibre entre durée et mensualité.' },
        { title: 'Une demande accessible et sans complications', body: 'Nous savons que les démarches administratives peuvent être décourageantes. C\'est pourquoi notre processus de demande est simple, rapide et entièrement en ligne. Pas de rendez-vous en agence, pas de paperasse excessive : vous remplissez votre demande en quelques minutes depuis votre domicile. Nos conseillers sont également disponibles par téléphone pour vous accompagner si vous le souhaitez, avec patience et bienveillance, à chaque étape de votre demande.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit retraite sur mesure pour votre projet',
        subheading: 'Options de personnalisation',
        body: 'Lorsque vous choisissez un crédit retraite avec SOrloz, vous pouvez adapter le prêt à vos envies et à votre capacité financière de retraité.',
        bullets: [
          '<strong>Montant :</strong> Déterminez la somme dont vous avez besoin pour réaliser votre projet de retraite. Qu\'il s\'agisse d\'un voyage, de travaux d\'adaptation de votre logement ou d\'un nouvel équipement, le montant peut varier de 5 500 € à 60 000 €.',
          '<strong>Durée :</strong> Choisissez la période de remboursement la plus adaptée à votre pension de retraite, de 12 à 84 mois. Une durée plus longue permet de réduire vos mensualités et de préserver votre confort au quotidien.',
          '<strong>Mensualités :</strong> Ajustez le montant de vos remboursements pour qu\'ils s\'intègrent parfaitement dans votre budget de retraité, en tenant compte de vos charges fixes et de votre reste à vivre.',
        ],
        outro: 'Le crédit retraite SOrloz s\'adapte à tous les projets : du petit plaisir ponctuel au grand voyage en passant par l\'aménagement de votre résidence principale ou secondaire.',
      },
      {
        heading: 'Comment obtenir votre crédit retraite avec SOrloz ?',
        body: 'Obtenir un crédit retraite chez SOrloz est simple et rapide, même si vous n\'êtes pas à l\'aise avec Internet. Voici les étapes :',
        bullets: [
          '<strong>Simulation en ligne :</strong> Renseignez le montant souhaité et la durée de remboursement. Notre simulateur calcule instantanément vos mensualités et le coût total de votre crédit, pour que vous puissiez comparer les options en toute transparence.',
          '<strong>Formulaire de demande :</strong> Complétez votre dossier en quelques minutes. Nous vous demandons des informations simples sur votre situation et vos revenus de retraite. Aucun justificatif de dépense n\'est requis.',
          '<strong>Signature et réception des fonds :</strong> Finalisez votre demande dans votre Espace Personnel Sécurisé. Après acceptation et passé le délai légal de rétractation, les fonds sont versés sous 48h sur votre compte bancaire.',
        ],
        outro: 'Avec le crédit retraite SOrloz, donnez un nouvel élan à votre vie de retraité. Profitez de vos années les plus libres pour réaliser tout ce que vous avez remis à plus tard, avec un financement adapté et des conseillers à votre écoute.',
      },
    ],
    crosssell: {
      question: 'Vous rêvez d\'un voyage pour votre retraite ?',
      body: 'Découvrez notre crédit vacances pour financer le séjour dont vous avez toujours rêvé : croisière, tour du monde ou escapade en Europe.',
      link_href: '/prets-personnels/credit-projet/credit-vacances',
      link_text: 'Découvrir le crédit vacances',
    },
    example: { amount: 12000, months: 48, rate: 7.78 },
    faq_title: 'Vos questions sur le crédit retraite',
    faq: [
      { q: 'Peut-on obtenir un crédit à la retraite ?', a: 'Oui, le crédit retraite SOrloz est accessible aux retraités. Votre pension de retraite est prise en compte comme revenu régulier pour l\'étude de votre dossier.' },
      { q: 'Quel montant puis-je emprunter à la retraite ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € selon votre pension de retraite et votre capacité de remboursement.' },
      { q: 'Y a-t-il une limite d\'âge pour emprunter ?', a: 'SOrloz étudie chaque dossier individuellement. L\'âge n\'est pas un critère d\'exclusion, c\'est votre capacité de remboursement qui détermine l\'éligibilité.' },
      { q: 'Quels projets puis-je financer avec un crédit retraite ?', a: 'Tous les projets : voyages, loisirs, aménagement du domicile, aide aux enfants ou petits-enfants, achat d\'équipement… Le crédit retraite est un prêt personnel non affecté.' },
    ],
    features_name: 'Retraite',
    articles: [
      { icon: '🏖️', tag: 'Retraite', href: '/conseils', title: 'Retraite : comment financer ses projets sans toucher à son épargne ?', excerpt: 'Découvrez les solutions pour profiter pleinement de votre retraite tout en préservant votre patrimoine et votre sécurité financière.' },
      { icon: '🏠', tag: 'Aménagement', href: '/conseils', title: 'Adapter son logement pour bien vieillir chez soi', excerpt: 'Douche à l\'italienne, monte-escalier, domotique… Les travaux d\'adaptation du domicile pour gagner en confort et en autonomie.' },
      { icon: '💡', tag: 'Conseil', href: '/conseils', title: 'Budget retraite : bien anticiper la baisse de revenus', excerpt: 'Nos conseils pour organiser votre budget à la retraite et continuer à vous faire plaisir avec une pension plus modeste.' },
    ],
  },

  '/prets-personnels/credit-projet/credit-naissance': {
    icon: '👶', bg: 'var(--green-bg)',
    title_fr: 'Crédit naissance',
    title_hero: 'Crédit naissance : accueillez bébé en toute sérénité',
    hero_fr: 'Préparez l\'arrivée de bébé',
    desc_fr: 'L\'arrivée d\'un enfant est un bonheur qui s\'accompagne de nombreux achats. Poussette, chambre, équipement… Le crédit naissance SOrloz vous aide à tout préparer.',
    parent: { href: '/prets-personnels/credit-projet', label_fr: 'Crédit projet' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-projet', label: 'Crédit projet' },
    ],
    testimonial: {
      monthly: '218,64', months: 36, names: 'Laura &amp; Maxime',
      amount: '7 000', rate: '7,78', total_due: '7 871,21',
      purpose: 'chambre et équipement bébé',
    },
    content: {
      heading: 'Préparez le nid douillet de votre bout de chou',
      subheading: 'Un prêt personnel pour accueillir bébé dans les meilleures conditions',
      body: 'L\'arrivée d\'un bébé est l\'un des plus beaux moments de la vie, mais c\'est aussi une période de dépenses importantes. Chambre à aménager, poussette, siège auto, vêtements, matériel de puériculture, garde-robe de maternité… La liste est longue et le budget peut vite devenir conséquent. Le crédit naissance SOrloz est un prêt personnel non affecté qui vous permet de financer sereinement tous ces achats, pour que l\'arrivée de bébé rime avec bonheur et non avec stress financier.\n\nPour découvrir toutes nos solutions de financement, consultez notre page <a href="/prets-personnels" style="color:var(--red);font-weight:600">prêts personnels</a>.',
    },
    why: {
      heading: 'Pourquoi choisir un crédit naissance SOrloz pour préparer l\'arrivée de bébé ?',
      intro: 'L\'arrivée d\'un enfant bouleverse le quotidien et le budget du foyer. Le crédit naissance SOrloz vous permet de tout préparer sereinement, sans sacrifier la qualité de l\'équipement ni votre épargne de précaution. Voici les avantages de notre solution :',
      sections: [
        { title: 'Équipez-vous sans faire de compromis', body: 'Quand on attend un bébé, on veut le meilleur pour lui : un lit sécurisé, une poussette confortable, un siège auto aux dernières normes, des vêtements de qualité. Mais tout cela a un coût, et les dépenses arrivent souvent en même temps. Le crédit naissance SOrloz vous permet d\'acheter l\'ensemble de l\'équipement nécessaire sans avoir à faire de compromis sur la qualité ou la sécurité. Vous choisissez librement vos achats et vous remboursez à votre rythme, avec des mensualités adaptées à votre budget familial.' },
        { title: 'Anticipez les changements de votre budget familial', body: 'L\'arrivée d\'un enfant modifie profondément l\'équilibre financier du foyer : réduction du temps de travail, congé parental, frais de garde, dépenses courantes supplémentaires… Le crédit naissance vous permet de lisser ces dépenses dans le temps plutôt que de les concentrer sur les premiers mois. Avec un taux fixe et des mensualités stables, vous pouvez planifier votre budget familial en toute sérénité et aborder cette nouvelle étape avec confiance.' },
        { title: 'Un processus rapide pour ne rien manquer', body: 'Les neuf mois de grossesse passent vite, et il y a tant de choses à préparer avant l\'arrivée de bébé. Chez SOrloz, notre processus de demande est entièrement en ligne et ne prend que quelques minutes. Vous obtenez une réponse de principe immédiate et les fonds sont disponibles sous 48 heures après validation de votre dossier. Vous avez ainsi tout le temps de choisir, comparer et acheter les équipements dont vous avez besoin, sans précipitation et en toute tranquillité.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit naissance sur mesure pour votre projet',
        subheading: 'Options de personnalisation',
        body: 'Lorsque vous choisissez un crédit naissance avec SOrloz, vous pouvez adapter le prêt aux besoins spécifiques de votre projet parental.',
        bullets: [
          '<strong>Montant :</strong> Déterminez la somme dont vous avez besoin pour préparer l\'arrivée de bébé. Qu\'il s\'agisse uniquement de puériculture ou d\'un aménagement complet de la chambre et de la maison, le montant peut varier de 5 500 € à 60 000 €.',
          '<strong>Durée :</strong> Choisissez la période de remboursement la plus adaptée à votre situation familiale, de 12 à 84 mois. Tenez compte de l\'impact éventuel d\'un congé parental sur vos revenus pour trouver la bonne durée.',
          '<strong>Mensualités :</strong> Ajustez le montant de vos remboursements mensuels pour qu\'ils restent compatibles avec votre nouveau budget familial, même si un des parents réduit son activité professionnelle.',
        ],
        outro: 'Le crédit naissance SOrloz accompagne tous les projets parentaux : premier enfant, naissance multiple, adoption ou encore aménagement d\'un logement plus grand pour accueillir votre famille qui s\'agrandit.',
      },
      {
        heading: 'Comment obtenir votre crédit naissance avec SOrloz ?',
        body: 'Obtenir un crédit naissance chez SOrloz est simple et rapide, pour que vous puissiez vous concentrer sur l\'essentiel : l\'arrivée de bébé. Voici les étapes :',
        bullets: [
          '<strong>Simulation en ligne :</strong> Renseignez le montant envisagé pour vos achats de naissance et choisissez la durée de remboursement adaptée à votre budget familial. Notre simulateur affiche instantanément vos mensualités.',
          '<strong>Formulaire de demande :</strong> Complétez votre dossier en quelques minutes avec les informations nécessaires. Aucun justificatif d\'achat ou certificat de grossesse n\'est requis : c\'est un prêt personnel non affecté.',
          '<strong>Signature et réception des fonds :</strong> Finalisez votre demande dans votre Espace Personnel Sécurisé. Après acceptation et passé le délai légal de rétractation, les fonds sont versés sous 48h sur votre compte bancaire.',
        ],
        outro: 'Avec le crédit naissance SOrloz, accueillez votre bébé dans les meilleures conditions. Nos solutions flexibles, notre accompagnement bienveillant et nos taux compétitifs vous permettent de vivre pleinement ce moment unique sans pression financière.',
      },
    ],
    crosssell: {
      question: 'Vous préparez aussi votre mariage ?',
      body: 'Découvrez notre crédit mariage pour organiser la cérémonie de vos rêves, de la salle de réception au voyage de noces.',
      link_href: '/prets-personnels/credit-projet/credit-mariage',
      link_text: 'Découvrir le crédit mariage',
    },
    example: { amount: 7000, months: 36, rate: 7.78 },
    faq_title: 'Vos questions sur le crédit naissance',
    faq: [
      { q: 'Quels achats puis-je financer avec le crédit naissance ?', a: 'Tous les achats liés à l\'arrivée de bébé : chambre, poussette, siège auto, vêtements, matériel de puériculture, aménagement du logement… Le crédit naissance est un prêt personnel sans justificatif.' },
      { q: 'Quel montant emprunter pour préparer l\'arrivée de bébé ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € selon vos besoins et votre capacité de remboursement. Le budget moyen pour un premier bébé se situe entre 3 000 € et 10 000 €.' },
      { q: 'Peut-on faire une demande à deux parents ?', a: 'Oui, vous pouvez faire une demande de crédit naissance à deux co-emprunteurs pour augmenter votre capacité d\'emprunt et obtenir des conditions adaptées.' },
      { q: 'Quand faut-il faire sa demande de crédit naissance ?', a: 'Idéalement dès le début du deuxième trimestre de grossesse, pour avoir le temps de préparer sereinement la chambre et l\'équipement de bébé avant le jour J.' },
    ],
    features_name: 'Naissance',
    articles: [
      { icon: '👶', tag: 'Naissance', href: '/conseils', title: 'Budget bébé : combien coûte l\'arrivée d\'un enfant ?', excerpt: 'Poussette, chambre, vêtements, garde… Découvrez le budget moyen pour accueillir un premier bébé et les postes de dépenses à prévoir.' },
      { icon: '💡', tag: 'Conseil', href: '/conseils', title: 'Liste de naissance : les indispensables à ne pas oublier', excerpt: 'De la maternité aux premiers mois : notre checklist complète pour préparer l\'arrivée de bébé sans rien oublier.' },
      { icon: '📋', tag: 'Pratique', href: '/conseils', title: 'Congé parental et finances : bien anticiper la baisse de revenus', excerpt: 'Nos conseils pour organiser votre budget familial lorsque l\'un des parents réduit son activité après la naissance.' },
    ],
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
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-auto', label: 'Crédit auto' },
    ],
    testimonial: {
      monthly: '338,86', months: 60, names: 'Léa &amp; Romain',
      amount: '18 000', rate: '4,90', total_due: '20 331,49',
      purpose: 'achat d\'un Toyota Yaris Cross hybride',
    },
    content: {
      heading: 'Crédit voiture hybride : roulez malin, roulez responsable',
      subheading: 'Profitez du taux éco-responsable SOrloz à 4,90%',
      body: 'Le crédit voiture hybride SOrloz est un prêt personnel à taux préférentiel destiné à financer l\'achat de votre véhicule hybride, qu\'il soit rechargeable (PHEV) ou non rechargeable (HEV). Avec un TAEG fixe à partir de 4,90%, vous réalisez une économie significative par rapport au taux standard. Empruntez entre 5 500 € et 60 000 € et remboursez sur 12 à 84 mois, le tout sans frais de dossier.\n\nL\'hybride représente aujourd\'hui un excellent compromis entre performance, économies de carburant et respect de l\'environnement. Pour en savoir plus sur l\'ensemble de nos solutions, consultez notre page <a href="/prets-personnels/credit-auto" style="color:var(--red);font-weight:600">crédit auto</a>.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit voiture hybride SOrloz ?',
      intro: 'L\'hybride combine le meilleur des deux motorisations. SOrloz vous accompagne dans cette transition avec un financement à taux réduit et des conditions transparentes.',
      sections: [
        { title: 'Un taux préférentiel réservé aux véhicules propres', body: 'Avec un TAEG fixe à partir de 4,90%, le crédit voiture hybride SOrloz vous fait bénéficier d\'un taux nettement inférieur au taux standard de 7,60%. Cette réduction représente une économie concrète sur le coût total de votre crédit, pouvant atteindre plusieurs centaines d\'euros selon le montant et la durée choisis. C\'est notre manière de récompenser votre engagement en faveur d\'une mobilité plus responsable.' },
        { title: 'Un financement indépendant pour mieux négocier', body: 'Le crédit voiture hybride SOrloz est un prêt personnel non affecté : vous disposez des fonds librement et vous négociez le prix de votre véhicule comme un acheteur au comptant. Cette indépendance vous donne un véritable pouvoir de négociation face au concessionnaire ou au vendeur particulier, ce qui peut faire une différence significative sur le prix final de votre véhicule hybride.' },
        { title: 'Cumulable avec les aides publiques', body: 'Le crédit voiture hybride SOrloz est parfaitement cumulable avec les dispositifs d\'aide à l\'acquisition de véhicules propres : prime à la conversion, bonus écologique pour les hybrides rechargeables éligibles, et aides régionales le cas échéant. En combinant ces aides avec notre taux préférentiel, vous optimisez le coût global de votre projet automobile tout en contribuant à la réduction des émissions de CO2.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit voiture hybride sur mesure',
        subheading: 'Options de personnalisation',
        body: 'Avec SOrloz, vous adaptez votre crédit voiture hybride à vos besoins précis.',
        bullets: [
          '<strong>Montant :</strong> Empruntez de 5 500 € à 60 000 € pour couvrir l\'achat de votre véhicule hybride, qu\'il s\'agisse d\'un SUV familial, d\'une berline compacte ou d\'un crossover urbain.',
          '<strong>Durée :</strong> Choisissez une durée de remboursement de 12 à 84 mois selon vos capacités financières. Une durée plus longue réduit vos mensualités pour un budget quotidien plus serein.',
          '<strong>Mensualités :</strong> Vos mensualités sont fixes et connues dès le départ. Ajustez-les pour qu\'elles correspondent à votre reste à vivre et à vos objectifs financiers.',
        ],
        outro: 'Que vous optiez pour un hybride rechargeable offrant une autonomie électrique au quotidien ou un hybride classique pour réduire votre consommation, SOrloz finance votre projet.',
      },
      {
        heading: 'Comment obtenir votre crédit voiture hybride avec SOrloz ?',
        body: 'Financer votre véhicule hybride avec SOrloz est simple et rapide. Voici les étapes :',
        bullets: [
          '<strong>Simulez votre crédit en ligne :</strong> Indiquez le montant souhaité pour votre véhicule hybride et découvrez instantanément vos mensualités et le taux applicable.',
          '<strong>Complétez votre demande :</strong> Renseignez vos informations personnelles et financières en quelques minutes. L\'ensemble du processus est 100% dématérialisé.',
          '<strong>Recevez vos fonds :</strong> Après acceptation de votre dossier et passé le délai légal de rétractation, les fonds sont versés sur votre compte bancaire sous 48h.',
        ],
        outro: 'Avec le crédit voiture hybride SOrloz, vous combinez performance économique et engagement écologique. Profitez de notre taux préférentiel pour rouler propre sans vous ruiner.',
      },
    ],
    crosssell: {
      question: 'Vous hésitez avec le 100% électrique ?',
      body: 'Découvrez notre crédit voiture électrique avec le même taux préférentiel de 4,90% pour passer au tout électrique en toute sérénité.',
      link_href: '/prets-personnels/credit-auto/credit-voiture-electrique',
      link_text: 'Découvrir le crédit voiture électrique',
    },
    example: { amount: 20000, months: 60, rate: 4.90 },
    faq_title: 'Vos questions sur le crédit voiture hybride',
    faq: [
      { q: 'Quels véhicules hybrides sont éligibles au taux préférentiel ?', a: 'Tous les véhicules hybrides rechargeables (PHEV) et hybrides non-rechargeables (HEV) sont éligibles au taux préférentiel de 4,90%, sous réserve de justificatif de conformité du véhicule.' },
      { q: 'Le crédit voiture hybride est-il cumulable avec la prime à la conversion ?', a: 'Oui, le crédit SOrloz est un prêt personnel indépendant, parfaitement cumulable avec la prime à la conversion, le bonus écologique et les aides régionales.' },
      { q: 'Quelle est la différence de coût entre le taux hybride et le taux standard ?', a: 'Le taux préférentiel de 4,90% au lieu de 7,60% vous fait économiser significativement sur le coût total du crédit. Par exemple, sur 20 000 € empruntés sur 60 mois, l\'économie dépasse 1 600 €.' },
      { q: 'Puis-je acheter un véhicule hybride d\'occasion avec ce crédit ?', a: 'Oui, le crédit voiture hybride SOrloz finance aussi bien les véhicules neufs que d\'occasion, sans limite d\'âge ni de kilométrage.' },
    ],
    features_name: 'Voiture hybride',
  },

  '/prets-personnels/credit-auto/credit-voiture-thermique': {
    icon: '⛽', bg: 'var(--green-bg)',
    title_fr: 'Crédit voiture thermique',
    hero_fr: 'Financez votre voiture thermique',
    desc_fr: 'Vous optez pour un véhicule thermique ? SOrloz vous propose un financement personnalisé pour l\'achat de votre voiture essence ou diesel.',
    parent: { href: '/prets-personnels/credit-auto', label_fr: 'Crédit auto' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-auto', label: 'Crédit auto' },
    ],
    testimonial: {
      monthly: '363,38', months: 48, names: 'Nicolas &amp; Stéphanie',
      amount: '15 000', rate: '7,60', total_due: '17 442,43',
      purpose: 'achat d\'une Dacia Duster essence',
    },
    content: {
      heading: 'Crédit voiture thermique : financez votre véhicule essence ou diesel',
      subheading: 'Un prêt personnel adapté à votre projet automobile',
      body: 'Le crédit voiture thermique SOrloz est un prêt personnel non affecté qui vous permet de financer l\'achat de votre véhicule essence ou diesel, neuf ou d\'occasion. Avec un TAEG fixe à partir de 7,60%, vous bénéficiez de mensualités stables sur toute la durée de votre remboursement. Empruntez de 5 500 € à 60 000 € sur une durée de 12 à 84 mois.\n\nQue vous recherchiez une citadine pour vos trajets quotidiens, un SUV familial ou un utilitaire pour vos besoins professionnels, le crédit voiture thermique SOrloz s\'adapte à tous vos projets. Pour découvrir l\'ensemble de nos offres, rendez-vous sur notre page <a href="/prets-personnels/credit-auto" style="color:var(--red);font-weight:600">crédit auto</a>.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit voiture thermique SOrloz ?',
      intro: 'Le moteur thermique reste un choix pertinent pour de nombreux automobilistes. SOrloz vous propose un financement transparent, sans frais cachés, pour concrétiser votre projet.',
      sections: [
        { title: 'Liberté de choix du véhicule', body: 'Le crédit voiture thermique SOrloz est un prêt personnel non affecté : vous êtes libre de choisir votre véhicule chez le concessionnaire, en concession multimarque ou auprès d\'un particulier. Essence, diesel, GPL ou même bioéthanol, vous financez le véhicule thermique qui correspond exactement à vos besoins de conduite et à votre budget, sans restriction de marque ni de motorisation.' },
        { title: 'Des mensualités fixes et prévisibles', body: 'Votre TAEG est fixé dès la souscription et ne varie pas pendant toute la durée de votre crédit. Vos mensualités restent identiques du premier au dernier mois, ce qui vous permet de gérer votre budget automobile en toute sérénité. Aucune mauvaise surprise, aucune indexation : vous savez précisément combien vous remboursez chaque mois et quel sera le coût total de votre financement.' },
        { title: 'Négociez comme un acheteur comptant', body: 'En finançant votre voiture thermique avec un prêt personnel SOrloz, vous disposez des fonds avant même de vous rendre chez le vendeur. Cet avantage vous place en position de force pour négocier le prix d\'achat, les options ou la reprise de votre ancien véhicule. Les vendeurs sont généralement plus enclins à accorder des remises à un acheteur qui règle comptant, ce qui peut compenser une partie du coût du crédit.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit voiture thermique sur mesure',
        subheading: 'Options de personnalisation',
        body: 'Avec SOrloz, vous configurez votre crédit voiture thermique selon vos besoins.',
        bullets: [
          '<strong>Montant :</strong> Empruntez de 5 500 € à 60 000 € pour financer l\'achat de votre véhicule thermique, que ce soit une citadine, une berline, un SUV ou un utilitaire.',
          '<strong>Durée :</strong> Optez pour une durée de remboursement de 12 à 84 mois. Plus la durée est longue, plus vos mensualités sont réduites pour préserver votre pouvoir d\'achat.',
          '<strong>Mensualités :</strong> Vos mensualités sont fixes et déterminées dès la simulation. Ajustez le curseur pour trouver le juste équilibre entre durée et montant de remboursement mensuel.',
        ],
        outro: 'Le crédit voiture thermique SOrloz s\'adapte à tous les profils d\'automobilistes, du conducteur occasionnel au grand rouleur.',
      },
      {
        heading: 'Comment obtenir votre crédit voiture thermique avec SOrloz ?',
        body: 'Votre demande de financement se fait entièrement en ligne en quelques étapes simples :',
        bullets: [
          '<strong>Lancez votre simulation :</strong> Indiquez le montant dont vous avez besoin et la durée souhaitée. Vous obtenez instantanément le détail de vos mensualités et le coût total du crédit.',
          '<strong>Constituez votre dossier :</strong> Remplissez le formulaire en ligne avec vos informations personnelles et financières. La démarche est 100% dématérialisée et ne prend que quelques minutes.',
          '<strong>Signez et recevez vos fonds :</strong> Après validation de votre dossier, signez électroniquement votre contrat. Les fonds sont versés sur votre compte sous 48h après le délai légal de rétractation.',
        ],
        outro: 'Avec SOrloz, financer votre voiture thermique n\'a jamais été aussi simple. Faites votre simulation dès maintenant et roulez en toute tranquillité.',
      },
    ],
    crosssell: {
      question: 'Vous envisagez de passer à l\'hybride ou à l\'électrique ?',
      body: 'Profitez de notre taux préférentiel de 4,90% réservé aux véhicules hybrides et électriques. Une économie significative sur le coût total de votre crédit.',
      link_href: '/prets-personnels/credit-auto/credit-voiture-hybride',
      link_text: 'Découvrir le crédit voiture hybride',
    },
    example: { amount: 18000, months: 48, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit voiture thermique',
    faq: [
      { q: 'Le crédit voiture thermique finance-t-il l\'essence et le diesel ?', a: 'Oui, le crédit voiture thermique SOrloz finance tous les types de motorisation thermique : essence, diesel, GPL, bioéthanol et gaz naturel.' },
      { q: 'Puis-je financer une voiture thermique d\'occasion ?', a: 'Absolument. Le crédit SOrloz est un prêt personnel non affecté qui finance aussi bien les véhicules neufs que d\'occasion, sans limite d\'âge ni de kilométrage.' },
      { q: 'Quel est le taux pour un crédit voiture thermique ?', a: 'Le TAEG fixe est à partir de 7,60% pour un crédit voiture thermique. Un taux préférentiel de 4,90% est disponible pour les véhicules hybrides et électriques.' },
      { q: 'Quand les fonds sont-ils disponibles ?', a: 'Après acceptation de votre dossier et passé le délai légal de rétractation de 14 jours, les fonds sont versés sur votre compte bancaire sous 48h.' },
    ],
    features_name: 'Voiture thermique',
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
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-moto', label: 'Crédit moto' },
    ],
    testimonial: {
      monthly: '290,71', months: 48, names: 'Maxime &amp; Clara',
      amount: '12 000', rate: '7,60', total_due: '13 953,94',
      purpose: 'achat d\'une Yamaha MT-07 neuve',
    },
    content: {
      heading: 'Crédit moto neuve : offrez-vous la moto de vos rêves',
      subheading: 'Un financement indépendant du concessionnaire moto',
      body: 'Le crédit moto neuve SOrloz est un prêt personnel non affecté qui vous permet de financer l\'achat de votre moto neuve sans passer par le financement proposé par le concessionnaire. Vous bénéficiez d\'un taux fixe et de mensualités stables sur toute la durée du crédit, sans frais de dossier. De 5 500 € à 60 000 €, financez la moto de vos rêves et négociez le prix comme un acheteur comptant.\n\nQue vous soyez un motard débutant à la recherche de votre première cylindrée ou un passionné qui souhaite monter en gamme, le crédit moto neuve SOrloz s\'adapte à tous les projets deux-roues. Retrouvez toutes nos offres sur notre page <a href="/prets-personnels/credit-moto" style="color:var(--red);font-weight:600">crédit moto</a>.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit moto neuve SOrloz ?',
      intro: 'Votre nouvelle moto mérite un financement à la hauteur de vos ambitions. SOrloz vous offre les meilleures conditions pour concrétiser votre rêve deux-roues.',
      sections: [
        { title: 'Indépendance vis-à-vis du concessionnaire', body: 'Avec le crédit moto neuve SOrloz, vous n\'êtes pas lié au financement proposé par le concessionnaire. Vous disposez des fonds en amont et vous négociez le prix de votre moto comme un acheteur qui paie comptant. Cette liberté vous donne un avantage concret lors de la négociation et vous permet de comparer sereinement les offres entre différents vendeurs sans contrainte de financement.' },
        { title: 'Un taux fixe pour un budget maîtrisé', body: 'Votre TAEG est fixé dès la souscription et ne change jamais pendant toute la durée de votre crédit. Vos mensualités restent identiques du premier au dernier mois, ce qui vous permet de planifier sereinement vos dépenses moto : assurance, entretien, équipement. Aucune surprise, aucun frais caché, vous savez exactement ce que vous remboursez chaque mois.' },
        { title: 'Rapidité et simplicité de la démarche', body: 'Toute votre demande de crédit moto neuve se fait en ligne, en quelques minutes seulement. Vous obtenez une réponse de principe immédiate et, après validation de votre dossier, les fonds sont disponibles sur votre compte sous 48h. Cette rapidité vous permet de saisir les bonnes affaires et de réserver votre moto sans délai, avant qu\'elle ne soit vendue à un autre acheteur.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit moto neuve sur mesure',
        subheading: 'Options de personnalisation',
        body: 'Avec SOrloz, vous configurez votre crédit moto neuve selon vos besoins.',
        bullets: [
          '<strong>Montant :</strong> Empruntez de 5 500 € à 60 000 € pour couvrir l\'achat de votre moto neuve, du roadster sportif à la routière grand tourisme, en passant par le trail aventure.',
          '<strong>Durée :</strong> Choisissez une durée de remboursement de 12 à 84 mois. Optez pour une durée plus longue afin de réduire vos mensualités et préserver votre budget équipement.',
          '<strong>Mensualités :</strong> Vos mensualités sont fixes et déterminées dès la simulation. Trouvez l\'équilibre parfait entre la durée de remboursement et le montant mensuel qui vous convient.',
        ],
        outro: 'Du permis A2 à la moto de vos rêves, SOrloz vous accompagne à chaque étape de votre parcours motard avec un financement adapté.',
      },
      {
        heading: 'Comment obtenir votre crédit moto neuve avec SOrloz ?',
        body: 'Financer votre moto neuve avec SOrloz est rapide et entièrement en ligne :',
        bullets: [
          '<strong>Simulez votre crédit :</strong> Renseignez le montant de votre moto neuve et la durée souhaitée. Vous obtenez instantanément le détail de vos mensualités et le coût total.',
          '<strong>Déposez votre demande :</strong> Complétez le formulaire en ligne avec vos informations personnelles et financières. La démarche est 100% dématérialisée et ne prend que quelques minutes.',
          '<strong>Recevez vos fonds :</strong> Après acceptation et passé le délai légal de rétractation, les fonds sont versés sur votre compte sous 48h. Rendez-vous chez le concessionnaire !',
        ],
        outro: 'Avec le crédit moto neuve SOrloz, prenez la route l\'esprit libre. Votre prochaine moto est à portée de financement.',
      },
    ],
    crosssell: {
      question: 'Vous préférez une moto d\'occasion ?',
      body: 'Découvrez notre crédit moto occasion avec les mêmes avantages : taux fixe, 0 € de frais de dossier et fonds disponibles sous 48h.',
      link_href: '/prets-personnels/credit-moto/credit-moto-occasion',
      link_text: 'Découvrir le crédit moto occasion',
    },
    example: { amount: 10000, months: 48, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit moto neuve',
    faq: [
      { q: 'Quel montant puis-je emprunter pour une moto neuve ?', a: 'Vous pouvez emprunter entre 5 500 € et 60 000 € selon le prix de la moto et votre capacité de remboursement.' },
      { q: 'Le crédit moto neuve est-il différent du crédit auto ?', a: 'Non, il s\'agit du même prêt personnel non affecté. Vous êtes libre de l\'utiliser pour financer une moto, un scooter ou tout autre deux-roues motorisé.' },
      { q: 'Puis-je financer aussi l\'équipement moto ?', a: 'Oui, le crédit moto neuve SOrloz est un prêt personnel libre d\'emploi. Vous pouvez inclure le casque, le blouson, les gants et tout l\'équipement dans votre financement.' },
      { q: 'Les motos électriques bénéficient-elles d\'un taux réduit ?', a: 'Oui, les motos électriques et hybrides sont éligibles au taux préférentiel de 4,90% dans le cadre de notre offre éco-responsable.' },
    ],
    features_name: 'Moto neuve',
  },

  '/prets-personnels/credit-moto/credit-moto-occasion': {
    icon: '🏍️', bg: 'var(--teal-bg)',
    title_fr: 'Crédit moto occasion',
    hero_fr: 'Financez votre moto d\'occasion',
    desc_fr: 'Trouvez la moto d\'occasion idéale et financez-la avec SOrloz. Des conditions avantageuses pour votre projet deux-roues.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-moto', label: 'Crédit moto' },
    ],
    testimonial: {
      monthly: '249,22', months: 36, names: 'Alexandre &amp; Julie',
      amount: '8 000', rate: '7,60', total_due: '8 971,82',
      purpose: 'achat d\'une Kawasaki Z650 occasion',
    },
    content: {
      heading: 'Crédit moto occasion : trouvez la perle rare sans compromis',
      subheading: 'Financer une moto d\'occasion, c\'est simple avec SOrloz',
      body: 'Le crédit moto occasion SOrloz est un prêt personnel non affecté qui vous permet de financer l\'achat de votre moto d\'occasion, que ce soit auprès d\'un professionnel ou d\'un particulier. Aucune restriction d\'âge ni de kilométrage pour le véhicule : vous choisissez la moto qui vous plaît et SOrloz vous avance les fonds. Remboursez en mensualités fixes sur 12 à 84 mois.\n\nLe marché de la moto d\'occasion regorge d\'opportunités pour tous les budgets. Que vous recherchiez un trail d\'aventure, un roadster urbain ou une sportive racée, le crédit moto occasion SOrloz vous donne les moyens de concrétiser votre projet. Découvrez toutes nos offres sur notre page <a href="/prets-personnels/credit-moto" style="color:var(--red);font-weight:600">crédit moto</a>.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit moto occasion SOrloz ?',
      intro: 'Le marché de l\'occasion offre un excellent rapport qualité-prix pour les motards avertis. SOrloz vous propose un financement flexible et sans contrainte pour dénicher la moto idéale.',
      sections: [
        { title: 'Achat entre particuliers ou professionnel', body: 'Contrairement à certains crédits moto du marché, le prêt personnel SOrloz vous permet d\'acheter votre moto d\'occasion aussi bien chez un concessionnaire que chez un particulier. Vous avez ainsi accès à l\'intégralité du marché de l\'occasion et pouvez comparer les offres en toute liberté. Les petites annonces entre particuliers recèlent souvent les meilleures affaires pour les motards qui savent ce qu\'ils recherchent.' },
        { title: 'Aucune restriction sur le véhicule', body: 'Le crédit moto occasion SOrloz ne pose aucune condition d\'âge, de kilométrage ni de cylindrée sur la moto financée. Que vous jetiez votre dévolu sur une moto récente avec peu de kilomètres ou sur un modèle plus ancien qui a du caractère, votre financement reste le même. Cette liberté vous permet de choisir en fonction de vos envies et de votre budget, sans contrainte administrative.' },
        { title: 'Des mensualités adaptées à votre budget', body: 'Avec un taux fixe garanti sur toute la durée du crédit, vous connaissez à l\'avance le montant exact de chaque mensualité. Pas de variable, pas de surprise : vous maîtrisez votre budget moto de A à Z. En ajustant la durée de remboursement, vous pouvez réduire vos mensualités pour conserver une marge confortable pour l\'assurance, l\'entretien et l\'équipement de votre deux-roues.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit moto occasion sur mesure',
        subheading: 'Options de personnalisation',
        body: 'Avec SOrloz, vous adaptez votre crédit moto occasion à votre projet.',
        bullets: [
          '<strong>Montant :</strong> Empruntez de 5 500 € à 60 000 € pour financer votre moto d\'occasion. Le marché de l\'occasion permet de s\'offrir des modèles haut de gamme à des prix accessibles.',
          '<strong>Durée :</strong> Choisissez une durée de remboursement de 12 à 84 mois. Une durée courte réduit le coût total, une durée longue allège vos mensualités.',
          '<strong>Mensualités :</strong> Vos mensualités sont fixes et connues dès la simulation. Gardez une marge de budget pour l\'équipement, l\'assurance et l\'entretien de votre moto.',
        ],
        outro: 'Une moto d\'occasion bien choisie, c\'est le plaisir de rouler sans se ruiner. SOrloz vous aide à concrétiser votre projet deux-roues.',
      },
      {
        heading: 'Comment obtenir votre crédit moto occasion avec SOrloz ?',
        body: 'Financer votre moto d\'occasion avec SOrloz se fait en quelques étapes simples :',
        bullets: [
          '<strong>Faites votre simulation :</strong> Indiquez le montant nécessaire pour votre moto d\'occasion et choisissez la durée de remboursement. Le résultat est immédiat.',
          '<strong>Complétez votre dossier en ligne :</strong> Renseignez vos informations personnelles et financières. Aucun déplacement nécessaire, tout se fait depuis chez vous.',
          '<strong>Recevez vos fonds rapidement :</strong> Une fois votre dossier validé et le délai de rétractation passé, les fonds sont sur votre compte sous 48h. Vous pouvez conclure la vente.',
        ],
        outro: 'Avec le crédit moto occasion SOrloz, saisissez les bonnes affaires sans attendre. Votre future moto vous attend !',
      },
    ],
    crosssell: {
      question: 'Vous préférez une moto neuve ?',
      body: 'Découvrez notre crédit moto neuve avec les mêmes avantages : taux fixe, 0 € de frais de dossier et un financement rapide pour rouler sur du neuf.',
      link_href: '/prets-personnels/credit-moto/credit-moto-neuve',
      link_text: 'Découvrir le crédit moto neuve',
    },
    example: { amount: 7000, months: 36, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit moto occasion',
    faq: [
      { q: 'Puis-je acheter ma moto d\'occasion à un particulier ?', a: 'Oui, le crédit moto occasion SOrloz est un prêt personnel non affecté. Vous pouvez acheter votre moto chez un professionnel ou un particulier, sans restriction.' },
      { q: 'Y a-t-il une limite d\'âge ou de kilométrage pour la moto ?', a: 'Non, aucune restriction. Le crédit SOrloz finance votre moto d\'occasion quelle que soit son ancienneté ou son kilométrage.' },
      { q: 'Puis-je inclure les frais d\'équipement dans mon crédit ?', a: 'Oui, le prêt personnel SOrloz est libre d\'emploi. Vous pouvez financer la moto, le casque, le blouson, les gants et tout le nécessaire.' },
      { q: 'Quel délai pour recevoir les fonds ?', a: 'Après validation de votre dossier et passé le délai légal de rétractation de 14 jours, les fonds sont versés sous 48h sur votre compte bancaire.' },
    ],
    features_name: 'Moto occasion',
  },

  '/prets-personnels/credit-moto/credit-moto-hybride': {
    icon: '🔋', bg: 'var(--teal-bg)',
    title_fr: 'Crédit moto hybride',
    hero_fr: 'Financez votre moto hybride',
    desc_fr: 'Adoptez la mobilité hybride pour vos deux-roues. SOrloz vous propose un financement avantageux pour votre moto hybride.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-moto', label: 'Crédit moto' },
    ],
    testimonial: {
      monthly: '229,84', months: 48, names: 'Mathieu &amp; Émilie',
      amount: '10 000', rate: '4,90', total_due: '11 032,33',
      purpose: 'achat d\'un scooter hybride BMW CE 04',
    },
    content: {
      heading: 'Crédit moto hybride : la mobilité deux-roues de demain',
      subheading: 'Profitez du taux éco-responsable SOrloz à 4,90%',
      body: 'Le crédit moto hybride SOrloz est un prêt personnel à taux préférentiel dédié au financement de votre moto ou scooter hybride. Avec un TAEG fixe à partir de 4,90%, vous bénéficiez d\'un taux nettement inférieur au taux standard pour accompagner votre transition vers une mobilité deux-roues plus propre. Empruntez de 5 500 € à 60 000 € sur 12 à 84 mois.\n\nLa motorisation hybride fait son entrée dans l\'univers du deux-roues avec des modèles alliant performances et économies de carburant. Pour découvrir l\'ensemble de nos solutions de financement moto, consultez notre page <a href="/prets-personnels/credit-moto" style="color:var(--red);font-weight:600">crédit moto</a>.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit moto hybride SOrloz ?',
      intro: 'La technologie hybride arrive dans le monde du deux-roues. SOrloz accompagne cette évolution avec un financement à taux réduit pour les motards soucieux de leur empreinte environnementale.',
      sections: [
        { title: 'Un taux préférentiel pour encourager la mobilité propre', body: 'Avec un TAEG fixe à partir de 4,90% au lieu de 7,60%, le crédit moto hybride SOrloz récompense votre choix d\'une motorisation plus respectueuse de l\'environnement. Cette différence de taux représente une économie substantielle sur le coût total de votre financement, rendant l\'accès aux technologies hybrides encore plus abordable. C\'est notre engagement concret en faveur de la transition énergétique dans la mobilité deux-roues.' },
        { title: 'Un financement adapté aux nouveaux modèles', body: 'Le marché du deux-roues hybride est en pleine expansion avec de nouveaux modèles toujours plus performants. Le crédit moto hybride SOrloz vous permet de financer aussi bien un scooter hybride pour vos déplacements urbains qu\'une moto hybride pour vos escapades du week-end. Notre prêt personnel s\'adapte à toutes les cylindrées et à tous les constructeurs, sans restriction de marque ni de modèle.' },
        { title: 'Cumulable avec les aides à la mobilité propre', body: 'Le crédit moto hybride SOrloz est cumulable avec les différentes aides disponibles pour l\'acquisition de deux-roues propres : bonus écologique, prime à la conversion, aides régionales et municipales. En combinant ces dispositifs avec notre taux préférentiel, vous réduisez significativement le coût d\'acquisition de votre moto hybride tout en contribuant à améliorer la qualité de l\'air en ville.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit moto hybride sur mesure',
        subheading: 'Options de personnalisation',
        body: 'Avec SOrloz, vous personnalisez votre crédit moto hybride selon vos besoins.',
        bullets: [
          '<strong>Montant :</strong> Empruntez de 5 500 € à 60 000 € pour financer votre moto ou scooter hybride. Les modèles hybrides représentent un investissement qui se rentabilise grâce aux économies de carburant.',
          '<strong>Durée :</strong> Optez pour une durée de remboursement de 12 à 84 mois. Ajustez la durée pour que vos mensualités s\'intègrent naturellement dans votre budget mensuel.',
          '<strong>Mensualités :</strong> Vos mensualités sont fixes et prévisibles sur toute la durée du crédit. Combinez-les avec les économies réalisées sur le carburant pour un budget mobilité optimisé.',
        ],
        outro: 'La moto hybride combine le plaisir de conduite avec une conscience environnementale. SOrloz vous aide à franchir le pas avec un financement avantageux.',
      },
      {
        heading: 'Comment obtenir votre crédit moto hybride avec SOrloz ?',
        body: 'Votre financement moto hybride est à portée de clic. Suivez ces étapes simples :',
        bullets: [
          '<strong>Simulez votre crédit :</strong> Indiquez le montant de votre moto hybride et la durée souhaitée. Vous découvrez immédiatement vos mensualités au taux préférentiel de 4,90%.',
          '<strong>Complétez votre demande en ligne :</strong> Renseignez vos informations en quelques minutes. L\'ensemble de la démarche est dématérialisé, rapide et sécurisé.',
          '<strong>Recevez vos fonds :</strong> Après validation de votre dossier et passé le délai légal de rétractation, les fonds sont disponibles sur votre compte sous 48h.',
        ],
        outro: 'Avec le crédit moto hybride SOrloz, adoptez la mobilité de demain à un taux d\'aujourd\'hui. Faites votre simulation et roulez propre dès maintenant.',
      },
    ],
    crosssell: {
      question: 'Vous envisagez aussi un véhicule hybride ?',
      body: 'Profitez du même taux préférentiel de 4,90% pour financer votre voiture hybride avec notre crédit voiture hybride.',
      link_href: '/prets-personnels/credit-auto/credit-voiture-hybride',
      link_text: 'Découvrir le crédit voiture hybride',
    },
    example: { amount: 12000, months: 48, rate: 4.90 },
    faq_title: 'Vos questions sur le crédit moto hybride',
    faq: [
      { q: 'Quels deux-roues hybrides sont éligibles au taux préférentiel ?', a: 'Tous les deux-roues motorisés hybrides (motos, scooters, maxi-scooters) sont éligibles au taux préférentiel de 4,90%, sous réserve de justificatif de conformité du véhicule.' },
      { q: 'Le crédit moto hybride est-il cumulable avec le bonus écologique ?', a: 'Oui, le crédit SOrloz est un prêt personnel indépendant, cumulable avec le bonus écologique, la prime à la conversion et les aides locales.' },
      { q: 'Puis-je financer un scooter hybride avec ce crédit ?', a: 'Absolument. Le crédit moto hybride SOrloz finance tous les types de deux-roues hybrides : motos, scooters, maxi-scooters, quel que soit le constructeur.' },
      { q: 'Quelle économie par rapport au taux standard ?', a: 'Le taux préférentiel de 4,90% au lieu de 7,60% vous fait économiser significativement. Par exemple, sur 12 000 € empruntés sur 48 mois, l\'économie dépasse 700 €.' },
    ],
    features_name: 'Moto hybride',
  },

  '/prets-personnels/credit-moto/credit-moto-thermique': {
    icon: '⛽', bg: 'var(--teal-bg)',
    title_fr: 'Crédit moto thermique',
    hero_fr: 'Financez votre moto thermique',
    desc_fr: 'Vous préférez la puissance d\'un moteur thermique ? SOrloz finance votre moto thermique avec des taux compétitifs.',
    parent: { href: '/prets-personnels/credit-moto', label_fr: 'Crédit moto' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-moto', label: 'Crédit moto' },
    ],
    testimonial: {
      monthly: '280,37', months: 36, names: 'Damien &amp; Pauline',
      amount: '9 000', rate: '7,60', total_due: '10 093,30',
      purpose: 'achat d\'une Triumph Street Triple',
    },
    content: {
      heading: 'Crédit moto thermique : la passion du moteur à portée de financement',
      subheading: 'Un prêt personnel adapté à votre projet deux-roues',
      body: 'Le crédit moto thermique SOrloz est un prêt personnel non affecté qui vous permet de financer l\'achat de votre moto à moteur thermique, neuve ou d\'occasion. Avec un TAEG fixe à partir de 7,60%, vous bénéficiez de mensualités stables et prévisibles tout au long de votre remboursement. Empruntez de 5 500 € à 60 000 € sur 12 à 84 mois.\n\nLa moto thermique reste le choix de prédilection de millions de passionnés pour ses sensations de conduite inégalées, son autonomie et la richesse de l\'offre disponible sur le marché. Pour découvrir toutes nos solutions, consultez notre page <a href="/prets-personnels/credit-moto" style="color:var(--red);font-weight:600">crédit moto</a>.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit moto thermique SOrloz ?',
      intro: 'La moto thermique offre des sensations uniques et une offre pléthorique. SOrloz vous propose un financement simple et transparent pour concrétiser votre passion.',
      sections: [
        { title: 'Toutes les marques et cylindrées', body: 'Le crédit moto thermique SOrloz finance toutes les motos thermiques sans restriction de marque, de cylindrée ni de type. Roadster, sportive, trail, custom, routière ou café racer : quel que soit votre style de conduite, le prêt personnel SOrloz s\'adapte à votre projet. Vous pouvez financer une 125 cm3 pour vos débuts ou une grosse cylindrée pour vos virées du week-end, avec les mêmes conditions avantageuses.' },
        { title: 'Liberté d\'achat totale', body: 'En tant que prêt personnel non affecté, le crédit moto thermique SOrloz vous laisse entièrement libre dans votre achat. Concessionnaire officiel, revendeur multimarque, ou particulier : vous choisissez votre vendeur sans contrainte. Vous pouvez même inclure dans votre financement les frais annexes comme l\'équipement du motard, les accessoires ou la première révision, sans avoir à justifier l\'utilisation des fonds.' },
        { title: 'Un taux fixe sans surprise', body: 'Votre TAEG est déterminé dès la souscription et reste identique pendant toute la durée de votre crédit. Chaque mensualité est la même, du premier au dernier mois, ce qui facilite la gestion de votre budget moto au quotidien. Cette transparence est l\'un des engagements forts de SOrloz : pas de frais cachés, pas de clause surprise, juste un financement clair et honnête pour votre passion deux-roues.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit moto thermique sur mesure',
        subheading: 'Options de personnalisation',
        body: 'Avec SOrloz, vous configurez votre crédit moto thermique selon vos envies.',
        bullets: [
          '<strong>Montant :</strong> Empruntez de 5 500 € à 60 000 € pour financer votre moto thermique. Des petites cylindrées accessibles aux modèles premium, chaque projet a son financement.',
          '<strong>Durée :</strong> Choisissez une durée de remboursement de 12 à 84 mois. Adaptez la durée à votre situation pour des mensualités qui respectent votre budget.',
          '<strong>Mensualités :</strong> Vos mensualités sont fixes et connues dès le départ. Conservez une marge confortable pour l\'assurance, l\'entretien et les sorties sur route.',
        ],
        outro: 'Que vous soyez un motard du dimanche ou un aventurier au long cours, le crédit moto thermique SOrloz s\'adapte à votre profil et à vos ambitions.',
      },
      {
        heading: 'Comment obtenir votre crédit moto thermique avec SOrloz ?',
        body: 'Votre crédit moto thermique se demande entièrement en ligne :',
        bullets: [
          '<strong>Simulez votre financement :</strong> Renseignez le montant de votre moto et la durée souhaitée. Vous obtenez immédiatement vos mensualités et le coût total du crédit.',
          '<strong>Déposez votre demande :</strong> Complétez le formulaire en ligne en quelques minutes avec vos informations personnelles et financières. Tout est dématérialisé.',
          '<strong>Recevez vos fonds :</strong> Après validation et passé le délai légal de rétractation, les fonds sont versés sur votre compte sous 48h. La route vous appartient !',
        ],
        outro: 'Avec le crédit moto thermique SOrloz, votre prochaine moto n\'attend plus que vous. Faites votre simulation et prenez la route de vos rêves.',
      },
    ],
    crosssell: {
      question: 'Vous envisagez une moto hybride ou électrique ?',
      body: 'Profitez de notre taux préférentiel de 4,90% réservé aux deux-roues hybrides et électriques. Une économie significative sur votre financement.',
      link_href: '/prets-personnels/credit-moto/credit-moto-hybride',
      link_text: 'Découvrir le crédit moto hybride',
    },
    example: { amount: 8000, months: 36, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit moto thermique',
    faq: [
      { q: 'Le crédit moto thermique finance-t-il toutes les cylindrées ?', a: 'Oui, le crédit moto thermique SOrloz finance toutes les cylindrées, de la 125 cm3 à la moto de grosse cylindrée, sans restriction.' },
      { q: 'Puis-je financer une moto thermique d\'occasion ?', a: 'Absolument. Le crédit SOrloz est un prêt personnel non affecté qui finance les motos neuves comme d\'occasion, sans limite d\'âge ni de kilométrage.' },
      { q: 'Quel est le taux pour un crédit moto thermique ?', a: 'Le TAEG fixe est à partir de 7,60% pour un crédit moto thermique. Un taux préférentiel de 4,90% est disponible pour les motos hybrides et électriques.' },
      { q: 'Puis-je inclure l\'équipement dans mon financement ?', a: 'Oui, le prêt personnel SOrloz est libre d\'emploi. Vous pouvez financer la moto, le casque, le blouson, les bottes et tout l\'équipement nécessaire.' },
    ],
    features_name: 'Moto thermique',
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
    title_hero: 'Crédit travaux intérieur : transformez votre chez-vous',
    hero_fr: 'Financez vos travaux intérieurs',
    desc_fr: 'Rénovez votre intérieur avec le financement SOrloz. Peinture, parquet, isolation, électricité… Tous vos travaux intérieurs financés à des conditions avantageuses.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-travaux', label: 'Crédit travaux' },
    ],
    testimonial: {
      monthly: '241,03', months: 60, names: 'Sophie &amp; Julien',
      amount: '12 000', rate: '7,60', total_due: '14 461,56',
      purpose: 'rénovation complète de leur appartement',
    },
    content: {
      heading: 'Crédit travaux intérieur : donnez un nouveau souffle à votre habitat',
      subheading: 'Peinture, parquet, électricité… tout est finançable',
      body: 'Le crédit travaux intérieur SOrloz est un prêt personnel conçu pour financer l\'ensemble de vos projets de rénovation et d\'embellissement intérieur. Peinture des murs et plafonds, pose de parquet ou de carrelage, réfection de l\'électricité, mise aux normes de la plomberie, création de cloisons ou aménagement de combles : chaque poste de travaux peut être couvert par votre crédit. Empruntez de 5 500 € à 60 000 € et étalez le remboursement sur une durée adaptée à votre budget.\n\nLes fonds sont versés directement sur votre compte bancaire sous 48 heures, vous laissant libre de choisir vos artisans, vos matériaux et votre calendrier de travaux. Aucun justificatif d\'utilisation n\'est exigé : le crédit travaux intérieur SOrloz est un prêt personnel non affecté, vous gardez une totale liberté dans la gestion de votre projet.',
    },
    why: {
      heading: 'Pourquoi financer vos travaux intérieurs avec SOrloz ?',
      intro: 'Rénover son intérieur améliore le confort quotidien et valorise votre patrimoine. SOrloz vous accompagne pour concrétiser ces projets sans puiser dans votre épargne.',
      sections: [
        { icon: '🎨', title: 'Liberté totale sur vos choix', body: 'Contrairement à un prêt affecté, le crédit travaux intérieur SOrloz ne vous impose aucune contrainte sur le choix de vos prestataires ni sur la nature des travaux. Vous décidez librement de refaire la peinture de votre salon, de poser un nouveau parquet dans les chambres ou de moderniser votre installation électrique. Cette flexibilité vous permet d\'adapter votre projet au fur et à mesure, en ajoutant ou en modifiant des postes de travaux selon vos envies et votre budget disponible.' },
        { icon: '📐', title: 'Valorisation de votre bien immobilier', body: 'Des travaux d\'intérieur bien réalisés augmentent significativement la valeur de votre logement. Une cuisine remise au goût du jour, un parquet en bois massif ou une salle de bain modernisée sont autant d\'atouts qui séduiront de futurs acquéreurs. Même si vous ne prévoyez pas de vendre, un intérieur rénové améliore votre qualité de vie au quotidien et peut faciliter une éventuelle renégociation de votre assurance habitation.' },
        { icon: '⚡', title: 'Déblocage rapide des fonds', body: 'SOrloz s\'engage à mettre les fonds à votre disposition sous 48 heures après acceptation de votre dossier. Cette réactivité est essentielle lorsque vous avez déjà engagé des devis auprès d\'artisans ou que vous devez réserver des matériaux en rupture de stock. Vous pouvez ainsi lancer vos travaux immédiatement, sans perdre de temps ni risquer de voir vos devis expirer.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit travaux intérieur adapté à votre projet',
        subheading: 'Options de personnalisation',
        body: 'Le crédit travaux intérieur SOrloz s\'adapte à l\'ampleur et à la nature de votre projet de rénovation.',
        bullets: [
          '<strong>Montant :</strong> Empruntez de 5 500 € à 60 000 € pour couvrir l\'intégralité de vos travaux intérieurs, de la simple remise en peinture à la rénovation complète d\'un appartement.',
          '<strong>Durée :</strong> Choisissez une durée de remboursement de 12 à 84 mois selon votre capacité financière. Une durée plus longue allège vos mensualités pour un confort budgétaire optimal.',
          '<strong>Taux fixe :</strong> Votre taux est fixé dès la signature du contrat et ne change jamais. Vous connaissez le coût total de votre crédit dès le départ, sans mauvaise surprise.',
        ],
        outro: 'Que vous rénoviez une seule pièce ou l\'ensemble de votre logement, le crédit travaux intérieur SOrloz s\'adapte à votre projet et à votre rythme.',
      },
      {
        heading: 'Comment obtenir votre crédit travaux intérieur SOrloz ?',
        body: 'Quelques étapes simples suffisent pour financer vos travaux intérieurs :',
        bullets: [
          '<strong>Simulez votre crédit en ligne :</strong> Indiquez le montant souhaité et la durée de remboursement pour obtenir une estimation immédiate de vos mensualités.',
          '<strong>Complétez votre demande :</strong> Renseignez vos informations personnelles et financières en quelques minutes. Aucun devis ni justificatif de travaux n\'est requis.',
          '<strong>Signez électroniquement :</strong> Validez votre contrat depuis votre espace personnel sécurisé. Les fonds sont versés sous 48h sur votre compte bancaire.',
        ],
        outro: 'Avec SOrloz, vos travaux intérieurs ne sont plus un rêve mais un projet concret. Lancez votre simulation dès maintenant.',
      },
    ],
    crosssell: {
      question: 'Vous envisagez aussi des travaux extérieurs ?',
      body: 'Combinez votre crédit travaux intérieur avec un crédit travaux extérieur pour rénover votre maison de fond en comble et maximiser la valeur de votre bien.',
      link_href: '/prets-personnels/credit-travaux-exterieur',
      link_text: 'Découvrir le crédit travaux extérieur',
    },
    example: { amount: 12000, months: 60, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit travaux intérieur',
    faq: [
      { q: 'Quels travaux intérieurs peut-on financer avec SOrloz ?', a: 'Tous les travaux d\'intérieur sont finançables : peinture, parquet, carrelage, plomberie, électricité, cloisons, aménagement de combles, dressing, rénovation de salle de bain ou de cuisine.' },
      { q: 'Faut-il fournir des devis ou des factures ?', a: 'Non, le crédit travaux intérieur SOrloz est un prêt personnel non affecté. Vous n\'avez aucun justificatif de travaux à fournir.' },
      { q: 'En combien de temps reçoit-on les fonds ?', a: 'Les fonds sont versés sous 48 heures sur votre compte bancaire après acceptation définitive de votre dossier et signature du contrat.' },
      { q: 'Peut-on rembourser le crédit par anticipation ?', a: 'Oui, le remboursement anticipé total ou partiel est possible à tout moment. Des indemnités peuvent s\'appliquer dans la limite légale.' },
    ],
    features_name: 'Travaux intérieur',
  },

  '/prets-personnels/credit-travaux-exterieur': {
    icon: '🏡', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit travaux extérieur',
    title_hero: 'Crédit travaux extérieur : sublimez votre maison',
    hero_fr: 'Financez vos travaux extérieurs',
    desc_fr: 'Façade, toiture, terrasse, jardin… Le crédit travaux extérieur SOrloz vous permet de financer l\'aménagement et la rénovation de l\'extérieur de votre maison.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-travaux', label: 'Crédit travaux' },
    ],
    testimonial: {
      monthly: '301,28', months: 60, names: 'Patrick &amp; Nathalie',
      amount: '15 000', rate: '7,60', total_due: '18 076,95',
      purpose: 'ravalement de façade et réfection de toiture',
    },
    content: {
      heading: 'Crédit travaux extérieur : valorisez et protégez votre maison',
      subheading: 'Façade, toiture, jardin, clôture… financez tous vos projets extérieurs',
      body: 'Le crédit travaux extérieur SOrloz finance l\'ensemble de vos projets d\'aménagement et de rénovation en extérieur. Ravalement de façade, réfection de toiture, pose de clôtures, création d\'allées, aménagement paysager, construction d\'un abri de jardin ou d\'un garage : chaque projet extérieur peut être financé. Empruntez de 5 500 € à 60 000 € avec un taux fixe et des mensualités stables.\n\nVotre maison est votre premier investissement. En entretenant et en embellissant son extérieur, vous préservez sa valeur tout en améliorant votre cadre de vie. Les fonds sont disponibles sous 48 heures pour lancer vos travaux au moment idéal, notamment avant la saison estivale ou avant l\'arrivée de l\'hiver.',
    },
    why: {
      heading: 'Pourquoi financer vos travaux extérieurs avec SOrloz ?',
      intro: 'L\'extérieur de votre maison est sa carte de visite. Un entretien régulier et des aménagements de qualité protègent votre patrimoine et rehaussent votre quotidien.',
      sections: [
        { icon: '🏗️', title: 'Protection de votre patrimoine', body: 'Un ravalement de façade, une toiture en bon état ou des gouttières remplacées protègent la structure même de votre maison contre les infiltrations, l\'humidité et les dégradations. En finançant ces travaux avec SOrloz, vous investissez dans la durabilité de votre bien immobilier. Le coût des réparations d\'urgence est toujours bien supérieur à celui d\'un entretien préventif régulier.' },
        { icon: '🌳', title: 'Un cadre de vie embelli', body: 'Un jardin paysagé, une allée bien dessinée, une clôture neuve ou un éclairage extérieur soigné transforment l\'aspect de votre propriété. Ces aménagements améliorent non seulement votre plaisir quotidien mais aussi l\'impression que votre maison produit sur les visiteurs et le voisinage. Les études montrent qu\'un aménagement paysager de qualité peut augmenter la valeur d\'un bien de 5 à 15 %.' },
        { icon: '📋', title: 'Sans justificatif d\'utilisation', body: 'Le crédit travaux extérieur SOrloz est un prêt personnel non affecté. Vous n\'avez aucun devis à fournir et vous pouvez répartir librement les fonds entre plusieurs postes de travaux : un peu de façade, un peu de toiture et un peu de jardin. Vous restez maître de votre budget et de vos priorités tout au long du chantier.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit sur mesure pour vos travaux extérieurs',
        subheading: 'Personnalisez votre financement',
        body: 'SOrloz vous permet de calibrer votre crédit travaux extérieur selon l\'envergure de votre projet.',
        bullets: [
          '<strong>Montant flexible :</strong> De 5 500 € pour un simple aménagement de jardin à 60 000 € pour une rénovation extérieure complète incluant façade, toiture et aménagement paysager.',
          '<strong>Durée adaptable :</strong> Remboursez sur 12 à 84 mois. Pour les projets importants, une durée longue permet de conserver un reste à vivre confortable.',
          '<strong>Mensualités prévisibles :</strong> Votre taux fixe garantit des mensualités identiques du premier au dernier mois, facilitant la gestion de votre budget.',
        ],
        outro: 'Du simple rafraîchissement de façade à la transformation complète de vos extérieurs, SOrloz finance votre vision.',
      },
      {
        heading: 'Comment obtenir votre crédit travaux extérieur SOrloz ?',
        body: 'Financer vos travaux extérieurs n\'a jamais été aussi simple :',
        bullets: [
          '<strong>Simulation en ligne :</strong> Utilisez notre simulateur pour définir le montant et la durée de votre crédit. Vous obtenez instantanément le montant de vos mensualités.',
          '<strong>Demande dématérialisée :</strong> Remplissez le formulaire en ligne en quelques minutes. Pas de rendez-vous en agence, pas de paperasse inutile.',
          '<strong>Réception des fonds :</strong> Après acceptation et signature électronique, les fonds sont virés sous 48h sur votre compte bancaire. Vos travaux peuvent commencer.',
        ],
        outro: 'Donnez à votre maison l\'extérieur qu\'elle mérite. Simulez votre crédit travaux extérieur dès maintenant sur SOrloz.',
      },
    ],
    crosssell: {
      question: 'Et pourquoi ne pas rénover aussi l\'intérieur ?',
      body: 'Profitez de vos travaux pour donner un coup de neuf à votre intérieur. Le crédit travaux intérieur SOrloz finance peinture, parquet, électricité et bien plus.',
      link_href: '/prets-personnels/credit-travaux-interieur',
      link_text: 'Découvrir le crédit travaux intérieur',
    },
    example: { amount: 15000, months: 60, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit travaux extérieur',
    faq: [
      { q: 'Quels travaux extérieurs peut-on financer ?', a: 'Ravalement de façade, réfection de toiture, pose de clôture ou portail, aménagement de jardin, construction de terrasse, abri de jardin, garage, allées, éclairage extérieur et bien plus encore.' },
      { q: 'Faut-il présenter un devis pour obtenir le crédit ?', a: 'Non, le crédit travaux extérieur SOrloz est un prêt personnel non affecté. Aucun justificatif d\'utilisation des fonds n\'est exigé.' },
      { q: 'Quelle est la durée maximale de remboursement ?', a: 'Vous pouvez rembourser votre crédit sur une durée allant de 12 à 84 mois, selon le montant emprunté et votre capacité de remboursement.' },
      { q: 'Peut-on financer plusieurs types de travaux avec un seul crédit ?', a: 'Oui, vous pouvez utiliser les fonds pour financer simultanément plusieurs postes de travaux extérieurs : façade, toiture, jardin, clôture, etc.' },
    ],
    features_name: 'Travaux extérieur',
  },

  '/prets-personnels/credit-travaux/credit-renovation': {
    icon: '🔧', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit rénovation',
    title_hero: 'Crédit rénovation : repensez votre logement',
    hero_fr: 'Financez la rénovation de votre logement',
    desc_fr: 'Transformez votre logement avec le crédit rénovation SOrloz. Des fonds disponibles rapidement pour démarrer vos travaux de rénovation.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-travaux', label: 'Crédit travaux' },
    ],
    testimonial: {
      monthly: '346,77', months: 72, names: 'Caroline &amp; Mathieu',
      amount: '20 000', rate: '7,60', total_due: '24 967,55',
      purpose: 'rénovation globale de leur maison',
    },
    content: {
      heading: 'Crédit rénovation : un financement complet pour transformer votre logement',
      subheading: 'De la simple retouche à la rénovation intégrale',
      body: 'Le crédit rénovation SOrloz est la solution de financement idéale pour tous vos projets de transformation. Que vous souhaitiez rafraîchir un appartement ancien, remettre aux normes une installation électrique, abattre une cloison pour créer un espace ouvert ou rénover intégralement une maison de caractère, ce prêt personnel vous donne les moyens d\'agir. Empruntez de 5 500 € à 60 000 € sur 12 à 84 mois.\n\nLe crédit rénovation SOrloz est un prêt non affecté : vous disposez des fonds librement, sans obligation de présenter des devis. Vous pouvez ainsi confier les travaux à l\'artisan de votre choix ou réaliser vous-même une partie du chantier pour optimiser votre budget.',
    },
    why: {
      heading: 'Pourquoi choisir le crédit rénovation SOrloz ?',
      intro: 'La rénovation est un levier puissant pour améliorer votre confort, réduire vos charges et augmenter la valeur de votre bien. Voici pourquoi SOrloz est le partenaire idéal.',
      sections: [
        { icon: '🏠', title: 'Un projet sans limites', body: 'Le crédit rénovation SOrloz couvre tous les types de travaux sans restriction : gros oeuvre, second oeuvre, finitions, mise aux normes, extension, surélévation. Vous n\'êtes pas limité à un seul poste de dépense et pouvez combiner différents chantiers au sein d\'un même financement. Cette polyvalence est idéale pour les projets de rénovation globale qui touchent à la fois la structure, l\'isolation, l\'électricité et la décoration.' },
        { icon: '💰', title: 'Un budget maîtrisé', body: 'Grâce au taux fixe, vous connaissez dès la signature le montant exact de chaque mensualité et le coût total de votre crédit. Pas de mauvaise surprise, pas d\'indexation sur les marchés financiers. Vous pouvez planifier sereinement votre budget travaux en intégrant la mensualité du crédit dans vos charges mensuelles, et prévoir une marge de sécurité pour les imprévus de chantier.' },
        { icon: '🚀', title: 'Déblocage sous 48 heures', body: 'Le temps joue souvent contre les projets de rénovation : un artisan disponible, un lot de matériaux en promotion, une fenêtre de beau temps pour les travaux extérieurs. Avec SOrloz, les fonds sont virés sous 48 heures après signature, vous permettant de saisir les opportunités sans attendre et de respecter le calendrier prévu avec vos prestataires.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Adaptez votre crédit rénovation à votre projet',
        subheading: 'Un financement modulable',
        body: 'Chaque projet de rénovation est unique. Le crédit rénovation SOrloz s\'adapte à vos besoins.',
        bullets: [
          '<strong>Montant :</strong> De 5 500 € pour un rafraîchissement ciblé à 60 000 € pour une rénovation intégrale. Définissez le budget qui correspond à l\'ampleur de vos travaux.',
          '<strong>Durée :</strong> De 12 à 84 mois pour ajuster vos mensualités. Une durée plus longue réduit le montant mensuel et préserve votre capacité d\'épargne.',
          '<strong>Liberté d\'utilisation :</strong> Prêt non affecté, aucun justificatif requis. Répartissez les fonds entre les différents corps de métier comme vous le souhaitez.',
        ],
        outro: 'Petite retouche ou grand chantier, le crédit rénovation SOrloz s\'adapte à chaque projet et à chaque budget.',
      },
      {
        heading: 'Comment obtenir votre crédit rénovation SOrloz ?',
        body: 'Un parcours entièrement en ligne, rapide et sans paperasse :',
        bullets: [
          '<strong>Simulez en ligne :</strong> Renseignez le montant souhaité et la durée pour obtenir vos mensualités en temps réel.',
          '<strong>Déposez votre demande :</strong> Complétez le formulaire dématérialisé avec vos informations. Réponse de principe immédiate.',
          '<strong>Recevez vos fonds :</strong> Après signature électronique, les fonds sont virés sous 48h. Vos travaux de rénovation peuvent commencer.',
        ],
        outro: 'Ne remettez plus votre projet à demain. Simulez votre crédit rénovation SOrloz et lancez vos travaux.',
      },
    ],
    crosssell: {
      question: 'Besoin d\'améliorer votre performance énergétique ?',
      body: 'Profitez de votre rénovation pour isoler votre logement et réduire durablement vos factures d\'énergie avec le crédit isolation SOrloz.',
      link_href: '/prets-personnels/credit-travaux/credit-isolation',
      link_text: 'Découvrir le crédit isolation',
    },
    example: { amount: 20000, months: 72, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit rénovation',
    faq: [
      { q: 'Quels travaux de rénovation sont finançables ?', a: 'Tous les travaux de rénovation : gros oeuvre, second oeuvre, isolation, électricité, plomberie, peinture, sols, menuiseries, extension, surélévation, mise aux normes.' },
      { q: 'Le crédit rénovation nécessite-t-il un apport personnel ?', a: 'Non, aucun apport n\'est requis. Vous pouvez financer l\'intégralité de votre projet de rénovation avec le crédit SOrloz.' },
      { q: 'Peut-on utiliser le crédit pour des travaux réalisés soi-même ?', a: 'Oui, le crédit rénovation SOrloz est un prêt non affecté. Vous pouvez acheter des matériaux et réaliser vous-même tout ou partie des travaux.' },
      { q: 'Combien de temps faut-il pour obtenir les fonds ?', a: 'Après acceptation de votre dossier et signature électronique du contrat, les fonds sont virés sous 48 heures sur votre compte bancaire.' },
    ],
    features_name: 'Rénovation',
  },

  '/prets-personnels/credit-travaux/credit-salle-de-bain': {
    icon: '🛁', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit salle de bain',
    title_hero: 'Crédit salle de bain : la pièce bien-être par excellence',
    hero_fr: 'Financez votre nouvelle salle de bain',
    desc_fr: 'Créez la salle de bain de vos rêves avec le financement SOrloz. Baignoire, douche à l\'italienne, double vasque… Réalisez votre projet sans attendre.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-travaux', label: 'Crédit travaux' },
    ],
    testimonial: {
      monthly: '193,80', months: 48, names: 'Isabelle &amp; François',
      amount: '8 000', rate: '7,60', total_due: '9 302,63',
      purpose: 'création d\'une salle de bain avec douche à l\'italienne',
    },
    content: {
      heading: 'Crédit salle de bain : créez un espace de bien-être sur mesure',
      subheading: 'Douche, baignoire, vasque… concrétisez votre projet',
      body: 'La salle de bain est l\'une des pièces les plus importantes de votre logement. Le crédit salle de bain SOrloz vous permet de la transformer selon vos envies : installation d\'une douche à l\'italienne, remplacement de la baignoire, pose d\'un double vasque, carrelage mural et au sol, robinetterie design, meuble de rangement sur mesure. Empruntez de 5 500 € à 60 000 € pour créer l\'espace de bien-être dont vous rêvez.\n\nLe prêt est non affecté : vous gérez votre budget librement, choisissez vos artisans et vos matériaux sans contrainte. Les fonds sont disponibles sous 48 heures pour démarrer vos travaux rapidement.',
    },
    why: {
      heading: 'Pourquoi financer votre salle de bain avec SOrloz ?',
      intro: 'Rénover sa salle de bain est un projet qui allie confort quotidien, esthétique et valorisation de votre bien. SOrloz vous aide à le concrétiser.',
      sections: [
        { icon: '🛁', title: 'Un confort quotidien amélioré', body: 'Une salle de bain bien conçue transforme votre routine matinale et vos moments de détente. Douche à l\'italienne spacieuse, baignoire balnéo, sol chauffant, éclairage d\'ambiance : chaque détail compte pour créer un espace où il fait bon se ressourcer. Le crédit salle de bain SOrloz vous donne les moyens de ne faire aucun compromis sur le confort et la qualité des équipements.' },
        { icon: '📈', title: 'Valorisation immobilière garantie', body: 'La salle de bain est l\'un des critères les plus regardés par les acheteurs potentiels. Une salle de bain moderne et fonctionnelle peut faire grimper la valeur de votre bien de plusieurs milliers d\'euros. Même sans projet de vente, cet investissement améliore votre qualité de vie pour de longues années et peut constituer un argument lors d\'une mise en location.' },
        { icon: '🔧', title: 'Mise aux normes et sécurité', body: 'Une rénovation de salle de bain est aussi l\'occasion de mettre aux normes les installations électriques et la plomberie, de remplacer des joints vieillissants et de prévenir les problèmes d\'humidité ou de moisissure. C\'est un investissement dans la sécurité et la salubrité de votre logement, particulièrement important dans les logements anciens.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit salle de bain personnalisé',
        subheading: 'Adaptez le financement à votre projet',
        body: 'Votre salle de bain est unique, votre financement doit l\'être aussi.',
        bullets: [
          '<strong>Montant ajustable :</strong> De 5 500 € pour un rafraîchissement (robinetterie, peinture, accessoires) à 60 000 € pour une création complète avec douche à l\'italienne, baignoire îlot et mobilier sur mesure.',
          '<strong>Durée souple :</strong> Remboursez sur 12 à 84 mois. Pour un budget salle de bain moyen de 8 000 €, des mensualités à partir de 193,80 € sur 48 mois.',
          '<strong>Aucun justificatif :</strong> Prêt personnel non affecté, vous n\'avez pas à présenter de devis ni de factures pour obtenir votre financement.',
        ],
        outro: 'De la petite salle d\'eau au grand espace wellness, SOrloz finance votre salle de bain idéale.',
      },
      {
        heading: 'Comment obtenir votre crédit salle de bain SOrloz ?',
        body: 'Trois étapes suffisent pour lancer vos travaux de salle de bain :',
        bullets: [
          '<strong>Simulez votre projet :</strong> Indiquez le budget estimé de votre salle de bain et choisissez la durée de remboursement qui vous convient.',
          '<strong>Finalisez votre demande :</strong> Remplissez le formulaire en ligne avec vos coordonnées et informations financières. Réponse de principe immédiate.',
          '<strong>Recevez les fonds :</strong> Signez électroniquement et recevez les fonds sous 48h. Votre nouvelle salle de bain est en route.',
        ],
        outro: 'N\'attendez plus pour créer la salle de bain dont vous rêvez. Lancez votre simulation sur SOrloz.',
      },
    ],
    crosssell: {
      question: 'Vous pensez aussi à rénover votre cuisine ?',
      body: 'Profitez de vos travaux pour moderniser également votre cuisine. Le crédit cuisine SOrloz finance plan de travail, électroménager et mobilier.',
      link_href: '/prets-personnels/credit-travaux/credit-cuisine',
      link_text: 'Découvrir le crédit cuisine',
    },
    example: { amount: 8000, months: 48, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit salle de bain',
    faq: [
      { q: 'Quel budget prévoir pour rénover une salle de bain ?', a: 'Le budget moyen d\'une rénovation de salle de bain se situe entre 5 000 € et 15 000 € selon l\'ampleur des travaux. Avec SOrloz, vous pouvez emprunter de 5 500 € à 60 000 €.' },
      { q: 'Le crédit salle de bain est-il un prêt affecté ?', a: 'Non, c\'est un prêt personnel non affecté. Vous n\'avez pas à justifier l\'utilisation des fonds ni à fournir de devis.' },
      { q: 'Peut-on financer l\'achat des sanitaires et du mobilier ?', a: 'Oui, le crédit couvre aussi bien la main-d\'oeuvre que les fournitures : sanitaires, robinetterie, carrelage, meubles, accessoires.' },
      { q: 'Les fonds sont-ils versés rapidement ?', a: 'Oui, après acceptation et signature électronique, les fonds sont virés sous 48 heures sur votre compte bancaire.' },
    ],
    features_name: 'Salle de bain',
  },

  '/prets-personnels/credit-travaux/credit-piscine': {
    icon: '🏊', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit piscine',
    title_hero: 'Crédit piscine : plongez dans votre projet',
    hero_fr: 'Financez votre piscine avec SOrloz',
    desc_fr: 'Une piscine dans votre jardin, c\'est possible ! Le crédit piscine SOrloz finance la construction ou la rénovation de votre espace aquatique.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-travaux', label: 'Crédit travaux' },
    ],
    testimonial: {
      monthly: '384,69', months: 84, names: 'Laurent &amp; Céline',
      amount: '25 000', rate: '7,60', total_due: '32 314,12',
      purpose: 'construction d\'une piscine enterrée 8x4',
    },
    content: {
      heading: 'Crédit piscine : financez la piscine de vos rêves',
      subheading: 'Enterrée, semi-enterrée, hors-sol… tous les projets sont finançables',
      body: 'Posséder une piscine n\'est plus un luxe réservé à quelques-uns. Le crédit piscine SOrloz vous permet de financer la construction, l\'installation ou la rénovation de votre bassin. Piscine enterrée en béton, coque polyester, piscine semi-enterrée en bois, bassin hors-sol, piscine naturelle : chaque type de projet est éligible. Empruntez de 5 500 € à 60 000 € et remboursez sur 12 à 84 mois avec un taux fixe.\n\nLes fonds sont versés sous 48 heures sur votre compte bancaire. Vous choisissez librement votre pisciniste, vos matériaux et vos équipements. Le crédit piscine SOrloz est un prêt personnel non affecté : aucun devis à fournir, aucune contrainte sur l\'utilisation des fonds.',
    },
    why: {
      heading: 'Pourquoi financer votre piscine avec SOrloz ?',
      intro: 'Une piscine est un investissement qui transforme votre quotidien et valorise votre propriété. SOrloz rend ce projet accessible grâce à un financement adapté.',
      sections: [
        { icon: '☀️', title: 'Un plaisir quotidien pour toute la famille', body: 'Une piscine offre des moments de détente, de jeu et de sport à domicile. Plus besoin de réserver une place à la piscine municipale ou de parcourir des kilomètres pour se baigner. Dès les premiers beaux jours, votre piscine devient le coeur de votre vie extérieure, un lieu de convivialité pour les barbecues en famille et les après-midi entre amis.' },
        { icon: '🏡', title: 'Valorisation de votre propriété', body: 'Une piscine bien intégrée dans son environnement peut augmenter la valeur de votre bien immobilier de 10 à 20 % selon les régions. C\'est un investissement patrimonial autant qu\'un investissement plaisir. Dans les régions ensoleillées du sud de la France, une piscine est devenue un critère de recherche incontournable pour les acquéreurs potentiels.' },
        { icon: '💧', title: 'Financement souple et sans contrainte', body: 'Le crédit piscine SOrloz s\'adapte à tous les budgets. Que votre projet coûte 8 000 € pour une piscine hors-sol ou 50 000 € pour un bassin enterré avec plage et pool house, vous trouvez la mensualité qui vous convient. Et comme c\'est un prêt non affecté, vous pouvez aussi financer la margelle, l\'abri, le système de filtration ou l\'aménagement paysager autour du bassin.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit piscine adapté à chaque projet',
        subheading: 'Configurez votre financement',
        body: 'Du bassin hors-sol au complexe aquatique, SOrloz finance tous les types de piscines.',
        bullets: [
          '<strong>Montant :</strong> De 5 500 € pour une piscine hors-sol à 60 000 € pour une piscine enterrée complète avec terrasse, abri et équipements de filtration.',
          '<strong>Durée :</strong> Remboursez sur 12 à 84 mois. Pour un projet à 25 000 €, optez pour 84 mois à 384,69 € par mois pour préserver votre budget quotidien.',
          '<strong>Équipements inclus :</strong> Votre crédit peut couvrir l\'ensemble du projet : bassin, margelle, abri de piscine, pompe à chaleur, système de filtration, éclairage, mobilier de plage.',
        ],
        outro: 'Quelle que soit la taille de votre projet piscine, SOrloz vous accompagne avec un financement sur mesure.',
      },
      {
        heading: 'Comment obtenir votre crédit piscine SOrloz ?',
        body: 'Votre piscine est à portée de clic. Suivez ces étapes :',
        bullets: [
          '<strong>Estimez votre projet :</strong> Utilisez notre simulateur en ligne pour définir le montant et la durée de votre crédit piscine.',
          '<strong>Soumettez votre demande :</strong> Complétez le formulaire en quelques minutes. Aucun devis de pisciniste n\'est requis pour votre demande.',
          '<strong>Lancez la construction :</strong> Après signature électronique, les fonds sont virés sous 48h. Contactez votre pisciniste et démarrez les travaux.',
        ],
        outro: 'L\'été prochain, vous pourriez plonger dans votre propre piscine. Simulez votre crédit dès maintenant.',
      },
    ],
    crosssell: {
      question: 'Envie d\'aménager aussi votre terrasse ?',
      body: 'Complétez votre projet piscine avec une belle terrasse pour créer un véritable espace de vie extérieur.',
      link_href: '/prets-personnels/credit-travaux/credit-terrasse',
      link_text: 'Découvrir le crédit terrasse',
    },
    example: { amount: 25000, months: 84, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit piscine',
    faq: [
      { q: 'Quel budget pour construire une piscine ?', a: 'Le budget varie selon le type : de 5 000 € pour une piscine hors-sol à plus de 40 000 € pour une piscine enterrée en béton. Avec SOrloz, empruntez de 5 500 € à 60 000 €.' },
      { q: 'Faut-il un permis de construire pour une piscine ?', a: 'Les piscines de plus de 10 m² nécessitent une déclaration préalable. Au-delà de 100 m² ou avec un abri de plus de 1,80 m, un permis de construire est obligatoire. Le crédit SOrloz n\'est pas conditionné à ces autorisations.' },
      { q: 'Le crédit piscine finance-t-il aussi l\'entretien ?', a: 'Le crédit SOrloz est un prêt personnel non affecté. Vous pouvez utiliser les fonds pour la construction, la rénovation, les équipements ou même l\'entretien de votre piscine.' },
      { q: 'Quelle est la durée de remboursement maximale ?', a: 'Vous pouvez rembourser votre crédit piscine sur une durée allant de 12 à 84 mois, selon le montant emprunté et votre situation financière.' },
    ],
    features_name: 'Piscine',
  },

  '/prets-personnels/credit-travaux/credit-cuisine': {
    icon: '🍳', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit cuisine',
    title_hero: 'Crédit cuisine : la pièce maîtresse de votre foyer',
    hero_fr: 'Financez votre nouvelle cuisine',
    desc_fr: 'Réaménagez votre cuisine avec le crédit cuisine SOrloz. Plan de travail, électroménager, mobilier… Concrétisez votre projet de cuisine idéale.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-travaux', label: 'Crédit travaux' },
    ],
    testimonial: {
      monthly: '242,26', months: 48, names: 'Émilie &amp; Thomas',
      amount: '10 000', rate: '7,60', total_due: '11 628,29',
      purpose: 'installation d\'une cuisine équipée sur mesure',
    },
    content: {
      heading: 'Crédit cuisine : concevez la cuisine dont vous avez toujours rêvé',
      subheading: 'Meubles, électroménager, plan de travail… tout est finançable',
      body: 'La cuisine est le coeur de la maison, le lieu où l\'on prépare les repas, où l\'on partage des moments en famille et entre amis. Le crédit cuisine SOrloz vous donne les moyens de la concevoir exactement comme vous le souhaitez. Meubles de cuisine sur mesure, plan de travail en granit ou en quartz, électroménager encastrable, îlot central, hotte design, éclairage LED : financez l\'ensemble de votre projet de 5 500 € à 60 000 €.\n\nComme tous les crédits SOrloz, le crédit cuisine est un prêt personnel non affecté. Vous n\'avez aucun devis à fournir et vous êtes libre de commander votre cuisine chez le cuisiniste de votre choix ou d\'acheter les éléments séparément. Les fonds sont disponibles sous 48 heures.',
    },
    why: {
      heading: 'Pourquoi financer votre cuisine avec SOrloz ?',
      intro: 'Une cuisine moderne et fonctionnelle améliore votre quotidien et constitue un atout majeur pour la valeur de votre logement.',
      sections: [
        { icon: '👨‍🍳', title: 'Un espace de vie optimisé', body: 'Une cuisine bien agencée vous fait gagner du temps au quotidien. Rangements intelligents, plan de travail ergonomique, électroménager performant : chaque élément contribue à rendre la préparation des repas plus agréable et efficace. Le crédit cuisine SOrloz vous permet de repenser entièrement l\'agencement sans compromis sur la qualité des matériaux et des équipements choisis.' },
        { icon: '💎', title: 'Un investissement durable', body: 'Une cuisine de qualité a une durée de vie de 15 à 20 ans. C\'est un investissement rentable qui transforme votre quotidien pendant de longues années. De plus, une cuisine moderne et bien équipée est l\'un des premiers critères d\'achat pour les acquéreurs immobiliers : elle peut faire la différence entre deux biens comparables et accélérer la vente de votre logement.' },
        { icon: '🎯', title: 'Un financement sans contrainte', body: 'Le crédit cuisine SOrloz vous laisse une liberté totale. Choisissez un cuisiniste, un artisan indépendant ou achetez vos meubles et votre électroménager en grande surface spécialisée : les fonds sont à votre disposition sans aucune restriction d\'usage. Vous pouvez même inclure dans votre financement les travaux de plomberie, d\'électricité et de carrelage nécessaires à l\'installation.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Personnalisez votre crédit cuisine',
        subheading: 'Un financement à votre mesure',
        body: 'Chaque projet de cuisine est différent. SOrloz vous propose un financement modulable.',
        bullets: [
          '<strong>Montant :</strong> De 5 500 € pour un rafraîchissement (peinture des façades, changement de poignées, nouvel électroménager) à 60 000 € pour une cuisine entièrement sur mesure avec îlot central et équipements haut de gamme.',
          '<strong>Durée :</strong> De 12 à 84 mois pour ajuster vos mensualités à votre budget. Pour 10 000 € sur 48 mois, comptez 242,26 € par mois.',
          '<strong>Tout inclus :</strong> Financez aussi bien le mobilier que la pose, l\'électroménager, la plomberie et l\'électricité nécessaires à votre nouvelle cuisine.',
        ],
        outro: 'Cuisine ouverte, fermée, avec ou sans îlot : SOrloz finance toutes les configurations.',
      },
      {
        heading: 'Comment obtenir votre crédit cuisine SOrloz ?',
        body: 'Votre nouvelle cuisine est à portée de main. Voici comment procéder :',
        bullets: [
          '<strong>Simulez votre budget :</strong> Renseignez le montant de votre projet cuisine et la durée souhaitée pour connaître vos mensualités en temps réel.',
          '<strong>Déposez votre dossier :</strong> Complétez votre demande en ligne en quelques minutes. Pas de devis à joindre, pas de rendez-vous en agence.',
          '<strong>Commandez votre cuisine :</strong> Après acceptation et signature électronique, les fonds arrivent sous 48h. Passez commande chez le cuisiniste de votre choix.',
        ],
        outro: 'La cuisine idéale n\'attend plus. Simulez votre crédit cuisine SOrloz et lancez votre projet.',
      },
    ],
    crosssell: {
      question: 'Votre salle de bain mérite aussi un coup de neuf ?',
      body: 'Profitez de vos travaux de cuisine pour rénover aussi votre salle de bain avec le crédit dédié SOrloz.',
      link_href: '/prets-personnels/credit-travaux/credit-salle-de-bain',
      link_text: 'Découvrir le crédit salle de bain',
    },
    example: { amount: 10000, months: 48, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit cuisine',
    faq: [
      { q: 'Quel montant emprunter pour une cuisine ?', a: 'Le budget moyen d\'une cuisine équipée se situe entre 5 000 € et 20 000 €. Avec SOrloz, empruntez de 5 500 € à 60 000 € selon l\'ampleur de votre projet.' },
      { q: 'Le crédit cuisine couvre-t-il l\'électroménager ?', a: 'Oui, le crédit SOrloz est un prêt personnel non affecté. Vous pouvez financer les meubles, le plan de travail, l\'électroménager, la pose et tous les travaux connexes.' },
      { q: 'Peut-on choisir n\'importe quel cuisiniste ?', a: 'Absolument. Le crédit cuisine SOrloz n\'est lié à aucun réseau de cuisinistes. Vous êtes libre de commander votre cuisine où vous le souhaitez.' },
      { q: 'Comment se passe le remboursement ?', a: 'Vos mensualités sont fixes et prélevées automatiquement chaque mois. Le taux est fixe pendant toute la durée du crédit, sans surprise.' },
    ],
    features_name: 'Cuisine',
  },

  '/prets-personnels/credit-travaux/credit-veranda': {
    icon: '🌿', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit véranda',
    title_hero: 'Crédit véranda : agrandissez votre espace de vie',
    hero_fr: 'Financez votre véranda',
    desc_fr: 'Agrandissez votre espace de vie avec une véranda financée par SOrloz. Un investissement qui valorise votre bien immobilier.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-travaux', label: 'Crédit travaux' },
    ],
    testimonial: {
      monthly: '312,09', months: 72, names: 'Véronique &amp; Philippe',
      amount: '18 000', rate: '7,60', total_due: '22 470,79',
      purpose: 'construction d\'une véranda aluminium 20 m²',
    },
    content: {
      heading: 'Crédit véranda : une pièce en plus, un confort en plus',
      subheading: 'Aluminium, bois, PVC… financez la véranda qui vous ressemble',
      body: 'La véranda est bien plus qu\'une simple extension : c\'est une pièce de vie à part entière, baignée de lumière naturelle, qui agrandit votre maison tout en créant un lien harmonieux entre l\'intérieur et le jardin. Le crédit véranda SOrloz finance la conception, la fabrication et l\'installation de votre véranda, quel que soit le matériau choisi : aluminium, bois, PVC ou acier. Empruntez de 5 500 € à 60 000 € sur 12 à 84 mois.\n\nPrêt personnel non affecté, le crédit véranda vous laisse libre de choisir votre vérandaliste, vos options (toiture isolante, stores intégrés, chauffage au sol) et votre calendrier de travaux. Les fonds sont disponibles sous 48 heures.',
    },
    why: {
      heading: 'Pourquoi financer votre véranda avec SOrloz ?',
      intro: 'Construire une véranda est un projet qui combine plaisir de vivre et investissement patrimonial. SOrloz vous aide à le réaliser dans les meilleures conditions.',
      sections: [
        { icon: '🌞', title: 'Des mètres carrés en plus', body: 'Une véranda de 15 à 30 m² ajoute une pièce supplémentaire à votre maison sans les contraintes d\'une extension maçonnée. Salon, salle à manger, bureau, jardin d\'hiver : vous choisissez sa fonction selon vos besoins. Baignée de lumière toute l\'année grâce à ses parois vitrées, la véranda offre un cadre de vie unique, à mi-chemin entre l\'intérieur et l\'extérieur, pour profiter du jardin même par temps de pluie.' },
        { icon: '🏠', title: 'Valorisation immédiate de votre bien', body: 'Une véranda de qualité peut augmenter la valeur de votre maison de 5 à 15 % selon sa surface et ses finitions. C\'est l\'un des investissements les plus rentables en matière d\'extension de l\'habitat. Les acquéreurs potentiels perçoivent la véranda comme un espace premium qui enrichit la surface habitable et apporte un cachet supplémentaire à la propriété.' },
        { icon: '⚡', title: 'Fonds disponibles rapidement', body: 'Les projets de véranda sont souvent saisonniers : il est préférable de construire au printemps ou en été. SOrloz vous permet de saisir le bon moment en débloquant les fonds sous 48 heures après acceptation de votre dossier, vous évitant ainsi d\'attendre et de repousser votre projet à la saison suivante. La réactivité de SOrloz est un atout décisif pour tenir le calendrier prévu avec votre vérandaliste.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit véranda sur mesure',
        subheading: 'Adaptez le financement à votre projet',
        body: 'Chaque véranda est unique par sa taille, son matériau et ses options. SOrloz adapte le financement.',
        bullets: [
          '<strong>Montant :</strong> De 5 500 € pour une petite véranda en PVC à 60 000 € pour une grande véranda en aluminium avec toiture isolante, stores et chauffage intégré.',
          '<strong>Durée :</strong> De 12 à 84 mois. Pour une véranda à 18 000 €, des mensualités de 312,09 € sur 72 mois permettent de préserver votre budget mensuel.',
          '<strong>Options finançables :</strong> Le crédit couvre aussi les fondations, la dalle, le raccordement électrique, le chauffage au sol et les aménagements intérieurs de votre véranda.',
        ],
        outro: 'Véranda classique ou contemporaine, SOrloz vous accompagne dans la concrétisation de votre extension.',
      },
      {
        heading: 'Comment obtenir votre crédit véranda SOrloz ?',
        body: 'Agrandir votre maison n\'a jamais été aussi simple :',
        bullets: [
          '<strong>Simulez votre projet :</strong> Indiquez le budget de votre véranda et la durée de remboursement souhaitée. Vos mensualités s\'affichent immédiatement.',
          '<strong>Complétez votre demande :</strong> Remplissez le formulaire en ligne en quelques minutes. Aucun devis de vérandaliste n\'est exigé.',
          '<strong>Lancez la construction :</strong> Après signature électronique, recevez les fonds sous 48h et donnez le feu vert à votre vérandaliste.',
        ],
        outro: 'Votre future véranda n\'est qu\'à quelques clics. Faites votre simulation sur SOrloz dès aujourd\'hui.',
      },
    ],
    crosssell: {
      question: 'Vous pensez aussi à une terrasse ?',
      body: 'Associez votre véranda à une terrasse pour créer un espace extérieur complet. Le crédit terrasse SOrloz finance bois, composite et béton.',
      link_href: '/prets-personnels/credit-travaux/credit-terrasse',
      link_text: 'Découvrir le crédit terrasse',
    },
    example: { amount: 18000, months: 72, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit véranda',
    faq: [
      { q: 'Quel est le coût moyen d\'une véranda ?', a: 'Le prix d\'une véranda varie de 8 000 € à plus de 40 000 € selon la surface, le matériau (aluminium, bois, PVC) et les options. SOrloz finance de 5 500 € à 60 000 €.' },
      { q: 'Faut-il un permis de construire pour une véranda ?', a: 'Une déclaration préalable suffit pour les vérandas de moins de 20 m² (40 m² en zone PLU). Au-delà, un permis de construire est nécessaire. Le crédit SOrloz n\'est pas conditionné à ces autorisations.' },
      { q: 'Le crédit véranda est-il un prêt affecté ?', a: 'Non, c\'est un prêt personnel non affecté. Aucun devis ni facture de vérandaliste n\'est requis pour votre demande.' },
      { q: 'Peut-on financer les travaux annexes avec le même crédit ?', a: 'Oui, le crédit couvre aussi les fondations, la dalle, le raccordement électrique, le chauffage et tout aménagement lié à votre projet de véranda.' },
    ],
    features_name: 'Véranda',
  },

  '/prets-personnels/credit-travaux/credit-terrasse': {
    icon: '🏡', bg: 'var(--yellow-bg)',
    title_fr: 'Crédit terrasse',
    title_hero: 'Crédit terrasse : votre salon en plein air',
    hero_fr: 'Financez votre terrasse avec SOrloz',
    desc_fr: 'Créez ou rénovez votre terrasse avec le financement SOrloz. Bois, composite, béton… Un espace extérieur de qualité pour profiter des beaux jours.',
    parent: { href: '/prets-personnels/credit-travaux', label_fr: 'Crédit travaux' },
    breadcrumbs: [
      { href: '/prets-personnels', label: 'Prêts personnels' },
      { href: '/prets-personnels/credit-travaux', label: 'Crédit travaux' },
    ],
    testimonial: {
      monthly: '169,58', months: 48, names: 'Arnaud &amp; Sandrine',
      amount: '7 000', rate: '7,60', total_due: '8 139,80',
      purpose: 'création d\'une terrasse en bois composite',
    },
    content: {
      heading: 'Crédit terrasse : créez votre espace de vie extérieur idéal',
      subheading: 'Bois, composite, pierre naturelle, béton… tous les matériaux',
      body: 'Une terrasse bien conçue prolonge votre espace de vie vers l\'extérieur et transforme votre quotidien dès les premiers rayons de soleil. Le crédit terrasse SOrloz finance la construction ou la rénovation de votre terrasse, quel que soit le matériau choisi : lames de bois exotique, composite haute durabilité, dalle de pierre naturelle, béton décoratif ou carrelage extérieur. Empruntez de 5 500 € à 60 000 € sur 12 à 84 mois.\n\nLe crédit terrasse SOrloz est un prêt personnel non affecté. Vous êtes libre de confier les travaux au professionnel de votre choix ou de réaliser vous-même la pose si vous êtes bricoleur. Les fonds sont versés sous 48 heures après acceptation de votre dossier.',
    },
    why: {
      heading: 'Pourquoi financer votre terrasse avec SOrloz ?',
      intro: 'La terrasse est devenue un prolongement naturel de la maison. SOrloz vous aide à créer cet espace de vie extérieur dont vous rêvez.',
      sections: [
        { icon: '☀️', title: 'Un lieu de vie supplémentaire', body: 'Une terrasse bien aménagée devient votre salon d\'été, votre salle à manger en plein air, votre espace de détente au soleil. C\'est un lieu de convivialité qui change radicalement votre façon de profiter de votre maison. Repas en famille, apéritifs entre amis, lecture au calme : la terrasse multiplie les possibilités d\'utilisation de votre extérieur et améliore considérablement votre qualité de vie.' },
        { icon: '🏠', title: 'Plus-value pour votre bien', body: 'Une terrasse de qualité augmente la valeur perçue de votre propriété. Les acquéreurs potentiels sont particulièrement sensibles aux espaces extérieurs aménagés. Selon les professionnels de l\'immobilier, une terrasse bien réalisée peut valoriser un bien de 5 à 10 %, un retour sur investissement très attractif par rapport au coût des travaux engagés.' },
        { icon: '🛠️', title: 'Un projet accessible', body: 'Contrairement à une extension ou à une véranda, une terrasse est un projet relativement rapide à réaliser et dont le budget reste maîtrisable. Le crédit terrasse SOrloz vous permet de choisir des matériaux de qualité sans rogner sur vos économies. Vous financez aussi bien les lames et les plots que les garde-corps, l\'éclairage extérieur et le mobilier de jardin.' },
      ],
    },
    custom_sections: [
      {
        heading: 'Un crédit terrasse adapté à vos envies',
        subheading: 'Personnalisez votre financement',
        body: 'Terrasse intime ou grand espace de réception, SOrloz adapte le crédit à votre projet.',
        bullets: [
          '<strong>Montant :</strong> De 5 500 € pour une petite terrasse en composite à 60 000 € pour une grande terrasse en bois exotique avec pergola, éclairage et mobilier intégré.',
          '<strong>Durée :</strong> De 12 à 84 mois. Pour une terrasse à 7 000 €, des mensualités de 169,58 € sur 48 mois.',
          '<strong>Aménagements inclus :</strong> Financez aussi la pergola, le garde-corps, l\'éclairage d\'ambiance, les jardinières intégrées et le mobilier de terrasse.',
        ],
        outro: 'Petite terrasse de balcon ou grande terrasse de jardin, SOrloz finance votre projet extérieur.',
      },
      {
        heading: 'Comment obtenir votre crédit terrasse SOrloz ?',
        body: 'Créer votre terrasse de rêve est simple avec SOrloz :',
        bullets: [
          '<strong>Simulez votre terrasse :</strong> Indiquez le budget et la durée souhaités. Vos mensualités s\'affichent en temps réel.',
          '<strong>Complétez votre demande :</strong> Formulaire en ligne rapide, sans devis ni justificatif à fournir. Réponse de principe immédiate.',
          '<strong>Lancez les travaux :</strong> Fonds virés sous 48h après signature. Commandez vos matériaux et planifiez la pose.',
        ],
        outro: 'Profitez des beaux jours sur votre nouvelle terrasse. Simulez votre crédit dès maintenant.',
      },
    ],
    crosssell: {
      question: 'Et si vous ajoutiez une piscine ?',
      body: 'Complétez votre terrasse avec une piscine pour un espace extérieur complet. Le crédit piscine SOrloz finance tous les types de bassins.',
      link_href: '/prets-personnels/credit-travaux/credit-piscine',
      link_text: 'Découvrir le crédit piscine',
    },
    example: { amount: 7000, months: 48, rate: 7.60 },
    faq_title: 'Vos questions sur le crédit terrasse',
    faq: [
      { q: 'Quel budget pour construire une terrasse ?', a: 'Le coût d\'une terrasse varie de 50 à 200 € par m² selon le matériau (composite, bois, pierre, béton). Pour une terrasse de 30 m², comptez entre 3 000 € et 10 000 €.' },
      { q: 'Faut-il un permis pour construire une terrasse ?', a: 'Une terrasse de plain-pied ne nécessite généralement aucune autorisation. Les terrasses surélevées de plus de 60 cm ou couvertes peuvent nécessiter une déclaration préalable.' },
      { q: 'Le crédit terrasse est-il un prêt affecté ?', a: 'Non, c\'est un prêt personnel non affecté. Aucun devis ni justificatif d\'utilisation des fonds n\'est demandé.' },
      { q: 'Peut-on financer la terrasse et son aménagement ?', a: 'Oui, le crédit couvre la terrasse elle-même ainsi que tous les aménagements : pergola, éclairage, garde-corps, mobilier de jardin.' },
    ],
    features_name: 'Terrasse',
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
    + '.pg-form{display:flex;align-items:center;background:#fff;border-radius:50px;overflow:hidden;border:1.5px solid rgba(27,58,75,.25);max-width:480px}'
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

// Content intro section — rich editorial text like Meia
function _contentSection(page) {
  var c = page.content;
  if (!c) return '';
  var bodyHtml = (c.body || '').split('\n\n').map(function(p) {
    return '<p style="font-size:16px;color:var(--text-light);line-height:1.85;margin-bottom:20px">' + p + '</p>';
  }).join('');
  return '<section style="background:#fff;padding:56px 0">'
    + '<div class="container" style="max-width:760px">'
    + '<h2 style="font-size:clamp(24px,3vw,32px);font-weight:900;color:var(--dark);margin-bottom:8px">' + c.heading + '</h2>'
    + (c.subheading ? '<p style="color:var(--red);font-weight:600;font-size:16px;margin-bottom:24px">' + c.subheading + '</p>' : '')
    + bodyHtml
    + '</div></section>';
}

// Why section — editorial text with sub-section headings like Meia (not cards)
function _whySection(page) {
  var w = page.why;
  if (!w || !w.sections) return '';
  var sectionsHtml = w.sections.map(function(s) {
    return '<h3 style="font-size:20px;font-weight:800;color:var(--dark);margin:32px 0 12px">' + s.title + '</h3>'
      + '<p style="font-size:16px;color:var(--text-light);line-height:1.85">' + s.body + '</p>';
  }).join('');
  return '<section style="background:#fff;padding:0 0 56px">'
    + '<div class="container" style="max-width:760px">'
    + '<h2 style="font-size:clamp(24px,3vw,32px);font-weight:900;color:var(--dark);margin-bottom:12px">' + w.heading + '</h2>'
    + '<p style="font-size:16px;color:var(--text-light);line-height:1.85;margin-bottom:8px">' + w.intro + '</p>'
    + sectionsHtml
    + '</div></section>';
}

// Custom editorial sections with bullet lists — like Meia product pages
function _customSections(page) {
  var sections = page.custom_sections;
  if (!sections || !sections.length) return '';
  return sections.map(function(s) {
    var html = '<section style="background:#fff;padding:0 0 48px">'
      + '<div class="container" style="max-width:760px">'
      + '<h2 style="font-size:clamp(24px,3vw,32px);font-weight:900;color:var(--dark);margin-bottom:12px">' + s.heading + '</h2>';
    if (s.subheading) {
      html += '<h3 style="font-size:18px;font-weight:700;color:var(--dark);margin-bottom:12px">' + s.subheading + '</h3>';
    }
    if (s.body) {
      html += '<p style="font-size:16px;color:var(--text-light);line-height:1.85;margin-bottom:20px">' + s.body + '</p>';
    }
    if (s.bullets && s.bullets.length) {
      html += '<ul style="list-style:disc;padding-left:24px;margin-bottom:20px">';
      html += s.bullets.map(function(b) {
        return '<li style="font-size:16px;color:var(--text-light);line-height:1.85;margin-bottom:12px">' + b + '</li>';
      }).join('');
      html += '</ul>';
    }
    if (s.outro) {
      html += '<p style="font-size:16px;color:var(--text-light);line-height:1.85">' + s.outro + '</p>';
    }
    html += '</div></section>';
    return html;
  }).join('');
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
      // LEAF page: content, why, custom sections, insurance+checklist, crosssell, example, process, FAQ, articles
      html += _contentSection(page);
      html += _whySection(page);
      html += _customSections(page);
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
