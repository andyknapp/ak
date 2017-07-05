jQuery(document).ready(function($){

	$(document).on('click', '.nutrition-facts', function(){
		$(this).toggleClass('show');
	});

	$(document).on('click', '.nutrition-label', function(e){
		e.stopPropagation();
	});

});