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

	var controller = new ScrollMagic.Controller(),
			tlSceneA = new TimelineLite({onComplete:navComplete}),
			tlSceneA2 = new TimelineLite(),
			tlSceneB = new TimelineLite(),
			tlSceneB2 = new TimelineLite(),
			tlSceneC = new TimelineLite(),
			tlSceneC2 = new TimelineLite(),
			tlSceneC3 = new TimelineLite(),
			tlSceneE = new TimelineLite(),
			header = $('.site-header'),
			vh = $(window).height(),
			vw = $(window).width(),
			logo = $('.site-logo'),
			fakeLogo = $(logo).clone().appendTo(header).removeClass('site-logo').addClass('site-logo-fake'),
			logoOffset = ((vw - logo.width()) / 2) - 16,
			nav = $('.site-nav'),
			social = $('.social-links'),
			buyLink = $('.buy-link-alt a'),
			rootsMsg = $('.panel-roots .panel-msg'),
			missionMsg = $('.panel-mission .panel-msg'),
			missionY = $(missionMsg).height(),
			missionPanel = $('.panel-mission'),
			triggerB = $('.panel-mission .btn'),
			durationC = $('.panel-frozenfresh .panel-msg').height(),
			panelFrozenfresh = $('.panel-frozenfresh').height(),
			triggerC = durationC / 2,
			durationD = $(rootsMsg).height(),
			birds = $('.hero-birds'),
			heroMsg = $('.headline-block'),
			heroMsgH = $(heroMsg).height(),
			durationE = $('.panel-voila .feature-voila').height(),
			heroY = (vh - heroMsgH) / 1.5;

	function initCss() {
		TweenMax.set(missionMsg, {opacity: 0});
		TweenMax.set(rootsMsg, {opacity: 0.3});
		TweenMax.set('.animate-box.broccoli', {opacity: 0.3});
		TweenMax.set('.animate-box.voila-bowl', {opacity: 0.5, x: '-200'});
		TweenMax.set(heroMsg, {className: '+=fixed'});
	}		
	/* 
		Opening Scene (A) - Header
	*/			

	var navComplete = function() {
		tlSceneA.stop();
		$('.main-nav').addClass('nav-done');
		$(header).addClass('header-locked');
		$(birds).addClass('fly-away');
		$(fakeLogo).hide();
	}
	// timeline
	tlSceneA
		.to(nav, 1, {top: 0, ease: Power0.easeNone}, 'start')
		.to(fakeLogo, 0.25, {opacity: 0, onComplete: navComplete}, 'start+=0.75')

	tlSceneA2
		//.set(nav, {position: 'fixed'}, 'startlogo')
		//.to(logo, 1, {x: -logoOffset, ease: Power4.easeOut}, 'startlogo')
		.to(logo, 1, {opacity: 1, scale: 1, ease: Power4.easeOut})
		//.to(buyLink, 0.1, {color: '#EE2F25'}, '-=0.05');

	var heroParallax = TweenMax.to(heroMsg, 1, {y:-heroY});

	console.log(missionY);

	// scene
	var sceneA = new ScrollMagic.Scene({
		triggerElement: header,
		triggerHook: 'onEnter',
		offset: 0,
		reverse: true,
		duration: '100%'
	}).setTween(tlSceneA);

	var sceneA2 = new ScrollMagic.Scene({
		triggerElement: missionPanel,
		triggerHook: 'onCenter',
		offset: 800,
		duration: 100,
		reverse: false
	}).setTween(tlSceneA2);

	var sceneA3 = new ScrollMagic.Scene({
		triggerElement: missionPanel,
		triggerHook: 'onEnter',
		offset: 300,
		duration: "100%",
		reverse: true
	}).setTween(heroParallax);

	/* 
		Scene B - Message Fades in
	*/			
	// timeline
	tlSceneB
		.to(missionMsg, 0.25, {opacity: 1, y: 0, ease: Power0.easeNone})
		//.to(missionMsg, 0.2, {opacity: 0.3, ease: Power0.easeNone});

	tlSceneB2
		.to(missionMsg, 0.25, {opacity: 0, ease: Power0.easeNone})

	var missionParallax = TweenMax.to(missionMsg, 1, {y: '50%'});

	// // scene
	var sceneB = new ScrollMagic.Scene({
		triggerElement: missionMsg,
		triggerHook: 'onEnter',
		offset: 100,
		//duration: 400,
		duration: missionY,
		reverse: true
	}).setTween(tlSceneB);

	var sceneB2 = new ScrollMagic.Scene({
		triggerElement: '.panel-products-feature',
		triggerHook: 'onEnter',
		offset: 300,
		duration: missionY,
		reverse: true
	}).setTween(tlSceneB2);

	var sceneB3 = new ScrollMagic.Scene({
		triggerElement: '.panel-products-feature',
		triggerHook: 'onEnter',
		offset: missionY,
		duration: '100%',
		reverse: true
	}).setTween(missionParallax);


	/* 
		Scene C - Image slides in from left
	*/			
	// tween
	tlSceneC
		.to('.animate-box.broccoli', 0.5, {x: 0, opacity: 1, ease: Power0.easeNone}, 'set');

		// tween
	tlSceneC2
		.to('.panel-roots', 0.01, {className: '+=fix'}, 'set');

	tlSceneC3
		.to('.animate-box.broccoli', 0.5, {opacity: 0, x: -200, ease: Power0.easeNone})

	// scene
	var sceneC = new ScrollMagic.Scene({
		triggerElement: '.panel-frozenfresh',
		triggerHook: 'onEnter',
		offset: 100,
		duration: durationC,
		reverse: true
	}).setTween(tlSceneC).addIndicators({name: 'broccoli'});

	var sceneC2 = new ScrollMagic.Scene({
		triggerElement: '.panel-frozenfresh .panel-msg',
		triggerHook: 'onEnter',
		offset: - triggerC,
		duration: durationC,
		reverse: true	
	}).setTween(tlSceneC2);

	var sceneC3 = new ScrollMagic.Scene({
		triggerElement: '.panel-frozenfresh',
		triggerHook: 'onLeave',
		offset: 0,
		duration: durationC,
		reverse: true	
	}).setTween(tlSceneC3);


	/* 
		Scene D - Message fade in 
	*/			
	// timeline
	var roots =	TweenMax.to(rootsMsg, 1, {opacity: 1, ease: Power0.easeNone});
	var rootsParallax =	TweenMax.to(rootsMsg, 1, {y: vh / 4, ease: Power0.easeNone});

	// scene
	var sceneD = new ScrollMagic.Scene({
		triggerElement: '.panel-roots',
		triggerHook: 'onEnter',
		offset: 300,
		duration: durationD,
		reverse: true
	}).setTween(roots);

	var sceneD2 = new ScrollMagic.Scene({
		triggerElement: '.panel-frozenfresh',
		triggerHook: 'onLeave',
		offset: 300,
		duration: '100%',
		reverse: true
	}).setTween(rootsParallax).addIndicators({name: 'Roots'});


	/* 
		Scene E - Image slide in
	*/			
	// timeline
	var voila = TweenMax.to('.animate-box.voila-bowl', 1, {x: 0, opacity: 1, ease: Power0.easeNone});

	// scene
	var sceneE = new ScrollMagic.Scene({
		triggerElement: '.panel-voila',
		triggerHook: 'onEnter',
		offset: 100,
		duration: durationE,
		reverse: true
	}).setTween(voila).addIndicators({name: 'Voila'});

	// Add scenes to controller 
	// disable controller until mq conditions met
	controller
		.enabled(false)
		.addScene([
			sceneA,
			sceneA2,
			sceneA3,
			sceneB,
			sceneB2,
			sceneB3,
			sceneC,
			sceneC2,
			sceneC3,
			sceneD,
			sceneD2,
			sceneE
		]);

	if(vw > 1055 && !controller.enabled()) {
		initCss();
		controller.enabled(true);
	} 

	$(window).on('resize', function() {
		vw = $(window).width();
		logoOffset = ((vw - logo.width()) / 2) - 16;
		debounce(function() {
			if(vw < 1056 ) {
				controller.enabled(false);
				console.log('resize, small');

			} else if(vw >= 1056 && !controller.enabled()) {
				controller
					.enabled(true);
				console.log('resize, wide and enabled.');

			} else if(vw >= 1056) {
				console.log('resize, wide already enabled');
			}
			controller.update(true);
		}, 500, 'a unique id');	
	});

});