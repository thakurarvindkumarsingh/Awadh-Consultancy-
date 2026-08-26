/* ==========================================
   ACTIVE NAV LINK
========================================== */

const links = document.querySelectorAll(".nav-menu a");

const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {

    const page = link.getAttribute("href").split("/").pop();

    if (page === currentPage) {

        link.classList.add("active");

    }

});
