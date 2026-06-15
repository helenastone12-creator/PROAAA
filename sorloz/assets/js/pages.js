// Page definitions: maps URL slug → i18n key prefix + metadata
const PAGES = {
  // ── Prêts personnels
  'prets-personnels':          { icon: '📋', color: '#FDEAEA', category: 'personal' },
  'credit-vacances':           { icon: '✈️', color: '#FDEAEA', category: 'personal' },
  'credit-demenagement':       { icon: '📦', color: '#FDEAEA', category: 'personal' },
  'credit-loisirs':            { icon: '🎯', color: '#FDEAEA', category: 'personal' },
  'credit-divorce':            { icon: '⚖️', color: '#FDEAEA', category: 'personal' },
  'credit-retraite':           { icon: '🏖️', color: '#FDEAEA', category: 'personal' },
  'credit-naissance':          { icon: '👶', color: '#FDEAEA', category: 'personal' },
  'credit-mariage':            { icon: '💍', color: '#FDEAEA', category: 'personal' },
  // ── Auto
  'credit-auto':               { icon: '🚗', color: '#EBF5EE', category: 'auto' },
  'credit-voiture-neuve':      { icon: '🚘', color: '#EBF5EE', category: 'auto' },
  'credit-voiture-occasion':   { icon: '🚙', color: '#EBF5EE', category: 'auto' },
  'credit-voiture-electrique': { icon: '⚡', color: '#EBF5EE', category: 'auto' },
  'credit-voiture-hybride':    { icon: '🔋', color: '#EBF5EE', category: 'auto' },
  'credit-voiture-thermique':  { icon: '⛽', color: '#EBF5EE', category: 'auto' },
  // ── Moto
  'credit-moto':               { icon: '🏍️', color: '#E6F3F5', category: 'moto' },
  'credit-moto-neuve':         { icon: '🏍️', color: '#E6F3F5', category: 'moto' },
  'credit-moto-occasion':      { icon: '🏍️', color: '#E6F3F5', category: 'moto' },
  'credit-moto-hybride':       { icon: '🔋', color: '#E6F3F5', category: 'moto' },
  'credit-moto-thermique':     { icon: '⛽', color: '#E6F3F5', category: 'moto' },
  // ── Travaux
  'credit-travaux':            { icon: '🔨', color: '#FFF4C2', category: 'work' },
  'credit-travaux-interieur':  { icon: '🏠', color: '#FFF4C2', category: 'work' },
  'credit-travaux-exterieur':  { icon: '🏡', color: '#FFF4C2', category: 'work' },
  'credit-renovation':         { icon: '🔧', color: '#FFF4C2', category: 'work' },
  'credit-salle-de-bain':      { icon: '🛁', color: '#FFF4C2', category: 'work' },
  'credit-piscine':            { icon: '🏊', color: '#FFF4C2', category: 'work' },
  'credit-cuisine':            { icon: '🍳', color: '#FFF4C2', category: 'work' },
  'credit-veranda':            { icon: '🌿', color: '#FFF4C2', category: 'work' },
  // ── Vert
  'credit-vert':               { icon: '🌱', color: '#EBF5EE', category: 'green' },
  'credit-economie-energie':   { icon: '♻️', color: '#EBF5EE', category: 'green' },
  'credit-vehicule-vert':      { icon: '🌿', color: '#EBF5EE', category: 'green' },
  // ── Other
  'assurances':                { icon: '🛡️', color: '#E6F3F5', category: 'insurance' },
  'nos-conseils':              { icon: '💡', color: '#FDEAEA', category: 'advice' },
  'aide-contact':              { icon: '📞', color: '#FFF4C2', category: 'contact' },
  'espace-client':             { icon: '👤', color: '#E6F3F5', category: 'client' },
};

