let playerScore = 0;
let computerScore = 0;

// Function to get computer choice
const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to play a single round
const playRound = (playerSelection) => {
    if (playerScore >=5 || computerScore >=5) {
        return; // Game over, stop playing
    }

    const computerSelection = getComputerChoice();
    const resultDiv = document.querySelector("#results");
    const playerScoreElem = document.querySelector('#playerScore');
    const computerScoreElem = document.querySelector('#computerScore');
    const winnerDiv = document.querySelector('#winner');

// Clear previous results
    resultDiv.textContent = '';
    winnerDiv.textContent = '';

// Create elements to display results
    const playerSelectionElem = document.createElement('p');
    playerSelectionElem.textContent = `Player selection: ${playerSelection}`;
    const computerSelectionElem = document.createElement('p');
    computerSelectionElem.textContent = `Computer selection: ${computerSelection}`;

    let resultMessage = '';    
    if (playerSelection === computerSelection) {
        resultMessage += "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        resultMessage = "You win!";
        playerScore++;
    } else {
        resultMessage = "You lose!";
        computerScore++;
    }
    
    const resultMessageElem = document.createElement('p');
    resultMessageElem.textContent = resultMessage;

// Append child elements to the resultDiv
    resultDiv.appendChild(playerSelectionElem);
    resultDiv.appendChild(computerSelectionElem);
    resultDiv.appendChild(resultMessageElem);

// Update scores
    playerScoreElem.textContent = playerScore;
    computerScoreElem.textContent = computerScore;

// Check if either player has won
if (playerScore >= 5) {
    winnerDiv.textContent = "Congratulations! You won the game!";
} else if (computerScore >= 5) {
    winnerDiv.textContent = "Sorry you lose, the computer won the game";
}
};

// Adding event listeners to the buttons
document.querySelector('#rock').addEventListener('click', () => playRound('Rock'));
document.querySelector('#paper').addEventListener('click', () => playRound('Paper'));
document.querySelector('#scissors').addEventListener('click', () => playRound('Scissors'));
