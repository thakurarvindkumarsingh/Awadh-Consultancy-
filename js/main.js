/* ==========================================
   GP SAHAYAK PRO - MAIN.JS
   Homepage Functionality
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    loaderHandler();
    mobileMenu();
    navbarScrollEffect();
    scrollTopButton();
    animatedCounters();
    smoothScrolling();
    searchBoxHandler();
    revealOnScroll();

});

/* ==========================================
   LOADER
========================================== */

function loaderHandler() {

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.6s ease";

    });

}

/* ==========================================
   MOBILE MENU
========================================== */

function mobileMenu() {

    const menu = document.querySelector(".nav-menu");
    const menuBtn = document.querySelector(".menu-btn");

    if (!menuBtn || !menu) return;

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (menu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }

    });

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

            menuBtn.querySelector("i").className = "fa-solid fa-bars";

        });

    });

}

/* ==========================================
   NAVBAR SHADOW
========================================== */

function navbarScrollEffect() {

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";
            header.style.background = "rgba(255,255,255,.92)";

        } else {

            header.style.boxShadow = "none";
            header.style.background = "rgba(255,255,255,.82)";

        }

    });

}

/* ==========================================
   SCROLL TO TOP
========================================== */

function scrollTopButton() {

    const btn = document.getElementById("scrollTop");

    if (!btn) return;

    btn.style.display = "none";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            btn.style.display = "block";

        } else {

            btn.style.display = "none";

        }

    });

    btn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==========================================
   ANIMATED COUNTERS
========================================== */

function animatedCounters() {

    const counters = document.querySelectorAll(".stat-card h2");

    let started = false;

    function startCounter() {

        counters.forEach(counter => {

            const target = parseInt(counter.innerText.replace("+", ""));
            let count = 0;

            const speed = target / 60;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";
                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

    }

    window.addEventListener("scroll", () => {

        const stats = document.querySelector(".stats");

        if (!stats) return;

        const position = stats.offsetTop - window.innerHeight + 100;

        if (window.scrollY > position && !started) {

            started = true;
            startCounter();

        }

    });

}

/* ==========================================
   SMOOTH SCROLL LINKS
========================================== */

function smoothScrolling() {

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

}

/* ==========================================
   HERO SEARCH DEMO
========================================== */

function searchBoxHandler() {

    const input = document.querySelector(".hero-search input");
    const button = document.querySelector(".hero-search button");

    if (!input || !button) return;

    button.addEventListener("click", () => {

        const keyword = input.value.trim();

        if (keyword === "") {

            alert("Please enter something to search.");

            return;

        }

        alert(`Searching for: ${keyword}`);

    });

    input.addEventListener("keypress", (e) => {

        if (e.key === "Enter") {

            button.click();

        }

    });

}

/* ==========================================
   REVEAL ANIMATION ON SCROLL
========================================== */

function revealOnScroll() {

    const reveals = document.querySelectorAll(
        ".service-card,.portal-card,.tool-card,.pdf-card,.blog-card,.stat-card"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    reveals.forEach(card => {

        card.classList.add("hidden-card");

        observer.observe(card);

    });

}

/* ==========================================
   CURRENT YEAR IN FOOTER
========================================== */

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML =
        `© ${year} GP Sahayak Pro • Designed by Arvind Kumar Singh`;

}
