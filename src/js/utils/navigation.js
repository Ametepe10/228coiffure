export const initNavigation = () => {
    const nav = document.querySelector(".nav-menu");
    const toggle = document.querySelector(".nav-toggle");
    
    toggle.onclick = function() {
        nav.classList.toggle("show-nav")
    }

    const navLink = document.querySelectorAll(".nav-link")
    
    function linkAction() {
        const navMenu = document.querySelector(".nav-menu")
        navMenu.classList.remove("show-nav")
    }

    return { linkAction }
} 