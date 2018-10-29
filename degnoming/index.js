function arrow() {

	for (var i = 0; i < 1000; i++) {
		var random = Math.ceil(Math.random() * 100);
		console.log(random);
	}
	var length = this.dataset.number;
	var arrowDirection;
	var random = Math.ceil(Math.random() * 100);
	console.log(random)
	if (length == 1) {
		if (random <= 25) {
			arrowDirection = '&#11016;';
		} else if (random <= 75) {
			arrowDirection = '&#11014;'
		} else if (random <= 100) {
			arrowDirection = '&#11017;';
		}
	}
	if (length == 2) {
		if (random <= 10) {
			arrowDirection = '&#10145;';
		} else if (random <= 30) {
			arrowDirection = '&#11016;';
		} else if (random <= 70) {
			arrowDirection = '&#11014;'
		} else if (random <= 90) {
			arrowDirection = '&#11017;';
		} else if (random <= 100) {
			arrowDirection = '&#11013;';
		}
	}
	if (length == 3) {
		if (random <= 2) {
			arrowDirection = '&#11015;';
		} else if (random <= 8) {
			arrowDirection = '&#11018;';
		} else if (random <= 21) {
			arrowDirection = '&#10145;';
		} else if (random <= 36) {
			arrowDirection = '&#11016;';
		} else if (random <= 66) {
			arrowDirection = '&#11014;'
		} else if (random <= 81) {
			arrowDirection = '&#11017;';
		} else if (random <= 94) {
			arrowDirection = '&#11013;';
		} else if (random <= 100) {
			arrowDirection = '&#11019;';
		}
	}
	console.log(arrowDirection);
	$('.display').html('');
	$('#result' + this.dataset.number).html(arrowDirection);
}

let sizeHor = 1;
let sizeVer = 1;

function drawFields() {
	$('#field-representation').children().remove();
	for (let j = 0; j < sizeVer; j++) {
		let row = $('<tr>');
		for (let i = 0; i < sizeHor; i++) {
			let letter = String.fromCharCode(97 + j).toUpperCase();
			let field = $('<div>').addClass('field').attr('id', letter + '' + i);
			row.append(field);
		}
		$('#field-representation').append(row);
	}
}

$('#size-horizontal').on('change keyup paste', function() {
	if ($(this).val() < 1) { 
		$(this).val('1');
	}
	console.log($(this).val());
	sizeHor = $(this).val();
	drawFields();
})
$('#size-vertical').on('change keyup paste', function() {
	if ($(this).val() < 1) {
		$(this).val('1');
	}
	console.log($(this).val());
	sizeVer = $(this).val();
	drawFields();
})

$(function () {
	drawFields();
	console.log('drawFields');
})