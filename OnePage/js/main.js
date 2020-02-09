(function($){

	"use strict";
	/* Inicializar nosso contador */
	$('.contar').counterup({
		time: 1000,
		delay: 10
	});

	var $doc = $('html,body');
	$('.scroll-page').click(function(){
		$doc.animate({
			scrollTop: $($.attr(this,'href')).offset().top
		}, 500);
		return false;
	});


})(jQuery);