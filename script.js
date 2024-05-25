const BTNS = document.querySelectorAll('button');
for (const btn of BTNS) {
    btn.addEventListener("click", playGame);
}

let div = document.createElement('div');
const body = document.querySelector("body");
body.appendChild(div);
let p = document.createElement("p");
let p1 = document.createElement('p');
let p2 = document.createElement('p');

let humanScore = 0;
let computerScore = 0;
let winnerMessage = '';
let roundNumber = 0;

function playGame(e) {
    const humanChoice = e.target.id;
    console.log(humanChoice);

    let computerChoice = '';

    computerChoice = getComputerChoice();

    function getComputerChoice() {

        let randomValue = Math.floor(Math.random() * 3) + 1;

        if (randomValue === 1) {
            computerChoice = 'rock';
        } else if (randomValue === 2) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissor';
        }
        return computerChoice;
    }
    console.log(computerChoice);


    compareChoice(humanChoice, computerChoice);

    function compareChoice(human, computer) {
        switch (human) {
            case 'rock': {
                roundNumber++;

                if (computer === 'paper') {
                    // console.log('you lose');
                    winnerMessage = "Round " + roundNumber + " winner is computer";
                    computerScore++;
                } else if (computer === 'scissor') {
                    // console.log('you win');
                    winnerMessage = "Round " + roundNumber + " winner is human";
                    humanScore++;
                    break;
                } else { winnerMessage = "Round " + roundNumber + " is par"; }
                break;
            }

            case 'paper': {
                roundNumber++;
                if (computer === 'rock') {
                    // console.log('you win');
                    winnerMessage = "Round " + roundNumber + " winner is human";
                    humanScore++;
                } else if (computer === 'scissor') {
                    // console.log('you lose');
                    winnerMessage = "Round " + roundNumber + " winner is computer";
                    computerScore++;
                }
                else { winnerMessage = "Round " + roundNumber + " is par"; }

                break;
            }

            case 'scissor': {
                roundNumber++;
                if (computer === 'rock') {
                    // console.log('You lose');
                    winnerMessage = "Round " + roundNumber + " winner is computer";
                    computerScore += 1;
                } else if (computer === 'paper') {
                    // console.log('You win');
                    winnerMessage = "Round " + roundNumber + " winner is human";
                    humanScore += 1;
                }
                else { winnerMessage = "Round " + roundNumber + " is par"; }

                break;
            }
        }

        console.log(roundNumber);
        console.log(humanScore, computerScore);
    }

    if (humanScore === 5 || computerScore ===5) winnerGame();
    else displayWinner();

    function winnerGame() {
        if (humanScore > computerScore) {
            p.textContent = "THE WINNER IS: HUMAN!!";
            p1.textContent = "Human score: " + humanScore;
            p2.textContent = "Computer score: " + computerScore;
        } else {
            p.textContent = "THE WINNER IS: COMPUTER!!";
            p1.textContent = "Human score: " + humanScore;
            p2.textContent = "Computer score: " + computerScore;
        }
    }
    
    function displayWinner() {
        
            p.textContent = winnerMessage;
            p1.textContent = "Human score: " + humanScore;
            p2.textContent = "Computer score: " + computerScore;
            div.appendChild(p);
            div.appendChild(p1);
            div.appendChild(p2);
        
    }
}
