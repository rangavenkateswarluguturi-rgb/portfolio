const siteConfig = {
  email: "",
  projectRepositories: {
    llm: "",
    abap: ""
  }
};

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const header = document.querySelector(".site-header");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      navigation.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      navigation.classList.remove("is-open");
      menuToggle.focus();
    }
  });
}

const setHeaderState = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

const roleElement = document.querySelector("#rotating-role");
const roles = ["SAP ABAP", "Python development", "AI applications", "web development"];
if (roleElement && !reducedMotion) {
  let roleIndex = 0;
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleElement.animate(
      [{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 280, easing: "ease-out" }
    );
    roleElement.textContent = roles[roleIndex];
  }, 2800);
}

for (const [project, repository] of Object.entries(siteConfig.projectRepositories)) {
  if (!repository) continue;
  const link = document.querySelector(`[data-project-link="${project}"]`);
  const fallback = document.querySelector(`[data-project-fallback="${project}"]`);
  if (link instanceof HTMLAnchorElement) {
    link.href = repository;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.hidden = false;
  }
  if (fallback) fallback.hidden = true;
}

if (siteConfig.email) {
  const emailLink = document.querySelector("[data-email-link]");
  const fallback = document.querySelector("[data-email-fallback]");
  if (emailLink instanceof HTMLAnchorElement) {
    emailLink.href = `mailto:${siteConfig.email}`;
    emailLink.hidden = false;
  }
  if (fallback) fallback.hidden = true;
}
