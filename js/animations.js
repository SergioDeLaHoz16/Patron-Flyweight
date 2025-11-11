/**
 * Sistema de animaciones para la infografía del Patrón Flyweight
 * Utiliza Intersection Observer para animar elementos al hacer scroll
 */

// Configuración del Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Crear el observer para animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agregar clase para activar la animación CSS
            entry.target.classList.add('animate-visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
            // No observar de nuevo para evitar re-animaciones
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

/**
 * Inicializa las animaciones de los elementos
 * Solo oculta y anima elementos que están fuera del viewport inicial
 */
function initAnimations() {
    // Esperar a que la página se renderice completamente
    requestAnimationFrame(() => {
        const animatedElements = document.querySelectorAll(
            '.animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in'
        );
        
        animatedElements.forEach(el => {
            // Verificar si el elemento ya está visible en el viewport inicial
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const isInitiallyVisible = rect.top < windowHeight * 1.5 && rect.bottom > -200;
            
            if (!isInitiallyVisible) {
                // Solo ocultar elementos que NO están visibles inicialmente
                if (el.classList.contains('animate-fade-in-up') || el.classList.contains('animate-scale-in')) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(50px) scale(0.95)';
                } else if (el.classList.contains('animate-slide-in-left')) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateX(-80px) scale(0.9)';
                } else if (el.classList.contains('animate-slide-in-right')) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateX(80px) scale(0.9)';
                }
                
                // Agregar transición suave
                el.style.transition = 'opacity 1s cubic-bezier(0.34, 1.56, 0.64, 1), transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
                
                // Observar el elemento para animarlo cuando entre en viewport
                observer.observe(el);
            }
            // Si está visible inicialmente, dejarlo como está (visible)
        });
    });
}

/**
 * Inicializa la animación del balancín al hacer hover
 */
function initSeesawAnimation() {
    const seesawContainer = document.querySelector('.seesaw-bar');
    if (seesawContainer) {
        const seesawSection = seesawContainer.closest('section');
        if (seesawSection) {
            seesawSection.addEventListener('mouseenter', () => {
                seesawContainer.style.transition = 'transform 0.3s ease';
                seesawContainer.style.transform = 'rotate(-10deg) translateY(-50%)';
            });
            seesawSection.addEventListener('mouseleave', () => {
                seesawContainer.style.transform = 'rotate(-8deg) translateY(-50%)';
            });
        }
    }
}

/**
 * Inicializa todas las animaciones cuando el DOM esté listo
 */
function init() {
    // Inicializar animaciones cuando el DOM esté completamente listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // Esperar un frame adicional para asegurar renderizado
            setTimeout(() => {
                initAnimations();
                initSeesawAnimation();
            }, 50);
        });
    } else {
        // DOM ya está listo, pero esperar un frame
        setTimeout(() => {
            initAnimations();
            initSeesawAnimation();
        }, 50);
    }
}

// Inicializar cuando se carga el script
init();

