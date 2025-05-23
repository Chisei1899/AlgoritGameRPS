const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const buttons = document.querySelectorAll(".choice");
const resultText = document.querySelector("#result");
const playerChoiceText = document.querySelector("#player-choice");
const computerChoiceText = document.querySelector("#computer-choice");
const winnerText = document.querySelector("#winner");
const roundNumberText = document.querySelector("#round-number");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const drawCountText = document.querySelector("#draw-count");
const restartButton = document.querySelector("#restart-button");
const difficultySelect = document.querySelector("#difficulty-select");

const clickSound = new Audio("audio/choiceselect.mp3");
clickSound.volume = 0.2;

let playerHistory = { Rock: 0, Paper: 0, Scissors: 0, Lizard: 0, Spock: 0 };
let round = 1;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

const MEDIUM_SMART_CHANCE = 0.2;
const HARD_SMART_CHANCE = 0.3;

function getCurrentDifficulty() {
    return difficultySelect.value;
}

function getComputerChoice(playerChoice) {
    const difficulty = getCurrentDifficulty();
    const counterMoves = {
        "Rock": ["Paper", "Spock"],
        "Paper": ["Scissors", "Lizard"],
        "Scissors": ["Rock", "Spock"],
        "Lizard": ["Rock", "Scissors"],
        "Spock": ["Lizard", "Paper"]
    };

    if (difficulty === "Easy") {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    if (difficulty === "Medium") {
        return Math.random() < MEDIUM_SMART_CHANCE
            ? counterMoves[playerChoice][Math.floor(Math.random() * 2)]
            : choices[Math.floor(Math.random() * choices.length)];
    }

    if (difficulty === "Hard") {
        const mostUsedMove = Object.keys(playerHistory).reduce((a, b) =>
            playerHistory[a] > playerHistory[b] ? a : b
        );
        return Math.random() < HARD_SMART_CHANCE
            ? counterMoves[mostUsedMove][Math.floor(Math.random() * 2)]
            : choices[Math.floor(Math.random() * choices.length)];
    }
}

function determineWinner(player, computer) {
    if (player === computer) {
        drawCount++;
        return "It's a Draw!";
    }
    if (
        (player === "Rock" && (computer === "Scissors" || computer === "Lizard")) ||
        (player === "Paper" && (computer === "Rock" || computer === "Spock")) ||
        (player === "Scissors" && (computer === "Paper" || computer === "Lizard")) ||
        (player === "Lizard" && (computer === "Spock" || computer === "Paper")) ||
        (player === "Spock" && (computer === "Scissors" || computer === "Rock"))
    ) {
        playerScore++;
        return "Player Wins!";
    }
    computerScore++;
    return "Computer Wins!";
}

function disableButtons() {
    buttons.forEach(btn => btn.disabled = true);
}
function enableButtons() {
    buttons.forEach(btn => btn.disabled = false);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        disableButtons();
        setTimeout(enableButtons, 500); 

        clickSound.play();

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
    });
});

restartButton.addEventListener("click", () => {
    clickSound.play();

    round = 1;
    playerScore = 0;
    computerScore = 0;
    drawCount = 0;
    playerHistory = { Rock: 0, Paper: 0, Scissors: 0, Lizard: 0, Spock: 0 };

    playerChoiceText.textContent = "?";
    computerChoiceText.textContent = "?";
    winnerText.textContent = "?";
    resultText.textContent = "Make your choice!";

    playerScoreText.textContent = "0";
    computerScoreText.textContent = "0";
    drawCountText.textContent = "0";
    roundNumberText.textContent = "1";

    difficultySelect.value = "Easy";
});