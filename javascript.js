let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice(3);
let humanScore = 0;
let computerScore = 0;

//get user input
function getHumanChoice(){
    return parseInt(prompt("please pick 1 for rock, 2 for paper, 3 for scissors", ''));
}

//get computer choice
function getComputerChoice(max){
    return Math.floor(Math.random() * max + 1);
}  


//display human input
function displayHumanInput(){
    if (humanChoice === 1){
        console.log("player picked Rock");
    }
    else if (humanChoice === 2){
        console.log("player picked Paper");
    }
    else if (humanChoice === 3){
        console.log("Player picked Scissors");
    }
    else {
        console.log("Player made an invalid input");
    }
    }

// display computer choice
function displayComputerInput(){
    if (computerChoice === 1){
        console.log("computer picked Rock");
    }
    else if (computerChoice === 2){
        console.log("computer picked Paper");
    }
    else if (computerChoice === 3){
        console.log("computer picked Scissors");
    }
    }

//calculate score
function calculateScore(){
    if (computerChoice === humanChoice){
        console.log("Its a tie!");
    }
    else if (computerChoice === 1 && humanChoice === 2){
        console.log("Player Won!")
        humanScore ++;
    }
    else if (computerChoice === 1 && humanChoice === 3){
        console.log("Computer Won!")
        computerScore ++;
    }
    else if (computerChoice === 2 && humanChoice === 1){
        console.log("Computer Won!")
        computerScore ++;
    }
    else if (computerChoice === 2 && humanChoice === 3){
        console.log("Player Won!")
        humanScore ++;
    }
    else if (computerChoice === 3 && humanChoice === 1){
        console.log("Player Won!")
        humanScore ++;
    }
    else if (computerChoice === 3 && humanChoice === 2){
        console.log("Computer Won!")
        computerScore ++;
    }
}    
//play 1 round
function playRound(){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice(3);
    displayHumanInput();
    displayComputerInput();
    calculateScore();
}

//play 5 rounds
function playGame(){
    for (let i = 0; i < 5; i++){
        playRound()
        console.log("player-score: " + humanScore + "; computer-score: " +computerScore);
    }
    if (humanScore > computerScore){
        console.log("You have won the Game!!");
    }
    else if (humanScore < computerScore){
        console.log("Too bad, the computer won...");
    }
    else {
        console.log("its a Tie!!!");
    }
}
playGame();    

