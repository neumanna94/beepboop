var userName = null; //Global variable used in beepBoop function.
//Determines what beepBoop function to use
function beepBoopSelector(inputString, bbFunction){
  if(bbFunction==1){
    return beepBoop(inputString);
  } else if(bbFunction==2){
    return beepBoop2(inputString);
  } else if(bbFunction==3){
    return beepBoop3(inputString);
  } else {
  }
}

//Takes an inputString, renames the string first time a 1,0, or number divisible by 3 appears with its corresponding value.
//If none are found then return the same number that was inputted.
function beepBoop(inputString){
  var outputArray = [];
  var outString = "";
  inputArrayLength = inputString.length;
  var currentValue;
  for(var i = 0;i < inputArrayLength;i++){
    currentValue = inputString[i];
    if(currentValue%3===0 && currentValue != 0){
      outputArray = [];
      outputArray[0] = "I'm sorry, " + userName + ". I'm afraid I can't do that.";
      break;
    } else if(currentValue==="1"){
      outputArray = [];
      outputArray[0] = "Boop!";
      break;
    } else if(currentValue==="0"){
      outputArray = [];
      outputArray[0] = "Beep!";
      break;
    } else {
      outputArray[i] = currentValue;
    }
  }
  return outputArray;
}

//Can take one input; inputs seperated by spaces; inputs seperated by ", ".
function beepBoop2(inputString){
  var outputArray = [];
  inputArrayLength = inputString.length;
  var currentValue;
  for(var i = 0;i <inputArrayLength; i++){
    currentValue = inputString[i];
    if(currentValue === "0"){
      outputArray[i] = "Beep!";
    } else if(currentValue === "1" && currentValue%3 != 0){
      outputArray[i] = "Boop!";
    } else if(currentValue%3 === 0){
      outputArray[i] = "I'm sorry, " + userName + ". I'm afraid I can't do that.";
    } else {
      outputArray[i] = currentValue;
    }
  }
  return outputArray;
}

//Applies beepBoop to max value;
function beepBoop3(inputString){
  return beepBoop2(max(inputString));
}

function reverse(inputString){
  if(inputString == null){
    return;
  } else {
    return inputString.reverse();
  }
}
function sort(inputString){
  return inputString.sort(); //Haha
}
function max(inputString){
  var currentMax = inputString[0];
  var currentVal;
  for(var i = 1;i<inputString.length; i++){
    currentVal = inputString[i];
    if(currentMax < currentVal){
      currentMax = currentVal;
    }
  }
  return currentMax;
}
function toggleNow(){

}

$(document).ready(function(){
  $("form#beepBoop").submit(function(event) {
    var counter = 0;
    event.preventDefault();
    userName = $("#name").val();
    var userInput = $("#beepBoopThis").val(); //Global variable
    var beepBoopFunction = $("input:radio[name=beepBoo]:checked").val();
    $("#results h4").text("BeepBoop Function" + beepBoopFunction + " Results:")
    var lastResult = beepBoopSelector(userInput, beepBoopFunction);
    $("#results p").text(lastResult);
    $("#results button").show();
    $("#results button").click(function(){
      counter ++;
      $("#results h4").text("Reversed "+ "BeepBoop Function" + beepBoopFunction + " " + counter + " times " + " Results:");
      $("#results p").text(reverse(lastResult));
    });
  });
});
