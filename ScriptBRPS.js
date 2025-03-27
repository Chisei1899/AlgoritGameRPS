const choices = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll(".choice");
const resultText = document.querySelector("#result");
const playerChoiceText = document.querySelector("#player-choice");
const computerChoiceText = document.querySelector("#computer-choice");
const winnerText = document.querySelector("#winner");
const difficultyDisplay = document.querySelector("#difficulty-display");
const roundNumberText = document.querySelector("#round-number");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");

let playerHistory = { Rock: 0, Paper: 0, Scissors: 0 };
let round = 1;
let playerScore = 0;
let computerScore = 0;

// Function to determine difficulty based on round number
function getCurrentDifficulty() {
    if (round <= 10) return "Easy";
    if (round <= 20) return "Medium";
    return "Hard";
}

// Function to update difficulty display
function updateDifficultyDisplay() {
    difficultyDisplay.textContent = getCurrentDifficulty();
}

// Function to get computer choice based on difficulty
function getComputerChoice(playerChoice) {
    let difficulty = getCurrentDifficulty();

    if (difficulty === "Easy") {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    if (difficulty === "Medium") {
        const counterMoves = { Rock: "Paper", Paper: "Scissors", Scissors: "Rock" };
        return Math.random() < 0.2 ? counterMoves[playerChoice] : choices[Math.floor(Math.random() * choices.length)];
    }

    if (difficulty === "Hard") {
        let mostUsedMove = Object.keys(playerHistory).reduce((a, b) => playerHistory[a] > playerHistory[b] ? a : b);
        const counterMoves = { Rock: "Paper", Paper: "Scissors", Scissors: "Rock" };
        return Math.random() < 0.3 ? counterMoves[mostUsedMove] : choices[Math.floor(Math.random() * choices.length)];
    }
}

// Function to determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a Draw!";
    }
    if (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")
    ) {
        playerScore++;
        return "Player Wins!";
    }
    computerScore++;
    return "Computer Wins!";
}

// Event Listeners (for player choice)
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        playerHistory[playerChoice]++;
        const computerChoice = getComputerChoice(playerChoice);

        // Update UI
        playerChoiceText.textContent = playerChoice;
        computerChoiceText.textContent = computerChoice;
        const winner = determineWinner(playerChoice, computerChoice);
        winnerText.textContent = winner;
        resultText.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}.`;

        // Update round, difficulty, and scores
        round++;
        roundNumberText.textContent = round;
        updateDifficultyDisplay();

        // Update score display
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
    });
});

// Initialize difficulty display
updateDifficultyDisplay();