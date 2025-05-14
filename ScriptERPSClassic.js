const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
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

const clickSound = new Audio("audio/choiceselect.mp3");

let playerHistory = { Rock: 0, Paper: 0, Scissors: 0, Lizard: 0, Spock: 0 };
let round = 1;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

const MEDIUM_SMART_CHANCE = 0.2;
const HARD_SMART_CHANCE = 0.3;

function getCurrentDifficulty() {
    if (round <= 15) return "Easy";
    if (round <= 25) return "Medium";
    if (round <= 40) return "Hard";
    return "Game Over";
}

function updateDifficultyDisplay() {
    difficultyDisplay.textContent = getCurrentDifficulty();
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
        let mostUsedMove = Object.keys(playerHistory).reduce((a, b) =>
            playerHistory[a] > playerHistory[b] ? a : b
        );
        return Math.random() < HARD_SMART_CHANCE
            ? counterMoves[mostUsedMove][Math.floor(Math.random() * 2)]
            : choices[Math.floor(Math.random() * choices.length)];
    }

    return choices[Math.floor(Math.random() * choices.length)];
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

function saveScore(name, player, computer, draws) {
    fetch('save_score_erps.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `name=${encodeURIComponent(name)}&player=${player}&computer=${computer}&draws=${draws}`
    })
    .then(res => res.text())
    .then(response => {
        alert("Score saved! Reloading game.");
        window.location.href = "ERPSClassic.php";
    })
    .catch(err => {
        console.error("Error saving score:", err);
        alert("Failed to save score.");
    });
}

function disableButtons() {
    buttons.forEach(btn => btn.disabled = true);
}
function enableButtons() {
    buttons.forEach(btn => btn.disabled = false);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (round > 40) return;

        clickSound.play();
        clickSound.volume = 0.2;

        disableButtons();
        setTimeout(enableButtons, 500); 

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

        if (round > 40) {
            setTimeout(() => {
                const playerName = prompt("Enter your name to save your score:");
                if (playerName) {
                    saveScore(playerName, playerScore, computerScore, drawCount);
                } else {
                    if (confirm("Do you want to restart the game?")) {
                        window.location.href = "ERPSClassic.php";
                    }
                }
            }, 500);
        }
    });
});

restartButton.addEventListener("click", () => {

    clickSound.play();
    clickSound.volume = 0.2;

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

    updateDifficultyDisplay();
});

updateDifficultyDisplay();
