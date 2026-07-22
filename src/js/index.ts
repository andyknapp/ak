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

const contactForm = document.querySelector<HTMLFormElement>('.contact-form');
const contactFormMessage = contactForm?.querySelector<HTMLElement>(
  '.contact-form-message'
);

function encodeForm(data: Record<string, string>): string {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

function showFormMessage(message: string, state: 'success' | 'error'): void {
  if (!contactFormMessage) return;
  contactFormMessage.textContent = message;
  contactFormMessage.hidden = false;
  contactFormMessage.classList.toggle('is-success', state === 'success');
  contactFormMessage.classList.toggle('is-error', state === 'error');
}

contactForm?.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const data: Record<string, string> = {};
  formData.forEach((value, key) => {
    data[key] = value.toString();
  });

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeForm(data)
  })
    .then(response => {
      if (!response.ok) throw new Error(String(response.status));
      showFormMessage('Thanks for reaching out — I’ll be in touch soon.', 'success');
      contactForm.reset();
    })
    .catch(() => {
      showFormMessage(
        'Something went wrong sending your message. Please try again.',
        'error'
      );
    });
});
