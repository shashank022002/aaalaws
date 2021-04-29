<?php
	$host ="localhost";
	$user ="root";
	$password =""; 
	$dbname ="aaalaws";
	$con=mysqli_connect($host,$user,$password,$dbname);

	if($con) {
		$username="";
		$email="";
		$phone="";
		$message="";
		//echo "Connection established";
		if(isset($_POST['submit2'])) {
			$username=$_POST['userName'];
            $email=$_POST['userEmail'];
            $phone=$_POST['userPhone'];
            $message=$_POST['userMessage'];

			if (!empty($username)||!empty($email)||!empty($phone)||!empty($message)) {
				$insertquery = "INSERT INTO detail ( userName, userEmail, userPhone,userMessage ) VALUES ( '$username','$email', '$phone','$message')";
				$newdata = mysqli_query($con, $insertquery);
					
				if($newdata) {
					//echo "Inserted";
					header("location:../../pages");
				}else {
					header("Refresh:0");
					echo'<script>alert("Oops! Looks like an error occured while submitting the form")</script>';
				}
			}
			else{
			}
            
			// $insertquery = "INSERT INTO detail ( userName, userEmail, userPhone,userMessage ) VALUES ( '$username','$email', '$phone','$message')";
			// $newdata = mysqli_query($con, $insertquery);
				
			// if($newdata) {
			// 	//echo "Inserted";
			// }else {
			// 	header("Refresh:0");
			// 	echo "Not Inserted";
			// }
		}
	}
	else {
		die("Connection Failed".mysqli_connect_error());
	}
	$con->close();
?>