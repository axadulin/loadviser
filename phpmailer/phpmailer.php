<?php
require 'PHPMailerAutoload.php';

function sendMail($to, $subject, $message, $file_tmp=null , $file_name=null) 
{
	$mail = new PHPMailer;
	
	$mail->Host = 'mail.loadviser.group';
	$mail->Username = 'info@loadviser.group';       	
	$mail->Password = 'Loadviser$$$123';              
	$fromName = '';								
	$mail->isSMTP();
    $mail->SMTPAuth = true;
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;	
	$mail->setFrom($mail->Username, $fromName);
	$mail->addAddress($to);
	$mail->isHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Subject = $subject;
	$mail->Body    = $message;
	if($file_name){
	    $mail->AddAttachment($file_tmp, $file_name);
	}
	$mail->AltBody = strip_tags($message);
	
	return $mail->send();
}


