
<?php   
  include 'database.php';
  session_start();
  if(isset($_SESSION['use']))   // Checking whether the session is already there or not if                            // true then header redirect it to the home page directly 
 {
    header("Location:Initial.html"); 
 }
 else
  echo "<script>alert('Welcome Back,".$_SESSION["pass_userName"]."');</script>";

?>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>QuadCopter MainPage</title>
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
    <div id="left">
        <h3>Lastest products</h3>
        <ul id="products">
              <?php

                 $result1 = mysqli_query($db,"SELECT * FROM Products");

                 if (mysqli_num_rows($result1) > 0 ) 
                 {
                  // output data of each row
                  while($row = $result1->fetch_assoc()) {
                  
                      echo "<li><form action='QMP.php' method='post'>";
                      echo "<input type='hidden' name='param1' value='".$row["sku"]."'/>";
                      echo "<a href='#' onclick='this.parentNode.submit()'class='item' id='".$row["sku"]."' draggable='true'>";
                      echo "<img src='img/".$row["image"]."' />";
                      echo "<div>";
                      echo "<p><strong>" . $row["sku"]. ": ".$row["model"]."</strong></p>";
                      echo "<p><strong>Price</strong>: <span>$" . $row["msrp"]. "</span></p>";
                      echo "<p><strong>Quantity</strong>: <span>" . $row["Quanity"]. "</span></p>";
                      echo "</div>";
                      echo "</a></form></li>";
                  }
              } else {
                  echo "No data";
              }

              ?>
        </ul>
    </div>
    <div id="right">
      <div id="cart">
        <form method='post' action='QMProcess.php'>
        <h1>Shopping Cart</h1>
        <ul></ul>
        <p id="total"><strong>Total:</strong> $<span>0.00</span></p>
        <h2>Drop here to add to cart</h2>
        <input type="submit" value="Checkout">
        </form>
      </div>
    </div>
  <script src="js/jquery-3.1.1.js"></script>
  <script src="js/jquery.ndd.js"></script>
  <script src="js/dnd.js"></script>
</body>
</div>
</html>