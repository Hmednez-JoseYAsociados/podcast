<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lagpodcast"; // Reemplaza con el nombre de tu base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST["User"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    $sql = "INSERT INTO usuarios (users, nombre, email, phone) VALUES ('$user', '$name', '$email', '$phone')";

    if ($conn->query($sql) === TRUE) {
        $response = array("success" => true);
    } else {
        $response = array("success" => false);
    }

    echo json_encode($response);
}

$conn->close();
?>

