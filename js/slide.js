$(document).ready(readyfn);

function readyfn() {
	// body...
	var $step = {};
	var $el = {};

	// position of item in step-1
	$step = $('.step-1');
	$el = $step.find('.css3-circle');

	// css3 circle
	$el.css({
		'top': ($(window).height() - $el.height()) / 2,
		'left': ($(window).width() - $el.width()) / 2
	});

	// bm - circle
	$el = $step.find('.bm-circle');

	// css3 circle
	$el.css({
		'top': ($(window).height() - $el.height()) / 2,
		'left': 40
	});

	// bm - circle
	$el = $step.find('.filter-circle');

	// css3 circle
	$el.css({
		'top': ($(window).height() - $el.height()) / 2,
		'left': $(window).width() - 40 - 160
	});
}