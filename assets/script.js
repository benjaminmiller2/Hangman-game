window.onload = function(){

    var wordbank = ["apple", "banana", "pear", "peach", "strawberry", "cherry", "kiwi", "mango", "grape"];
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    var word = wordbank[Math.floor(Math.random()*wordbank.length)];
    var gameboard = document.getElementById("word-display");
    var chosenWord = [];
    var emptySpaces = [];
    var guessedLetters = [];
    var guess;
    var turnsRemaining = 10;
    var turns = document.getElementById("turns-display");
    var resultsBoard = document.getElementById("results");
    var guessedBoard = document.getElementById("guessed");

    
    
    function spaces(){
        for (var i = 0; i < word.length; i++){
            emptySpaces[i] = " _ ";
        }
    gameboard.innerHTML = emptySpaces;
    turns.innerHTML = turnsRemaining;
    
    };
    
    function input(id){
        if(id){
            guess = id;
            console.log(id);
                
        checkValidInput(guess);
        }
    
    };
    
    function checkValidInput(guess){
        
        if (alphabet.includes(guess) === true){
                //console.log("yep");
    
            checkRepeat(guess);
        }else{
            resultsBoard.innerHTML = ("Error, that's not a letter");
            countdown();
            }
    }
    
    function checkRepeat(guess){
        if (guessedLetters.includes(guess) === true){
            resultsBoard.innerHTML = ("Error, you've already guessed that letter");
            countdown();
        }else{        
            guessedLetters.push(guess);
                guessedBoard.innerHTML = guessedLetters;
            check(guess);
        }
    }
    
    function check(){
        chosenWord = word.split("");
        if (chosenWord.includes(guess) === true){
            for (var j = 0; j < chosenWord.length; j++){
                if (chosenWord[j] === guess){
                    emptySpaces.splice(j, 1, guess);
                        //console.log(emptySpaces);
                    gameboard.innerHTML = emptySpaces;
                    checkWin(emptySpaces);
                }
        }
    
        }else{
            resultsBoard.innerHTML = ("Oops, wrong letter! Try again!");
            countdown();
        }   
    }
    function checkWin(emptySpaces){
        if (JSON.stringify(chosenWord) === JSON.stringify(emptySpaces)){
            resultsBoard.innerHTML = ("You've won!")
        }else{
            resultsBoard.innerHTML = ("Keep going!")
        }
    }
    
    function countdown(){
        turnsRemaining--;
        turns.innerHTML = turnsRemaining;
        checkLose();
    }
    
    function checkLose(){
        if (turnsRemaining === 0){
            resultsBoard.innerHTML = "You've lost!";
        }
    }
    function buttons(){
    
    for (var i = 0; i < alphabet.length; i++){
        alphaBox = document.getElementById("alpha");
        letters = document.createElement("button");
        letters.id = alphabet[i];
        letters.addEventListener("click", function(){
            id = this.id;
            input(id)
        })
        letters.setAttribute("class", "button");
        letters.innerHTML = alphabet[i];
        alphaBox.append(letters);
    }

    function reset(){
        word = wordbank[Math.floor(Math.random()*wordbank.length)];
        gameboard = document.getElementById("word-display");
        chosenWord = [];
        emptySpaces = [];
        guessedLetters = [];

        turnsRemaining = 10;  
        
        resultsBoard.innerHTML = "Choose a letter!";
        guessedBoard.innerHTML = "None Yet";
        }

document.getElementById("btn").onclick = function(){
    //console.log("this works");

    reset();
    
    spaces();
}
    

    }
    
    
    buttons();
    spaces();
    input();       
        }