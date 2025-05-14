<?php include 'session_check.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock, Paper, Scissors - HOMEPAGE</title>
    <link rel="stylesheet" href="Style.css">
    <style>
        .leaderboard {
            margin-top: 30px;
            border-collapse: collapse;
            width: 90%;
            max-width: 800px;
        }
        .leaderboard th, .leaderboard td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        .leaderboard th {
            background-color: #333;
            color: white;
        }
        .leaderboard tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        .leaderboard-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    </style>
</head>
<body>
    <h1>Welcome to Rock, Paper, Scissors, Lizard, Spock (From the Hit Series The Big Bang Theory)</h1>
    <p>Welcome player <?php echo $_SESSION['username']; ?>!</p>

    <div class="choices">
        <a href="BRPSFreePlay.php">
            <button class="choice">Play Rock Paper Scissors (Free Play)</button>
        </a>

        <a href="BRPSClassic.php">
            <button class="choice">Play Rock Paper Scissors (Classic)</button>
        </a>

        <a href="ERPSFreePlay.php">
            <button class="choice">Play Rock, Paper, Scissors, Lizard, Spock (Free Play)</button>
        </a>

        <a href="ERPSClassic.php">
            <button class="choice">Play Rock, Paper, Scissors, Lizard, Spock (Classic)</button>
        </a>
    </div>

    <a href="change_username.php">
        <button class="choice">Change Username</button>
    </a>

    <br>
    <a href="logout.php">
        <button class="logout">Logout</button>
    </a>

    <div class="leaderboard-container">
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
    $header = array_shift($rows); // Remove the first row (header)

    // Sort by TruePlayerScore (index 4) descending
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

    <div class="leaderboard-container">
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
    $header = array_shift($rows); // Remove the first row (header)

    // Sort by TruePlayerScore (index 4) descending
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
</body>
</html>