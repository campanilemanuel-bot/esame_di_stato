// ==================== SMOOTH SCROLL HANDLING ==================== //

// Scorrimento fluido per link ancora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL REVEAL ANIMATION ==================== //

// Osservare gli elementi per rivelare animazioni
const revealElements = () => {
    const elements = document.querySelectorAll(
        '.presentation-text, .presentation-card'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(element);
    });
};

// Eseguire quando il DOM è pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealElements);
} else {
    revealElements();
}

// ==================== CONSOLE LOG ==================== //

console.log('✨ Portfolio Manuel Campanile caricato correttamente');
console.log('📚 Sezioni: Home, Presentazione, PCTO, Educazione Civica');
