console.log("Hello World");

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

//Get a choice from the user
function getHumanChoice(){
    let userInput = window.prompt('Give your choice');
        return userInput;
}

//Compare the choices and return the result at each round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock' && computerChoice === 'scissors'){
        return 'You won! Rock beats Scissors';
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        return 'You won! Paper beats Rock';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        return 'You won! Scissors beats Paper';
    } else if (computerChoice === 'rock' && humanChoice === 'scissors'){
        return 'You loose! Rock beats Scissors';
    } else if (computerChoice === 'paper' && humanChoice === 'rock'){
        return 'You loose! Paper beats Rock';
    } else if (computerChoice === 'scissors' && humanChoice === 'paper'){
        return 'You loose! Scissors beats Paper';
    } else {
        return 'It is a tie!';
    }
}

//Play the game for 5 rounds, print the score at each round and at the end return who won
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i=1; i<=5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(humanChoice, computerChoice);
        if (playRound(humanChoice, computerChoice).includes('won')) {
            humanScore++;
        } else if (playRound(humanChoice, computerChoice).includes('loose')) {
            computerScore++;
        }
        console.log('New Score: ' + humanScore + ', ' + computerScore);
    }

    if(humanScore > computerScore) {
        return 'You won! Congratulations!';
    } else if (humanScore < computerScore) {
        return 'You lost :( Better luck next time...';
    } else {
        return 'It is a tie';
    }
}

console.log(playGame());