// Function to play a game of 5 rounds
function playGame() {
// Score variables inside playGame function
let humanScore = 0;
let computerScore = 0;

// Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get human choice
function getHumanChoice() {
    const choice = prompt("Please enter your choice(rock, paper, or scissors):").toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];

    if (validChoices.includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors");
        return getHumanChoice(); // to ask again if the input is invalid
    }
}

// Function to play a round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase(); // to ensure case sensitivity

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`Current Score -> Human: ${humanScore}, Computer: ${computerScore}`);
}
// Play 5 rounds
for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log("Human choice:", humanChoice);
    console.log("computerChoice:", computerChoice);

    playRound(humanChoice, computerChoice);
}

// Declare the overall winner
if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
} else { 
    console.log("The game is a tie!");
}
}

// Start the game
playGame();