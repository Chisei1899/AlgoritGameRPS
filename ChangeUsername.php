<?php include 'session_check.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Change Username</title>
    <link rel="stylesheet" href="Style.css">
</head>
<body>
    <h2>Change Username</h2>
    <form action="UpdateUsername.php" method="POST">
        <label for="newUsername">New Username:</label>
        <input type="text" name="newUsername" required>
        <button type="submit">Change Username</button>
    </form>
    <br>
    <a href="HomePage.php"><button class="back-button">Back to Home</button></a>
</body>
</html>