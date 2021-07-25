<?php 
	/*$subject ="Zapytanie ze strony Piotrmakowski.eu";
	$name = $_POST['name'];
	$customer_mail = $_POST['customer_mail'];
	$message = $_POST['message'] . "\r\n" . $name . ': ' . $customer_mail;
	$mail_from = $_POST['customer_mail'];
	$anti_spam = $_POST['anti_spam'];
	$headers = 'From: codeandlove@gmail.com' . "\r\n" . 'X-Mailer: PHP/' . phpversion();
	$to ='codeandlove@gmail.com';
	if($anti_spam == 4){
		$send_contact = mail($to,$subject,$message,$headers);
		if($send_contact){
			echo "<p>Dziękujemy za wysłanie wiadomości</p>";
		} else {
			echo "<p>Niestety nie udało się wysłać wiadomości</p>";
		}
	}else{
		echo "<p>Błędna odpowiedź w pytaniu antyspamowym</p>";
	}*/
?>
<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            //http_response_code(400);
            echo "Wystąpił problem z danymi. Twoja wiadomość nie została wysłana. Spróbuj wypełnić formularz ponownie.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "hello@piotrmakowski.eu";

        // Set the email subject.
        $subject = "Nowa wiadomośc od $name ze strony piotrmakowski.eu";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>\r\n";
		$email_headers .= "MIME-Version: 1.0\r\n";
		$email_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		
        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            //http_response_code(200);
            echo "Dziękuje za wysłanie wiadomości.";
        } else {
            // Set a 500 (internal server error) response code.
            //http_response_code(500);
            echo "Wystąpił problem podczas wysyłania wiadomości, spróbuj ponownie później.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        //http_response_code(403);
        echo "Wystąpił problem podczas wysyłania wiadomości, spróbuj ponownie później.";
    }

?>