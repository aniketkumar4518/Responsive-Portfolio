const menuBtn = document.getElementById("menuBtn");

const navMenu = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});

const profileIcon = document.getElementById("navIcon");

const loginMode = document.getElementById("loginMode");

const closeLogin = document.getElementById("closeLogin");

profileIcon.addEventListener("click", () => {
    loginMode.classList.add("show");
});

closeLogin.addEventListener("click", () => {
    loginMode.classList.remove("show");
});

loginMode.addEventListener("click", (event) => {

    if (event.target === loginMode) {
        loginMode.classList.remove("show");
    }
});

const mobileLogin = document.getElementById("mobileLogin");

mobileLogin.addEventListener("click", (e) => {
    e.preventDefault();

    navMenu.classList.remove("show");

    loginMode.classList.add("show");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


const togglePassword = document.getElementById("togglePassword");

const passwordInput = document.querySelector(".password-box input");

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "👁️";
    }
});





const words = [
    "Full Stack",
    "Frontend",
    "Python"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    let currentWord = words[wordIndex];

    if(!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 20 : 50;

    if(!isDeleting && charIndex === currentWord.length + 1) {

        speed = 1200;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);

}

typeEffect();



window.addEventListener("scroll", () => {

    if (window.innerWidth <= 900) {

        navMenu.classList.remove("show");

    }
});

window.addEventListener("scroll", () => {

    if (window.innerWidth <= 900) {
        loginMode.classList.remove("show");
    }
});