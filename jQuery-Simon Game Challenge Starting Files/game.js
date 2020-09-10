
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(document).on("keypress", nextSequence());

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Remember to use jQuery to select the button with the same id as the randomChosenColour
  //2.  Google/Stackoverflow used to figure out how  to use jQuery to animate a flash to the button selected in step 1.
$( "#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

}

$(".btn").click(function(){
var userChosenColour = $(this).attr("id"); //use dollar sign here to select this object
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);



console.log(userClickedPattern);

});

function playSound(name){
  //3. Used Google/Stackoverflow to figure out how to use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor) {

  //2. Used jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. used Google/Stackoverflow to figure out how to use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () { $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// ---------------------------------------*******8PREVIOUS WORKING OUT****************-------------------------------------------------------------------
// $("btn").on("click", function(event){
//   var userChosenColour = event.id;
//   userClickedPattern.push(userChosenColour);

// $("#" + randomChosenColor).on("click", function()
// {
//   if(randomChosenColor === "red" ||randomChosenColor ==="green" || randomChosenColor === "yellow" || randomChosenColor === "blue")
//   {playSound(randomChosenColor);}
//   else playSound(wrong);
// });
//
// function playSound(color)
// {
//   switch (color) {
//
//   case "red":
//   var red = new Audio ("sounds/red.mp3");
//   red.play();
//   break;
//
//   case "blue":
//   var blue = new Audio ("sounds/blue.mp3");
//   blue.play();
//   break;
//
//   case "green":
//   var green = new Audio ("sounds/green.mp3");
//   green.play();
//   break;
//
//   case "yellow":
//   var yellow = new Audio ("sounds/yellow.mp3");
//   yellow.play();
//   break;
//
//   default:
//   var wrong = new Audio ("sounds/wrong.mp3");
//   wrong.play();
//
// }
// }
