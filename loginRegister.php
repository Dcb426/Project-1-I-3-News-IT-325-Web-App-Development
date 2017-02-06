<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <title>Returning User</title>

  <link rel="stylesheet" href="login.css">
</head>

<body>
	<header>
    	<h1 id="CNU_header_Title">Registration Information</h1>
  	</header>
  	<div id="loginBox">
</form>
	<form action="loginProcess.php" method="post" id="myForm">

		<p id="userName">MyLondon_Username: <input title="Username must not be blank and contain only letters, numbers and underscores." type="text" required pattern="\w+" name="myUsername"></p>

		<p id="passwd">MyLondon_Password: <input title="Password must contain at least 6 characters, including UPPER/lowercase and numbers." type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" name="myPassword"></p>

		<p><input type="submit" id="submit" value="Login"></p>
	</form>
	</div>
    <script src="js/jquery-3.1.1.js"></script>
</body>
</html>