// limmit the ammount of char so the view div doesn't get to big 
view.innerHTML = "0"; 

(function() {
  "use strict";
  
  const el = function(element) {
    if(element.charAt(0) === "#") {
      return document.querySelector(element);
    } else {
      return document.querySelectorAll(element);
    };
  };

  var view = el("#view"),
        equals = el("#equals"),
        nums = el(".numbers"),
        ops = el(".operators"),
        theNum = "",
        oldNum = "",
        resultNum,
        operator;

  var getNum = function() {
    if(resultNum) {
      theNum = this.getAttribute("value");
      resultNum = "";
    } else {
      theNum += this.getAttribute("value");
    }
    
    view.innerHTML = theNum;
  };
        
  var moveNum = function() {
    oldNum = theNum;
    theNum = "";
   
    operator = this.getAttribute("data");
    equals.setAttribute("data-result", "");
 };
  
  var displayNum = function() {

    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);
    
    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;
        
      case "subtract":
        resultNum = oldNum - theNum;
        break;
        
      case "multiply":
        resultNum = oldNum * theNum;
        break;
        
      case "divide":
        resultNum = oldNum / theNum;
        break;
        
      default:
        resultNum = theNum;    
    }
      
    view.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);
    
    oldNum = 0;
    theNum = resultNum;
 
  };
  
  var clearAll = function() {
    oldNum = "";
    theNum = "";
    view.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };
  
  
  
   // Add Event Clicks
for(var i = 0, l = nums.length; i < l; i++) {
  nums[i].onclick = getNum;
}

for(var i = 0, l = ops.length; i < l; i++) {
  ops[i].onclick = moveNum;
}
  
equals.onclick = displayNum;
  
el("#clear").onclick = clearAll;

}());


