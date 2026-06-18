// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.padding = "18px 8%";
    } else {
        navbar.style.background = "rgba(0,0,0,0.45)";
        navbar.style.padding = "22px 8%";
    }

});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter-box h2");

const startCounter = () => {

    counters.forEach(counter => {

        const text = counter.innerText;

        if (!text.includes("+")) return;

        const target = parseInt(text);

        let count = 0;

        const speed = target / 80;

        const update = () => {

            if (count < target) {

                count += speed;

                counter.innerText =
                    Math.ceil(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText =
                    target + "+";

            }

        };

        update();

    });

};

const counterSection =
document.querySelector(".counter-section");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if (!counterSection) return;

    const sectionTop =
        counterSection.offsetTop - 500;

    if (
        window.scrollY > sectionTop &&
        !counterStarted
    ) {

        startCounter();
        counterStarted = true;

    }

});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements =
document.querySelectorAll(
".product-card, .why-card, .gallery-item, .testimonial-card"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform =
                "translateY(0px)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform =
        "translateY(50px)";
    el.style.transition =
        "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// ==========================
// ACTIVE NAV LINK
// ==========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

// ==========================
// CONTACT FORM
// ==========================

const form =
document.querySelector("form");

if (form) {

    form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        alert(
        "Thank you for contacting White Stone Hub. Our team will get in touch with you shortly."
        );

        form.reset();

    });

}
