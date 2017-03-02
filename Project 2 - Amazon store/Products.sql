-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 02, 2017 at 07:03 AM
-- Server version: 5.5.54
-- PHP Version: 5.6.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `webdev_project2`
--

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE IF NOT EXISTS `Products` (
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
  `image` varchar(17) DEFAULT NULL,
  PRIMARY KEY (`sku`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`sku`, `model`, `vendor`, `operator`, `size`, `weight`, `flight_time`, `range`, `msrp`, `Quanity`, `speed`, `gimbal`, `video`, `camera`, `feature`, `image`) VALUES
('D003', 'Phantom 3', 'DJI', 'single', 350, 1216, 25, 5, 999, 10, 57, '3-axis', '', '12 mp', '', 'Phantom_3.jpg'),
('D004', 'Phantom 4', 'DJI', 'single', 350, 1380, 28, 5, 1199, 10, 72, '3-axis', '', '12.4 mp', '', 'Phantom_4.jpg'),
('D005', 'Phantom 4 Pro', 'DJI', 'single', 350, 1288, 30, 7, 1499, 10, 72, '3-axis', '4k 60fps', '20 mp', 'obstacle sensing,', 'Phantom_4_Pro.jpg'),
('D006', 'Inspire 1', 'DJI', 'dual', 581, 2845, 18, 7, 1999, 10, 79, '3-axis', '4k 60fps', '12.4 mp', 'sensing, RTH', 'Inspire_1.jpg'),
('D007', 'Inspire 1 Pro', 'DJI', 'dual', 581, 2968, 18, 7, 3399, 10, 79, '3-axis', '4k 60fps', '16 mp', '', 'Inspire_1_Pro.jpg'),
('D008', 'Inspire 2', 'DJI', 'dual', 605, 3290, 27, 7, 2999, 10, 94, '3-axis', '4k 60fps', '16 mp', '', 'Inspire_2.jpg'),
('D009', 'Mavic', 'DJI', 'single', 335, 734, 27, 7, 999, 10, 65, '3-axis', '4k', '12 mp', '', 'Mavic.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
