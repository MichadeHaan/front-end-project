<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = '.......';
        $mail->Password = '.......';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $recipientEmail = $_POST['email'];
        $mail->addAddress($recipientEmail);
        $mail->Subject = 'E-mail is succesvol verzonden';
        $messageToRecipient = 'Beste klant, we zullen zo snel mogelijk contact met u opnemen.';
        $mail->isHTML(true);
        $mail->Body = $messageToRecipient;

        $mail->send();

        $specificEmail = '.......';
        $mail->clearAddresses();

        $mail->addAddress($specificEmail);
        $mail->Subject = 'Over de game';
        $messageToSpecificEmail = $_POST["bericht"];
        $mail->isHTML(true);
        $mail->Body = $messageToSpecificEmail;

        $mail->send();

        echo 'E-mails zijn succesvol verzonden.';
    } catch (Exception $e) {
        echo 'Er is een fout opgetreden bij het verzenden van de e-mails: ' . $mail->ErrorInfo;
    }
}
?>