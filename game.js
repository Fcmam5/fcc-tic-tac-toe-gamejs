// Wining cases
var winingCases = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

var uncheckedCases = [7, 8, 9, 4, 5, 6, 1, 2, 3];

// plyaingProcess
var playGroundMgt = function (theCase) {
	'use strict';
	var myIndex = uncheckedCases.indexOf(theCase);
	//Deleting element from "uncheckedCases" array
	uncheckedCases.splice(myIndex, 1);
};

//You, the first player
var youThePlayer = []; // moves

var youPlay = function (x) {
	'use strict';
	// Append to ur checked boxes
	youThePlayer.push(x);
};

var iPlay = function (callback) {
	// When the user clicks on the case
	$("td").on('click', function (event) {
		// CHeck me
		$(this).html("X");
		$(this).addClass("disabledCase");
		//Add score
		var numbr = parseInt(event.target.id);
		youPlay(numbr);
		playGroundMgt(numbr);
		
		// sort yur score nd compare
		youThePlayer.sort();
		//var subarray = youThePlayer.slice(0,3);
		
		//todo: search for the winning cases 
		
	}); // end playing event :)

	callback();
}

//computer
var computerPlayer = [];

var smartMove = function () {
	'use strict';
	var available = [];
	//todo : check the nearby available case
	// Random
	// maybe: close it for u
	// computerPlayer.push();
};

//Jquery
$(document).ready(function () {

	iPlay(function () {
		console.log("yo");
	})
});
