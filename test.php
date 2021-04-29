
<?php
	$host ="localhost";
	$user ="root";
	$password =""; 
	// $dbname ="aaalaws";
	$con=mysqli_connect($host,$user,$password,$dbname);

	if($con) {
		//echo "Connection established";
		if(isset($_POST['submit2'])) {
			$username=$_POST['userName'];
      $email=$_POST['userEmail'];
      $phone=$_POST['userPhone'];
      $message=$_POST['userMessage'];

			$insertquery = "INSERT INTO detail ( userName, userEmail, userPhone,userMessage ) VALUES ( '$username','$email', '$phone','$message')";
			$newdata = mysqli_query($con, $insertquery);
				
			if($newdata) {
				//echo "Inserted";
			}else {
				header("Refresh:0");
				echo "Not Inserted";
			}
		}
	}
	else {
		die("Connection Failed".mysqli_connect_error());
	}
	$con->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

        <form method="POST" class="contactForm" name="contactForm" id="contactForm" onSubmit="return formValidation();">
          <label for="userName">Name</label>
          <input type="text" id="userName" name="userName" placeholder="Your name.." autocomplete="off" onchange="valid_name(document.contactForm.userName);">

          <label for="userEmail">Email</label>
          <input type="text" id="userEmail" name="userEmail" placeholder="Your email-id.." autocomplete="off"> 
          <span class="error_form" id="email_error_message"></span>

          <label for="userPhone">Phone</label>
          <input type="text" id="userPhone" name="userPhone" placeholder="Your phone number.." autocomplete="off" onblur="valid_phone(document.contactForm.userPhone)">
          <span class="error_form" id="phone_error_message"></span>
          
          <label for="message">Message</label>
          <textarea id="userMessage" name="userMessage" placeholder="Write something.." style="height:200px" maxlength="1000" autocomplete="off"></textarea>
          <span class="error_form" id="message_error_message"></span>

          <input type="submit" value="Submit" name="submit2">
        </form>
    
</body>
</html>