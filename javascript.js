let choice1 = "rock";
let choice2 = "Paper";
let choice3 = "Scissors";
let getComputerChoice = getRandomInt(3);

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}
console.log(getComputerChoice);

if (getComputerChoice === 1){
    console.log(choice1);
}
else if (getComputerChoice === 2){
    console.log(choice2);
}
else if (getComputerChoice === 3){
    console.log(choice3);
}