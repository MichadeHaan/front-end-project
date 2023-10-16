<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $bericht = $_POST["bericht"];

    echo "Bedankt voor je bericht. We zullen zo snel mogelijk contact met je opnemen.";
}
?>