<?php
extract($_POST);

$to = "akkiback22@gmail.com";
$subject = "ROBOSUB CLUB VISITOR\n";
$txt = "Name: $name\nContact Number: $contactNumber\nEmail Address: $email\nMessage: $message";
$headers = "From: admin@silverwingtechnologies.com";

mail($to,$subject,$txt,$headers);
header("Location: contact.php");

?>
