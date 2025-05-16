<?php include 'session_check.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock, Paper, Scissors - HOMEPAGE</title>
    <link rel="stylesheet" href="HomepageStyle.css">
</head>
<body>
    <h1>WELCOME TO ROCK, PAPER, SCISSORS, LIZARD, SPOCK<br><span class="subtitle">(From the Hit Series The Big Bang Theory)</span></h1>
    <p><b>Welcome player <?php echo $_SESSION['username']; ?>!</b></p>

    <div class="choices1">
        <a href="BRPSFreePlay.php">
            <button class="choice">Play Rock Paper Scissors (Free Play)</button>
        </a>

        <a href="BRPSClassic.php">
            <button class="choice">Play Rock Paper Scissors (Classic)</button>
        </a>
    </div>

    <div class="choices1">
        <a href="ERPSFreePlay.php">
            <button class="choice">Play Rock, Paper, Scissors, Lizard, Spock (Free Play)</button>
        </a>

        <a href="ERPSClassic.php">
            <button class="choice">Play Rock, Paper, Scissors, Lizard, Spock (Classic)</button>
        </a>
    </div>

    <div class="choices2">
        <a href="change_username.php">
        <button class="choice">Change Username</button>
    </a>

    <br>
    <a href="logout.php">
        <button class="logout">Logout</button>
    </a>
    </div>

    <div class="leaderboards-container">
    <div class="leaderboard-wrapper">
        <h2>Leaderboard for BRPS</h2>
        <table class="leaderboard">
            <tr>
                <th>Name</th>
                <th>Player Wins</th>
                <th>Computer Wins</th>
                <th>Draws</th>
                <th>Player Score</th>
            </tr>
            <?php
            $file = __DIR__ . '/userdata/userscoresbrps.csv';
            if (file_exists($file)) {
                $rows = array_map('str_getcsv', file($file));
                $header = array_shift($rows);

                usort($rows, function($a, $b) {
                    return (int)$b[4] <=> (int)$a[4];
                });

                foreach ($rows as $row) {
                    echo "<tr>";
                    foreach ($row as $cell) {
                        echo "<td>" . htmlspecialchars($cell) . "</td>";
                    }
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='5'>No scores available yet.</td></tr>";
            }
            ?>
        </table>
    </div>

    <div class="leaderboard-wrapper">
        <h2>Leaderboard for ERPS</h2>
        <table class="leaderboard">
            <tr>
                <th>Name</th>
                <th>Player Wins</th>
                <th>Computer Wins</th>
                <th>Draws</th>
                <th>Player Score</th>
            </tr>
            <?php
            $file = __DIR__ . '/userdata/userscoreserps.csv';
            if (file_exists($file)) {
                $rows = array_map('str_getcsv', file($file));
                $header = array_shift($rows);

                usort($rows, function($a, $b) {
                    return (int)$b[4] <=> (int)$a[4];
                });

                foreach ($rows as $row) {
                    echo "<tr>";
                    foreach ($row as $cell) {
                        echo "<td>" . htmlspecialchars($cell) . "</td>";
                    }
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='5'>No scores available yet.</td></tr>";
            }
            ?>
        </table>
    </div>
</div>
</body>
</html>