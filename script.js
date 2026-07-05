/*==================================================
        WHITE STONE HUB
      PREMIUM WEBSITE JS
            PART 1
==================================================*/

/*==============================
STICKY NAVBAR
==============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==============================
ACTIVE NAV LINK
==============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    menuBtn.classList.toggle("active");

});

/*==============================
AUTO CLOSE MENU
==============================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        menuBtn.classList.remove("active");

    });

});

/*==============================
BUTTON RIPPLE EFFECT
==============================*/

const buttons = document.querySelectorAll(".btn-primary,.btn-secondary,.nav-btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left = e.clientX - rect.left + "px";

        ripple.style.top = e.clientY - rect.top + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

}); /*==================================================
        WHITE STONE HUB
      PREMIUM WEBSITE JS
            PART 2
==================================================*/

/*==============================
COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 120;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold:0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==============================
SCROLL REVEAL
==============================*/

const revealElements = document.querySelectorAll(

".about,.product-card,.counter-card,.why-card,.business-card,.service-card,.gallery-item,.testimonial-card,.faq-item,.contact-box,.contact-form"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

revealElements.forEach(el=>{

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/*==============================
FAQ ACCORDION
==============================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question = item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other!==item){

                other.classList.remove("active");

                other.querySelector(".faq-answer").style.maxHeight=null;

            }

        });

        item.classList.toggle("active");

        const answer=item.querySelector(".faq-answer");

        if(item.classList.contains("active")){

            answer.style.maxHeight=answer.scrollHeight+"px";

        }else{

            answer.style.maxHeight=null;

        }

    });

});

/*==============================
IMAGE HOVER EFFECT
==============================*/

document.querySelectorAll(".gallery-item img,.product-card img").forEach(img=>{

    img.addEventListener("mousemove",(e)=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

}); /*==================================================
        WHITE STONE HUB
      PREMIUM WEBSITE JS
            PART 3
==================================================*/

/*==============================
SCROLL TO TOP BUTTON
==============================*/

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==============================
NAVBAR CLOSE ON OUTSIDE CLICK
==============================*/

document.addEventListener("click", (e) => {

    if (

        navMenu.classList.contains("show") &&

        !navMenu.contains(e.target) &&

        !menuBtn.contains(e.target)

    ) {

        navMenu.classList.remove("show");

        menuBtn.classList.remove("active");

    }

});

/*==============================
PRELOADER
==============================*/

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    if (preloader) {

        preloader.style.opacity = "0";

        preloader.style.visibility = "hidden";

        setTimeout(() => {

            preloader.remove();

        }, 600);

    }

});

/*==============================
PARALLAX HERO IMAGE
==============================*/

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("scroll", () => {

    if (heroImage) {

        const offset = window.pageYOffset;

        heroImage.style.transform = `translateY(${offset * 0.08}px)`;

    }

});

/*==============================
SECTION FADE-UP ANIMATION
==============================*/

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => {

    el.style.transition = "all .8s ease";

});

/*==============================
WHATSAPP BUTTON PULSE
==============================*/

const whatsappBtn = document.querySelector(".whatsapp-btn");

if (whatsappBtn) {

    setInterval(() => {

        whatsappBtn.classList.add("pulse");

        setTimeout(() => {

            whatsappBtn.classList.remove("pulse");

        }, 900);

    }, 3000);

}

/*==============================
CURRENT YEAR IN FOOTER
==============================*/

const year = document.querySelector(".current-year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*==============================
DISABLE RIGHT CLICK
(Optional - Remove if not needed)
==============================*/

// document.addEventListener("contextmenu", e => {

//     e.preventDefault();

// });

/*==============================
DISABLE IMAGE DRAG
==============================*/

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

/*==============================
CONSOLE BRANDING
==============================*/

console.clear();

console.log("%cWHITE STONE HUB",
"color:#D4AF37;font-size:28px;font-weight:bold;");

console.log("%cPremium Marble & Granite Collection",
"color:#ffffff;font-size:14px;");

console.log("%cWebsite Designed & Developed",
"color:#BDBDBD;font-size:13px;");

console.log("%cPowered by White Stone Hub",
"color:#D4AF37;font-size:13px;");
