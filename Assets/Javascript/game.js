//global variable
let wordBank = ["rubberducky", "rugby", "javamocha", "catnip", "dingbat", "macbook"];
let wordFill = [];
let word = wordBank[Math.floor(Math.random() * wordBank.length)];
let wrongGuess = [];
let turnsRemaining = 12;
let remainingLetters = word.length;
let lose = 0;

function start(){
  
  document.getElementById("startMessage").innerHTML = "The game has now begun!";
  console.log(word);
 
  // dash display
for (var i = 0; i < word.length; i++) {
 wordFill[i] = "_"
  document.getElementById("wordSpaces").innerHTML = wordFill;    
}
}

function restart() {
  document.getElementById("startMessage").innerHTML = "Next game!";
  for (var i = 0; i < word.length; i++) {
 wordFill[i] = "_"
  document.getElementById("wordSpaces").innerHTML = wordFill;
  turnsRemaining = 12;
  remainingLetters = word.length;
  wrongGuess = [];
  document.getElementById("wrong").innerHTML = "";
  document.getElementById("remaining").innerHTML = "";
  document.getElementById("gameOverMessage").innerHTML = "";
  document.getElementById("gameOverMessage").innerHTML = "";}
}

document.onkeyup = function(event){
  let playerGuess = event.key;
  
  for (var j = 0; j < word.length; j++){
    if (word[j] === playerGuess){
    wordFill[j] = playerGuess;
    let display = wordFill.join(" ");
    document.getElementById("wordSpaces").innerHTML = display;
    remainingLetters--;
    console.log(remainingLetters) }  
  }  
  
if (word[j] !== playerGuess){
   wrongGuess.push(playerGuess);
    document.getElementById("wrong").innerHTML = wrongGuess;    
    turnsRemaining--;
    document.getElementById("remaining").innerHTML =  turnsRemaining;

}
if (turnsRemaining === 0){
  lose++;
    document.getElementById("gameOverMessage").innerHTML = "You've lost!";
    document.getElementById("losses").innerHTML = lose;
    document.getElementById("image").innerHTML = scr="Assets/Images/HG11.png";
  }
if (remainingLetters === 0){
  win++
   document.getElementById("gameOverMessage").innerHTML = "You've won!";
   document.getElementById("wins").innerHTML = win;
 }
}  
