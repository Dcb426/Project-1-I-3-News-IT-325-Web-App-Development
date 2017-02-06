<?php
$connect=mysqli_connect('localhost','root','','web_dev_pro1');//('localhost', 'root', '','db name')

if(mysqli_connect_errno($connect))
{
		echo 'Failed to connect';
}

?>