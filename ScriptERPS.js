const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
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
        (player === "Rock" && computer === "Lizard") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Paper" && computer === "Spock") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Scissors" && computer === "Lizard") ||
        (player === "Lizard" && computer === "Spock") ||
        (player === "Lizard" && computer === "Paper") ||
        (player === "Spock" && computer === "Scissors") ||
        (player === "Spock" && computer === "Rock")     
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