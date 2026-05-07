<?php
/**
 * Serenity Architects - Form Submission Handler
 * Optimized for Hostinger SMTP
 */

// --- CONFIGURATION ---
$target_email = "vishwasrj@gmail.com";
$smtp_host = "smtp.hostinger.com";
$smtp_port = 465; // Use 465 for SSL or 587 for TLS
$smtp_user = "your-email@yourdomain.com"; // Your Hostinger email account
$smtp_pass = "YOUR_SMTP_PASSWORD"; // IMPORTANT: Replace with your actual password

// --- ERROR HANDLING ---
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

// --- DATA COLLECTION ---
$name = filter_var($_POST['name'] ?? '', FILTER_SANITIZE_STRING);
$phone = filter_var($_POST['phone'] ?? '', FILTER_SANITIZE_STRING);
$service = filter_var($_POST['service'] ?? 'General Inquiry', FILTER_SANITIZE_STRING);
$location = filter_var($_POST['location'] ?? 'Not specified', FILTER_SANITIZE_STRING);
$form_type = filter_var($_POST['form_type'] ?? 'Standard Form', FILTER_SANITIZE_STRING);

if (empty($name) || empty($phone)) {
    echo json_encode(["status" => "error", "message" => "Name and Phone are required"]);
    exit;
}

// --- EMAIL CONSTRUCTION ---
$subject = "New Lead: $name ($service) - Serenity Architects";
$message = "
<html>
<head>
    <title>New Submission from Serenity Architects</title>
</head>
<body style='font-family: sans-serif; line-height: 1.6; color: #333;'>
    <div style='max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;'>
        <h2 style='color: #FF6B00;'>New Inquiry Received</h2>
        <p><strong>Form Type:</strong> $form_type</p>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Service Requested:</strong> $service</p>
        <p><strong>Location:</strong> $location</p>
        <hr style='border: 0; border-top: 1px solid #eee;'>
        <p style='font-size: 12px; color: #999;'>Sent via Serenity Architects Website</p>
    </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Serenity Architects <$smtp_user>" . "\r\n";

// --- SENDING ---
// Note: Hostinger usually requires mail() to be used or an SMTP library like PHPMailer.
// This uses standard mail() but recommends PHPMailer for higher reliability on SMTP.
if (mail($target_email, $subject, $message, $headers)) {
    echo json_encode(["status" => "success", "message" => "Thank you! We'll contact you shortly."]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send email. Please try calling us directly."]);
}
?>
