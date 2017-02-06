<?php include 'database.php'; ?>
 
<?php

        $myUsername = $_POST["myUsername"]; 
        $myPassword = $_POST["myPassword"]; 
        $myModerator = "True"; 

        $result1 = mysqli_query($connect,"SELECT userName, userPassword, moderator FROM user_data WHERE userName = '".$myUsername."' AND  userPassword = '".$myPassword."'");

        if(mysqli_num_rows($result1) > 0 )
        { 
        	$result2 = mysqli_query($connect,"SELECT userName, userPassword, moderator FROM user_data WHERE userName = '".$myUsername."' AND  userPassword = '".$myPassword."' AND moderator = '".$myModerator."' ");
        	if (mysqli_num_rows($result2) > 0 )
        	{
        		echo "Welcome back $myUsername, the moderator." ;
        	}
        	else
        	{
        		echo "Welcome back $myUsername";
        	}
            
        }
        else
        {
            echo 'The username or password are incorrect!';
        }