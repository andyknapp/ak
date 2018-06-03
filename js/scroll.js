jQuery(document).ready(function($) {

  //var threshold = $(window).width() > 1023;



	// function eatBrownie() {
	// 	var logoFull = $('.brownie-bite'),
	// 			vw = $(window).width();
  //
	// 	if(vw >= 736) {
  //
	// 	}
	// };

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop(),
        logo = $('.logo'),
        offset = $(logo).height() + 16,
        resume = $('#resume').offset().top - offset;

        console.log(resume);

    if(scroll >= resume) {
      $(logo).addClass('reduce');
    } else if(scroll < resume){
      $(logo).removeClass('reduce');
    }
  });

	// disable skrollr if the window is resized down below bp
	// $(window).on('resize', function () {
	// 	threshold = $(window).width() > 1023;
  //
	// 	if (threshold) {
  //
	// 	}
	// });


});
