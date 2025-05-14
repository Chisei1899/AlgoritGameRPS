<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"] ?? 'Unknown';
    $player = (int)($_POST["player"] ?? 0);
    $computer = (int)($_POST["computer"] ?? 0);
    $draws = (int)($_POST["draws"] ?? 0);
    $truePlayerScore = $player - $computer;

    $dir = __DIR__ . '/userdata';
    if (!is_dir($dir)) {
        mkdir($dir, 0666, true);
    }

    $file = fopen("$dir/userscoreserps.csv", "a");
    fputcsv($file, [$name, $player, $computer, $draws, $truePlayerScore]);
    fclose($file);
    echo "Success";
} else {
    echo "Invalid Request";
}
?>