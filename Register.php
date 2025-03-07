<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['newUsername'];
    $password = $_POST['newPassword'];

    // Open CSV file
    $file = fopen("users.csv", "a+");

    // Check if user already exists
    while (($data = fgetcsv($file)) !== FALSE) {
        if ($data[0] == $username) {
            fclose($file);
            echo "<script>alert('Username already exists!'); window.location.href='Register.html';</script>";
            exit();
        }
    }

    // Append new user
    fputcsv($file, [$username, $password]);
    fclose($file);

    header("Location: login.html?success=registered");
    exit();
}
?>