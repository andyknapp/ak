jQuery(document).ready(function($) {

	var controller = new ScrollMagic.Controller(),		
			tlNo2 = new TimelineLite(),
			tlNo3 = new TimelineLite(),
			scene1 = $('.scene-1').height(),
			scene2 = $('.scene-2').height(),
			scene3 = $('.scene-3').height(),
			scene1Offset = $('.scene-1').offset().top,
			$no1 = $('.big-1'),
			$no2 = $('.big-2'),
			$no3 = $('.big-3'),
			no1H = $no1.height(),
			no2H = $no2.height(),
			no3H = $no3.height(),
			$guide1 = $('.guide-1'),
			$guide2 = $('.guide-2'),
			$guide3 = $('.guide-3'),
			h1 = scene1 - no1H,
			h2 = scene2 - no2H,
			h3 = scene3 - no3H,
			t1 = no1H + 32;
			t2 = no2H + 32;
			t3 = no3H + 32;
			vh = $(window).height(),
			vw = $(window).width();


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

	// timelines & tween vars
	var tween1 = TweenMax.to('.big-1', 0.25, {opacity: 1, ease: Power0.easeNone}, '+=0.25');
	var tween2 = TweenMax.to($guide1, 1, {height: h1, ease: Power0.easeNone});
		
	tlNo2
		.to('.big-2', 0.25, {opacity: 1, ease: Power0.easeNone})
		.to($guide2, 1, {height: h2, ease: Power0.easeNone});

	tlNo3
		.to('.big-3', 0.25, {opacity: 1, ease: Power0.easeNone})
		.to($guide3, 1, {height: h3, ease: Power0.easeNone})
		.to('.big-4', 0.25, {opacity: 1, ease: Power0.easeNone});

	// scenes 
	var scene1 = new ScrollMagic.Scene({
		triggerElement: '.scene-1',
		triggerHook: 'onEnter'
	}).setTween(tween1);

	if(vw > 1055) {
		h1 = scene1;
		var scene2 = new ScrollMagic.Scene({
			triggerElement: '.scene-1',
			triggerHook: 'onCenter',
			offset: 0,
			reverse: false
		}).setTween(tween2);	
	} else {
		h1 = scene1 - no1H;
		var scene2 = new ScrollMagic.Scene({
			triggerElement: '.scene-2',
			triggerHook: 'onEnter',
			offset: 10,
			reverse: false
		}).setTween(tween2);
	}
	

	var scene3 = new ScrollMagic.Scene({
		triggerElement: '.scene-2',
		triggerHook: 'onEnter',
		offset: 100,
		reverse: false
	}).setTween(tlNo2);

	var scene4 = new ScrollMagic.Scene({
		triggerElement: '.scene-3',
		triggerHook: 'onEnter',
		offset: 100,
		//duration: 1,
		reverse: false
	}).setTween(tlNo3);


	$(window).on('resize', function() {
		vw = $(window).width();
		debounce(function() {
			//guideHeight();
		});
	});

	//guideHeight();

	controller
		.addScene([
			scene1,
			scene2,
			scene3,
			scene4
		]);


});