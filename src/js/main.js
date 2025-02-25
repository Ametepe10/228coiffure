// Show Navbar

const nav = document.querySelector(".nav-menu");
const toggle = document.querySelector(".nav-toggle");
toggle.onclick = function(){
     nav.classList.toggle("show-nav")
}

// Remove NavBar

const navLink = document.querySelectorAll(".nav-link")

function linkAction(){
     const navMenu = document.querySelector(".nav-menu")
     navMenu.classList.remove("show-nav")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

// change Active Color

const linkColor = document.querySelectorAll(".nav-link")
function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove("active"))
        this.classList.add("active")
    }
} 
linkColor.forEach(L => L.addEventListener("click", colorLink))

// Effet de scroll pour le header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Toggle menu mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-nav');
});

// Gestion du carrousel de témoignages
const testimonialsSlider = {
    currentSlide: 0,
    slides: document.querySelectorAll('.testimonial-slide'),
    prevBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),

    init() {
        // Masquer toutes les slides sauf la première
        this.slides.forEach((slide, index) => {
            if (index !== 0) slide.classList.remove('active');
        });

        // Événements des boutons
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Défilement automatique
        setInterval(() => this.nextSlide(), 5000);
    },

    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
    },

    prevSlide() {
        const index = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
        this.goToSlide(index);
    },

    nextSlide() {
        const index = this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
        this.goToSlide(index);
    }
};

// Initialisation du carrousel
document.addEventListener('DOMContentLoaded', () => {
    testimonialsSlider.init();
});