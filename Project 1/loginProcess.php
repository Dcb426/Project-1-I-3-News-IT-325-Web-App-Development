<?php include 'database.php'; ?>
 
<?php
        session_start();  
        $myUsername = $_POST["myUsername"]; 
        $myPassword = $_POST["myPassword"]; 
        $myModerator = "Xj9-123"; 

        $result1 = mysqli_query($connect,"SELECT userName, userPassword, moderator FROM user_data WHERE userName = '".$myUsername."' AND  userPassword = '".$myPassword."'");

        if(mysqli_num_rows($result1) > 0 )
        { 
        	$result2 = mysqli_query($connect,"SELECT userName, userPassword, moderator FROM user_data WHERE userName = '".$myUsername."' AND  userPassword = '".$myPassword."' AND moderator = '".$myModerator."' ");
        	if (mysqli_num_rows($result2) > 0 )
        	{
        		echo "Welcome back $myUsername, the moderator." ;
                //echo '<script type="text/javascript"> window.open("home.php","_self");</script>';
        	   header("Location:Moderator.php"); 
            }
        	else
        	{
        		echo "Welcome back $myUsername";
                header("Location:MainPage.php");
        	}
            
        }
        else
        {
            echo "<h2>The username or password are incorrect!</h2>";
        }
?>