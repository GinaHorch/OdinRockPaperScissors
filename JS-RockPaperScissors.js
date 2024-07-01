// Function to get computer choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    console.log(`Player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return 'It\'s a tie!';
    }

    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log(`You win!`);
        return "You win!";
    } else {
        console.log(`You lose!`);
        return "You lose!";
    }
}

// Adding event listeners to the buttons
document.querySelector('#rock').addEventListener('click', () => playRound('Rock'));
document.querySelector('#paper').addEventListener('click', () => playRound('Paper'));
document.querySelector('#scissors').addEventListener('click', () => playRound('Scissors'));
