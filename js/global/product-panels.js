jQuery(document).ready(function($) {

	// need a fallback for object-fit

	function objectFit() {	
		$(window).load(function() {
			$('.panel-dynamic.full-img-bg img').each(function() {
				var src = $(this).attr('srcset'),
						curSrc = $(this).prop('currentSrc'),
						fit = 'cover';
				
				$(this).parents('.panel-dynamic.full-img-bg').css({'background' : 'transparent url("'+ curSrc +'") no-repeat center center /'+fit });
				$(this).parents('picture').remove();				
			})
		})
	}

	// check if supported 
	if(!Modernizr.objectfit) {
		objectFit();
	}

});