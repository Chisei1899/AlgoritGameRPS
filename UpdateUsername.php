<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: login.html");
    exit();
}

$oldUsername = $_SESSION['username'];
$newUsername = $_POST['newUsername'];

$rows = [];
$updated = false;

// Read CSV and update username
$file = fopen("users.csv", "r");
while (($data = fgetcsv($file)) !== FALSE) {
    if ($data[0] == $oldUsername) {
        $data[0] = $newUsername; // change username
        $updated = true;
    }
    $rows[] = $data;
}
fclose($file);

// Overwrite file if updated
if ($updated) {
    $file = fopen("users.csv", "w");
    foreach ($rows as $row) {
        fputcsv($file, $row);
    }
    fclose($file);
    
    $_SESSION['username'] = $newUsername; // update session
    echo "<script>alert('Username changed successfully!'); window.location.href='HomePage.php';</script>";
} else {
    echo "<script>alert('Error changing username.'); window.location.href='ChangeUsername.php';</script>";
}
?>