<?php include 'session_check.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Change Username</title>
    <link rel="stylesheet" href="LoginRegisterChangeUsernameStyle.css">
</head>
<body class="change-username-page">
    <div class="form-container">
        <h2>C H A N G E<br>U S E R N A M E</h2>
        <form action="update_username.php" method="POST">
            <label for="newUsername">New Username:</label>
            <input type="text" name="newUsername" id="newUsername" required>
            <button type="submit">Change Username</button>
        </form>
        <br>
        <a href="home_page.php"><button class="back-button">Back to Home</button></a>
    </div>
</body>
</html>