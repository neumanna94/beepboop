var userName = null; //Global variable used in beepBoop function.

//Takes an inputString, renames the string first time a 1,0, or number divisible by 3 appears with its corresponding value.
//If none are found then return the same number that was inputted.
function beepBoop(inputString){
  var outputArray = [];
  inputArrayLength = inputString.length;
  var currentValue;
  for(var i = 0;i < inputArrayLength;i++){
    currentValue = inputString[i];
    if(currentValue%3===0){
      return "I'm sorry, " + userName + ". I'm afraid I can't do that.";
    } else if(currentValue===1){
      return "Boop!";
    } else if(currentValue===0){
      return "Beep!";
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
    console.log()
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
  $("#idx").click(function(){
    toggleNow();
  });
  $("#idx2").click(function(){
    alert(allCriterionArrays.toString());
  });
  $("form#beepBoop").submit(function(event) {
    event.preventDefault();
    userName = $("#name").val();
    var userInput = $("#beepBoopThis").val(); //Global variable
    var beepBoopFunction = $("input:radio[name=beepBoo]:checked").val();
    toggleNow();
  });
});
