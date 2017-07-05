jQuery(document).ready(function($){

	// Toggle the filter view
	$('.parent h1, .parent h4').click(function(e){
		$(this).toggleClass('show');
		$(this).siblings().toggleClass('show');
		e.stopPropagation();
	})

	$('.product-veg').click(function(){
		$('.veg-filter-menu').toggle();
	});

	$('.veg-filter-menu').click(function(e){
		e.stopPropagation();
	});

	$('.veg-filter-buttons .select-all').click(function(){
		$('.veg-filter-menu input').prop('checked', true);
	});

	$('.veg-filter-buttons .clear').click(function(){
		$('.veg-filter-menu input').prop('checked', false);
	});

	// toggle product lineup
	$(function() {
		var lineup_toggle = $('.product-lineup .product-toggle');

			$(lineup_toggle).on('click', function() {
				$(this).toggleClass('toggled');
				$(this).parents('.product-lineup').toggleClass('reveal');
			});
	})

	var terms = [],
		search = '',
		ajaxTimeout = '',
		veg = [];

	$('.term-id').change(function(e){
		clearTimeout(ajaxTimeout);
		ajaxTimeout = setTimeout(getFilteredProducts, 500);
	});

	$('#product-search-form').submit(function(e){
		e.preventDefault();
		search = $('#product-search').val();
		getFilteredProducts();
	});

	$('.veg-filters input').change(function(){
		veg = [];
		$('.veg-filters input:checked').each(function(){
			veg.push($(this).val());
		});
		clearTimeout(ajaxTimeout);
		ajaxTimeout = setTimeout(getFilteredProducts, 500);
	});

	function sortFilteredProducts() {
		$('.term-id').each(function(){
			var id = $(this).attr('name');

			$('.single-product[data-catid="' + id + '"]').appendTo('.product-listing');
		});
		$('.single-product[data-catid=""]').appendTo('.product-listing');
	}

	function getFilteredProducts() {
		terms = [];
		$('.term-id:checked').each(function(){
			terms.push($(this).attr('name'));
		});

		var data = {
			"action": 	'get_products',
			"type": 	'get',
			"terms": 	terms,
			"search": 	search,
			"veg": 		veg
		};

		$.ajax({
			url: "/wp-admin/admin-ajax.php",
			data: data,
			success: function(response) {
				console.log(response);
				
				$('.product-listing').html('');

				if (response.posts) {
					var source   = $("#single-products-template").html();
					var template = Handlebars.compile(source);
					var html = template(response);
					$('.product-listing').append(html);
				}

				sortFilteredProducts();

			}
		});
	}

	getFilteredProducts();

});
