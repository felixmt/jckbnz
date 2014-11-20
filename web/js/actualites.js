$(document).ready(function() {
	$('.content-link').click(function () {
		var current_element = $(this).attr('id') + '-content';
		if( $('#' + current_element).css('display') == 'none') {
			$('#' + current_element).slideDown();
			var speed = 750; // Durée de l'animation (en ms)
			setTimeout(function(){
				$('html, body').animate( { scrollTop: $('#' + current_element).offset().top }, speed );
			}, 300);
			$(this).text("> Masquer");
		} else {
			$('#' + current_element).slideUp();
			$(this).text("> En savoir plus");
		}
	});
});