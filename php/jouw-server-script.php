<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $bericht = $_POST["bericht"];
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = $email;
        $subject = "klantsurvis";
        $message = "E-mail: $email\nBericht: $bericht";
        mail($to, $subject, $message);
        echo "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.";
    } else {
        echo "Ongeldig e-mailadres. Voer een geldig e-mailadres in.";
    }
}

?>
