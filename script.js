let computerChoice = '';
let humanChoice = '';

playGame();
// DECLARE the function for computer choice.
function getComputerChoice() {

    // DECLARE variable to store the random value and GET the value.

    let randomValue = Math.floor(Math.random() * 3) + 1;

    // IF condition for 1.
    if (randomValue === 1) {
        computerChoice = 'rock';
    }

    // ELSE IF condition for 2.
    else if (randomValue === 2) {
        computerChoice = 'paper';
    }

    // ELSE condition for 3.
    else {
        computerChoice = 'scissor';
    }
}

function getHumanChoice() {
    const humanInput = prompt('Write your choice');
    humanChoice = humanInput;
}



humanChoice = humanChoice.toLowerCase();


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getHumanChoice();
        playRound(humanChoice, computerChoice);

    }

    function playRound(humanSelection, computerSelection) {

        switch (humanSelection) {
            case 'rock': {
                if (computerSelection === 'paper') {
                    console.log('you lose');
                    computerScore += 1;
                } else if (computerSelection === 'scissor') {
                    console.log('you win');
                    humanScore += 1;
                } else {
                    console.log('The round is par');
                }
                break;
            }

            case 'paper': {
                if (computerSelection === 'rock') {
                    console.log('you win');
                    humanScore += 1;
                } else if (computerSelection === 'scissor') {
                    console.log('you lose');
                    computerScore += 1;
                } else {
                    console.log('The round is par');
                }
                break;
            }

            case 'scissor': {
                if (computerSelection === 'rock') {
                    console.log('You lose');
                    computerScore += 1;
                } else if (computerSelection === 'paper') {
                    console.log('You win');
                    humanScore += 1;
                } else {
                    console.log('The round is par');
                }
                break;
            }

            default: {
                console.log('Invalid choice');
            }
        }
        console.log('human ', humanScore);
        console.log('computer ', computerScore);

    }

    if (humanScore > computerScore){
        alert('The winner is: Human');
    } else if (humanScore < computerScore) {
        alert('The winner is: Computer');
    } else {
        alert('The game is par');
    }
}



// humanChoice = humanChoice.toLowerCase();

// playRound(humanChoice, computerChoice);

