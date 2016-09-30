'use strict';

var human = 'X';
var computer = 'O';

var playerTurn = 'human';

var board = document.getElementsByTagName('td');

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

function updateBoard(){
    for(var i in board ){ console.log(board[i].id + ' : ' + board[i].innerHTML); }
}