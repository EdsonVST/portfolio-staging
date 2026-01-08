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
