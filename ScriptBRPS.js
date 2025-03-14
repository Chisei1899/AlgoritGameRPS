const choices = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll(".choice");
const resultText = document.querySelector("#result");
const playerChoiceText = document.querySelector("#player-choice");
const computerChoiceText = document.querySelector("#computer-choice");
const winnerText = document.querySelector("#winner");
const difficultySelect = document.querySelector("#difficulty");

let playerHistory = { Rock: 0, Paper: 0, Scissors: 0 };

// Function to get computer choice based on difficulty
function getComputerChoice(playerChoice) {
    let difficulty = difficultySelect.value;

    if (difficulty === "easy") {
        return choices[Math.floor(Math.random() * choices.length)];
    }
    
    if (difficulty === "medium") {
        const counterMoves = { "Rock": "Paper", "Paper": "Scissors", "Scissors": "Rock" };
        return Math.random() < 0.3 ? counterMoves[playerChoice] : choices[Math.floor(Math.random() * choices.length)];
    }
    
    if (difficulty === "hard") {
        let mostUsedMove = Object.keys(playerHistory).reduce((a, b) => playerHistory[a] > playerHistory[b] ? a : b);
        const counterMoves = { "Rock": "Paper", "Paper": "Scissors", "Scissors": "Rock" };
        
        return Math.random() < 0.4 ? counterMoves[mostUsedMove] : choices[Math.floor(Math.random() * choices.length)];
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
        return "Player Wins!";
    }
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
        resultText.textContent = "You chose " + playerChoice + ".  Computer chose " + computerChoice + ".";
    });
});
