<!DOCTYPE html>
	<html lang="en">
<head>
  <meta charset="UTF-8">
  		<title>Hello ______</title>
	 	<link rel="stylesheet" href="css/CNU.css">
<style>
label{display:inline-block;width:150px;margin-bottom:20px;}
</style>
</head>
<body>
		<form action="articleprocess.php" method="post" id="loginBox" >

		<p> </p>
		<label>mytitle: </label>
		<input type="text" name="myTitle" />
		<br />

		<label>mystory</label>
		<br /> <textarea rows="10" cols="60"name='myStory' id='b_n'></textarea>
		<br />

		<br />
		<label>mydate:</label>
		<input type="text" name="myDate" />
		 - yyyy-mm-dd
		<br />

		<label>submitted_by: </label>
		<input type="text" name="submitted_by" />
		<br />

		<input type="submit" value="SUBMIT">
		</form>
</body>
</html>
