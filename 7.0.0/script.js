const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const icon = toggle.querySelector("i");
const links = document.querySelectorAll(".nav-links a");

/* Abrir / fechar menu */
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    icon.classList.replace("fa-bars-staggered", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars-staggered");
  }
});

/* Fechar menu ao clicar em um link */
links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    icon.classList.replace("fa-xmark", "fa-bars-staggered");
  });
});

/* Fechar menu ao clicar fora */
document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !toggle.contains(e.target)
  ) {
    nav.classList.remove("active");
    icon.classList.replace("fa-xmark", "fa-bars-staggered");
  }
});



const toggleSkills = document.getElementById("toggleSkills");
const skillsWrapper = document.getElementById("skillsWrapper");
const skillsGrid = skillsWrapper.querySelector(".skills-grid");

function ajustarSkills() {
  // Altura máxima inicial = 70% da viewport
  const alturaMax = window.innerHeight * 0.7;

  // Altura real do conteúdo
  const alturaConteudo = skillsGrid.scrollHeight;

  // Se NÃO ultrapassa, mostra tudo e esconde botão
  if (alturaConteudo <= alturaMax) {
    skillsWrapper.style.maxHeight = "none";
    toggleSkills.style.display = "none";
    return;
  }

  // Se ultrapassa, ativa modo colapsado
  skillsWrapper.style.maxHeight = `${alturaMax}px`;
  toggleSkills.style.display = "inline-block";
  toggleSkills.textContent = "Exibir tudo";
  skillsWrapper.classList.remove("expanded");
}

// Toggle manual
toggleSkills.addEventListener("click", () => {
  const expandido = skillsWrapper.classList.toggle("expanded");

  if (expandido) {
    skillsWrapper.style.maxHeight = `${skillsGrid.scrollHeight}px`;
    toggleSkills.textContent = "Minimizar";
  } else {
    skillsWrapper.style.maxHeight = `${window.innerHeight * 0.7}px`;
    toggleSkills.textContent = "Exibir tudo";
  }
});

// Recalcula ao carregar e ao redimensionar
window.addEventListener("load", ajustarSkills);
window.addEventListener("resize", ajustarSkills);


const carousel = document.getElementById("projectsCarousel");
const btnPrev = document.getElementById("prevProject");
const btnNext = document.getElementById("nextProject");

function updateCarouselButtons() {
  btnPrev.style.display = carousel.scrollLeft <= 0 ? "none" : "flex";

  const maxScroll =
    carousel.scrollWidth - carousel.clientWidth - 5;

  btnNext.style.display =
    carousel.scrollLeft >= maxScroll ? "none" : "flex";
}

btnNext.addEventListener("click", () => {
  carousel.scrollBy({
    left: 360,
    behavior: "smooth"
  });
});

btnPrev.addEventListener("click", () => {
  carousel.scrollBy({
    left: -360,
    behavior: "smooth"
  });
});

carousel.addEventListener("scroll", updateCarouselButtons);
window.addEventListener("load", updateCarouselButtons);
window.addEventListener("resize", updateCarouselButtons);

const filterToggle = document.getElementById("filterToggle");
const filterDropdown = document.getElementById("filterDropdown");
const filterInputs = filterDropdown.querySelectorAll("input[type='checkbox']");
const projectCards = document.querySelectorAll(".project-card");

/* Abrir / fechar dropdown */
filterToggle.addEventListener("click", () => {
  filterDropdown.style.display =
    filterDropdown.style.display === "flex" ? "none" : "flex";
});

/* Função de filtro */
function filtrarProjetos() {
  const filtrosAtivos = Array.from(filterInputs)
    .filter(input => input.checked)
    .map(input => input.value.toLowerCase());

  projectCards.forEach(card => {
    const tags = card.dataset.tags
      .toLowerCase()
      .split(" ");

    const exibir =
      filtrosAtivos.length === 0 ||
      filtrosAtivos.some(filtro => tags.includes(filtro));

    card.style.display = exibir ? "flex" : "none";
  });
}

/* Eventos */
filterInputs.forEach(input =>
  input.addEventListener("change", filtrarProjetos)
);

/* Fechar dropdown ao clicar fora */
document.addEventListener("click", e => {
  if (
    !filterToggle.contains(e.target) &&
    !filterDropdown.contains(e.target)
  ) {
    filterDropdown.style.display = "none";
  }
});
