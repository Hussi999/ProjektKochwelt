
const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('main-nav');
const body = document.body;
let isMenuOpen = false;

function openMenu() {
  hamburger.classList.add('open');
  nav.classList.add('open');
  body.classList.add('menu-open');
  hamburger.setAttribute('aria-expanded', 'true');
  isMenuOpen = true;
}

function closeMenu() {
  hamburger.classList.remove('open');
  nav.classList.remove('open');
  body.classList.remove('menu-open');
  hamburger.setAttribute('aria-expanded', 'false');
  isMenuOpen = false;
}

function toggleMenu() {
  isMenuOpen ? closeMenu() : openMenu();
}

hamburger.addEventListener('click', toggleMenu);

body.addEventListener('click', e => {
  if (isMenuOpen && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});