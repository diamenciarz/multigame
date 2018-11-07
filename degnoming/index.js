function arrow() {
	
	var arrowNumberDirection = 1;

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
			arrowNumberDirection = 8;
		} else if (random <= 75) {
			arrowNumberDirection = 1;
		} else if (random <= 100) {
			arrowNumberDirection = 2;
		}
	}
	if (length == 2) {
		if (random <= 10) {
			arrowNumberDirection = 7;
		} else if (random <= 30) {
			arrowNumberDirection = 8;
		} else if (random <= 70) {
			arrowNumberDirection = 1;
		} else if (random <= 90) {
			arrowNumberDirection = 2;
		} else if (random <= 100) {
			arrowNumberDirection = 3;
		}
	}
	if (length == 3) {
		if (random <= 2) {
			arrowNumberDirection = 5;
		} else if (random <= 8) {
			arrowNumberDirection = 6;
		} else if (random <= 21) {
			arrowNumberDirection = 7;
		} else if (random <= 36) {
			arrowNumberDirection = 8;
		} else if (random <= 66) {
			arrowNumberDirection = 1;
		} else if (random <= 81) {
			arrowNumberDirection = 2;
		} else if (random <= 94) {
			arrowNumberDirection = 3;
		} else if (random <= 100) {
			arrowNumberDirection = 4;
		}
	}
	
	if (arrowNumberDirection == 5) {
			arrowDirection = '&#11015;';
		} else if (arrowNumberDirection == 6) {
			arrowDirection = '&#11018;';
		} else if (arrowNumberDirection == 7) {
			arrowDirection = '&#10145;';
		} else if (arrowNumberDirection == 8) {
			arrowDirection = '&#11016;';
		} else if (arrowNumberDirection == 1) {
			arrowDirection = '&#11014;'
		} else if (arrowNumberDirection == 2) {
			arrowDirection = '&#11017;';
		} else if (arrowNumberDirection == 3) {
			arrowDirection = '&#11013;';
		} else if (arrowNumberDirection == 4) {
			arrowDirection = '&#11019;';
		}
	
	console.log(arrowDirection);
	$('.display').html('');
	$('#result' + this.dataset.number).html(arrowDirection);
}

let sizeHor = $('#size-horizontal').val();
let sizeVer = $('#size-vertical').val();

function drawFields() {
	$('#board-representation').children().remove();
	for (let j = 1; j <= sizeVer; j++) {
		let row = $('<div>').addClass('row-with-fields');
		for (let i = 1; i <= sizeHor; i++) {
			let letter = String.fromCharCode(96 + i).toUpperCase();
			let field = $('<div>').addClass('field').attr('id', letter + '' + j);
			row.append(field);
		}
		$('#board-representation').append(row);
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

function getRandomField() {
	var rndHor = Math.floor(Math.random() * sizeHor);
	rndHor = String.fromCharCode(97 + rndHor).toUpperCase();
	var rndVer = Math.ceil(Math.random() * sizeVer);
	var rndFld = rndHor + rndVer
	console.log(rndFld);
	$('.chosen-one').removeClass('chosen-one'); //.text('');
	$('#'+rndFld).addClass('chosen-one'); // .text(rndFld);
}

$(function () {
	drawFields();
	console.log('drawFields');
})
