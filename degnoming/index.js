$(function() {  

	// var button1 = $('#button1');
	// var button2 = $('#button2');
	// var button3 = $('#button3');
	//Kiedy jeden z przycisków zostanie kliknięty wywołuje on funkcję Strzałki o wartości length = {1;2 lub 3}
	//Funkcja losuje liczb0 kę od 1 do 100 i zależnie od wartości length:
	// Arrow(1);    losuje pomiędzy 3 kierunkami 25%-50%-25%
	// Arrow(2);    losuje pomiędzy 5 kierunkami 10%-20%-40%-20%-10%
	// Arrow(2);    losuje pomiędzy 8 kierunkami (włączamy tył, w bardzo rzadkim przypadku 2%) 
	//											 2%-6%-13%-15%-30%-15%-13%-6%
	// oblicza kierunek strzałki od 1 do 8 w zależności od wyniku losowej k
	//Ekran zakrywa biała płaszczyzna o wymiarach rozdzielczości ekranu
	//Strzałka wyświetla się w jednym z okienek (niewidzialnej?) ramki 3x3 wyśrodkowanej z centrum ekranu
	//Po kliknięciu gdziekolwiek biała płaszczyzna i strzałka znikają
	//
	//Po kliknięciu "Get random field" funkcja wykorzystuje horizontal size oraz vertical size do generacji ramki
	//Pola są bezwzględnie kwadratami długość boku pól ramki wynosi:   długość dłuższego boku ramki/ liczbę pól
	//Następnie losuje dwie liczby x;y i zakolorowuje wybrane pole w ramce na pomarańczowo
	//

	// function arrow() {
	// 	console.log(this.dataset.number);
	// 	var arrowDirection;
	// 	var random = Math.floor(Math.random() * 100);
	// 	if (length == 1) {
	// 		if (random <= 25) {
	// 			arrowDirection = 2
	// 		} else
	// 		if (random <= 75) {
	// 			arrowDirection = 1
	// 		} else
	// 		if (random <= 100) {
	// 			arrowDirection = 3
	// 		}
	// 	}
	// 	if (length == 2) {
	// 		if (random <= 10) {
	// 			arrowDirection = 4
	// 		} else
	// 		if (random <= 30) {
	// 			arrowDirection = 2
	// 		} else
	// 		if (random <= 70) {
	// 			arrowDirection = 1
	// 		} else
	// 		if (random <= 90) {
	// 			arrowDirection = 3
	// 		} else
	// 		if (random <= 100) {
	// 			arrowDirection = 5
	// 		}
	// 	}
	// 	if (length == 3) {
	// 		if (random <= 2) {
	// 			arrowDirection = 8
	// 		} else
	// 		if (random <= 8) {
	// 			arrowDirection = 6
	// 		} else
	// 		if (random <= 21) {
	// 			arrowDirection = 4
	// 		} else
	// 		if (random <= 36) {
	// 			arrowDirection = 2
	// 		} else
	// 		if (random <= 66) {
	// 			arrowDirection = 1
	// 		} else
	// 		if (random <= 81) {
	// 			arrowDirection = 3
	// 		} else
	// 		if (random <= 94) {
	// 			arrowDirection = 5
	// 		} else
	// 		if (random <= 100) {
	// 			arrowDirection = 7
	// 		}
	// 	//return(arrowDirection);
	// 	}
	// 	//console.log(random);
	// console.log(arrowDirection);
	// }

});

	// var xOffset = 0, yOffset = 0;
	// // var xSize = 12;
	// // var ySize = 7;
	// var shift = 10;	
	// var fieldSize = 40;
	// // $('.square').css({width: fieldSize, height : fieldSize});
	// var fieldTypes = ["frst", "mntn", "rvr", "hlls", "dsrt"]; 
	// var board = $('#board');

	// var squaresOnBoard = [];

	// // for (var i = -xSize; i < xSize; i++) {
	// // 	for (var j = -ySize; j <= ySize; j++) {
	// // 		var thisSquare = [ i , j ,  fieldTypes[ ( Math.floor( Math.random() * fieldTypes.length ) ) ] ];
	// // 		squaresOnBoard.push(thisSquare);
	// // 	}
	// // }
	
	// function createBoard(xOffset, yOffset) {
	// 	for (var i = 0; i < squaresOnBoard.length; i++) {
	// 		// if (squaresOnBoard[i][0] < -2 * fieldSize && squaresOnBoard[i][1] < -2 * fieldSize ) {
	// 			board.append('<div class="square '+ squaresOnBoard[i][2] + '" style="left: ' + Number(squaresOnBoard[i][0] * fieldSize + xOffset) + 'px; top: ' +  Number(squaresOnBoard[i][1] * fieldSize + yOffset) + 'px;">' + squaresOnBoard[i][0] + ',' + squaresOnBoard[i][1] + '</div>');
	// 		// }
	// 	}
	// }
	// createBoard(xOffset, yOffset);


	// $('body').keydown( function(event) {
	// 	var key = event.originalEvent.key
	// 	if (key == "s") {
	// 		yOffset -= shift;
	// 	}
	// 	if (key == "w") {
	// 		yOffset += shift;
	// 	}
	// 	if (key == "d") {
	// 		xOffset -= shift;
	// 	}
	// 	if (key == "a") {
	// 		xOffset += shift;
	// 	}
	// 	board.children().remove();
	// 	createBoard(xOffset, yOffset);
	// })


// methods for creating random color
// var squareColor = 'rgb(' + (Math.random() * 256).toFixed(0) + ', ' + (Math.random() * 256).toFixed(0) + ', ' + (Math.random() * 256).toFixed(0) + ')'
//) ))