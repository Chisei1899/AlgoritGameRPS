<?php include 'session_check.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enhanced Rock Paper Scissors</title>
    <link rel="stylesheet" href="GamePageStyle.css">
</head>

<body>
    <h1>ROCK, PAPER, SCISSORS, LIZARD, SPOCK (FREE PLAY)</h1>  

    <h3>Select Difficulty: <select id="difficulty-select">
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
        </select></h3>

    <div class="choices">
        <button class="choice" data-choice="Rock"><img src="images/Rock.png" alt="Rock"></button>
        <button class="choice" data-choice="Paper"><img src="images/Paper.png" alt="Paper"></button>
        <button class="choice" data-choice="Scissors"><img src="images/Scissors.png" alt="Scissors"></button>
        <button class="choice" data-choice="Lizard"><img src="images/Lizard.png" alt="Lizard"></button>
        <button class="choice" data-choice="Spock"><img src="images/Spock.png" alt="Spock"></button>
    </div>

    <h2 id="result">Make your choice!</h2>

    <div class="status-container">
    <div class="status-box">
        <h3>Game Status</h3>
        <p>👤 Player: <span id="player-choice">?</span></p>
        <p>💻 Computer: <span id="computer-choice">?</span></p>
        <p>🏆 Winner: <span id="winner">?</span></p>
        <p>🔁 Round: <span id="round-number">1</span></p>
    </div>

    <div class="score-box">
        <h3>Score</h3>
        <p>👤 Player: <span id="player-score">0</span></p>
        <p>💻 Computer: <span id="computer-score">0</span></p>
        <p>🟰 Draw: <span id="draw-count">0</span></p>
    </div>
</div>

    <div class="button-row">
        <a href="home_page.php">
            <button class="back-button">Back to Home</button>
        </a>
        <button id="restart-button" class="restart-button">Restart Game</button>
    </div>

    <script src="ScriptERPSFreePlay.js"></script>
</body>
</html>