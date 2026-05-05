const emailLink = document.querySelector(".contact-email");
if (emailLink) {
  const addr = "aknapp1" + "@" + "gmail.com";
  emailLink.href = "mailto:" + addr;
  emailLink.textContent = addr;
}

const root = document.documentElement;
const btn = document.querySelector("[data-theme-toggle]");

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

btn?.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

const nav = document.querySelector(".site-nav");
const footer = document.querySelector(".site-footer");

if (nav && footer) {
  let footerVisible = false;

  new IntersectionObserver(([entry]) => {
    footerVisible = entry.isIntersecting;
    nav.classList.toggle("has-shadow", !footerVisible && window.scrollY > 50);
  }).observe(footer);

  window.addEventListener("scroll", () => {
    if (!footerVisible) nav.classList.toggle("has-shadow", window.scrollY > 50);
  }, { passive: true });
}
