// MyArray
var playGround = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]; // 3*3

// Wining cases
var winingCases = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [7,5,3],
    [3,5,7],
    [9,5,1]
];

//You, the first player
var youThePlayer = []; // moves

var youPlay = function(x,y) {
    // playGround is not zero indexed :p
    youThePlayer.push(playGround[x-1][y-1]);
};

//computer
var computerPlayer = [];

var smartMove = function() {
    var available = [];
    //todo : check the nearby available case
    // Random
    // maybe: close it for u
    // computerPlayer.push();
};

// Playing :
