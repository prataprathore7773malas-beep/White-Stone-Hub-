/*==================================================
        WHITE STONE HUB
      PREMIUM WEBSITE JS
            PART 1
==================================================*/

/*==============================
PRELOADER
==============================*/

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    if (preloader) {

        preloader.style.opacity = "0";

        preloader.style.visibility = "hidden";

        preloader.style.transition = ".6s";

        setTimeout(() => {

            preloader.remove();

        }, 600);

    }

});

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

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

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

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.clientHeight;

        if(window.pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("show");

    menuBtn.classList.toggle("active");

});

/*==============================
AUTO CLOSE MOBILE MENU
==============================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("show");

        menuBtn.classList.remove("active");

    });

});

/*==============================
CLICK OUTSIDE MENU
==============================*/

document.addEventListener("click",(e)=>{

    if(

        !navMenu.contains(e.target)

        &&

        !menuBtn.contains(e.target)

    ){

        navMenu.classList.remove("show");

        menuBtn.classList.remove("active");

    }

});/*==================================================
        WHITE STONE HUB
      PREMIUM WEBSITE JS
            PART 2
==================================================*/

/*==============================
COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = target / 120;

            const updateCounter = ()=>{

                current += increment;

                if(current < target){

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{

    threshold:.5

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/*==============================
SCROLL REVEAL
==============================*/

const hiddenElements = document.querySelectorAll(

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

hiddenElements.forEach(el=>{

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

                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if(item.classList.contains("active")){

            answer.style.maxHeight = answer.scrollHeight + "px";

        }else{

            answer.style.maxHeight = null;

        }

    });

});

/*==============================
BUTTON RIPPLE EFFECT
==============================*/

const buttons = document.querySelectorAll(

".btn-primary,.btn-secondary,.nav-btn"

);

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        ripple.className="ripple";

        const rect=this.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";

        ripple.style.top=(e.clientY-rect.top)+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/*==============================
SCROLL TO TOP
==============================*/

const scrollTopBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==============================
IMAGE HOVER
==============================*/

document.querySelectorAll(

".gallery-item img,.product-card img"

).forEach(img=>{

    img.setAttribute("draggable","false");

});

/*==============================
CONSOLE BRANDING
==============================*/

console.clear();

console.log(

"%cWHITE STONE HUB",

"color:#D4AF37;font-size:28px;font-weight:bold;"

);

console.log(

"%cPremium Marble & Granite Collection",

"color:#ffffff;font-size:15px;"

);

console.log(

"%cWebsite Developed Successfully",

"color:#bdbdbd;font-size:13px;"

);
/*==============================
WHATSAPP ENQUIRY FORM
==============================*/

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const email = document.getElementById("email").value.trim();

        const requirement = document.getElementById("requirement").value.trim();

        const message =
`🪨 White Stone Hub Enquiry

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email || "Not Provided"}

📝 Requirement:
${requirement}`;

        const whatsappURL =
`https://wa.me/919928290455?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

}
