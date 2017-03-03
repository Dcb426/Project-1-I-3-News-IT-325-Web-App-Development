<?php include 'database.php'; ?>
 
<?php

// create a variable

$product_name=$_POST['productID'];
$submitted_by = $_SESSION["pass_userName"];
$myRate = $_POST['myRate'];
$myReview = $_POST['myReview'];
//Execute the query
 
 
$result = mysqli_query($connect,"INSERT INTO product_review (product_name,review,rate, submitted_by)
		        VALUES ('$product_name','$myReview','$myRate','$submitted_by')");
				
	if(mysqli_affected_rows($connect) > 0){
	echo "<p>Atricle submitted</p>";
	header("Location:QM.php");
	
	//echo "<a href="index.html"> Go Back </a>";
	} else {
		echo "Article failed to submit<br />";
		echo mysqli_error ($connect);
		header("Location:Review.php");
	}