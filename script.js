
let humanScore = 0;
let computerScore = 0;

const gameButtons = document.querySelectorAll('.buttons');
const results = document.querySelector('.results');

//Get random answer for computer's choice
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0){
        return 'rock';
    } else if (randomNumber == 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Compare the choices and return the result at each round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const playersSelection = document.createElement('p');
    playersSelection.textContent = humanChoice;
    const computersSelection = document.createElement('p');
    computersSelection.textContent = computerChoice;
    const resultText = document.createElement('p');
    results.appendChild(playersSelection);
    results.appendChild(computersSelection);
    results.appendChild(resultText);

    if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
        humanScore++;
        resultText.textContent = `You won! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') || (computerChoice === 'paper' && humanChoice === 'rock') || (computerChoice === 'scissors' && humanChoice === 'paper')){
        computerScore++;
        resultText.textContent = `You loose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
    } else {
        resultText.textContent = `It is a tie! You both chose ${computerChoice.toUpperCase()}`;
    }
}

gameButtons.forEach((button) => {
    const finalScore = document.createElement('p');
    button.addEventListener("click", (e) => { 
        playRound(e.target.id);
        if (humanScore === 5) {
        finalScore.innerText = 'You won! Congratulations!';
        humanScore = 0;
        computerScore = 0;
        } else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        finalScore.innerText = 'You lost :( Better luck next time...';
        }
        results.appendChild(finalScore);
    });
}); 