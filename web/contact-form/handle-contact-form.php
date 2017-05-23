<?php
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail_content = 'Message: '.$message.'
Name: '.$name.'
Email: '.$email;

echo mail('vincent.derks@gmail.com', 'Contact form vderks.online', $mail_content);