// 1. Search Filter for Portals
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.grid-card');

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(term)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// 2. FAQ Accordion Toggle
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector('i');
        
        answer.classList.toggle('open');
        if (answer.classList.contains('open')) {
            icon.classList.replace('fa-plus', 'fa-minus');
        } else {
            icon.classList.replace('fa-minus', 'fa-plus');
        }
    });
});

// 3. Night Mode Toggle
const nightBtn = document.getElementById('nightModeBtn');
nightBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
