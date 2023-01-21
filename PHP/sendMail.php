<?php

    
    $name = $_POST["name"];
    $companyName = $_POST["companyName"];
    $email = $_POST["email"];
    $Phone = $_POST["Phone"];
    $message = $_POST["message"];
    
    if ($message == "") {
        $message = "No Message!!!";
    }
    
    if ($companyName == "") {
        $companyName = "No Company Name!!!";
    }
    
    // echo json_encode(array($name, $companyName, $email, $Phone, $message));

    $to_email = "dk501177@gmail.com";
    $subject = "This mail send by xtardhananjay.com xtar agency";
    $body = " Name: {$name} Email: {$email} Phone Number: {$Phone} Company Name: {$companyName} Message: {$message} ";
    $headers = "From: bulsur22@gmail.com";

    if (mail($to_email, $subject, $body, $headers)) {
        echo json_encode(array("status" => "Email successfully sent to $to_email..."));
    } else {
        // echo json_encode(array("status" => "Email sending failed..."));
        echo json_encode(array($name, $companyName, $email, $Phone, $message));
    }


?>