// ─── i18n Engine ────────────────────────────────────────────────────────────

const SUPPORTED_LANGS = ['fr','en','sv','de','pl','lt','fi','pt','it'];
const LANG_LABELS = {
  fr: 'Français', en: 'English', sv: 'Svenska',
  de: 'Deutsch', pl: 'Polski', lt: 'Lietuvių',
  fi: 'Suomi', pt: 'Português', it: 'Italiano'
};
const DEFAULT_LANG = 'fr';

let currentLang = DEFAULT_LANG;
let translations = {};

async function loadTranslations(lang) {
  const base = getBase();
  const res = await fetch(`${base}locales/${lang}.json`);
  if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
  return res.json();
}

function getBase() {
  // Works both at root and in subdirectories
  const depth = window.location.pathname.replace(/^\//, '').split('/').length - 1;
  return depth > 0 ? '../'.repeat(depth) : './';
}

function t(key) {
  return translations[key] ?? key;
}

function applyTranslations() {
  document.title = t('meta.title');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // Update lang switcher selected value
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = currentLang;

  document.documentElement.lang = currentLang;
}

async function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  translations = await loadTranslations(lang);
  localStorage.setItem('sorloz_lang', lang);
  applyTranslations();

  // Re-render page content if on a product page
  if (typeof renderPage === 'function') renderPage(t);
  // Re-init interactive parts
  initFaq();
}

async function initI18n() {
  const saved = localStorage.getItem('sorloz_lang');
  const browserLang = navigator.language?.slice(0, 2);
  const lang = SUPPORTED_LANGS.includes(saved) ? saved
    : SUPPORTED_LANGS.includes(browserLang) ? browserLang
    : DEFAULT_LANG;

  translations = await loadTranslations(lang);
  currentLang = lang;
  applyTranslations();
}

function buildLangSelector() {
  const wrap = document.getElementById('lang-switcher-wrap');
  if (!wrap) return;

  const sel = document.createElement('select');
  sel.id = 'lang-select';
  sel.className = 'lang-select';
  sel.setAttribute('aria-label', 'Select language');

  SUPPORTED_LANGS.forEach(lang => {
    const opt = document.createElement('option');
    opt.value = lang;
    opt.textContent = LANG_LABELS[lang];
    if (lang === currentLang) opt.selected = true;
    sel.appendChild(opt);
  });

  sel.addEventListener('change', () => setLang(sel.value));
  wrap.appendChild(sel);
}

// ─── Nav dropdown ────────────────────────────────────────────────────────────

function initDropdown() {
  const trigger = document.querySelector('.dropdown-trigger');
  const menu = document.querySelector('.dropdown-menu');
  if (!trigger || !menu) return;

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    const open = menu.classList.toggle('open');
    trigger.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', () => {
    menu.classList.remove('open');
    trigger?.setAttribute('aria-expanded', false);
  });
}

// ─── FAQ accordion ───────────────────────────────────────────────────────────

function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;
    // Reset max-height
    if (!item.classList.contains('open')) answer.style.maxHeight = '0';
    btn.onclick = () => {
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '0';
    };
  });
}

// ─── Simulation input ────────────────────────────────────────────────────────

function initSimulator() {
  document.querySelectorAll('.sim-btn').forEach(btn => {
    const input = btn.closest('.hero-sim, .hero-left')?.querySelector('.sim-input');
    if (!input) return;
    btn.addEventListener('click', () => {
      const val = parseFloat(String(input.value).replace(/[^0-9.]/g, ''));
      if (!val || val < 500 || val > 75000) {
        input.classList.add('error');
        input.focus();
        return;
      }
      input.classList.remove('error');
      alert(`Simulation pour ${val.toLocaleString('fr-FR')} €`);
    });
    input.addEventListener('input', () => input.classList.remove('error'));
    input.addEventListener('keydown', e => { if (e.key === 'Enter') btn.click(); });
  });
}

// ─── Mobile nav ──────────────────────────────────────────────────────────────

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// ─── Boot ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n();
  buildLangSelector();
  initDropdown();
  initFaq();
  initMobileNav();

  // Page-specific init (page.html)
  if (typeof renderPage === 'function') {
    renderPage(t);
    initSimulator();
  } else {
    initSimulator();
  }
});
