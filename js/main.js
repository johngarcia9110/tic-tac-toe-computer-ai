'use strict';

//Put X in the box that is clicked
function setBox(){
    this.innerHTML = "<p class='lg-x'> x <p>";
}

//get boxes (td)
var boxes = document.getElementsByClassName("box");

//check for boxes that get clicked
for (var i = 0, l = boxes.length; l > i; i++){
    //when box is click use getBox function to output td id
    boxes[i].onclick = setBox;
}
  
