const progress = document.querySelector(".scroll-progress");
const header = document.querySelector(".site-header");
const parallaxNodes = [...document.querySelectorAll("[data-parallax]")];
const productionBg = document.querySelector(".production-bg");
const revealNodes = [...document.querySelectorAll(".reveal")];
const zoneText = document.querySelector(".zone-text");
const zoneButtons = [...document.querySelectorAll(".hotspot-button")];

const zoneCopy = {
  court: "The central water court gathers routes and creates a calm pause before tasting.",
  roof: "Green roofs act as an extension of the slope, thermal insulation and a walkable viewing surface.",
  cellar: "The lower level is dedicated to fermentation, aging and storage, keeping the production cycle logical and stable.",
  view: "Panoramic halls and terraces connect the taste of wine with the valley, vineyards and evening light.",
};

let ticking = false;

function updateScrollEffects() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? scrollY / maxScroll : 0;

  progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  header.classList.toggle("is-solid", scrollY > 120);

  parallaxNodes.forEach((node) => {
    const speed = Number(node.dataset.parallax || 0);
    node.style.setProperty("--parallax-y", `${scrollY * speed}px`);
  });

  if (productionBg) {
    const rect = productionBg.parentElement.getBoundingClientRect();
    const offset = (window.innerHeight - rect.top) * 0.08;
    productionBg.style.setProperty("--production-y", `${offset}px`);
  }

  ticking = false;
}

function requestScrollUpdate() {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  {
    rootMargin: "0px 0px -4% 0px",
    threshold: 0.05,
  },
);

revealNodes.forEach((node) => revealObserver.observe(node));

zoneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    zoneButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    zoneText.textContent = zoneCopy[button.dataset.zone] || zoneCopy.court;
  });
});

window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", requestScrollUpdate);
updateScrollEffects();

// Secure contact email handling
const contactTrigger = document.getElementById("contact-trigger");
if (contactTrigger) {
  contactTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    const u = "dun4ev44";
    const d = "gmail.com";
    window.location.href = `mailto:${u}@${d}`;
  });
}

