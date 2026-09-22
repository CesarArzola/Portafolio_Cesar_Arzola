document.addEventListener("DOMContentLoaded", function() {

    // 1. Mover la barra de navegación al lateral izquierdo al hacer scroll
    const barraNav = document.querySelector('.barra');

    window.addEventListener('scroll', function() {
        // Se activa el desplazamiento lateral al bajar más de 100px
        if (window.scrollY > 100) {
            barraNav.classList.add('scrolled');
        } else {
            barraNav.classList.remove('scrolled');
        }
    });

    // 2. Animación de llenado de las barras estadísticas al aparecer en pantalla
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = document.querySelectorAll('.skill-bar-fill');
                
                skillBars.forEach(bar => {
                    const percent = bar.getAttribute('data-percent');
                    bar.style.width = percent + '%';
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});