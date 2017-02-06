<!DOCTYPE html>
<html>
<head>
<style>
label{display:inline-block;width:150px;margin-bottom:20px;}
</style>


<title>Welcome New User</title>
</head>
<body>

<form action="userProcess.php" method="post" >

<label>Userame</label>
<input type="text" name="userName" />
<br />

<label>Password</label>
<input type="password" name="userPassword" />
<br />

<label>Email</label>
<input type="text" name="emailAddress" />
<br />

<input type="submit" value="Register">
</form>



</body>
</html>
