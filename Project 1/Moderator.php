<?php include 'database.php'; ?>
<!DOCTYPE HTML>

<html lang="en">

<head>
  <meta charset="utf-8">

  <title>Moderator</title>
  <link rel="stylesheet" href="css/initial_page.css">
  		<script src="js/jquery-3.1.1.js"></script>
</head>

<body>
	<div id="Current_Stories">
		<h1 id="top_box_heading">Current Stories:</h1>
	<?php
	
       if(isset($_POST['aprov']))
		{

		$approved = 'yes';

		$sql ="UPDATE article SET  approved_By =  '$approved' WHERE approved_By= ''";
		$retval = mysqli_query($connect,$sql );
		if(! $retval )
		{
		  die('Could not update data: ' . mysql_error());
		}
		echo "Updated data successfully\n";

		}

       $result1 = mysqli_query($connect,"SELECT approved_By, myDate, myStory, myTitle, submitted_By FROM article WHERE approved_By = ''");

       if (mysqli_num_rows($result1) > 0 ) 
       {
		    // output data of each row
		    while($row = $result1->fetch_assoc()) {
		    	$aid = $row['myTitle'];
		        echo "<div id='trial'>";
		        echo "<form method='post' action=''>";
		        echo "<p id='head'> Author " . $row["submitted_By"]. " - Upload Date: " . $row["myDate"]. " - Title: " . $row["myTitle"]. "</p>";
		        echo "<p id='bod'> Story: " . $row["myStory"]. "</p>";
				echo "<input type='submit' value='Approve' name='aprov'>";
				echo "</form>";
		        echo "</div>";
		    }
		    //mysql_query("UPDATE article SET  approved_By =  'yes' WHERE approved_By= ''") or die(mysql_error());
		} else {
		    echo "No new article needs approval";
		}
		echo "<form method='GET' action='MainPage.php'>";

		echo "<p> <input type='submit' value='Return'></p>";
		echo "</form>";
		//$sql = mysqli_query($connect,"UPDATE article SET  approved_By =  $approve_By WHERE approved_By= ''");
		?>
	</div>
</body>