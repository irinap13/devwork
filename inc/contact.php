<?php


$name = Trim(stripslashes($_POST['name']));
$email = Trim(stripslashes($_POST['email'])); 
$message = Trim(stripslashes($_POST['message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
  exit;
}

if(isset($name) && isset($email)){
	$to  = 'predescu_irina@yahoo.co.uk';
	$subject = 'CONTACT [ 13Colours ] ';
	$message = '
	<html>
	<head>
	</head>
	<body>
	    <div style="font-size:16px;"></div>
	    <strong>Name</strong> <span style="color:#a90000;">'.$name.'</span><br/>
	    <strong>E-mail</strong> <span style="color:#a90000;">'.$email.'</span><br/>
	    <strong>Message</strong> <span style="color:#a90000;">'.$message.'</span></br>
	</body>
	</html>
	';
	 
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	 
	// Additional headers
	$headers .= 'To: 13Colours <predescu_irina@yahoo.co.uk>'."\r\n";
	$headers .= 'From: 13Colours Contact Form' . "\r\n";
	$headers .= 'Cc: predescu_irina@yahoo.co.uk' . "\r\n";
	$headers .= 'Bcc: predescu_irina@yahoo.co.uk' . "\r\n";
	 
	// Mail it
	$success = mail($to, $subject, $message, $headers);
}
// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=thanks.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>