// i18n key mappings per slug
const PAGE_KEYS = {
  'prets-personnels':          { title: 'footer.personal',        heroTitle: 'page.personal.hero.title',   heroDesc: 'page.personal.hero.desc' },
  'credit-vacances':           { title: 'footer.personal.vacation',heroTitle: 'page.vacances.hero.title',  heroDesc: 'page.vacances.hero.desc' },
  'credit-demenagement':       { title: 'footer.personal.moving',  heroTitle: 'page.demenagement.hero.title', heroDesc: 'page.demenagement.hero.desc' },
  'credit-loisirs':            { title: 'footer.personal.leisure', heroTitle: 'page.loisirs.hero.title',   heroDesc: 'page.loisirs.hero.desc' },
  'credit-divorce':            { title: 'footer.personal.divorce', heroTitle: 'page.divorce.hero.title',   heroDesc: 'page.divorce.hero.desc' },
  'credit-retraite':           { title: 'footer.personal.retirement', heroTitle: 'page.retraite.hero.title', heroDesc: 'page.retraite.hero.desc' },
  'credit-naissance':          { title: 'footer.personal.birth',   heroTitle: 'page.naissance.hero.title', heroDesc: 'page.naissance.hero.desc' },
  'credit-mariage':            { title: 'footer.personal.wedding', heroTitle: 'page.mariage.hero.title',   heroDesc: 'page.mariage.hero.desc' },
  'credit-auto':               { title: 'footer.auto',             heroTitle: 'page.auto.hero.title',      heroDesc: 'page.auto.hero.desc' },
  'credit-voiture-neuve':      { title: 'footer.auto.new',         heroTitle: 'page.auto.neuve.hero.title',heroDesc: 'page.auto.neuve.hero.desc' },
  'credit-voiture-occasion':   { title: 'footer.auto.used',        heroTitle: 'page.auto.occasion.hero.title', heroDesc: 'page.auto.occasion.hero.desc' },
  'credit-voiture-electrique': { title: 'footer.auto.electric',    heroTitle: 'page.auto.electrique.hero.title', heroDesc: 'page.auto.electrique.hero.desc' },
  'credit-voiture-hybride':    { title: 'footer.auto.hybrid',      heroTitle: 'page.auto.hybride.hero.title', heroDesc: 'page.auto.hybride.hero.desc' },
  'credit-voiture-thermique':  { title: 'footer.auto.thermal',     heroTitle: 'page.auto.thermique.hero.title', heroDesc: 'page.auto.thermique.hero.desc' },
  'credit-moto':               { title: 'footer.moto',             heroTitle: 'page.moto.hero.title',      heroDesc: 'page.moto.hero.desc' },
  'credit-moto-neuve':         { title: 'footer.moto.new',         heroTitle: 'page.moto.neuve.hero.title',heroDesc: 'page.moto.neuve.hero.desc' },
  'credit-moto-occasion':      { title: 'footer.moto.used',        heroTitle: 'page.moto.occasion.hero.title', heroDesc: 'page.moto.occasion.hero.desc' },
  'credit-moto-hybride':       { title: 'footer.moto.hybrid',      heroTitle: 'page.moto.hybride.hero.title', heroDesc: 'page.moto.hybride.hero.desc' },
  'credit-moto-thermique':     { title: 'footer.moto.thermal',     heroTitle: 'page.moto.thermique.hero.title', heroDesc: 'page.moto.thermique.hero.desc' },
  'credit-travaux':            { title: 'footer.work',             heroTitle: 'page.travaux.hero.title',   heroDesc: 'page.travaux.hero.desc' },
  'credit-travaux-interieur':  { title: 'footer.work.interior',    heroTitle: 'page.travaux.int.hero.title', heroDesc: 'page.travaux.int.hero.desc' },
  'credit-travaux-exterieur':  { title: 'footer.work.exterior',    heroTitle: 'page.travaux.ext.hero.title', heroDesc: 'page.travaux.ext.hero.desc' },
  'credit-renovation':         { title: 'footer.work.renovation',  heroTitle: 'page.renovation.hero.title',heroDesc: 'page.renovation.hero.desc' },
  'credit-salle-de-bain':      { title: 'footer.work.bathroom',    heroTitle: 'page.sdb.hero.title',       heroDesc: 'page.sdb.hero.desc' },
  'credit-piscine':            { title: 'footer.work.pool',        heroTitle: 'page.piscine.hero.title',   heroDesc: 'page.piscine.hero.desc' },
  'credit-cuisine':            { title: 'footer.work.kitchen',     heroTitle: 'page.cuisine.hero.title',   heroDesc: 'page.cuisine.hero.desc' },
  'credit-veranda':            { title: 'footer.work.veranda',     heroTitle: 'page.veranda.hero.title',   heroDesc: 'page.veranda.hero.desc' },
  'credit-vert':               { title: 'footer.green',            heroTitle: 'page.vert.hero.title',      heroDesc: 'page.vert.hero.desc' },
  'credit-economie-energie':   { title: 'footer.green.energy',     heroTitle: 'page.energie.hero.title',   heroDesc: 'page.energie.hero.desc' },
  'credit-vehicule-vert':      { title: 'footer.green.vehicle',    heroTitle: 'page.vehicule.vert.hero.title', heroDesc: 'page.vehicule.vert.hero.desc' },
  'assurances':                { title: 'nav.insurance',           heroTitle: 'page.assurances.hero.title',heroDesc: 'page.assurances.hero.desc' },
  'nos-conseils':              { title: 'nav.advice',              heroTitle: 'page.conseils.hero.title',  heroDesc: 'page.conseils.hero.desc' },
  'aide-contact':              { title: 'nav.help',                heroTitle: 'page.contact.hero.title',   heroDesc: 'page.contact.hero.desc' },
};

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('slug')) return params.get('slug');
  // Extract from pathname: /credit-auto → credit-auto
  const path = window.location.pathname.replace(/^\/|\/$/g, '');
  return path || null;
}

