<?php include 'database.php'; ?>
 
<?php

// create a variable
$emailAddress=$_POST['emailAddress'];
$moderator = "False";
$userName=$_POST['userName'];
$userPassword=$_POST['userPassword'];

 
//Execute the query
 
 
$result = mysqli_query($connect,"INSERT INTO user_data (emailAddress,moderator,userName,userPassword)
		        VALUES ('$emailAddress','$moderator','$userName','$userPassword')");
				
	if(mysqli_affected_rows($connect) > 0){
	echo "<p>User Added</p>";
	
	//echo "<a href="index.html"> Go Back </a>";
	} else {
		echo "User NOT Added<br />";
		echo mysqli_error ($connect);
	}