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