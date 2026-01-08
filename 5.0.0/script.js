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
