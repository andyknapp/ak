jQuery(document).ready(function($) {

	// debounce resize event
	var debounce = (function () {
	  var timers = {};
	  return function (callback, ms, uniqueId) {
	    if (!uniqueId) {
	      uniqueId = "Don't call this twice without a uniqueId";
	    }
	    if (timers[uniqueId]) {
	      clearTimeout(timers[uniqueId]);
	    }
	    timers[uniqueId] = setTimeout(callback, ms);
	  };
	})();

	function heroVideo() {
		var video = $("#hero-video"),
				src = $(video).find('source').data('video'),
				$bg = $('.hero'),
				vw = $(window).width();

				console.log(src);

		if(($(video).length) && vw >=1056) {
			$(video).attr('src', src );
			var video = video.get(0);

			$(video).on('canplay', function() {
				video.play();
				$bg.addClass('play-now');
			})
		} else {

		}
	}

	heroVideo();

	$(window).on('resize', function() {
		vw = $(window).width();
		debounce(function() {
			heroVideo();
		}, 500, 'a unique id');	
	});

});