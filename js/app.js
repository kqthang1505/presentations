$(document).ready(function() {
	var $filter = $('.filter');
	var $caption = $('.caption');

	$('.container').on('change', '.blend-mode-value', function() {
		var currentBlendMode = $filter.attr('data-blend-mode');
		var nextBlendMode = $(this).val();
		// add blend mode
		$filter.removeClass(currentBlendMode).addClass(nextBlendMode);
		$filter.attr('data-blend-mode', nextBlendMode);
		// change caption
		$caption.html(nextBlendMode);
	});
});
