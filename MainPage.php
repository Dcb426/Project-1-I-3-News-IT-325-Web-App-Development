<?php   session_start();  ?>
<?php include 'database.php'; ?>
<!doctype html>

<html lang="en">

<head>
  <meta charset="utf-8">

  <title>Wildcat News - Darius Bell : Steven Qin</title>
  <link rel="stylesheet" href="css/initial_page.css">
  <style>
	footer, body, html {
		    height:200%;
		}

		.parallax {
		    /* The image used */
		    background-image: url('img/scroll_1.jpg');

		    /* Full height */
		    height: 100%;
		    width: fill;

		    /* Create the parallax scrolling effect */
			background-attachment: fixed;
		    background-position: center;
		    background-repeat: repeat;
		    background-size: contain;
		}
</style>
</head>
<div class="parallax">
<body>
	<header>
		<h1 id="header_Title">LONDON INCORPORATED</h1>
		<h3 id="sub_Title1">"For The People, By The People"</h3>
		<form method="GET" action="Initial.html">

		<input type="submit" value="Logout">
		</form>
		<form method="GET" action="articleRegister.php">

		<input type="submit" value="Submit Article">
		</form>
	</header>
	<div id="Current_Stories">
		<h1 id="top_box_heading">Current Stories:</h1>
		<?php

       $result1 = mysqli_query($connect,"SELECT * FROM article WHERE approved_By = 'yes'");

       if (mysqli_num_rows($result1) > 0 ) 
       {
		    // output data of each row
		    while($row = $result1->fetch_assoc()) {
		      
		        echo "<div id='trial'>";
		        echo "<p id='head'> Author " . $row["submitted_By"]. " - Upload Date: " . $row["myDate"]. " - Title: " . $row["myTitle"]. "</p>";
		        echo "<p id='bod'> Story: " . $row["myStory"]. "</p>";
		        echo "</div>";
		    }
		} else {
		    echo "No new article needs approval";
		}
		?>
	</div>
  <script src="js/jquery-3.1.1.js"></script>
</body>
</div>
</html>
