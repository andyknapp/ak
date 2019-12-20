<?php
    $to = 'aknapp1@gmail.com';
    $subject = 'Contact form submission';
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $userMessage = $_POST['message'];
    $body = "Information Submitted:";
	$body .= "\r\n Name: " . $userName;
	$body .= "\r\n Email: " . $userEmail;
	$body .= "\r\n Message: " . $userMessage;
    $headers = 'From: My site <site@andyknapp.com>' . "\r\n" . 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $userEmail, $body, $headers);

?>
