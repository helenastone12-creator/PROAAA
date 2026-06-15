// ─── i18n Engine ────────────────────────────────────────────────────────────

const SUPPORTED_LANGS = ['fr', 'en'];
const DEFAULT_LANG = 'fr';

let currentLang = DEFAULT_LANG;
let translations = {};

async function loadTranslations(lang) {
  const res = await fetch(`./locales/${lang}.json`);
  if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
  return res.json();
}

function t(key) {
  return translations[key] ?? key;
}

function applyTranslations() {
  document.title = t('meta.title');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    el.innerHTML = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = t(key);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    el.setAttribute('aria-label', t(key));
  });

  // Update lang switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  document.documentElement.lang = currentLang;
}

async function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  translations = await loadTranslations(lang);
  localStorage.setItem('sorloz_lang', lang);
  applyTranslations();
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
    trigger.setAttribute('aria-expanded', false);
  });
}

// ─── FAQ accordion ───────────────────────────────────────────────────────────

function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '0';
    });
  });
}

// ─── Simulation input ────────────────────────────────────────────────────────

function initSimulator() {
  const input = document.querySelector('.sim-input');
  const btn = document.querySelector('.sim-btn');
  if (!input || !btn) return;

  btn.addEventListener('click', () => {
    const val = parseFloat(input.value.replace(/[^0-9.]/g, ''));
    if (!val || val < 500 || val > 75000) {
      input.classList.add('error');
      input.focus();
      return;
    }
    input.classList.remove('error');
    // Placeholder: would redirect to actual simulator
    alert(`Simulation pour ${val.toLocaleString('fr-FR')} €`);
  });

  input.addEventListener('input', () => input.classList.remove('error'));

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') btn.click();
  });
}

// ─── Mobile nav toggle ───────────────────────────────────────────────────────

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// ─── Smooth scroll for CTA buttons ──────────────────────────────────────────

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ─── Boot ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n();
  initDropdown();
  initFaq();
  initSimulator();
  initMobileNav();
  initSmoothScroll();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
