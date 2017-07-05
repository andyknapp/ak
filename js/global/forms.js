jQuery(document).ready(function($) {

  // Faux placeholder on select elements
  $('form select').change(function() {
    $(this).siblings('label').addClass('filled');
  });

  $('.gform_wrapper input').on('input', function() {
  	$(this).parents('.gfield').find('label').addClass('visible');
  });


});