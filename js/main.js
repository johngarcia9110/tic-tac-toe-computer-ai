'use strict';

//testing alert
var getBox = function(arg) {
  return function() {
    alert(arg.id);
  };
};

//get boxes (td)
var boxes = document.getElementsByClassName("box");


for (var i = 0, l = boxes.length; l > i; i++){
    //when box is click use getBox function to output td id
    boxes[i].onclick = getBox(boxes[i]);
}
  
  
 