<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Read the CSV file    
    $file = fopen("users.csv", "r");

    while (($data = fgetcsv($file)) !== FALSE) {
        if ($data[0] == $username && $data[1] == $password) {
            fclose($file);
            echo "<script>alert('Login successful!'); window.location.href='HomePage.html';</script>";
            exit();
        }
    }

    fclose($file);
    header("Location: login.html?error=invalid_credentials");
    exit();
}
?>