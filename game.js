var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];
var level=0;
var started=false;
function nextSequence(){

userClickedPattern=[];
var randomNumber=Math.floor(Math.random()*4);
var randomChoosenColor=buttonColors[randomNumber];
gamePattern.push(randomChoosenColor);
$("#"+randomChoosenColor).fadeOut(100).fadeIn(100);
playSound(randomChoosenColor);
level++;
$("h1").text("Level "+level);
}

$(".btn").on("click",function(){
  var userChosenColor=this.id;
  userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1)
})


$(document).on("keypress",function(){
if(!started){
  $("h1").text("Level 0");
nextSequence();
started=true;
}
})

function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
console.log("Success");
if(userClickedPattern.length===gamePattern.length){
setTimeout(function(){
  nextSequence();
},1000);
}
}else{
console.log("Wrong");
playSound("wrong");
$("body").addClass("game-over");
setTimeout(function(){
$("body").removeClass("game-over");
},200);
$("h1").text("Game Over, Press Any Key to Restart");
startOver();
}
}

function startOver(){
level=0;
gamePattern=[];
started=false;
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed"); }, 100);
}
