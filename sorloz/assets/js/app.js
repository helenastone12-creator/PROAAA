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
  const res = await fetch(`/locales/${lang}.json`);
  if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
  return res.json();
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

  if (typeof renderPage === 'function') renderPage(t);
  initFaq();
  initSimulator();
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
    if (!item.classList.contains('open')) answer.style.maxHeight = '0';
    btn.onclick = () => {
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '0';
    };
  });
}

// ─── Loan Simulator ──────────────────────────────────────────────────────────

function calcLoan(principal, months, annualRate) {
  const r = annualRate / 100 / 12;
  if (r === 0) return { monthly: principal / months, total: principal, cost: 0 };
  const pow = Math.pow(1 + r, months);
  const monthly = principal * r * pow / (pow - 1);
  const total = monthly * months;
  return { monthly, total, cost: total - principal };
}

function formatEur(n) {
  return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
}

function showSimResult(container, principal, months) {
  const { monthly, total, cost } = calcLoan(principal, months, 7.6);
  const existing = container.querySelector('.sim-result');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.className = 'sim-result';
  div.style.cssText = 'margin-top:20px;padding:20px 24px;background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.10);';
  div.innerHTML = `
    <p style="font-size:13px;color:#666;margin:0 0 4px">Mensualité estimée</p>
    <p style="font-size:32px;font-weight:800;color:var(--dark);margin:0 0 12px">${formatEur(monthly)}<span style="font-size:15px;font-weight:500;color:#888"> /mois</span></p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:14px">
      <div style="background:#F5F7FA;border-radius:8px;padding:12px">
        <p style="color:#666;margin:0 0 2px">Total à rembourser</p>
        <p style="font-weight:700;color:var(--dark);margin:0">${formatEur(total)}</p>
      </div>
      <div style="background:#F5F7FA;border-radius:8px;padding:12px">
        <p style="color:#666;margin:0 0 2px">Coût du crédit</p>
        <p style="font-weight:700;color:var(--red);margin:0">${formatEur(cost)}</p>
      </div>
    </div>
    <p style="font-size:11px;color:#aaa;margin:12px 0 0">TAEG fixe 7,6 % — simulation non contractuelle</p>
  `;
  container.appendChild(div);
}

function initSimulator() {
  document.querySelectorAll('.sim-btn').forEach(btn => {
    const container = btn.closest('.hero-sim, .hero-left, .sim-block');
    if (!container) return;
    const input = container.querySelector('.sim-input');
    const durationSel = container.querySelector('.sim-duration');
    if (!input) return;

    // Remove old listener by cloning
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener('click', () => {
      const val = parseFloat(String(input.value).replace(/[^0-9.]/g, ''));
      if (!val || val < 500 || val > 75000) {
        input.classList.add('error');
        input.focus();
        return;
      }
      input.classList.remove('error');
      const months = durationSel ? parseInt(durationSel.value, 10) : 60;
      showSimResult(container, val, months);
    });
    input.addEventListener('input', () => input.classList.remove('error'));
    input.addEventListener('keydown', e => { if (e.key === 'Enter') newBtn.click(); });
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

  if (typeof renderPage === 'function') {
    renderPage(t);
  }
  initSimulator();
});
