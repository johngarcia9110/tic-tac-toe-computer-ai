'use strict';


var getBox = function(arg) {
  return function() {
    alert(arg.id);
  };
};

var boxes = document.getElementsByClassName("box");

for (var i = 0, l = boxes.length; l > i; i++){
    boxes[i].onclick = getBox(boxes[i]);
}
  
  
 