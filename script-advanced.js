// ==================== NAVBAR ACTIVE STATE ==================== //

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== SCROLL REVEAL ANIMATION ==================== //

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});

// ==================== SMOOTH SCROLL FOR BUTTONS ==================== //

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

// ==================== COUNTER ANIMATION ==================== //

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

const bigNumber = document.querySelector('.big-number');
if (bigNumber) {
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !bigNumber.classList.contains('animated')) {
                bigNumber.classList.add('animated');
                animateCounter(bigNumber, 21, 1500);
                observer2.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer2.observe(bigNumber);
}

// ==================== PDF LINKS HANDLING ==================== //

const pdfButtons = document.querySelectorAll('.btn-pdf');
pdfButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('PDF link clicked: ' + this.href);
    });
});

// ==================== PARALLAX EFFECT ==================== //

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        const scrollPosition = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ==================== CONSOLE LOG ==================== //

console.log('✨ Portfolio Manuel Campanile caricato correttamente');
console.log('📚 Sezioni: Home, Chi sono, Sport, PCTO, Educazione Civica, Conclusione');