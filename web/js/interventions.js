	$(document).ready(function() {
		$('.slidable-element').hide();

		$('.slide-link').mouseenter(function(){
			clearTimeout($(this).data('timeoutId'));
			$(this).parent().find('.slide-subsection').find('.slide-subsection-li').show("slide",{direction: 'left'});
		}).mouseleave(function(){
			var someelement = this;
			var timeoutId = setTimeout(function(){
				if (! $(someelement).parent().find('.slide-subsection').find('.slide-subsection-li').hasClass('active')) {
					$(someelement).parent().find('.slide-subsection').find('.slide-subsection-li').hide("slide",{direction: 'left'});
				}
			}, 900);
				$(someelement).data('timeoutId', timeoutId);
		});

		$('.slide-subsection-link').click(function () {
			var current_element = $(this).attr('id') + '-content';
			var isNotDown = true;
			$('.visage-bottom-content').each( function () {
				if ($(this).css('display') != 'none') {
					var idSlide = $(this).attr('id').substr(0, $(this).attr('id').indexOf('-'));
					$('#' + idSlide).parent().hide("slide",{direction: 'left'});
					if ($(this).attr('id') == current_element) {
						isNotDown = false;
					}
					$('.visage-bottom-content').slideUp();
				}
			});
			if (isNotDown) {
				$('.slide-subsection-li').each( function () {
					$(this).removeClass('active');
				});
				$(this).parent().addClass('active');
				$('#' + $(this).attr('id') + '-content').slideDown();
			} else {
				$(this).parent().removeClass('active');
				$(this).parent().hide("slide",{direction: 'left'});

			}
			var page = "#" + current_element + " .interventions-bottomLeft"; //$(this).attr('href'); // Page cible
			// console.log(current_element);
			var speed = 750; // Durée de l'animation (en ms)
			// console.log($(page));
			setTimeout(function(){
				$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
			}, 400); // SI 400 TROP COURT TEXTE NA PAS LE TEMPS DE SE REPLIER AVANT QUE LANIM NE SE DECLENCHE ET LE POSITIONNEMENT NE SE FAI TPAS AU BON ENDROIT
		});
		
		/* sous parties */
		/*$('.content-link').click(function () {
			var current_element = $(this).attr('id') + '-content';
			if( $('#' + current_element).css('display') == 'none') {
				$('#' + current_element).slideDown();
				var speed = 750; // Durée de l'animation (en ms)
				setTimeout(function(){
					$('html, body').animate( { scrollTop: $('#' + current_element).offset().top }, speed );
				}, 300);
			} else {
				$('#' + current_element).slideUp();
			}
		});*/
		
		/* CHANGEMENT COULEUR AU SURVOL SLIDE SECTION // NON FONCTIONNEL*/
		/*$('.slide-section-link').hover ( function () {
			$(this).attr('data-background-color-orig', $(this).css('background-color'));
			$(this).css('background-color', 'white');
			$(this).children('.slide-subsection').children('.slide-subsection-li').css('background-color', 'white');
		},
		function () {
			$(this).css('background-color', $(this).attr('data-background-color-orig'));
			$(this).children('.slide-subsection').children('.slide-subsection-li').css('background-color', $(this).attr('data-background-color-orig'));
		}
		);*/
	});