<?php
error_reporting(0); // prevent PHP notices from breaking JSON
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');

    // ✅ Connect to the same database as register.php
    $conn = new mysqli("localhost", "root", "", "digital_farm_management");
    if ($conn->connect_error) {
        echo json_encode(["status" => "error", "message" => "DB Connection Failed"]);
        exit();
    }

    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (empty($email) || empty($password)) {
        echo json_encode(["status" => "error", "message" => "Email and Password required"]);
        exit();
    }

    // ✅ Get user by email
    $sql = "SELECT id, firstName, password FROM farmsafe_users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // ✅ Verify password with bcrypt
        if (password_verify($password, $user['password'])) {
            // ✅ Store user session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['firstName'];

            echo json_encode(["status" => "success", "message" => "Login successful"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid password"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "User not found"]);
    }

    $stmt->close();
    $conn->close();
    exit();
}

// ✅ fallback if accessed via GET
header('Content-Type: application/json');
echo json_encode(["status" => "error", "message" => "Invalid request"]);
exit();
?>
