// --- script.js ---

// 1. Effet machine à écrire pour le H1
const textElement = document.getElementById('typing-text');
const textToType = "Data Analyst Junior";
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Vitesse de frappe (100ms)
    }
}

// 2. Animation d'apparition au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Lancer l'effet machine à écrire au chargement
window.onload = function() {
    // Petit délai avant de commencer
    setTimeout(typeWriter, 500);
};