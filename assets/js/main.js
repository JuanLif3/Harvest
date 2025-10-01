/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

function showTab(tabId) {
            const track = document.getElementById('plans-slider-track');
            
            // 1. Cambia la posición del slider (transform)
            if (tabId === 'planes') {
                // Muestra la primera sección (Planes)
                track.style.transform = 'translateX(0)';
            } else if (tabId === 'personaliza') {
                // Muestra la segunda sección (Personaliza)
                track.style.transform = 'translateX(-50%)';
            }

            // 2. Maneja los botones activos/inactivos
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('inactive');
            });

            const activeTab = document.getElementById('tab-' + tabId);
            activeTab.classList.remove('inactive');
            activeTab.classList.add('active');
        }

		document.addEventListener('DOMContentLoaded', function() {
    // 1. Encuentra el elemento de video
    const videoElement = document.querySelector('.video-background video');

    if (videoElement) {
        // 2. Ajusta la velocidad de reproducción (1.0 es velocidad normal)
        // 0.5 = Mitad de velocidad (Más lento)
        // 0.7 = 70% de velocidad
        videoElement.playbackRate = 0.7; // Ajusta este valor al que desees
    }
});