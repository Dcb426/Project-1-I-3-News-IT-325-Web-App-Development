<!DOCTYPE html>
<html>
<head>
<style>
label{display:inline-block;width:100px;margin-bottom:10px;}
</style>


<title>Add Employee</title>
</head>
<body>

<form action="process.php" method="post" >
<label>First Name</label>
<input type="text" name="first_name" />
<br />
<label>Last Name</label>
<input type="text" name="last_name" />
<br />
<label>Department</label>
<input type="text" name="department" />
<br />
<label>Email</label>
<input type="text" name="email" />

<br />
<input type="submit" value="Add Employee">
</form>



</body>
</html>