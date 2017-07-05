jQuery(document).ready(function($) {
	
	// initialize fitvids
	$('.video-container').fitVids(); 

	// initialize slider
	$(function() {
		var thumbs = $('.media-slider').hasClass('thumbs');
		
		if(thumbs) {
			$('.media-slider').slick({
				infinite: true,
				dots: true,
				arrows: false,
				mobileFirst: true,
				customPaging : function(slider, i) {
		      var thumb = $(slider.$slides[i]).data('thumb'),
		      		title = $(slider.$slides[i]).data('title');
		      if(thumb) {
		      	return '<a class="play"><img src="'+thumb+'"><span class="prod-feature-title">'+title+'</span></a>';	
		      } else {}
		    },
				responsive: [{ 
					breakpoint: 1056,
					settings: {
						dots: true,
						arrows: true,
					}
				}],
			});		
		} else {
			$('.media-slider').slick({
				infinite: true,
				dots: true,
				arrows: false,
				mobileFirst: true,
				responsive: [{ 
					breakpoint: 1056,
					settings: {
						dots: false,
						arrows: true,
					}
				}],
			});
		}
	});
	

	// cover image
	$(function() {
		$('.video-cover').on('click', function() {
			var video = $(this).next('.fluid-width-video-wrapper').find('iframe'),
					$src = $(video).attr('src');

			// remove cover img
			$(this).addClass('reveal-video').parent().siblings().find('.video-cover').removeClass('.reveal-video');
			
			// autoplay current video
			$(video).attr('src', $src + '?enablejsapi=1&rel=0&autoplay=1');

		});
	});

	// pause video on slide advance
	$(function() {
		$('.media-slider').on('beforeChange', function(event, slick) {
			var currentSlide, slideType, player, command;

			currentSlide = $('.media-slider').find('.slick-current');

      // get the iframe inside this slide
      player = currentSlide.find("iframe").get(0);
      console.log(currentSlide);
      console.log(player);
      // and tell it to pause
      command = {
      	'event': 'command',
      	'func': 'pauseVideo'
      }

      //check if the player exists.
      if (player != undefined) {
        //post command to the iframe.
        player.contentWindow.postMessage(JSON.stringify(command), '*');
      }
		});
	});

});