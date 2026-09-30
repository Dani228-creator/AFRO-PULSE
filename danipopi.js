// ================================
// DANIPOPi — NEXT WAVE
// ================================


// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// Country filters
const filters = document.querySelectorAll(".filter");
const artistCards = document.querySelectorAll(".artist-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        const selectedCountry = filter.dataset.country;

        artistCards.forEach(card => {

            if (
                selectedCountry === "all" ||
                card.dataset.country === selectedCountry
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// Play buttons
const playButtons = document.querySelectorAll(".play-button");

playButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.textContent.trim() === "▶") {
            button.textContent = "Ⅱ";
        } else {
            button.textContent = "▶";
        }

    });

});


// Submission button
const submitBtn = document.getElementById("submitBtn");
const toast = document.getElementById("toast");

submitBtn.addEventListener("click", () => {

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

});


// Generate background particles
const particles = document.getElementById("particles");

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("span");

    particle.style.position = "absolute";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.background = "#f5b942";
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.opacity = Math.random() * .5;

    particles.appendChild(particle);

}


// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });

});
