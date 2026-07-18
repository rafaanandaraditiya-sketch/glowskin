// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ==============================
// Navbar Shadow
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";
    }

});

// ==============================
// Fade In Animation
// ==============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";

    observer.observe(card);

})
// ============================
// Mobile Menu
// ============================

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});