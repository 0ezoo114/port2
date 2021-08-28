<?php
    include 'PHPMailer.php';
    include 'SMTP.php';

$mail = new PHPMailer();
$mail->isSMTP();

//Enable SMTP debugging
//SMTP::DEBUG_OFF = off (for production use)
//SMTP::DEBUG_CLIENT = client messages
//SMTP::DEBUG_SERVER = client and server messages
$mail->SMTPDebug = SMTP::DEBUG_SERVER;

//Set the hostname of the mail server
$mail->Host = 'smtp.naver.com';


$mail->Port = 465;


$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;


$mail->SMTPAuth = true;


$mail->Username = '1997rh';

//Password to use for SMTP authentication
$mail->Password = 'RH201601753!';
$mail->Chatset ='UTF-8';

//Set who the message is to be sent from
//Note that with gmail you can only use your account address (same as `Username`)
//or predefined aliases that you have configured within your account.
//Do not use user-submitted addresses in here
$mail->setFrom('1997rh@naver.com', 'eun');

//Set an alternative reply-to address
//This is a good place to put user-submitted addresses
$mail->addReplyTo('1997rh@naver.com', 'eun');

//Set who the message is to be sent to
$mail->addAddress('rhswb114@naver.com', 'ju');

//Set the subject line
$mail->Subject = '메일 테스트 제목';

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML(file_get_contents('contents.html'), __DIR__);

//Replace the plain text body with one created manually
$mail->AltBody = '여기도 메일 내용입니다.';

//Attach an image file
$mail->addAttachment('../asset');


//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
    //Section 2: IMAP
    //Uncomment these to save your message in the 'Sent Mail' folder.
    #if (save_mail($mail)) {
    #    echo "Message saved!";
    #}
}

?>