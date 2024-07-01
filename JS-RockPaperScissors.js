// Function to get computer choice
const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to play a single round
const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();
    const resultDiv = document.querySelector("#results");

// Clear previous results
    resultDiv.textContent = '';

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
        resultMessage += "You win!";
    } else {
        resultMessage += "You lose!";
    }
    
    const resultMessageElem = document.createElement('p');
    resultMessageElem.textContent = resultMessage;

// Append child elements to the resultDiv
    resultDiv.appendChild(playerSelectionElem);
    resultDiv.appendChild(computerSelectionElem);
    resultDiv.appendChild(resultMessageElem);
};

// Adding event listeners to the buttons
document.querySelector('#rock').addEventListener('click', () => playRound('Rock'));
document.querySelector('#paper').addEventListener('click', () => playRound('Paper'));
document.querySelector('#scissors').addEventListener('click', () => playRound('Scissors'));
