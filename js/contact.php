<?php

// Contact subject
$subject ="ShanikaGunaratna.com - Contact Message";

// Details
$name=check_input($_POST['name'], "Enter name");
$phone=check_input($_POST['phone'], "Enter phone number");
$message=check_input($_POST['message'], "Enter message");
$email=check_input($_POST['email'], "Enter email");

// Enter your email address
$to ='shanika.gunaratna@gmail.com';

$message = "

Name: ".$name."
E-mail Address: ".$email."
Phone Number: ".$phone."


".$message."

";

@mail($to,$subject,$message);
header('Location: ../index.html');
exit();

function check_input($data, $problem='')
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	if ($problem && strlen($data) == 0)
	{
		show_error($problem);
	}
	return $data;
}
function show_error($myError)
{
	?>
	<html>
		<body>
			<p>Please correct the following error:</p>
			<strong><?php echo $myError; ?></strong>
			<p>Hit the back button and try again</p>
		</body>
	</html>
	<?php
	exit();
}

?>