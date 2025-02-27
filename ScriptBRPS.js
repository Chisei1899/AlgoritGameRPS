const choices = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll(".choice");
const resultText = document. querySelector("#result");
const playerChoiceText = document.querySelector("#player-choice");
const computerChoiceText = document.querySelector("#computer-choice");
const winnerText = document.querySelector("#winner");

// Function to get a random choice for the computer
function getComputerChoice() {
    return choices [Math. floor(Math.random() * choices.length)];
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

// Event Listeners (for player choice
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();

        // Update UI
        playerChoiceText.textContent = playerChoice;
        computerChoiceText.textContent = computerChoice;
        const winner = determineWinner(playerChoice, computerChoice);
        winnerText.textContent = winner;
        resultText.textContent = "You chose " + playerChoice + ".  Computer chose " + computerChoice + ".";
    });
});