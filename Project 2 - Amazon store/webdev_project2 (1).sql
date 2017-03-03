-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2017 at 06:45 PM
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
-- Table structure for table `employeeinfo`
--

CREATE TABLE `employeeinfo` (
  `emp_id` varchar(50) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `reg_date` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` enum('1','0') COLLATE utf8_unicode_ci NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `name`, `email`, `phone`, `created`, `modified`, `status`) VALUES
(1, 'Shane Thomas', 'a@acu', '1214', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1'),
(2, 'Ab', 'b@acu', '31312', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0'),
(3, 'Nick Jason', 'n@acu', '318901', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `sku` varchar(4) NOT NULL DEFAULT '',
  `model` varchar(13) DEFAULT NULL,
  `vendor` varchar(3) DEFAULT NULL,
  `operator` varchar(6) DEFAULT NULL,
  `size` int(3) DEFAULT NULL,
  `weight` int(4) DEFAULT NULL,
  `flight_time` int(2) DEFAULT NULL,
  `range` int(1) DEFAULT NULL,
  `msrp` int(4) DEFAULT NULL,
  `Quanity` int(11) NOT NULL,
  `speed` int(2) DEFAULT NULL,
  `gimbal` varchar(6) DEFAULT NULL,
  `video` varchar(8) DEFAULT NULL,
  `camera` varchar(7) DEFAULT NULL,
  `feature` varchar(17) DEFAULT NULL,
  `image` varchar(17) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`sku`, `model`, `vendor`, `operator`, `size`, `weight`, `flight_time`, `range`, `msrp`, `Quanity`, `speed`, `gimbal`, `video`, `camera`, `feature`, `image`) VALUES
('D003', 'Phantom 3', 'DJI', 'single', 350, 1216, 25, 5, 999, 10, 57, '3-axis', '', '12 mp', '', 'Phantom_3.jpg'),
('D004', 'Phantom 4', 'DJI', 'single', 350, 1380, 28, 5, 1199, 10, 72, '3-axis', '', '12.4 mp', '', 'Phantom_4.jpg'),
('D005', 'Phantom 4 Pro', 'DJI', 'single', 350, 1288, 30, 7, 1499, 10, 72, '3-axis', '4k 60fps', '20 mp', 'obstacle sensing,', 'Phantom_4_Pro.jpg'),
('D006', 'Inspire 1', 'DJI', 'dual', 581, 2845, 18, 7, 1999, 10, 79, '3-axis', '4k 60fps', '12.4 mp', 'sensing, RTH', 'Inspire_1.jpg'),
('D007', 'Inspire 1 Pro', 'DJI', 'dual', 581, 2968, 18, 7, 3399, 10, 79, '3-axis', '4k 60fps', '16 mp', '', 'Inspire_1_Pro.jpg'),
('D008', 'Inspire 2', 'DJI', 'dual', 605, 3290, 27, 7, 2999, 10, 94, '3-axis', '4k 60fps', '16 mp', '', 'Inspire_2.jpg'),
('D009', 'Mavic', 'DJI', 'single', 335, 734, 27, 7, 999, 10, 65, '3-axis', '4k', '12 mp', '', 'Mavic.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_review`
--

CREATE TABLE `product_review` (
  `product_name` varchar(300) NOT NULL,
  `review` text NOT NULL,
  `rate` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `purchased_history`
--

CREATE TABLE `purchased_history` (
  `customer_Id` varchar(24) NOT NULL,
  `product_id` varchar(24) NOT NULL,
  `purchased_quality` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchased_history`
--

INSERT INTO `purchased_history` (`customer_Id`, `product_id`, `purchased_quality`) VALUES
('StevenQin', 'D003', 4),
('StevenQin', 'D007', 1),
('StevenQin', 'D005', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_cart`
--

CREATE TABLE `user_cart` (
  `User_Name` varchar(30) NOT NULL,
  `User_ShoppingCart` varchar(24) NOT NULL,
  `User_WishList` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_cart`
--

INSERT INTO `user_cart` (`User_Name`, `User_ShoppingCart`, `User_WishList`) VALUES
('StevenQin', 'D009', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', 'evtargetid', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', ''),
('StevenQin', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `User_Email` varchar(30) NOT NULL,
  `User_Name` varchar(24) NOT NULL,
  `User_Password` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`User_Email`, `User_Name`, `User_Password`) VALUES
('1002101429@qq.com', 'StevenQin', 'Baby2135'),
('123@acu.edu', 'Justin123', 'Asdasd123'),
('982@yahoo.com', 'love123', 'Ab123456'),
('sls12@acu.edu', 'Jo4422', 'Asdasd123'),
('1423@qq.com', 'StevenQin2', 'Baby2135'),
('dw@acu.edu', 'emily', 'Baby2135'),
('', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employeeinfo`
--
ALTER TABLE `employeeinfo`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`sku`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
