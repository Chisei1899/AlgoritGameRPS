<?php include 'session_check.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock, Paper, Scissors - HOMEPAGE</title>
    <link rel="stylesheet" href="Style.css">
</head>
<body>
    <h1>Welcome to Rock, Paper, Scissors, Lizard, Spock (From the Hit Series The Big Bang Theory)</h1>
    <p>Welcome player <?php echo $_SESSION['username']; ?>!</p>

    <div class="choices">
        <a href="BRPS.php">
            <button class="choice">Play Rock Paper Scissors</button>
        </a>

        <a href="ERPS.php">
            <button class="choice">Play Rock, Paper, Scissors, Lizard, Spock</button>
        </a>
    </div>

    <a href="ChangeUsername.php">
    <button class="choice">Change Username</button>
    </a>

    <br>
    <a href="logout.php">
        <button class="logout">Logout</button>
    </a>
</body>
</html>