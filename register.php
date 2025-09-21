<?php
error_reporting(0); // prevent PHP notices from breaking JSON

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');

    $conn = new mysqli("localhost", "root", "", "digital_farm_management");
    if ($conn->connect_error) {
        echo json_encode(["status" => "error", "message" => "DB Connection Failed"]);
        exit();
    }

    $firstName = $_POST['firstName'] ?? '';
    $lastName = $_POST['lastName'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $password = $_POST['password'] ?? '';
    $farmName = $_POST['farmName'] ?? '';
    $farmType = $_POST['farmType'] ?? '';
    $state = $_POST['state'] ?? '';
    $farmSize = $_POST['farmSize'] ?? '';
    $address = $_POST['address'] ?? '';

    if (empty($firstName) || empty($email) || empty($password)) {
        echo json_encode(["status" => "error", "message" => "Required fields missing"]);
        exit();
    }

    $passwordHash = password_hash($password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO farmsafe_users 
            (firstName, lastName, email, phone, password, farmName, farmType, state, farmSize, address, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssssss", $firstName, $lastName, $email, $phone, $passwordHash, $farmName, $farmType, $state, $farmSize, $address);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => $stmt->error]);
    }

    $stmt->close();
    $conn->close();
    exit(); // ✅ stop before HTML
}

// ✅ fallback if accessed via GET in JS accidentally
header('Content-Type: application/json');
echo json_encode(["status" => "error", "message" => "Invalid request"]);
exit();
?>
