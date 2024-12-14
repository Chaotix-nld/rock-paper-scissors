let choice1 = "rock";
let choice2 = "Paper";
let choice3 = "Scissors";
let getComputerChoice = getRandomInt(3);
let getHumanChoice = parseInt(prompt("Please enter your choice: 1 for Rock, 2 for Paper, 3 for Scissors: "));
let humanScore = 0;
let computerScore = 0;

if (getHumanChoice === 1){
    console.log("player picked " + choice1);
}
else if (getHumanChoice === 2){
    console.log("player picked " + choice2);
}
else if (getHumanChoice === 3){
    console.log("player picked" + choice3);
}
else{
    console.log("you made a choice that doenst exsist, please try again");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}


if (getComputerChoice === 1){
    console.log("computer picked " + choice1);
}
else if (getComputerChoice === 2){
    console.log("computer picked " + choice2);
}
else if (getComputerChoice === 3){
    console.log("computer picked " + choice3);
}