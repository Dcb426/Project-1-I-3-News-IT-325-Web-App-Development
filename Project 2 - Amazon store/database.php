<?php
$connect=mysqli_connect('localhost','root','','webdev_project2');//('localhost', 'root', '','db name')

if(mysqli_connect_errno($connect))
{
		echo 'Failed to connect';
}
?>