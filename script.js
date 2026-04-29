const progress = document.querySelector(".scroll-progress");
const header = document.querySelector(".site-header");
const parallaxNodes = [...document.querySelectorAll("[data-parallax]")];
const productionBg = document.querySelector(".production-bg");
const revealNodes = [...document.querySelectorAll(".reveal")];
const zoneText = document.querySelector(".zone-text");
const zoneButtons = [...document.querySelectorAll(".hotspot-button")];

const zoneCopy = {
  court: "Центральный двор с водой собирает маршруты и создает спокойную паузу перед дегустацией.",
  roof: "Зеленые кровли работают как продолжение склона, теплоизоляция и видовая прогулочная поверхность.",
  cellar: "Нижний уровень отдан ферментации, выдержке и хранению, чтобы производственный цикл был логичным и стабильным.",
  view: "Панорамные залы и террасы связывают вкус вина с долиной, виноградниками и вечерним светом.",
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
  { threshold: 0.18 },
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
