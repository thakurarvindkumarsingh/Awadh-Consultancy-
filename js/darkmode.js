/* ==========================================
   DARK MODE
========================================== */

const themeBtn = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});
