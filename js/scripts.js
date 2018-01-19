var userName = null; //Global variable used in beepBoop function.

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

function test(){
  console.log("hi");
}
