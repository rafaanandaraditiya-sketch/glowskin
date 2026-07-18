// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const tujuan = document.querySelector(this.getAttribute('href'));

        if(tujuan){

            tujuan.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});

// ===============================
// Tombol Beli
// ===============================

const tombol = document.querySelectorAll(".card button");

tombol.forEach(btn=>{

    btn.addEventListener("click",()=>{

        window.open(
            "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20membeli%20produk%20GlowSkin",
            "_blank"
        );

    });

});
// ============================
// Menu Hamburger
// ============================

const menu = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menu.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});