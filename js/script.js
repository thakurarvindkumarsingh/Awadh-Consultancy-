// 1. Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 2. Real-Time Search Filter for Services
const searchBar = document.getElementById('searchBar');
const cards = document.querySelectorAll('.card');

searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    cards.forEach(card => {
        const textContent = card.innerText.toLowerCase();
        const keywords = card.getAttribute('data-title').toLowerCase();

        if (textContent.includes(query) || keywords.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

