<?php include 'database.php'; ?>
 
<?php

// create a variable
$myTitle=$_POST['myTitle'];
$myStory=$_POST['myStory'];
$myDate=$_POST['myDate'];
$submitted_by=$_POST['submitted_by'];

 
//Execute the query
 
 
$result = mysqli_query($connect,"INSERT INTO article (myTitle,myStory,myDate,submitted_by,approved_By)
		        VALUES ('$myTitle','$myStory','$myDate','$submitted_by','')");
				
	if(mysqli_affected_rows($connect) > 0){
	echo "<p>Atricle submitted</p>";
	
	//echo "<a href="index.html"> Go Back </a>";
	} else {
		echo "Article failed to submit<br />";
		echo mysqli_error ($connect);
	}