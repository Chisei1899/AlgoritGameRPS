<?php include 'session_check.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
    <link rel="stylesheet" href="Style.css">
</head>

<body>
    <h1>Rock, Paper, Scissors!!!</h1>

    <h3>Current Difficulty: <span id="difficulty-display">Easy</span></h3>

    <div class="choices">
        <button class="choice" data-choice="Rock"><img src="images/Rock.png" alt="Rock"></button>
        <button class="choice" data-choice="Paper"><img src="images/Paper.png" alt="Paper"></button>
        <button class="choice" data-choice="Scissors"><img src="images/Scissors.png" alt="Scissors"></button>
    </div>

    <h2 id="result">Make your choice!</h2>

    <p><strong>Player: </strong><span id="player-choice">?</span></p>
    <p><strong>Computer: </strong> <span id="computer-choice">?</span></p>
    <p><strong>Winner: </strong> <span id="winner">?</span></p>

    <p><strong>Round: </strong> <span id="round-number">1</span></p>

    <h3>Score</h3>
    <p><strong>Player: </strong> <span id="player-score">0</span></p>
    <p><strong>Computer: </strong> <span id="computer-score">0</span></p>
    <p><strong>Draws: </strong> <span id="draw-count">0</span></p>

    <br>
    <a href="HomePage.php">
    <button class="back-button">Back to Home</button>
    </a>

    <br>
    <button id="restart-button" class="restart-button">Restart Game</button>

    <script src="ScriptBRPS.js"></script>
</body>

</html>