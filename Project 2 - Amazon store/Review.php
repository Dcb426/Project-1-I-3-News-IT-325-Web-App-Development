<!DOCTYPE html>
	<html lang="en">
<head>
  <meta charset="UTF-8">
  		<?php 
	  		session_start(); 
	  		echo "Welcome back ".$_SESSION["pass_userName"]." "; 
	  		
	  		$productId=$_POST['productID'];
	  		$userName = $_SESSION["pass_userName"]
  		?>

	 	<link rel="stylesheet" href="css/CNU.css">
<style>
label{display:inline-block;width:150px;margin-bottom:20px;}
</style>
</head>
<body>
		<form action="reviewProcess.php" method="post" id="loginBox" >

		<p> </p>
		<label>mytitle: <?php echo $productId ?></label>
		<br />

		<label>myReview</label>
		<br /> <textarea rows="10" cols="60" name='myReview' id='b_n'></textarea>
		<br />

		<br />
		<label>Rate from 1 - 5:</label>
		<input type ="text"  name="myRate" />
		 1.0 - 5.0
		<br />

		<label>submitted_by: <?php echo $_SESSION["pass_userName"] ?></label>
		<br />

		<input type="submit" value="SUBMIT">
		</form>
</body>
</html>
