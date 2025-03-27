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
    <h1>HOMEPAGE</h1>
    <p>Welcome, <?php echo $_SESSION['username']; ?>!</p>

    <div class="choices">
        <a href="BRPS.php">
            <button class="choice">Basic Rock Paper Scissors</button>
        </a>

        <a href="ERPS.php">
            <button class="choice">Enhanced Rock Paper Scissors</button>
        </a>
    </div>

    <br>
    <a href="logout.php">
        <button class="logout">Logout</button>
    </a>
</body>
</html>