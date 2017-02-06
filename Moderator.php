<?php include 'database.php'; ?>

<?php

       $result1 = mysqli_query($connect,"SELECT * FROM article WHERE approved_By = ''");

       if (mysqli_num_rows($result1) > 0 ) 
       {
		    // output data of each row
		    while($row = $result1->fetch_assoc()) {
		        echo "Title: " . $row["myTitle"]. " - Uploaded Date: " . $row["myDate"]. " - Author " . $row["submitted_By"]. "<br>";
		        echo "Story: " . $row["myStory"]. "<br>";
		    }
		} else {
		    echo "No new article needs approval";
		}