function renderPage(t) {
  const slug = getSlug();
  const page = PAGES[slug];
  const keys = PAGE_KEYS[slug];

  if (!page || !keys) {
    document.getElementById('page-hero').innerHTML = `
      <div class="container" style="padding:80px 24px;text-align:center">
        <h1 style="font-size:48px;color:var(--dark)">404</h1>
        <p style="color:var(--text-light);margin-top:12px">Page introuvable</p>
        <a href="/" class="btn btn-primary" style="margin-top:24px;display:inline-flex">← Accueil</a>
      </div>`;
    return;
  }

  const title = t(keys.title);
  const heroTitle = t(keys.heroTitle) || title;
  const heroDesc = t(keys.heroDesc) || t('hero.promo.title');

  document.title = `${title} | SOrloz`;

  document.getElementById('page-hero').innerHTML = `
    <section class="hero" style="background:${page.color};padding:64px 0 40px" aria-labelledby="page-title">
      <div class="container">
        <div class="page-hero-inner">
          <div>
            <a href="/" class="breadcrumb">← ${t('nav.credits')}</a>
            <div class="page-icon" aria-hidden="true">${page.icon}</div>
            <h1 class="hero-title" id="page-title">${heroTitle}</h1>
            <p class="page-hero-desc">${heroDesc}</p>
            <div class="hero-sim" style="margin-top:32px">
              <input class="sim-input" type="number" min="500" max="75000"
                placeholder="${t('hero.input.placeholder')}" aria-label="${t('hero.input.placeholder')}">
              <button class="btn btn-primary sim-btn">${t('hero.cta')}</button>
            </div>
          </div>
          <div class="page-rate-card">
            <p class="hero-promo-teaser">${t('hero.promo.teaser')}</p>
            <p class="hero-promo-rate-label">${t('hero.promo.rate.prefix')}</p>
            <p class="hero-promo-rate-value">${t('hero.promo.rate.value')}</p>
            <p class="hero-promo-rate-detail">${t('hero.promo.rate.detail')}</p>
            <a href="#" class="hero-promo-cta">${t('hero.promo.cta')}</a>
          </div>
        </div>
      </div>
    </section>`;

  document.getElementById('page-content').innerHTML = `
    <section class="process" aria-labelledby="process-title" style="margin-top:0">
      <div class="container">
        <p class="process-tagline" id="process-title">${t('process.tagline')}</p>
        <div class="process-steps">
          <div class="process-step"><div class="process-step-icon"><div class="process-step-num">1</div></div><p>${t('process.step1')}</p></div>
          <div class="process-step"><div class="process-step-icon"><div class="process-step-num">2</div></div><p>${t('process.step2')}</p></div>
          <div class="process-step"><div class="process-step-icon"><div class="process-step-num">3</div></div><p>${t('process.step3')}</p></div>
        </div>
        <div class="process-cta"><a href="#" class="btn btn-primary">${t('process.cta')}</a></div>
      </div>
    </section>
    <section class="features" style="padding:48px 0">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon-wrap" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1B3A4B" stroke-width="2"/><path d="M13 20l5 5 9-9" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <h3 class="feature-title">${t('features.title1')}</h3>
            <ul class="feature-list"><li>${t('features.1.1')}</li><li>${t('features.1.2')}</li><li>${t('features.1.3')}</li></ul>
          </div>
          <div class="feature-card">
            <div class="feature-icon-wrap" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1B3A4B" stroke-width="2"/><circle cx="20" cy="16" r="5" stroke="#1B3A4B" stroke-width="2"/><path d="M10 32c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round"/></svg></div>
            <h3 class="feature-title">${t('features.title2')}</h3>
            <ul class="feature-list"><li>${t('features.2.1')}</li><li>${t('features.2.2')}</li><li>${t('features.2.3')}</li></ul>
          </div>
          <div class="feature-card">
            <div class="feature-icon-wrap" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1B3A4B" stroke-width="2"/><path d="M14 20h12M20 14v12" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round"/></svg></div>
            <h3 class="feature-title">${t('features.title3')}</h3>
            <ul class="feature-list"><li>${t('features.3.1')}</li><li>${t('features.3.2')}</li><li>${t('features.3.3')}</li></ul>
          </div>
        </div>
      </div>
    </section>`;
}
