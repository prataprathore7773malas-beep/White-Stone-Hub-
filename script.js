/*==================================================
      WHITE STONE HUB
      PREMIUM SCRIPT - PART 1
==================================================*/

/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {

menuBtn.addEventListener("click", () => {

navMenu.classList.toggle("active");

menuBtn.classList.toggle("active");

});

}

/*==============================
CLOSE MENU AFTER CLICK
==============================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("active");

menuBtn.classList.remove("active");

});

});

/*==============================
STICKY NAVBAR
==============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

navbar.classList.add("sticky");

}else{

navbar.classList.remove("sticky");

}

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
const sectionHeight = section.offsetHeight;

if(window.pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

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
SCROLL REVEAL
==============================*/

const revealElements = document.querySelectorAll(

".hero-left, .hero-right, .about-left, .about-right, .product-card, .why-card, .gallery-item, .testimonial-card, .counter-box, .contact-left, .contact-right"

);

const revealOnScroll = () => {

revealElements.forEach(el => {

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 80){

el.classList.add("show");

}

});

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*==============================
IMAGE HOVER EFFECT
==============================*/

document.querySelectorAll(".product-image img").forEach(img => {

img.addEventListener("mouseenter", () => {

img.style.transform = "scale(1.08)";

});

img.addEventListener("mouseleave", () => {

img.style.transform = "scale(1)";

});

});

/*==============================
GALLERY HOVER
==============================*/

document.querySelectorAll(".gallery-item").forEach(item => {

item.addEventListener("mouseenter", () => {

item.style.transform = "translateY(-8px)";

});

item.addEventListener("mouseleave", () => {

item.style.transform = "translateY(0px)";

});

}); /*==================================================
      WHITE STONE HUB
      PREMIUM SCRIPT - PART 2
==================================================*/

/*==============================
COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".counter-box h2");

const startCounter = () => {

counters.forEach(counter => {

const targetText = counter.innerText;

const target = parseInt(targetText.replace(/\D/g,""));

let count = 0;

const speed = target / 80;

const updateCounter = () => {

if(count < target){

count += speed;

counter.innerText = Math.ceil(count) + (targetText.includes("+") ? "+" : "");

requestAnimationFrame(updateCounter);

}else{

counter.innerText = targetText;

}

};

updateCounter();

});

};

const counterSection = document.querySelector(".counter-section");

let counterStarted = false;

window.addEventListener("scroll",()=>{

if(counterSection){

const top = counterSection.getBoundingClientRect().top;

if(top < window.innerHeight - 100 && !counterStarted){

counterStarted = true;

startCounter();

}

}

});

/*==============================
CONTACT FORM
==============================*/

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name = form.querySelector('input[type="text"]').value.trim();

if(name===""){

alert("Please enter your name.");

return;

}

alert("Thank you! We will contact you soon.");

form.reset();

});

}

/*==============================
BUTTON RIPPLE EFFECT
==============================*/

document.querySelectorAll(".btn-primary,.btn-secondary,.cta-btn,.nav-btn")
.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*==============================
SCROLL TO TOP BUTTON
==============================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="scroll-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
NAVBAR SHADOW
==============================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>20){

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}else{

navbar.style.boxShadow="none";

}

});

/*==============================
PRELOAD HERO IMAGE
==============================*/

const heroImage=new Image();

heroImage.src="hero.jpeg";

/*==============================
CURRENT YEAR
==============================*/

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==============================
CONSOLE MESSAGE
==============================*/

console.log("%cWhite Stone Hub","font-size:26px;font-weight:bold;color:#C7A86D;");

console.log("%cPremium Marble & Granite Website","font-size:14px;color:#666;"); 
