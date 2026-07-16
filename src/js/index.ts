const root = document.documentElement;
const btn = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');

function applyTheme(theme: string): void {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}

btn?.addEventListener('click', () => {
  applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

const nav = document.querySelector<HTMLElement>('.site-nav');
const footer = document.querySelector<HTMLElement>('.site-footer');

if (nav && footer) {
  let footerVisible = false;

  new IntersectionObserver(([entry]) => {
    footerVisible = entry.isIntersecting;
    nav.classList.toggle('has-shadow', !footerVisible && window.scrollY > 50);
  }).observe(footer);

  window.addEventListener(
    'scroll',
    () => {
      if (!footerVisible)
        nav.classList.toggle('has-shadow', window.scrollY > 50);
    },
    { passive: true }
  );
}
