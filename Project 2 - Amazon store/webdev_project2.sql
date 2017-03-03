-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2017 at 01:03 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webdev_project2`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_name` varchar(300) NOT NULL,
  `product_model` varchar(150) NOT NULL,
  `product_description` text NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_Image` blob NOT NULL,
  `product_inStock` int(5) NOT NULL,
  `product_reviews` text,
  `product_rate` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `purchased_history`
--

CREATE TABLE `purchased_history` (
  `purchased_id` int(24) NOT NULL,
  `customer_Id` varchar(24) NOT NULL,
  `product_id` int(24) NOT NULL,
  `purchased_quality` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `User_Email` varchar(30) NOT NULL,
  `User_Name` varchar(24) NOT NULL,
  `User_Password` varchar(16) NOT NULL,
  `User_PurchaseHistory` int(24) DEFAULT NULL,
  `User_ShoppingCart` int(24) DEFAULT NULL,
  `User_WishList` int(24) DEFAULT NULL,
  `User_CreditCard` int(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`User_Email`, `User_Name`, `User_Password`, `User_PurchaseHistory`, `User_ShoppingCart`, `User_WishList`, `User_CreditCard`) VALUES
('1002101429@qq.com', 'StevenQin', 'Baby2135', NULL, NULL, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
