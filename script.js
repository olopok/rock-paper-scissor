// DECLARE variable to store computer choice.
let computerChoice = '';
getComputerChoice();

// DECLARE the function for computer choice.
function getComputerChoice() {

    // DECLARE variable for 'rock'.
    const rock = 'rock';

    // DECLARE variable for 'paper'.
    const paper = 'paper';

    // DECLARE variable for 'scissor'.
    const scissor = 'scissor';

    // DECLARE variable to store the random value and GET the value.

    let randomValue = Math.floor(Math.random() * 3) + 1;

    // IF condition for 1.
    if (randomValue === 1) {
        computerChoice = rock;
    }

    // ELSE IF condition for 2.
    else if (randomValue === 2) {
        computerChoice = paper;
    }

    // ELSE condition for 3.
    else {
        computerChoice = scissor
    }
}

// DECLARE variable to store human choice and CALL the function to input it.
let humanChoice = '';
getHumanChoice();

// DECLARE the function.
function getHumanChoice() {
   const humanInput = prompt('Write your choice');
   humanChoice = humanInput;
}

let humanScore = 0;
let computerScore = 0;