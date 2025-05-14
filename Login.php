<?php
session_start(); // Start session

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Read the CSV file    
    $file = fopen("userdata/users.csv", "r");

    while (($data = fgetcsv($file)) !== FALSE) {
        if ($data[0] == $username && $data[1] == $password) {
            fclose($file);
            
            // Store username in session
            $_SESSION['username'] = $username;
            
            // Redirect to HomePage.php
            header("Location: home_page.php");
            exit();
        }
    }

    fclose($file);
    header("Location: login.html?error=invalid_credentials");
    exit();
}
?>