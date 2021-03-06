

var boxes = document.getElementsByClassName('box');
var buttons = document.getElementsByClassName('button');

var bstate = [0,0,0,0,0,0,0,0,0];
var game = true;

var HUMAN = false;
var AI = true;

var HVAL = -1;
var AVAL = 1;

var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

//called from (html div)
function reset(){
    
    //set board state back to 0
    for( var i = 0; i < 9; i++ ){
        boxes[i].style.background = "#FFFFFF";
        boxes[i].innerHTML = "";
        bstate[i] = 0;
    }
    
    
    for( var i = 0; i < 2; i++ ){
        buttons[i].style.display = 'block';
    }
    
    game = true;
}

//called when div clicked (see html for call function on click)
function claim( clicked ){
    
    //if there is no game, just return
    if( !game ){
        return;
    }
    
    for( var i = 0; i < 9; i++ ){
        
        //check if the box clicked is a valid move to make
        if(boxes[i] == clicked && bstate[i] == 0){
            
            set(i, HUMAN);
            callAI();
        }
    }
}

function set( index, player ){
    
    if( !game ){
        return;
    }
    
    //if move is valid
    if( bstate[index] == 0 ){
        
        //hide the AI button
        buttons[0].style.display = 'none';
        
        if( player === HUMAN ){
            
            //claim box for human player
            boxes[index].style.background = "transparent";
            boxes[index].style.color = "#22f";
            boxes[index].innerHTML = "X";
            bstate[index] = HVAL;
        
        }else{
            
            //claim box for AI
            boxes[index].style.background = "transparent";
            boxes[index].style.color = "#f22";
            boxes[index].innerHTML = "O"
            bstate[index] = AVAL;
            
        }
        
        //check if the move we made resulted in a win
        if( checkWin( bstate, player ) ){
            document.getElementById('title').innerHTML = player + " wins!"
            game = false;
            
        }
    }
    
}


function checkWin( board, player ){
    
    var value = (player == HUMAN ? HVAL : AVAL);
    
    
    for( var i = 0; i < 8; i++ ){
        
        var win = true;
        
        for( var x = 0; x < 3; x++ ){
            
            if( board[wins[i][x]] != value ){
                
                
                win = false;
                break;
                
            }
        }
        
        if( win ){
            
            return true;
        }
        
    }
    
    return false;
    
}

function checkFull(board){

    for( var i = 0; i < 9; i++ ){
        
        if( board[i] == 0 ){
            
            return false;
            
        }
    }
    return true;
    
}

function callAI(){
    
    aiTurn( bstate, 0, AI);
    
}

function aiTurn( board, depth, player){
    
    if( checkWin(board, !player) ){
      
        return -10 + depth;

    }
    
    if(checkFull( board )){

        return 0;

    }
    
    var value = player == HUMAN ? HVAL : AVAL;
    
    var max = -Infinity;
    var index = 0;
    
    for( var i = 0; i < 9; i++ ){
        
        if(board[i] == 0){
            
            var newBoard = board.slice();
            
            newBoard[i] = value;
            
            var moveVal = -aiTurn( newBoard, depth + 1, !player);

            if(moveVal > max){
                
                max = moveVal;
                index = i;
                
            }
            
        }
        
        
    }
    
    if( player == AI && depth == 0){

        set(index, AI);
        
    }
    
    return max;
    
    
}