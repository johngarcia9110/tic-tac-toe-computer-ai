'use strict';

var human = 'X';
var computer = 'O';

var playerTurn = 'human';

var compMove;
var turn = 0;

var boardCheck;

var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var checkWin;
var xWin = false;
var yWin = false;

var hasWon;

var clearBoard;

//Put X in the box that is clicked
function setBox(){
    if(playerTurn === 'human'){
        this.innerHTML = "x";
        console.log(this.id);
        checkBoard(this.id);
        playerTurn = 'computer';
    }else{
        this.innerHTML = "O";
        console.log(this.id);
        checkBoard(this.id);
        playerTurn = 'human';
    }
}

//get boxes (td)
var boxes = document.getElementsByClassName("box");
console.log(boxes);
//check for boxes that get clicked
for (var i = 0, l = boxes.length; l > i; i++){
    //when box is click use getBox function to output td id
    boxes[i].onclick = setBox;
}
  
function checkBoard(id){
    var box = document.getElementById(id);
    if (box.innerHTML === "x"){
        console.log('this box has an x');
    }else{
        console.log('Box: ' + id + "has nothing in it");
    }
}

