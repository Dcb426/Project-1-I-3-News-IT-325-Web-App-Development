<?php

$user = 'root';
$pass = '';
$db = 'web_dev_pro1';
$db = new mysqli('localhost', $user, $pass, $db) or die("Unbale to connect");
echo "Great work!!!"

?>