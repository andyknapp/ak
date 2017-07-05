jQuery(document).ready(function($){

	$('.panel-varieties .slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1056,
				settings: {
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 700,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
				}
			}
		]
	});

});