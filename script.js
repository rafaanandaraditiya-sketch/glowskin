// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ===============================
// Navbar berubah saat scroll
// ===============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>80){

        header.style.background="#ffffff";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.1)";

    }else{

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

    }

});

// ===============================
// Animasi muncul saat scroll
// ===============================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.reseller-box,.testi").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});