// ==================== SCROLL REVEAL ==================== //

// Funzione per rivelare gli elementi durante lo scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Aggiungere la classe 'reveal' a tutte le card e sezioni per animarle
window.addEventListener('scroll', revealOnScroll);

// Eseguire la funzione al caricamento
revealOnScroll();

// ==================== NAVBAR ACTIVE LINK ==================== //

// Funzione per evidenziare il link della navbar attivo
function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        const sections = [
            { id: 'presentazione', offset: 150 },
            { id: 'pcto', offset: 150 },
            { id: 'civica', offset: 150 }
        ];
        
        sections.forEach(section => {
            const sectionElement = document.getElementById(section.id);
            if (sectionElement) {
                const sectionTop = sectionElement.offsetTop;
                if (pageYOffset >= sectionTop - section.offset) {
                    current = section.id;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

setActiveNavLink();

// ==================== SMOOTH SCROLL ENHANCEMENT ==================== //

// Aggiungere un piccolo delay al click sui link per un'esperienza migliore
const navLinks = document.querySelectorAll('.nav-link, .btn');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Il comportamento di scroll smooth è già gestito da CSS
        // Questo è solo per miglioramenti futuri se necessari
    });
});

// ==================== ANIMAZIONE CARDS AL CARICAMENTO ==================== //

// Funzione per animare le card quando si scrollano in vista
function animateCards() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateCards);
} else {
    animateCards();
}

// ==================== ANIMAZIONE HERO ==================== //

// Animare il testo hero al caricamento della pagina
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.animation = 'fadeInUp 0.8s ease';
    }
});

// ==================== EFFETTO PARALLAX LEGGERO ==================== //

// Aggiungere un leggero effetto parallax al hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (scrolled < hero.offsetHeight) {
        hero.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
    }
});

// ==================== CONSOLE LOG ==================== //

console.log('✨ Il mio Capolavoro - Sito caricato correttamente');
console.log('📚 Sezioni: Presentazione, PCTO, Educazione Civica');