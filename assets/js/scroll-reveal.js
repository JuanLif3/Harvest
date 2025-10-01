document.addEventListener('DOMContentLoaded', () => {
    
    // Función que verifica si un elemento está visible en la ventana
    function isVisible(element) {
        // Obtiene la posición del elemento respecto al viewport
        const rect = element.getBoundingClientRect();
        
        // El elemento es visible si:
        // 1. Su borde superior está por encima de la parte inferior del viewport (window.innerHeight).
        // 2. Y su borde inferior está por encima de la parte superior del viewport (0).
        // Usamos un margen (rect.top <= (window.innerHeight - 100)) para que aparezca antes de que el borde toque el fondo.
        return rect.top <= (window.innerHeight - 100) && rect.bottom >= 0;
    }

    // Función principal para activar la animación
    function revealElements() {
        const revealTargets = document.querySelectorAll('.metric-card.hidden');
        
        revealTargets.forEach(card => {
            if (isVisible(card)) {
                // Si es visible, añade la clase 'reveal' y quita la clase 'hidden'
                card.classList.add('reveal');
                card.classList.remove('hidden');
            }
            // NOTA: No quitamos el 'reveal' para que la animación no se repita al hacer scroll hacia arriba
        });
    }

    // Ejecuta la función al inicio para verificar si los elementos ya están en pantalla
    revealElements(); 
    
    // Escucha el evento de scroll para ejecutar la función continuamente
    window.addEventListener('scroll', revealElements);
    
    // Opcional: Escucha el evento de redimensionamiento
    window.addEventListener('resize', revealElements);
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los recuadros que queremos animar
    const bubbles = document.querySelectorAll('.metric-bubble');

    // Opciones del observador
    const observerOptions = {
        root: null, // Observa dentro del viewport
        rootMargin: '0px',
        threshold: 0.2 // Se dispara cuando el 20% del elemento es visible
    };

    // Función que se ejecuta cuando el elemento entra o sale del viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está visible (intersecting)
            if (entry.isIntersecting) {
                // Añade la clase que activa el CSS de animación
                entry.target.classList.add('is-visible');
                // Deja de observar el elemento una vez que ha aparecido
                observer.unobserve(entry.target);
            }
        });
    };

    // Crea la instancia del observador
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa cada burbuja
    bubbles.forEach(bubble => {
        observer.observe(bubble);
    });
});