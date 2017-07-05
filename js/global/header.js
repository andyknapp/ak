jQuery(document).ready(function($) {

	// Open and close mobile nav
	$('.nav-toggle').on('click', function() {
		$('html').toggleClass('nav-open');
		$(this).toggleClass('toggled');
	});

	// sub nav reveal on hover
	$(function() {
		var $hasChild = $('.site-nav li.menu-item-has-children');

		$hasChild.hoverIntent(function() {
			$(this).toggleClass('active').children('.sub-menu').toggleClass('sub-open');
		});	
	});

	// add class to header on scroll
	$(function() {
		$(window).on('scroll', function() {
			var scroll = $(window).scrollTop(),
				$header = $('.site-header'),
				headerHeight = $header.height();

			if(scroll >= headerHeight) {
				$header.addClass('scrolled');
			} else {
				$header.removeClass('scrolled');
			}
		});
	});


});