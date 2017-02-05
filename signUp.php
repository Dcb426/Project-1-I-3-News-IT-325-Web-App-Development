<?php include 'connect.php';>

<?php

// create a variable
$userName=$_POST['userName'];
$passWord=$_POST['passWord'];
$email=$_POST['email'];
$moderator=$_POST['moderator'];


//Execute the query

mysqli_query($connect"INSERT INTO user_data (userName,passWord,email,moderator)
				VALUES('$userName','$passWord','$email','$moderator')");

if(mysqli_affected_rows($connect) > 0){
	echo "<p>User Added</p>";
	echo "<a href="index.html">Go Back</a>";
} else {
	echo "User NOT Added<br />";
	echo mysqli_error ($connect);