<?php include 'database.php'; 
  session_start();

        $result1 = mysqli_query($connect,"SELECT * FROM purchased_history WHERE customer_Id = '".$_SESSION["pass_userName"]."'");

      if (mysqli_num_rows($result1) > 0 ) 
                 {
                  // output data of each row
                  while($row = $result1->fetch_assoc()) {
                      echo "<li><form action='Review.php' method='post'>";
                      echo "<input type='hidden' name='productID' value='".$row["product_id"]."'/>";
                      echo "<a href='#' onclick='this.parentNode.submit()'class='item' id='".$row["product_id"]."'>";

                      echo "<div id='purchased history'>";
                        echo "<p id='head'>userName: " .$_SESSION["pass_userName"]." - Product: " . $row["product_id"]. " - purchased_quality: " . $row["purchased_quality"]. "</p>";
                        
                        echo "</div>";
                        echo "</a></form></li>";
                        echo "to review Product Click me!!";

                  }
              } else {
                  echo "<script>alert('You have not selected any items: Press Ok to be redirected');</script>";
                  

                  echo"<meta http-equiv='refresh' content='3;loginRegister.php'/>";

              }
?>

