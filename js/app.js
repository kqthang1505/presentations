$(document).ready(function() {
	var $filter = $('.filter-img');
	var $caption = $('.caption');
	var $bg_blend_mode = $('.bg-blend-mode');

	// draw on canvas
	drawCircle();

	$('#wrapper').on('change', '.blend-mode-value', function() {
		var nextBlendMode = $(this).val();
		var nextBlendModeText = $(this).find('option:selected').html();

		// change mix blend mode
		$filter.css('mix-blend-mode', nextBlendMode);
		$bg_blend_mode.css('background-blend-mode', nextBlendMode + ', normal');

		// change caption
		$caption.html(nextBlendModeText);

		// change blend mode in canvas
		drawCircle(nextBlendMode);
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