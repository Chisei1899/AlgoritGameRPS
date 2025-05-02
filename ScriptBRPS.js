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
const drawCountText = document.querySelector("#draw-count");
const restartButton = document.querySelector("#restart-button");

let playerHistory = { Rock: 0, Paper: 0, Scissors: 0 };
let round = 1;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

const MEDIUM_SMART_CHANCE = 0.2;
const HARD_SMART_CHANCE = 0.3;

function getCurrentDifficulty() {
    if (round <= 10) return "Easy";
    if (round <= 20) return "Medium";
    return "Hard";
}

function updateDifficultyDisplay() {
    difficultyDisplay.textContent = getCurrentDifficulty();
}

function getComputerChoice(playerChoice) {
    const difficulty = getCurrentDifficulty();
    const counterMoves = { Rock: "Paper", Paper: "Scissors", Scissors: "Rock" };

    if (difficulty === "Easy") {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    if (difficulty === "Medium") {
        return Math.random() < MEDIUM_SMART_CHANCE
            ? counterMoves[playerChoice]
            : choices[Math.floor(Math.random() * choices.length)];
    }

    if (difficulty === "Hard") {
        const mostUsedMove = Object.keys(playerHistory).reduce((a, b) =>
            playerHistory[a] > playerHistory[b] ? a : b
        );
        return Math.random() < HARD_SMART_CHANCE
            ? counterMoves[mostUsedMove]
            : choices[Math.floor(Math.random() * choices.length)];
    }
}

function determineWinner(player, computer) {
    if (player === computer) {
        drawCount++;
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

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        playerHistory[playerChoice]++;
        const computerChoice = getComputerChoice(playerChoice);

        const winner = determineWinner(playerChoice, computerChoice);

        playerChoiceText.textContent = playerChoice;
        computerChoiceText.textContent = computerChoice;
        winnerText.textContent = winner;
        resultText.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}.`;

        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        drawCountText.textContent = drawCount;

        roundNumberText.textContent = round;
        round++;
        updateDifficultyDisplay();
    });
});

// Restart Game
restartButton.addEventListener("click", () => {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    drawCount = 0;
    playerHistory = { Rock: 0, Paper: 0, Scissors: 0 };

    playerChoiceText.textContent = "?";
    computerChoiceText.textContent = "?";
    winnerText.textContent = "?";
    resultText.textContent = "Make your choice!";

    playerScoreText.textContent = "0";
    computerScoreText.textContent = "0";
    drawCountText.textContent = "0";
    roundNumberText.textContent = "1";

    updateDifficultyDisplay();
});

// Initial difficulty display
updateDifficultyDisplay();