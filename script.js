/* =========================
   ANIMATED PARTICLES
========================= */

const particleContainer =
  document.querySelector(".particles");

for (let i = 0; i < 60; i++) {

  const particle =
    document.createElement("span");

  particle.className = "particle";

  particle.style.left =
    `${Math.random() * 100}%`;

  particle.style.animationDuration =
    `${8 + Math.random() * 16}s`;

  particle.style.animationDelay =
    `${Math.random() * -20}s`;

  particle.style.opacity =
    `${0.15 + Math.random() * 0.5}`;

  particleContainer.appendChild(particle);
}


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
  document.getElementById("menuBtn");

const nav =
  document.getElementById("nav");

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("open");

});


document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

  });

});


/* =========================
   SEARCH
========================= */

const searchBtn =
  document.getElementById("searchBtn");

const searchModal =
  document.getElementById("searchModal");

const closeSearch =
  document.getElementById("closeSearch");

const searchInput =
  document.getElementById("searchInput");


searchBtn.addEventListener("click", () => {

  searchModal.classList.add("open");

  setTimeout(() => {

    searchInput.focus();

  }, 100);

});


closeSearch.addEventListener("click", () => {

  searchModal.classList.remove("open");

});


searchModal.addEventListener("click", event => {

  if (event.target === searchModal) {

    searchModal.classList.remove("open");

  }

});


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    searchModal.classList.remove("open");

  }

});


/* =========================
   PLAY BUTTONS
========================= */

document.querySelectorAll(".play-btn").forEach(button => {

  button.addEventListener("click", () => {

    if (button.textContent === "▶") {

      button.textContent = "Ⅱ";

    } else {

      button.textContent = "▶";

    }

  });

});


/* =========================
   SHORT BUTTONS
========================= */

document.querySelectorAll(".short-video button")
.forEach(button => {

  button.addEventListener("click", () => {

    if (button.textContent === "▶") {

      button.textContent = "Ⅱ";

    } else {

      button.textContent = "▶";

    }

  });

});


/* =========================
   SHOWCASE BUTTON
========================= */

const showcaseBtn =
  document.getElementById("showcaseBtn");

const toast =
  document.getElementById("toast");

showcaseBtn.addEventListener("click", () => {

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 3500);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll("main section[id]");

const navLinks =
  document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

  let current = "home";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {

      current = section.id;

    }

  });


  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      === `#${current}`
    ) {

      link.classList.add("active");

    }

  });

});
