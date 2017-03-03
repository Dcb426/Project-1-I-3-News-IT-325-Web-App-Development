<?php   
  include 'database.php';
  session_start();
  if(isset($_SESSION['use']))   // Checking whether the session is already there or not if                            // true then header redirect it to the home page directly 
 {
    header("Location:Initial.html"); 
 }
?>
<!Doctype>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Specific Copter</title>
  <link rel="stylesheet" href="css/QM.css">
  <style>
    footer, body, html {
        height:200%;
    }

    .parallax {
        /* The image used */
        background-image: url('img/bground.jpg');

        /* Full height */     
        height: 100%;

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
    <nav>
      <div class="LeftTopBox">
        <h1 id="header_Title">QUADCOPTER EXPRESS</h1>
        <h3 id="sub_Title1">"For The People, By The People"</h3>
      </div>
      <div class="RightTopBox">
        <h1>Menu<h1>
         <div class="scrollmenu">
           <a href="#home">Home</a>
           <div class="dropdown">
              <button onclick="myFunction()" class="dropbtn">Products</button>
                <div id="myDropdown" class="dropdown-content">
                  <a href="#home"></a>
                </div>
            </div>
           <a href="#contact">Cart</a>
           <a href="loginRegister.php">Login</a>
        </div>
      </div>
    </nav>
  </header>
              <?php
                $myTitle=$_POST['param1'];
                 $result1 = mysqli_query($db,"SELECT * FROM Products where sku = '$myTitle'");

                 if (mysqli_num_rows($result1) > 0 ) 
                 {
                  // output data of each row
                  while($row = $result1->fetch_assoc()) {
                  
                      echo "<div class='productclear'>";
                      echo "<div class='opBox'>";
                      echo "<figure>";
                      echo "<img id='dk' src='img/".$row["image"]."' />";
                      echo "</figure>";
                      echo "</div>";
                      echo "<div class='TopBox'>";
                      echo "<header>";
                      echo "<hgroup>";
                      echo "<h1><strong>" . $row["sku"]. ": ".$row["model"]."</strong></h1>";
                      echo "<h4>".$row["operator"]."</h4>";
                      echo "<h4>The Most Amazing QuadCopter Yet</h4>";
                      echo "</hgroup>";
                      echo "</header>";
                      echo "<section>";
                      echo "<summary>Product Features</summary>";
                      echo "<ul id='goo'>";
                      echo "<li>Copter Size/Weight: ".$row["size"].  "| ".$row["weight"]."</li>";
                      echo "<li>Specs: ".$row["flight_time"]." | ".$row["range"]."</li>";
                      echo "<li>Quanity: ".$row["Quanity"]."</li>";
                      echo "<li>Gimbal: ".$row["gimbal"]."</li>";
                      echo "<li>Camera: ".$row["camera"]."</li>";
                      echo "<li>Optional Feature: ".$row["feature"]."</li>";
                      echo "</ul>";
                      echo "</section>";
                      echo "</div>";
                      echo "</div>";
                  }
                  } else {
                      echo "No data";
                  }

              ?>
  <script src="js/jquery-3.1.1.js"></script>
  <script src="js/jquery.ndd.js"></script>
  <script src="js/dnd.js"></script>
</body>
</html>