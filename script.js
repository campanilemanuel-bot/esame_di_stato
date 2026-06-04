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
        '.presentation-text, .gallery-item, .document-card'
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

// ==================== PARALLAX EFFECT ==================== //

// Effetto parallax leggero sulla hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg && window.pageYOffset < hero.offsetHeight) {
        const scrollPosition = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ==================== PDF VIEWER FALLBACK ==================== //

// Gestire il caricamento del PDF
window.addEventListener('load', () => {
    const iframes = document.querySelectorAll('.pdf-viewer iframe');
    
    iframes.forEach(iframe => {
        // Verificare se il PDF è stato caricato
        iframe.addEventListener('error', () => {
            console.error('Errore nel caricamento del PDF');
            iframe.parentElement.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Il PDF non è disponibile. <a href="' + iframe.src + '" target="_blank">Scarica il file</a></p>';
        });
    });
});

// ==================== CONSOLE LOG ==================== //

console.log('✨ Portfolio Manuel Campanile caricato correttamente');
console.log('📚 Sezioni: Home, Presentazione, Documenti');
