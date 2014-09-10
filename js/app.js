$(document).ready(function() {
	var $blend = $('.blend-img');
	var $filter = $('.filter-img');
	var $caption = $('.caption');
	var $bg_blend_mode = $('.bg-blend-mode');

	// draw on canvas
	drawCircle();

	// change blend mode
	$('#wrapper').on('change', '.blend-mode-value', function() {
		var nextBlendMode = $(this).val();
		var nextBlendModeText = $(this).find('option:selected').html();

		// change mix blend mode
		$blend.css('mix-blend-mode', nextBlendMode);
		$bg_blend_mode.css('background-blend-mode', nextBlendMode + ', normal');

		// change caption
		$caption.html(nextBlendModeText);

		// change blend mode in canvas
		drawCircle(nextBlendMode);
	});

	// change blend mode
	$('#wrapper').on('change', '.filter-value', function() {
		var filter = $(this).val();
		var filterText = $(this).find('option:selected').html();

		// get filter method
		$('.range-value').val(0);
		setFilter(filter, 0);

		// change caption
		$caption.html(filterText);
	});

	$('#wrapper').on('input', '.range-value', function() {
		var val = $(this).val();
		val = parseInt(val);
		var filter = $('.filter-value').val();
		setFilter(filter, val);
	});
});

function drawCircle(blendMode) {
	// body...
	// draw on canvas
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var cWidth = canvas.width;
	var cHeight = canvas.height;
	var radius = 100;
	var bm = blendMode || 'normal';

	// clear
	context.clearRect(0, 0, cWidth, cHeight);
	// make blend
	if (bm === 'normal') {
		bm = 'source-over';
	}
	context.globalCompositeOperation = bm;

	var imageObj = new Image();
	imageObj.onload = function() {
		context.drawImage(imageObj, cWidth / 2 - 250, cHeight / 2 - 156, 500, 312);
	};
	imageObj.src = '../img/gorgeous_sunflowers-wide.jpg';

	// magenta
	context.fillStyle = 'rgba(9, 34, 161, 1)';
	context.beginPath();
	context.rect(20, 20, cWidth - 40, cHeight - 40);
	context.closePath();
	context.fill();
}

function setFilter(filter, val) {
	var fn = '';
	switch (filter) {
		case 'blur':
			fn = filter + '(' + val + 'px)';
			break;
		case 'brightness':
		case 'contrast':
		case 'grayscale':
		case 'invert':
		case 'opacity':
		case 'sepia':
			fn = filter + '(' + val + '%)';
			break;
		case 'url':
			break;
		case 'drop-shadow':
			fn = filter + '(10px 20px 10px green)';
			break;
		case 'hue-rotate':
			fn = filter + '(' + val + 'deg)';
			break;
		default:
			break;
	}
	// change mix blend mode
	$('.filter-img').css({
		'-webkit-filter': fn,
		'-o-filter': fn,
		'filter': fn
	});
}