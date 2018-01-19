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
    } else if(currentValue==1){
      outputArray = [];
      outputArray[0] = "Boop!";
      break;
    } else if(currentValue==0 && (!inputString.includes("1")||(!inputString.includes("0")))){
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

//Puts inputString into one number.
function beepBoop3(inputString){
  var length = inputString.length;
  var myNumber = "";
  var outputString = "";
  for(var i = 0;i < length; i++){
    myNumber += inputString[i];
  }
  myNumber = parseInt(myNumber)
  if(myNumber%3===0 && myNumber != 0){
    return outputString += "Hey " + userName + ", this number is divisble by 3!";
  } else {
    return beepBoop2(inputString);
  }
}

function reverse(inputString){
  if(inputString == null){
    return;
  } else {
    return inputString.reverse();
  }
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
    console.log(beepBoopFunction);
    if(beepBoopFunction==2){
      $("#results button").show();
      $("#results button").click(function(){
        counter ++;
        $("#results h4").text("Reversed "+ "BeepBoop Function" + beepBoopFunction + " " + counter + " times " + " Results:");
        $("#results p").text(reverse(lastResult));
      });
    } else {
      if(!$("#results button").is(":hidden")){
        $("#results button").hide();
      }
    }
  });
});
