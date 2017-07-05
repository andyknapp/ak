jQuery(document).ready(function($) {

	// initialize slider
	$(function() {
		$('.slider-hero').slick({
			infinite: true,
			dots: true,
			arrows: false,
			mobileFirst: true,
			responsive: [{ 
				breakpoint: 1056,
				settings: {
					//dots: false,
					//arrows: true,
				}
			}],
		});
	});
});