<?php

// require_once('recaptchalib.php');
// $privatekey = "6LdmigAAAAAAAPTBvc0XBOdlKn5dPyTgazNvmHBx";
// $resp = recaptcha_check_answer ($privatekey,
//                                 $_SERVER["REMOTE_ADDR"],
//                                 $_POST["recaptcha_challenge_field"],
//                                 $_POST["recaptcha_response_field"]);
//
// if (!$resp->is_valid) {
//   die ("The reCAPTCHA wasn't entered correctly. Go back and try it again." .
//        "(reCAPTCHA said: " . $resp->error . ")");
// }

$EmailFrom = "email@andyknapp.com";
$EmailTo = "aknapp1@gmail.com";
$Subject = "Contact form entry";
$Name = Trim(stripslashes($_POST['Name']));
$Email = Trim(stripslashes($_POST['Email']));
$Message = Trim(stripslashes($_POST['Message']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, $EmailFrom);

// redirect to success page
if ($success){
    print "<meta http-equiv=\"refresh\" content=\"0;URL=/#contact\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>