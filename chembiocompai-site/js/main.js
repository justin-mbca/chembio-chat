// main.js - ChemBioCompAI
// Simple JS for navigation and form placeholder

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
            form.reset();
        });
    }
});
