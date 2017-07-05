jQuery(document).ready(function($){

	// toggle product lineup
	$(function() {
		var lineup_toggle = $('.product-lineup .product-toggle'),
				down = $('.product-lineup .down');
				

			$(lineup_toggle).on('click', function() {
				var el = $(this);
				$(this).toggleClass('toggled');
				$(this).parents('.product-lineup').toggleClass('reveal');
				$(this).siblings(down).toggleClass('up');

				 el.text() == el.data("less") 
			    ? el.text(el.data("all")) 
			    : el.text(el.data("less"));
			});

			 
	})

});