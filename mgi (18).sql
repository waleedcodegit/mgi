-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2021 at 03:57 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mgi`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `avatar` varchar(500) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `first_name`, `last_name`, `user_name`, `email`, `avatar`, `password`, `phone`, `created_at`, `updated_at`) VALUES
(2, 'faisal', 'iqbal', 'faisal_iqbal-1874999337', 'admin@admin.com', NULL, '$2y$10$a0X/h6U4JG9BnfxNT1HVqeWUFcTiDA2rrU73vKcvEs2zuKkVcfPPy', '03456782123', '2020-12-02 06:08:03', '2020-12-02 06:08:03'),
(3, 'FARAZ', 'AHMAD', 'FARAZ_AHMAD-612933156', 'faraz@gmail.com', NULL, '$2y$10$TwTxqcg7RMBMNEsQZVaa9OMpxrK7kyvjnxscUEAfUEIT8uPtO3x.m', '03454637672', '2021-09-23 01:27:57', '2021-09-23 02:23:21');

-- --------------------------------------------------------

--
-- Table structure for table `admin_auth_metas`
--

CREATE TABLE `admin_auth_metas` (
  `id` int(11) NOT NULL,
  `admin_id` varchar(255) DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL,
  `token_valid_till` varchar(500) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_auth_metas`
--

INSERT INTO `admin_auth_metas` (`id`, `admin_id`, `token`, `token_valid_till`, `ip`, `created_at`, `updated_at`) VALUES
(7, '2', '$2y$10$b3UD9AnPgSPTeRe9mJfbd.dl//yVjJ5S.0aYceCoJXk1SKJnk3.lK', '12:25', '127.0.0.1', '2021-06-29 07:10:40', '2021-06-29 07:10:40'),
(8, '3', '$2y$10$6QXC8b4RVolniEgE/ZOpKerKXPRjIfHkY8m0fEJaXtQ13G5d7/.xG', '07:12', '127.0.0.1', '2021-09-23 01:57:29', '2021-09-23 01:57:29');

-- --------------------------------------------------------

--
-- Table structure for table `ads_banners`
--

CREATE TABLE `ads_banners` (
  `id` int(11) NOT NULL,
  `header_image` varchar(255) DEFAULT NULL,
  `footer_image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ads_banners`
--

INSERT INTO `ads_banners` (`id`, `header_image`, `footer_image`, `created_at`, `updated_at`) VALUES
(1, '1632475572.jpeg', '1632397433.jpeg', '2021-08-04 10:20:06', '2021-09-24 04:26:12');

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `id` int(10) UNSIGNED NOT NULL,
  `tournament_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`id`, `tournament_id`, `name`, `description`, `delete_status`, `created_at`, `updated_at`) VALUES
(3, 1, 'hello', 'res.data.bracketsres.data.bracketsres.data.brackets', 0, '2021-09-14 07:57:48', '2021-09-20 06:48:36'),
(7, 2, 'cxcxzczxcxz', 'cxzcxzxczxcz', 0, '2021-09-16 00:36:05', '2021-09-20 06:47:33'),
(8, 1, 'cxcxxc', 'cxcxcxcx', 0, '2021-09-16 00:36:41', '2021-09-20 06:47:34'),
(9, 3, 'hello world', 'worldhello worldhello worldhello world', 0, '2021-09-16 00:39:53', '2021-09-16 04:05:27'),
(10, 3, 'dsds', 'dsds', 0, '2021-09-16 00:40:11', '2021-09-16 00:40:11'),
(11, 2, 'dsdsds', 'dsdsds', 0, '2021-09-16 00:40:26', '2021-09-16 00:40:26'),
(12, 10, 'dsfsdfdsfs', 'fdsfdsfsfsdfsddsfsdf', 0, '2021-09-16 01:38:40', '2021-09-16 01:38:40'),
(13, 1, 'fdsffs', 'fdsfsfsdfsd', 0, '2021-09-16 01:55:54', '2021-09-16 01:55:54'),
(14, 1, 'faraz', 'Definition of Announcement Announcement is one of the short funcDefinition of Announcement Announcement is one of the short functional text. In English verb of announce had a meaning “make a formal public declaration about a fact, occurrence, or intention.” So Announcement is an official notification about something, Whether written or spoken which presented to the publictional text. In English verb of announce had a meaning “make a formal public declaration about', 0, '2021-09-22 00:24:22', '2021-09-23 06:45:32'),
(15, 1, 'dggdfdf322332', 'gdfgdgfdf3232', 1, '2021-09-23 02:35:36', '2021-09-23 02:35:49');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `image` varchar(500) NOT NULL,
  `delete_status` int(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `image`, `delete_status`, `created_at`, `updated_at`) VALUES
(2, '1624017619.jpeg', 0, '2021-06-18 06:52:05', '2021-06-18 07:00:20'),
(3, '1624022952.jpg', 1, '2021-06-18 08:29:13', '2021-09-23 01:56:29'),
(5, '1632141216.png', 1, '2021-09-20 07:33:37', '2021-09-20 08:10:32'),
(6, '1632143414.jpeg', 0, '2021-09-20 08:10:15', '2021-09-20 08:10:15');

-- --------------------------------------------------------

--
-- Table structure for table `brackets`
--

CREATE TABLE `brackets` (
  `id` int(10) UNSIGNED NOT NULL,
  `tournament_id` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brackets`
--

INSERT INTO `brackets` (`id`, `tournament_id`, `image`, `delete_status`, `created_at`, `updated_at`) VALUES
(8, 3, '1632382522.jpeg', 1, '2021-09-20 01:50:01', '2021-09-23 02:35:26'),
(9, 1, '1632223583.webp', 0, '2021-09-20 01:51:24', '2021-09-21 06:26:23');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `cart_cookie_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double(8,2) NOT NULL,
  `varient_id` int(11) NOT NULL,
  `original_price` double(8,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `product_id`, `cart_cookie_id`, `quantity`, `price`, `varient_id`, `original_price`, `created_at`, `updated_at`) VALUES
(5, 4, '53afc460-0a67-11ec-9d26-69eab335507b', 9, 20.00, 2, 0.00, '2021-09-01 08:47:41', '2021-09-06 07:47:16'),
(6, 4, '53afc460-0a67-11ec-9d26-69eab335507b', 5, 10.00, 1, 0.00, '2021-09-01 08:48:18', '2021-09-06 07:47:16'),
(8, 4, '53afc460-0a67-11ec-9d26-69eab335507b', 1, 10.00, 1, 0.00, '2021-09-13 05:39:45', '2021-09-13 05:39:45'),
(9, 4, '53afc460-0a67-11ec-9d26-69eab335507b', 1, 10.00, 1, 0.00, '2021-09-13 08:04:09', '2021-09-13 08:04:09'),
(10, 4, 'e64a94d0-1b6f-11ec-b318-f774a034ec00', 1, 10.00, 1, 0.00, '2021-09-22 01:39:57', '2021-09-22 01:39:57');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `auth_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `enrollments`
--

CREATE TABLE `enrollments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tournament_id` int(11) DEFAULT NULL,
  `field_name` varchar(255) DEFAULT NULL,
  `field_value` varchar(255) DEFAULT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enrollments`
--

INSERT INTO `enrollments` (`id`, `user_id`, `tournament_id`, `field_name`, `field_value`, `delete_status`, `created_at`, `updated_at`) VALUES
(1, 1, 3, NULL, NULL, 0, '2021-08-20 08:15:59', '2021-09-24 01:21:35'),
(2, 7, 1, NULL, NULL, 0, '2021-09-24 02:35:41', '2021-09-24 02:35:41'),
(3, 1, 1, NULL, NULL, 0, '2021-09-24 04:38:51', '2021-09-24 04:38:51'),
(5, 6, 1, NULL, NULL, 0, '2021-09-24 05:00:06', '2021-09-24 05:00:06'),
(6, 1, 7, NULL, NULL, 0, '2021-09-28 09:00:39', '2021-09-28 09:00:39'),
(7, 5, 7, NULL, NULL, 0, '2021-09-28 10:17:25', '2021-09-28 10:17:25');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `title`, `description`, `image`, `delete_status`, `created_at`, `updated_at`) VALUES
(1, 'game 1', '<p>game 1 description</p>', '1626169065.jpeg', 0, '2021-07-13 04:37:45', '2021-09-22 06:13:16'),
(2, 'dadsadsadsa', '<p>dsadsadsasad</p>', '1632134523.png', 1, '2021-09-20 05:41:23', '2021-09-22 08:30:05'),
(3, 'Pubg', '<p>i am pubg</p>', '1632233016.webp', 0, '2021-09-21 09:03:37', '2021-09-21 09:03:37'),
(4, 'IGI', '<p>I AM IGI</p>', '1632233086.jpeg', 1, '2021-09-21 09:04:17', '2021-09-21 09:11:53'),
(5, 'sddsds', '<p>dsdsdsdsdsdsdssd23232</p>', '1632382322.jpeg', 1, '2021-09-23 02:32:05', '2021-09-23 02:32:23');

-- --------------------------------------------------------

--
-- Table structure for table `list_user_teams`
--

CREATE TABLE `list_user_teams` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `team_id` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `leave_user_team` int(1) NOT NULL DEFAULT 0,
  `kick_out` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `list_user_teams`
--

INSERT INTO `list_user_teams` (`id`, `user_id`, `team_id`, `status`, `leave_user_team`, `kick_out`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 0, 0, '2021-08-25 02:30:37', '2021-09-27 09:33:34'),
(4, 3, 1, 1, 0, 0, '2021-08-26 04:56:38', '2021-09-28 01:09:46'),
(29, 2, 4, 1, 0, 0, '2021-09-28 05:42:12', '2021-09-28 05:42:12'),
(34, 6, 4, 1, 0, 0, '2021-09-28 06:13:46', '2021-09-28 06:13:46'),
(37, 4, 1, 1, 0, 0, '2021-09-28 06:22:04', '2021-09-28 06:22:04'),
(39, 5, 1, 1, 0, 0, '2021-09-28 06:54:46', '2021-09-28 06:54:46');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `feature` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `slug`, `type`, `body`, `status`, `image`, `feature`, `delete_status`, `created_at`, `updated_at`) VALUES
(6, 'faisal test', 'faisal-test', 'News/Article', '<p>jsdjkasj dasjdg jhsag djhagsjdhgasjdh gjashgdhj sagd</p>', 'Public', '1623829357.jpg', '1', 0, '2021-06-16 02:42:38', '2021-09-21 08:34:57'),
(7, 'faisal test2', 'faisal-test2', 'News/Article', '<p>aksdhjash dkjsah dkjhasjkdhkjas hsdkja hdkj ahd</p>', 'Public', '1623829491.jpg', '1', 0, '2021-06-16 02:44:52', '2021-09-21 08:45:33'),
(8, 'ewfewfewfewewewewfewfew', 'ewfewfewfewewewewfewfew', 'News/Article', '<p>fewfewfewfewfefewfewfefefewfwefwe</p>', 'Public', '1632212738.jpeg', '1', 0, '2021-09-21 03:25:38', '2021-09-21 03:41:09'),
(9, 'ddwwwef', 'ddwwwef', 'News/Article', '<p>ffwefwfwfwfwe</p>', 'Public', '1632398906.jpeg', '1', 0, '2021-09-21 03:27:10', '2021-09-23 07:08:26'),
(10, 'dgdfgdgf', 'dgdfgdgf', 'News/Article', '<p>gfdgfdgfd</p>', 'Public', '1632398860.jpeg', '1', 0, '2021-09-21 03:39:08', '2021-09-23 07:07:40'),
(11, 'asfsdafsfsafsa', 'asfsdafsfsafsa', 'News/Article', '<p>fsafsfssfdafddfdd</p>', 'Public', '1632398839.jpeg', '1', 0, '2021-09-22 01:33:52', '2021-09-23 07:07:19');

-- --------------------------------------------------------

--
-- Table structure for table `privacies__and_policies`
--

CREATE TABLE `privacies__and_policies` (
  `id` int(10) UNSIGNED NOT NULL,
  `privacies__and_policies` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `privacies__and_policies`
--

INSERT INTO `privacies__and_policies` (`id`, `privacies__and_policies`, `delete_status`, `created_at`, `updated_at`) VALUES
(1, '<p><span style=\"color: rgb(33, 37, 41); background-color: rgba(0, 0, 0, 0.02);\">Definition of Announcement Announcement is one of the short funcDefinition of Announcement Announcement is one of the short functional text. In English verb of announce had a meaning “make a formal public declaration about a fact, occurrence, or intention.” So Announcement is an official notification about something, Whether written or spoken which presented to the publictional text. In English verb of announce had a meaning “make a formal public declaration about ghghghg</span></p>', 0, '2021-08-11 08:04:23', '2021-09-28 06:25:51');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `varient_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enabled` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `out_of_stock` tinyint(4) NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `code`, `short_description`, `varient_type`, `quantity_type`, `enabled`, `out_of_stock`, `slug`, `delete_status`, `created_at`, `updated_at`) VALUES
(4, 'White Shirt', 'CS 1.6', 'Counter and terrorist with different number of members in a team', 'size', 'Piece', '1', 0, 'CS-1.63', 0, '2021-04-28 04:09:48', '2021-09-20 03:31:19');

-- --------------------------------------------------------

--
-- Table structure for table `product_comments`
--

CREATE TABLE `product_comments` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_comments`
--

INSERT INTO `product_comments` (`id`, `product_id`, `user_id`, `comment`, `created_at`, `updated_at`) VALUES
(1, 4, 1, 'this product is too good', '2021-09-07 07:54:24', '2021-09-07 07:54:24'),
(2, 4, 1, 'best', '2021-09-07 07:55:13', '2021-09-07 07:55:13');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `image`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 'product-2.jpg', 4, '2021-04-28 04:09:34', '2021-04-28 04:09:34'),
(2, 'product-2.jpg', 4, '2021-04-28 04:09:48', '2021-04-28 04:09:48'),
(3, 'product-2.jpg', 4, '2021-06-11 02:15:38', '2021-06-11 02:15:38');

-- --------------------------------------------------------

--
-- Table structure for table `product_variations`
--

CREATE TABLE `product_variations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_variations`
--

INSERT INTO `product_variations` (`id`, `name`, `price`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 'M', 10.00, 4, '2021-04-28 04:09:48', '2021-04-28 04:09:48'),
(2, 'L', 20.00, 4, '2021-04-28 04:09:48', '2021-04-28 04:09:48'),
(3, 'XL', 200.00, 4, '2021-06-11 02:15:38', '2021-06-11 02:15:38'),
(4, 'small', 190.00, 6, '2021-06-11 08:46:20', '2021-06-11 08:46:20');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(10) UNSIGNED NOT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `days` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `duration`, `days`, `price`, `description`, `delete_status`, `created_at`, `updated_at`) VALUES
(1, '1 month', '30', '40', 'Subscribe me', 0, '2021-08-11 05:36:06', '2021-09-22 08:42:44'),
(3, '3 months', '90', '100', 'subscribe', 0, '2021-08-11 06:51:31', '2021-08-11 06:51:31'),
(5, '4 months', '120', '444', 'subscribe me', 0, '2021-08-13 07:41:59', '2021-09-23 02:04:07');

-- --------------------------------------------------------

--
-- Table structure for table `support_tickets`
--

CREATE TABLE `support_tickets` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT 'Open',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `support_tickets`
--

INSERT INTO `support_tickets` (`id`, `user_id`, `title`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'PUBG gamers', 'Open', '2021-09-09 07:22:54', '2021-09-23 02:49:32'),
(2, 2, 'PUBG gamers', 'Open', '2021-09-09 07:22:54', '2021-09-09 07:22:54'),
(3, 1, 'Pubg', 'Open', '2021-09-22 04:47:45', '2021-09-23 03:54:38'),
(4, 1, 'wqqwqwq', 'Open', '2021-09-23 02:42:47', '2021-09-23 02:55:46'),
(5, 1, 'wewewewrecdcxc', 'Close', '2021-09-23 03:04:35', '2021-09-23 04:11:05');

-- --------------------------------------------------------

--
-- Table structure for table `support_ticket_details`
--

CREATE TABLE `support_ticket_details` (
  `id` int(11) NOT NULL,
  `support_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `support_ticket_details`
--

INSERT INTO `support_ticket_details` (`id`, `support_id`, `user_id`, `admin_id`, `description`, `image`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, 'my game not working', '1631190174.jpeg', '2021-09-09 07:22:54', '2021-09-09 07:22:54'),
(2, 1, 1, NULL, 'and also not login', NULL, '2021-09-09 07:43:28', '2021-09-09 07:43:28'),
(3, 1, 1, NULL, 'if you  can not do some thing', '1631191486.jpeg', '2021-09-09 07:44:47', '2021-09-09 07:44:47'),
(4, 1, 1, NULL, 'and also', '1631191526.jpeg', '2021-09-09 07:45:26', '2021-09-09 07:45:26'),
(5, 1, NULL, 2, 'ok let me check', NULL, '2021-09-09 10:45:31', '2021-09-09 10:45:31'),
(6, 1, NULL, 2, 'hello', NULL, '2021-09-09 10:57:35', '2021-09-09 10:57:35'),
(7, 1, NULL, 2, 'dwdwdwwd', NULL, '2021-09-20 05:52:29', '2021-09-20 05:52:29'),
(8, 1, NULL, 2, 'efwfeweefw', NULL, '2021-09-20 05:52:43', '2021-09-20 05:52:43'),
(9, 1, NULL, 2, 'ewwefefefefefeef', NULL, '2021-09-20 05:53:16', '2021-09-20 05:53:16'),
(10, 3, 1, NULL, 'fyhjgbhhjkjh', '1632304065.jpeg', '2021-09-22 04:47:48', '2021-09-22 04:47:48'),
(11, 3, 1, NULL, 'ddsadasds', NULL, '2021-09-22 04:48:58', '2021-09-22 04:48:58'),
(12, 3, 1, NULL, 'dsadsadsa', '1632304162.jpeg', '2021-09-22 04:49:23', '2021-09-22 04:49:23'),
(13, 3, 1, NULL, 'Faraz khan', NULL, '2021-09-23 02:37:24', '2021-09-23 02:37:24'),
(14, 3, NULL, 2, 'oka', NULL, '2021-09-23 02:37:42', '2021-09-23 02:37:42'),
(15, 4, 1, NULL, 'wqwqwqwq', NULL, '2021-09-23 02:42:48', '2021-09-23 02:42:48'),
(16, 4, 1, NULL, 'sasaas', NULL, '2021-09-23 02:42:59', '2021-09-23 02:42:59'),
(17, 4, NULL, 2, 'fdsfdddsffsd', NULL, '2021-09-23 02:43:36', '2021-09-23 02:43:36'),
(18, 4, 1, NULL, 'sdaasa', NULL, '2021-09-23 02:43:57', '2021-09-23 02:43:57'),
(19, 5, 1, NULL, 'cxxccxcdxfddvdf', NULL, '2021-09-23 03:04:35', '2021-09-23 03:04:35'),
(20, 2, NULL, 2, 'fdfds', NULL, '2021-09-23 03:06:02', '2021-09-23 03:06:02'),
(21, 5, 1, NULL, 'dwfaffws', '1632388195.jpeg', '2021-09-23 04:10:05', '2021-09-23 04:10:05'),
(22, 1, 1, NULL, 'faraz', '1632389368.jpeg', '2021-09-23 04:29:30', '2021-09-23 04:29:30'),
(23, 1, NULL, 2, 'dsdsdsdddssd', NULL, '2021-09-23 04:29:58', '2021-09-23 04:29:58');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `user_id`, `title`, `type`, `image`, `created_at`, `updated_at`) VALUES
(1, 1, 'PUBG gamers', 'Public', '1629876637.png', '2021-08-25 02:30:37', '2021-08-25 02:30:37'),
(4, 2, 'UFC Kings', 'Public', '1632813395.png', '2021-09-28 02:16:37', '2021-09-28 02:16:37');

-- --------------------------------------------------------

--
-- Table structure for table `team_user_messages`
--

CREATE TABLE `team_user_messages` (
  `id` int(20) UNSIGNED NOT NULL,
  `sender` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `chat_id` int(11) NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `team_user_messages`
--

INSERT INTO `team_user_messages` (`id`, `sender`, `chat_id`, `message`, `time`, `date`, `status`, `created_at`, `updated_at`) VALUES
(103, '6', 10, 'Helo!', '12:03:41pm', '12-08-2020', 1, '2020-08-12 07:03:41', '2020-08-12 07:03:41'),
(104, '6', 10, 'are you there?', '12:05:32pm', '12-08-2020', 1, '2020-08-12 07:05:32', '2020-08-12 07:05:32'),
(105, '5', 10, 'yes', '12:05:39pm', '12-08-2020', 1, '2020-08-12 07:05:39', '2020-08-12 07:05:39'),
(106, '5', 10, '???', '12:05:48pm', '12-08-2020', 1, '2020-08-12 07:05:48', '2020-08-12 07:05:48'),
(107, '6', 10, 'hey', '12:06:00pm', '12-08-2020', 1, '2020-08-12 07:06:00', '2020-08-12 07:06:00'),
(108, '5', 10, '///', '12:06:07pm', '12-08-2020', 1, '2020-08-12 07:06:07', '2020-08-12 07:06:07'),
(109, '6', 10, '???', '12:07:19pm', '12-08-2020', 1, '2020-08-12 07:07:19', '2020-08-12 07:07:19'),
(110, '6', 10, '???', '12:07:25pm', '12-08-2020', 1, '2020-08-12 07:07:25', '2020-08-12 07:07:25'),
(111, '6', 10, '???', '12:07:37pm', '12-08-2020', 1, '2020-08-12 07:07:37', '2020-08-12 07:07:37'),
(112, '6', 10, '///', '12:07:51pm', '12-08-2020', 1, '2020-08-12 07:07:51', '2020-08-12 07:07:51'),
(113, '5', 10, '///', '12:07:56pm', '12-08-2020', 1, '2020-08-12 07:07:56', '2020-08-12 07:07:56'),
(114, '6', 10, '///', '12:08:02pm', '12-08-2020', 1, '2020-08-12 07:08:02', '2020-08-12 07:08:02'),
(115, '6', 10, '///', '12:08:06pm', '12-08-2020', 1, '2020-08-12 07:08:06', '2020-08-12 07:08:06'),
(116, '5', 10, '///', '12:08:14pm', '12-08-2020', 1, '2020-08-12 07:08:14', '2020-08-12 07:08:14'),
(117, '6', 10, '///', '12:08:20pm', '12-08-2020', 1, '2020-08-12 07:08:20', '2020-08-12 07:08:20'),
(118, '6', 10, '///', '12:10:56pm', '12-08-2020', 1, '2020-08-12 07:10:56', '2020-08-12 07:10:56'),
(119, '6', 10, '///', '12:11:06pm', '12-08-2020', 1, '2020-08-12 07:11:06', '2020-08-12 07:11:06'),
(120, 'a', 11, 'Helo!', '12:27:58pm', '12-08-2020', 1, '2020-08-12 07:27:58', '2020-08-12 07:27:58'),
(121, 'a', 11, 'Helo!', '12:34:05pm', '12-08-2020', 1, '2020-08-12 07:34:05', '2020-08-12 07:34:05'),
(122, 'v', 11, 'Helo!', '12:42:21pm', '12-08-2020', 1, '2020-08-12 07:42:21', '2020-08-12 07:42:21'),
(123, 'a', 11, '???', '12:42:51pm', '12-08-2020', 1, '2020-08-12 07:42:51', '2020-08-12 07:42:51'),
(124, 'v', 11, 'hello', '01:02:08pm', '12-08-2020', 1, '2020-08-12 08:02:08', '2020-08-12 08:02:08'),
(125, '6', 11, 'hey', '01:02:30pm', '12-08-2020', 1, '2020-08-12 08:02:30', '2020-08-12 08:02:30'),
(126, '6', 11, 'i am wali', '01:02:40pm', '12-08-2020', 1, '2020-08-12 08:02:40', '2020-08-12 08:02:40'),
(127, '5', 11, 'how are you', '01:03:07pm', '12-08-2020', 1, '2020-08-12 08:03:07', '2020-08-12 08:03:07'),
(128, '5', 11, '??', '01:03:09pm', '12-08-2020', 1, '2020-08-12 08:03:09', '2020-08-12 08:03:09'),
(129, '5', 11, 'are you there?', '01:03:15pm', '12-08-2020', 1, '2020-08-12 08:03:15', '2020-08-12 08:03:15'),
(130, '5', 11, '???', '01:05:25pm', '12-08-2020', 1, '2020-08-12 08:05:25', '2020-08-12 08:05:25'),
(131, '5', 11, '???', '01:06:03pm', '12-08-2020', 1, '2020-08-12 08:06:03', '2020-08-12 08:06:03'),
(132, '5', 11, '///', '01:06:09pm', '12-08-2020', 1, '2020-08-12 08:06:09', '2020-08-12 08:06:09'),
(133, '5', 11, '????', '01:06:24pm', '12-08-2020', 1, '2020-08-12 08:06:24', '2020-08-12 08:06:24'),
(134, '5', 11, '????', '01:06:38pm', '12-08-2020', 1, '2020-08-12 08:06:38', '2020-08-12 08:06:38'),
(135, '5', 11, 'helo', '01:09:40pm', '12-08-2020', 1, '2020-08-12 08:09:40', '2020-08-12 08:09:40'),
(136, '5', 11, 'hey', '01:09:44pm', '12-08-2020', 1, '2020-08-12 08:09:44', '2020-08-12 08:09:44'),
(137, '5', 11, 'hello', '01:09:49pm', '12-08-2020', 1, '2020-08-12 08:09:49', '2020-08-12 08:09:49'),
(138, '5', 11, '>>>', '01:09:53pm', '12-08-2020', 1, '2020-08-12 08:09:53', '2020-08-12 08:09:53'),
(139, '6', 11, 'helo', '01:09:58pm', '12-08-2020', 1, '2020-08-12 08:09:58', '2020-08-12 08:09:58'),
(140, '6', 11, '????', '01:10:05pm', '12-08-2020', 1, '2020-08-12 08:10:05', '2020-08-12 08:10:05'),
(141, '6', 11, 'helo', '01:10:10pm', '12-08-2020', 1, '2020-08-12 08:10:10', '2020-08-12 08:10:10'),
(142, '6', 11, 'helo', '01:11:17pm', '12-08-2020', 1, '2020-08-12 08:11:17', '2020-08-12 08:11:17'),
(143, '6', 11, '???', '01:12:39pm', '12-08-2020', 1, '2020-08-12 08:12:39', '2020-08-12 08:12:39'),
(144, '6', 11, '???', '01:12:52pm', '12-08-2020', 1, '2020-08-12 08:12:52', '2020-08-12 08:12:52'),
(145, '5', 11, '????', '01:12:58pm', '12-08-2020', 1, '2020-08-12 08:12:58', '2020-08-12 08:12:58'),
(146, '5', 11, '????', '01:13:03pm', '12-08-2020', 1, '2020-08-12 08:13:03', '2020-08-12 08:13:03'),
(147, '5', 11, '????', '01:13:07pm', '12-08-2020', 1, '2020-08-12 08:13:07', '2020-08-12 08:13:07'),
(148, '6', 11, '????', '01:13:22pm', '12-08-2020', 1, '2020-08-12 08:13:22', '2020-08-12 08:13:22'),
(149, '5', 11, '????', '01:13:28pm', '12-08-2020', 1, '2020-08-12 08:13:28', '2020-08-12 08:13:28'),
(150, '6', 11, 'new message', '01:14:21pm', '12-08-2020', 1, '2020-08-12 08:14:21', '2020-08-12 08:14:21'),
(151, '6', 11, '???', '01:14:30pm', '12-08-2020', 1, '2020-08-12 08:14:30', '2020-08-12 08:14:30'),
(152, '6', 11, '????', '01:14:38pm', '12-08-2020', 1, '2020-08-12 08:14:38', '2020-08-12 08:14:38'),
(153, '6', 11, '???', '01:15:25pm', '12-08-2020', 1, '2020-08-12 08:15:25', '2020-08-12 08:15:25'),
(154, '6', 11, 'my', '01:17:22pm', '12-08-2020', 1, '2020-08-12 08:17:22', '2020-08-12 08:17:22'),
(155, '5', 11, 'my', '01:17:29pm', '12-08-2020', 1, '2020-08-12 08:17:29', '2020-08-12 08:17:29'),
(156, '6', 11, 'my', '01:17:34pm', '12-08-2020', 1, '2020-08-12 08:17:34', '2020-08-12 08:17:34'),
(157, '6', 11, '????', '01:17:40pm', '12-08-2020', 1, '2020-08-12 08:17:40', '2020-08-12 08:17:40'),
(158, '6', 11, 'helo', '01:17:44pm', '12-08-2020', 1, '2020-08-12 08:17:44', '2020-08-12 08:17:44'),
(159, '6', 11, 'i am here', '01:17:50pm', '12-08-2020', 1, '2020-08-12 08:17:50', '2020-08-12 08:17:50'),
(160, '6', 11, 'helo', '01:18:36pm', '12-08-2020', 1, '2020-08-12 08:18:36', '2020-08-12 08:18:36'),
(161, '5', 11, 'helo', '01:18:43pm', '12-08-2020', 1, '2020-08-12 08:18:43', '2020-08-12 08:18:43'),
(162, '5', 11, '??????', '01:18:49pm', '12-08-2020', 1, '2020-08-12 08:18:49', '2020-08-12 08:18:49'),
(163, '6', 11, '?????', '01:18:53pm', '12-08-2020', 1, '2020-08-12 08:18:53', '2020-08-12 08:18:53'),
(164, '6', 11, 'Helo!', '01:33:25pm', '12-08-2020', 1, '2020-08-12 08:33:25', '2020-08-12 08:33:25'),
(165, '6', 11, 'Helo!', '06:41:31am', '17-08-2020', 1, '2020-08-17 01:41:31', '2020-08-17 01:41:31'),
(166, '6', 11, 'Helo!', '12:16:56pm', '21-08-2020', 1, '2020-08-21 07:16:56', '2020-08-21 07:16:56'),
(167, '6', 11, 'Helo!', '07:49:08am', '24-08-2020', 1, '2020-08-24 02:49:08', '2020-08-24 02:49:08'),
(168, '6', 11, '???', '07:49:25am', '24-08-2020', 1, '2020-08-24 02:49:25', '2020-08-24 02:49:25'),
(169, '6', 11, '???', '07:49:57am', '24-08-2020', 1, '2020-08-24 02:49:57', '2020-08-24 02:49:57'),
(170, '6', 11, 'Helo!', '09:45:43am', '04-09-2020', 1, '2020-09-04 04:45:43', '2020-09-04 04:45:43'),
(171, '6', 11, '???', '09:45:52am', '04-09-2020', 1, '2020-09-04 04:45:52', '2020-09-04 04:45:52'),
(172, '6', 11, 'Helo!', '09:58:34am', '04-09-2020', 1, '2020-09-04 04:58:34', '2020-09-04 04:58:34'),
(173, '6', 11, 'Helo!', '12:58:14pm', '04-09-2020', 1, '2020-09-04 07:58:14', '2020-09-04 07:58:14'),
(174, '5', 11, 'Helo!', '07:52:33am', '10-02-2021', 1, '2021-02-10 02:52:33', '2021-02-10 02:52:33'),
(175, '5', 11, 'Helo!', '10:17:44am', '03-05-2021', 1, '2021-05-03 05:17:44', '2021-05-03 05:17:44'),
(176, '7', 12, 'Helo!', '09:56:27am', '04-05-2021', 1, '2021-05-04 04:56:27', '2021-05-04 04:56:27'),
(177, '7', 12, 'Helo!', '09:56:53am', '04-05-2021', 1, '2021-05-04 04:56:53', '2021-05-04 04:56:53'),
(178, '7', 12, 'Helo!', '09:57:24am', '04-05-2021', 1, '2021-05-04 04:57:24', '2021-05-04 04:57:24'),
(179, 'a', 11, 'ss', '04:27:59pm', '06-08-2021', 1, '2021-08-06 11:27:59', '2021-08-06 11:27:59'),
(180, 'a', 11, 'yyy', '04:28:35pm', '06-08-2021', 1, '2021-08-06 11:28:35', '2021-08-06 11:28:35'),
(181, 'a', 11, 'yyy', '04:29:03pm', '06-08-2021', 1, '2021-08-06 11:29:03', '2021-08-06 11:29:03'),
(182, 'a', 11, 'yyy', '04:30:38pm', '06-08-2021', 1, '2021-08-06 11:30:38', '2021-08-06 11:30:38'),
(183, 'a', 12, 'yyy', '04:31:26pm', '06-08-2021', 1, '2021-08-06 11:31:26', '2021-08-06 11:31:26'),
(184, 'a', 12, 'yyy', '04:32:51pm', '06-08-2021', 1, '2021-08-06 11:32:51', '2021-08-06 11:32:51'),
(185, 'a', 12, 'sss', '04:41:16pm', '06-08-2021', 1, '2021-08-06 11:41:16', '2021-08-06 11:41:16'),
(186, 'a', 12, 'sss', '04:43:22pm', '06-08-2021', 1, '2021-08-06 11:43:22', '2021-08-06 11:43:22'),
(187, 'a', 12, 'sss', '04:44:40pm', '06-08-2021', 1, '2021-08-06 11:44:40', '2021-08-06 11:44:40'),
(188, 'a', 12, 'sfv', '07:16:02am', '09-08-2021', 1, '2021-08-09 02:16:02', '2021-08-09 02:16:02'),
(189, 'a', 12, 'sfv', '07:41:20am', '09-08-2021', 1, '2021-08-09 02:41:20', '2021-08-09 02:41:20'),
(190, 'a', 11, 'ddd', '07:55:37am', '09-08-2021', 1, '2021-08-09 02:55:37', '2021-08-09 02:55:37'),
(191, 'a', 11, 'ddd', '08:02:04am', '09-08-2021', 1, '2021-08-09 03:02:04', '2021-08-09 03:02:04'),
(192, 'a', 12, 'dddd', '08:03:26am', '09-08-2021', 1, '2021-08-09 03:03:26', '2021-08-09 03:03:26'),
(193, 'a', 12, 'dddd', '08:04:30am', '09-08-2021', 1, '2021-08-09 03:04:30', '2021-08-09 03:04:30'),
(194, '1', 12, 'helo', '08:12:55am', '09-08-2021', 1, '2021-08-09 03:12:55', '2021-08-09 03:12:55'),
(195, '1', 12, 'helo', '08:13:42am', '09-08-2021', 1, '2021-08-09 03:13:42', '2021-08-09 03:13:42'),
(196, '1', 12, 'helo', '08:29:21am', '09-08-2021', 1, '2021-08-09 03:29:21', '2021-08-09 03:29:21'),
(197, '1', 12, 'helo', '08:29:33am', '09-08-2021', 1, '2021-08-09 03:29:33', '2021-08-09 03:29:33'),
(198, '1', 12, 'hey', '08:32:51am', '09-08-2021', 1, '2021-08-09 03:32:51', '2021-08-09 03:32:51'),
(199, 'a', 12, 'hey', '08:33:03am', '09-08-2021', 1, '2021-08-09 03:33:03', '2021-08-09 03:33:03'),
(200, 'a', 12, 'fe', '08:34:50am', '09-08-2021', 1, '2021-08-09 03:34:50', '2021-08-09 03:34:50'),
(201, 'a', 12, 'def', '08:35:19am', '09-08-2021', 1, '2021-08-09 03:35:19', '2021-08-09 03:35:19'),
(202, '1', 12, 'def', '08:35:48am', '09-08-2021', 1, '2021-08-09 03:35:48', '2021-08-09 03:35:48'),
(203, '1', 12, '23', '08:35:57am', '09-08-2021', 1, '2021-08-09 03:35:57', '2021-08-09 03:35:57'),
(204, 'a', 12, 'def', '08:37:01am', '09-08-2021', 1, '2021-08-09 03:37:01', '2021-08-09 03:37:01'),
(205, '1', 12, 'fef', '09:04:39am', '09-08-2021', 1, '2021-08-09 04:04:39', '2021-08-09 04:04:39'),
(206, 'a', 11, 'helo', '09:06:32am', '09-08-2021', 1, '2021-08-09 04:06:32', '2021-08-09 04:06:32'),
(207, 'a', 11, 'helo', '09:07:46am', '09-08-2021', 1, '2021-08-09 04:07:46', '2021-08-09 04:07:46'),
(208, 'a', 12, 'helo', '09:10:22am', '09-08-2021', 1, '2021-08-09 04:10:22', '2021-08-09 04:10:22'),
(209, 'a', 12, 'helo', '09:10:25am', '09-08-2021', 1, '2021-08-09 04:10:25', '2021-08-09 04:10:25'),
(210, 'a', 12, 'helo', '09:10:25am', '09-08-2021', 1, '2021-08-09 04:10:25', '2021-08-09 04:10:25'),
(211, '1', 12, 'fef', '09:13:38am', '09-08-2021', 1, '2021-08-09 04:13:38', '2021-08-09 04:13:38'),
(212, 'a', 12, 'helo', '09:13:49am', '09-08-2021', 1, '2021-08-09 04:13:49', '2021-08-09 04:13:49'),
(213, 'a', 12, 'helo2', '09:13:52am', '09-08-2021', 1, '2021-08-09 04:13:52', '2021-08-09 04:13:52'),
(214, 'a', 12, '2564', '09:14:53am', '09-08-2021', 1, '2021-08-09 04:14:53', '2021-08-09 04:14:53'),
(215, 'a', 12, '2564', '09:14:58am', '09-08-2021', 1, '2021-08-09 04:14:58', '2021-08-09 04:14:58'),
(216, 'a', 12, '2564', '09:15:00am', '09-08-2021', 1, '2021-08-09 04:15:00', '2021-08-09 04:15:00'),
(217, 'a', 12, '2564', '09:15:02am', '09-08-2021', 1, '2021-08-09 04:15:02', '2021-08-09 04:15:02'),
(218, 'a', 12, '2564', '09:15:05am', '09-08-2021', 1, '2021-08-09 04:15:05', '2021-08-09 04:15:05'),
(219, 'a', 12, '2564', '09:15:06am', '09-08-2021', 1, '2021-08-09 04:15:06', '2021-08-09 04:15:06'),
(220, 'a', 12, '2564', '09:15:20am', '09-08-2021', 1, '2021-08-09 04:15:20', '2021-08-09 04:15:20'),
(221, 'a', 12, '2564', '09:15:22am', '09-08-2021', 1, '2021-08-09 04:15:22', '2021-08-09 04:15:22'),
(222, 'a', 12, '2564', '09:15:23am', '09-08-2021', 1, '2021-08-09 04:15:23', '2021-08-09 04:15:23'),
(223, 'a', 12, '2564', '09:15:24am', '09-08-2021', 1, '2021-08-09 04:15:24', '2021-08-09 04:15:24'),
(224, 'a', 12, '2564', '09:15:25am', '09-08-2021', 1, '2021-08-09 04:15:25', '2021-08-09 04:15:25'),
(225, 'a', 12, '2564', '09:15:27am', '09-08-2021', 1, '2021-08-09 04:15:27', '2021-08-09 04:15:27'),
(226, 'a', 12, '2564', '09:15:28am', '09-08-2021', 1, '2021-08-09 04:15:28', '2021-08-09 04:15:28'),
(227, 'a', 12, '2564', '09:15:28am', '09-08-2021', 1, '2021-08-09 04:15:28', '2021-08-09 04:15:28'),
(228, 'a', 12, '2564', '09:15:31am', '09-08-2021', 1, '2021-08-09 04:15:31', '2021-08-09 04:15:31'),
(229, 'a', 12, '2564', '09:15:31am', '09-08-2021', 1, '2021-08-09 04:15:31', '2021-08-09 04:15:31'),
(230, 'a', 12, '2564', '09:15:32am', '09-08-2021', 1, '2021-08-09 04:15:32', '2021-08-09 04:15:32'),
(231, 'a', 12, 'hey', '09:15:52am', '09-08-2021', 1, '2021-08-09 04:15:52', '2021-08-09 04:15:52'),
(232, 'a', 12, 'hi how are you?', '09:16:37am', '09-08-2021', 1, '2021-08-09 04:16:37', '2021-08-09 04:16:37'),
(233, 'a', 12, 'hi how are you?', '09:17:11am', '09-08-2021', 1, '2021-08-09 04:17:11', '2021-08-09 04:17:11'),
(234, 'a', 12, 'helo faisal', '09:20:38am', '09-08-2021', 1, '2021-08-09 04:20:38', '2021-08-09 04:20:38'),
(235, '1', 12, 'how are you faisal?', '09:20:52am', '09-08-2021', 1, '2021-08-09 04:20:52', '2021-08-09 04:20:52'),
(236, 'a', 12, 'i am fine whats about you?', '09:21:11am', '09-08-2021', 1, '2021-08-09 04:21:11', '2021-08-09 04:21:11'),
(237, 'a', 12, '???', '09:22:08am', '09-08-2021', 1, '2021-08-09 04:22:08', '2021-08-09 04:22:08'),
(238, 'a', 12, 'helo', '09:29:22am', '09-08-2021', 1, '2021-08-09 04:29:22', '2021-08-09 04:29:22'),
(239, 'a', 12, 'helo', '09:39:12am', '09-08-2021', 1, '2021-08-09 04:39:12', '2021-08-09 04:39:12'),
(240, 'a', 12, '???', '09:42:15am', '09-08-2021', 1, '2021-08-09 04:42:15', '2021-08-09 04:42:15'),
(241, 'a', 11, 'audio test', '09:51:09am', '09-08-2021', 1, '2021-08-09 04:51:09', '2021-08-09 04:51:09'),
(242, 'a', 12, 'audio test', '09:51:29am', '09-08-2021', 1, '2021-08-09 04:51:29', '2021-08-09 04:51:29'),
(243, 'a', 12, 'helo', '09:51:38am', '09-08-2021', 1, '2021-08-09 04:51:38', '2021-08-09 04:51:38'),
(244, 'a', 12, '???', '09:52:00am', '09-08-2021', 1, '2021-08-09 04:52:00', '2021-08-09 04:52:00'),
(245, 'a', 11, 'audio test', '09:55:46am', '09-08-2021', 1, '2021-08-09 04:55:46', '2021-08-09 04:55:46'),
(246, 'a', 11, '???', '10:01:28am', '09-08-2021', 1, '2021-08-09 05:01:28', '2021-08-09 05:01:28'),
(247, 'a', 12, '???', '10:02:01am', '09-08-2021', 1, '2021-08-09 05:02:01', '2021-08-09 05:02:01'),
(248, 'a', 12, 'mmm', '10:05:47am', '09-08-2021', 1, '2021-08-09 05:05:47', '2021-08-09 05:05:47'),
(249, '1', 12, 'mmm', '10:26:19am', '09-08-2021', 1, '2021-08-09 05:26:19', '2021-08-09 05:26:19'),
(250, 'a', 12, 'helo', '10:26:27am', '09-08-2021', 1, '2021-08-09 05:26:27', '2021-08-09 05:26:27'),
(251, '1', 12, 'how are you', '10:26:37am', '09-08-2021', 1, '2021-08-09 05:26:37', '2021-08-09 05:26:37'),
(252, 'a', 12, 'hh', '10:29:41am', '09-08-2021', 1, '2021-08-09 05:29:41', '2021-08-09 05:29:41'),
(253, '1', 12, 'kkk', '10:30:08am', '09-08-2021', 1, '2021-08-09 05:30:08', '2021-08-09 05:30:08'),
(254, '1', 12, 'ye dono b?', '10:30:32am', '09-08-2021', 1, '2021-08-09 05:30:32', '2021-08-09 05:30:32'),
(255, '1', 12, 'saminy waly ladkay', '10:30:47am', '09-08-2021', 1, '2021-08-09 05:30:47', '2021-08-09 05:30:47'),
(256, '1', 12, 'abi keh to rahy thy', '10:31:11am', '09-08-2021', 1, '2021-08-09 05:31:11', '2021-08-09 05:31:11'),
(257, 'a', 12, '???', '10:31:26am', '09-08-2021', 1, '2021-08-09 05:31:26', '2021-08-09 05:31:26'),
(258, 'a', 12, '???', '10:31:37am', '09-08-2021', 1, '2021-08-09 05:31:37', '2021-08-09 05:31:37'),
(259, 'a', 12, 'helo', '10:37:16am', '09-08-2021', 1, '2021-08-09 05:37:16', '2021-08-09 05:37:16'),
(260, 'a', 12, 'hell;l', '10:49:05am', '09-08-2021', 1, '2021-08-09 05:49:05', '2021-08-09 05:49:05'),
(261, 'a', 12, '3', '10:53:04am', '09-08-2021', 1, '2021-08-09 05:53:04', '2021-08-09 05:53:04'),
(262, 'a', 12, 'fff', '11:06:12am', '09-08-2021', 1, '2021-08-09 06:06:12', '2021-08-09 06:06:12'),
(263, '1', 12, 'ddd', '11:06:21am', '09-08-2021', 1, '2021-08-09 06:06:21', '2021-08-09 06:06:21'),
(264, '1', 12, 'hey', '11:06:35am', '09-08-2021', 1, '2021-08-09 06:06:35', '2021-08-09 06:06:35'),
(265, '1', 12, 'yes', '11:07:17am', '09-08-2021', 1, '2021-08-09 06:07:17', '2021-08-09 06:07:17'),
(266, 'a', 12, 'yes', '11:07:25am', '09-08-2021', 1, '2021-08-09 06:07:25', '2021-08-09 06:07:25'),
(267, 'a', 12, '????', '01:20:33pm', '10-08-2021', 1, '2021-08-10 08:20:33', '2021-08-10 08:20:33'),
(268, 'a', 12, '?????', '01:20:38pm', '10-08-2021', 1, '2021-08-10 08:20:38', '2021-08-10 08:20:38'),
(269, '1', 12, 'helo', '01:22:01pm', '10-08-2021', 1, '2021-08-10 08:22:01', '2021-08-10 08:22:01'),
(270, 'a', 12, 'hey', '01:22:08pm', '10-08-2021', 1, '2021-08-10 08:22:08', '2021-08-10 08:22:08'),
(271, 'a', 12, 'this is test messahe', '01:22:14pm', '10-08-2021', 1, '2021-08-10 08:22:14', '2021-08-10 08:22:14'),
(272, '1', 12, ']????', '01:22:24pm', '10-08-2021', 1, '2021-08-10 08:22:24', '2021-08-10 08:22:24'),
(273, 'a', 12, '???', '03:30:46pm', '10-08-2021', 1, '2021-08-10 10:30:46', '2021-08-10 10:30:46'),
(274, 'a', 11, 'ddd', '07:44:51am', '11-08-2021', 1, '2021-08-11 02:44:51', '2021-08-11 02:44:51'),
(275, 'a', 11, 'ff', '07:44:57am', '11-08-2021', 1, '2021-08-11 02:44:57', '2021-08-11 02:44:57'),
(276, '1', 12, 'helo', '11:01:09am', '17-08-2021', 1, '2021-08-17 06:01:09', '2021-08-17 06:01:09'),
(277, '1', 12, 'hi', '11:01:15am', '17-08-2021', 1, '2021-08-17 06:01:15', '2021-08-17 06:01:15'),
(278, '2', 11, 'ddd', '10:20:42am', '03-09-2021', 1, '2021-09-03 05:20:42', '2021-09-03 05:20:42'),
(279, '2', 11, 'hi', '03:34:48pm', '09-09-2021', 1, '2021-09-09 10:34:48', '2021-09-09 10:34:48'),
(280, '2', 11, 'ss', '09:53:18am', '27-09-2021', 1, '2021-09-27 04:53:18', '2021-09-27 04:53:18');

-- --------------------------------------------------------

--
-- Table structure for table `terms_and_conditions`
--

CREATE TABLE `terms_and_conditions` (
  `id` int(10) UNSIGNED NOT NULL,
  `terms_and_conditions` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `terms_and_conditions`
--

INSERT INTO `terms_and_conditions` (`id`, `terms_and_conditions`, `delete_status`, `created_at`, `updated_at`) VALUES
(1, '<p>Definition of Announcement Announcement is one of the short funcDefinition of Announcement Announcement is one of the short functional text. In English verb of announce had a meaning “make a formal public declaration about a fact, occurrence, or intention.” So Announcement is an official notification about something, Whether written or spoken which presented to the publictional text. In English verb of announce had a meaning “make a formal public declaration aboutBHBJHBJ BN</p>', 0, '2021-08-11 09:10:35', '2021-09-27 05:03:34');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` enum('open','closed') DEFAULT 'open',
  `user_id` int(11) DEFAULT NULL,
  `replied_by` int(11) DEFAULT NULL,
  `reply` text DEFAULT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `title`, `description`, `email`, `name`, `status`, `user_id`, `replied_by`, `reply`, `delete_status`, `created_at`, `updated_at`) VALUES
(1, 'test', 'testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing ', 'aaqqam@gmail.com', NULL, 'closed', 1, 0, '<p>asdasd234234234234234</p>', 0, '2021-06-02 11:34:53', '2021-09-23 07:42:01'),
(2, 'test', 'testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing ', NULL, NULL, 'closed', 1, 1, '<p>asdasdasdazxczxc234234234</p>', 0, '2021-06-02 11:35:43', '2021-09-23 07:42:06'),
(3, 'test', 'testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing ', NULL, NULL, 'closed', 1, 0, '<p>testing dynamic id of replier</p>', 0, '2021-06-02 11:36:13', '2021-09-23 07:42:11');

-- --------------------------------------------------------

--
-- Table structure for table `ticket_threads`
--

CREATE TABLE `ticket_threads` (
  `id` int(11) NOT NULL,
  `ticket_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tournaments`
--

CREATE TABLE `tournaments` (
  `id` int(11) NOT NULL,
  `game_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `fee` int(11) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `header_image` varchar(255) DEFAULT NULL,
  `contact_details` text DEFAULT NULL,
  `rules` text DEFAULT NULL,
  `critical_rules` text DEFAULT NULL,
  `prizez` text DEFAULT NULL,
  `mode` varchar(255) DEFAULT NULL,
  `registration_limit` varchar(255) DEFAULT NULL,
  `registration_status` varchar(255) DEFAULT NULL,
  `region` varchar(100) DEFAULT NULL,
  `platforms` varchar(100) DEFAULT NULL,
  `country` text DEFAULT NULL,
  `status` enum('Draft','Publish') NOT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tournaments`
--

INSERT INTO `tournaments` (`id`, `game_id`, `title`, `description`, `fee`, `start_date`, `end_date`, `start_time`, `header_image`, `contact_details`, `rules`, `critical_rules`, `prizez`, `mode`, `registration_limit`, `registration_status`, `region`, `platforms`, `country`, `status`, `delete_status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Tournament Title', '<p><span style=\"color: rgb(52, 57, 94);\">Tournament Title description</span></p>', NULL, '2021-09-21', '2021-09-28', '20:42:00', '1632210168.jpeg', '<p>Contact forms are the best way to let your site visitors introduce themselves. Get started on your website\'s contact us form with one of JotForm\'s many templates.</p><p>Review different designs to find the one you like best, and easily embed it onto your website! Thanks to basic fields such as name and email address, as well as detailed functions like dropdown, checkbox, file upload, and CAPTCHA verification, you can customize your contact form template and add it to any page on your website with incredible ease -- just copy and paste the embed code we provide for the contact us forms. Choose from one of our many contact templates or create a brand new contact form. You can also embed the form you created on WordPress, Squarespace or other website builders!</p><p>Try one of our free online contact form templates today!</p>', '<ol><li>Solo: Fight against 99 other players to become the last one standing.</li><li>Duo: Group up with a friend or someone random as a team of two to fight against other Duos and become the last duo or one standing.</li><li>Squad: Group up with up to three other friends or someone random</li></ol>', '<p><span style=\"color: rgb(52, 57, 94);\">Critical Rules</span></p>', '<p>$10000</p>', '1 vs 1', '100', NULL, NULL, 'PlayStation 4', '[{\"name\":\"Bahrain\"},{\"name\":\"Andorra\"},{\"name\":\"Brazil\"}]', 'Publish', 0, '2021-07-14 19:00:00', '2021-09-21 02:42:55'),
(2, 1, 'test', '<p>test</p>', NULL, '2021-09-21', '2021-09-26', '10:09:00', '1628064701.jpeg', '<p> hfghfghg fh </p>', '<p>hfghf </p>', '<p>hfgh fgh fh</p>', '<p>fgh fgh </p>', 'team vs team', '100', NULL, NULL, 'PlayStation 4', '[{\"name\":\"Australia\"},{\"name\":\"Azerbaijan\"},{\"name\":\"Bahamas\"},{\"name\":\"Argentina\"},{\"name\":\"Moldova\"}]', 'Draft', 0, '2021-08-04 03:11:41', '2021-09-20 10:51:03'),
(3, 1, 'Pubg', '<p>badmash</p>', NULL, '2021-09-22', '2021-09-25', '15:41:00', '1632139134.png', '<p>dsdsdsfddsds</p><p>dsds</p><p>ds</p><p>d</p><p>s</p><p>ds</p><p>ds</p>', '<p>hhdsdsdsdsdsds</p>', '<p>kkdsdsdssd</p>', '<p>jjdsddddddddddddddddddds</p>', '1 vs 1', '80', NULL, 'Africa', 'PC', '[{\"name\":\"Anguilla\"},{\"name\":\"Belarus\"}]', 'Draft', 0, '2021-08-11 04:36:55', '2021-09-22 00:30:56'),
(4, 1, 'test 5', '<p> jahkdjahs k dhkasjs hdkjahd kahs dhas kdh kahdkjahdk asd</p>', NULL, '2021-08-21', '2021-08-26', '21:01:00', '1629723426.jpeg', '<p>fsdfs </p>', '<p>sdfsddfsdf</p>', '<p>sdfsddfsdf</p>', '<p>sdfsddfsddf</p>', NULL, NULL, NULL, NULL, NULL, NULL, 'Draft', 1, '2021-08-23 07:57:06', '2021-09-20 06:58:04'),
(6, 3, 'fdsfsdffara', '<p>fdsfdsfds</p>', 3232323, '2021-09-24', '2021-09-24', '14:32:00', '1632382391.jpeg', '<p>dadsadsasdadsae</p>', '<p>dwwdqw</p>', '<p>dwdwdwdw</p>', '<p>dwdwwd</p>', 'duo vs duo', '32', NULL, 'Asia', 'Xbox One', '[{\"name\":\"Pakistan\"}]', 'Draft', 1, '2021-09-23 02:33:12', '2021-09-23 02:34:24'),
(7, 1, 'chat tournament', '<p>chat</p>', 10, '2021-09-28', '2021-10-09', '22:00:00', '1632837278.jpeg', '<p>dsadas</p>', '<p>asdasda</p>', '<p>asdasdasd</p>', '<p>asdasdas</p>', '1 vs 1', '50', NULL, 'Latin America', 'PlayStation 4', '[{\"name\":\"Austria\"}]', 'Publish', 0, '2021-09-28 08:54:38', '2021-09-28 08:58:41');

-- --------------------------------------------------------

--
-- Table structure for table `tournament_fields`
--

CREATE TABLE `tournament_fields` (
  `id` int(11) NOT NULL,
  `tournament_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tournament_fields`
--

INSERT INTO `tournament_fields` (`id`, `tournament_id`, `name`, `type`, `created_at`, `updated_at`) VALUES
(4, 5, 'help', 'Public', '2021-08-23 08:44:31', '2021-08-23 08:44:31'),
(14, 1, 'anx', 'Public', '2021-09-21 02:42:57', '2021-09-21 02:42:57'),
(17, 3, 'n', 'Public', '2021-09-22 00:30:56', '2021-09-22 00:30:56'),
(18, 3, 'abc', 'Public', '2021-09-22 00:30:56', '2021-09-22 00:30:56'),
(21, 6, 'dfdfd', 'Public', '2021-09-23 02:34:20', '2021-09-23 02:34:20'),
(22, 6, 'fdfddfd', 'Public', '2021-09-23 02:34:21', '2021-09-23 02:34:21'),
(23, 7, 'fvt', 'Public', '2021-09-28 08:58:41', '2021-09-28 08:58:41');

-- --------------------------------------------------------

--
-- Table structure for table `tournament_field_user_answers`
--

CREATE TABLE `tournament_field_user_answers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `enrollment_id` int(11) DEFAULT NULL,
  `tournament_id` int(11) DEFAULT NULL,
  `field_name` varchar(255) DEFAULT NULL,
  `field_value` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tournament_field_user_answers`
--

INSERT INTO `tournament_field_user_answers` (`id`, `user_id`, `enrollment_id`, `tournament_id`, `field_name`, `field_value`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 3, 'n', 'shehrozb946', '2021-08-20 08:15:59', '2021-08-20 08:15:59'),
(2, 1, 1, 3, 'abc', 'shehrozb946sdasdasd', '2021-08-20 08:15:59', '2021-08-20 08:15:59'),
(3, 7, 2, 1, 'anx', '22', '2021-09-24 02:35:41', '2021-09-24 02:35:41'),
(4, 1, 3, 1, 'anx', 'OK', '2021-09-24 04:38:51', '2021-09-24 04:38:51'),
(5, 6, 4, 1, 'anx', 'YUU', '2021-09-24 04:42:21', '2021-09-24 04:42:21'),
(6, 6, 5, 1, 'anx', 'ggdd', '2021-09-24 05:00:06', '2021-09-24 05:00:06'),
(7, 1, 6, 7, 'fvt', 'hhhh', '2021-09-28 09:00:39', '2021-09-28 09:00:39'),
(8, 5, 7, 7, 'fvt', 'kkkk', '2021-09-28 10:17:25', '2021-09-28 10:17:25');

-- --------------------------------------------------------

--
-- Table structure for table `tournament_messages`
--

CREATE TABLE `tournament_messages` (
  `id` int(20) UNSIGNED NOT NULL,
  `sender` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tournament_id` int(11) DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tournament_messages`
--

INSERT INTO `tournament_messages` (`id`, `sender`, `tournament_id`, `message`, `time`, `date`, `created_at`, `updated_at`) VALUES
(1, '1', 7, 'test message', '02:32:38pm', '28-09-2021', '2021-09-28 08:58:41', '2021-09-28 09:32:38'),
(2, '1', 7, 'hello', '02:37:17pm', '28-09-2021', '2021-09-28 09:37:17', '2021-09-28 09:37:17'),
(3, '1', 7, 'hello', '02:53:02pm', '28-09-2021', '2021-09-28 09:53:02', '2021-09-28 09:53:02'),
(4, '2', 7, '???', '02:53:12pm', '28-09-2021', '2021-09-28 09:53:12', '2021-09-28 09:53:12'),
(5, '1', 7, 'what is this', '02:56:00pm', '28-09-2021', '2021-09-28 09:56:00', '2021-09-28 09:56:00'),
(6, '5', 7, 'hello', '03:17:46pm', '28-09-2021', '2021-09-28 10:17:46', '2021-09-28 10:17:46'),
(7, '5', 7, 'hjgjhg', '03:39:51pm', '28-09-2021', '2021-09-28 10:39:51', '2021-09-28 10:39:51'),
(8, '5', 7, 'hjgjhg', '03:39:54pm', '28-09-2021', '2021-09-28 10:39:54', '2021-09-28 10:39:54'),
(9, '1', 7, 'HASKJa', '03:46:18pm', '28-09-2021', '2021-09-28 10:46:18', '2021-09-28 10:46:18'),
(10, '5', 7, 'hsjkadhakjsd', '03:46:37pm', '28-09-2021', '2021-09-28 10:46:38', '2021-09-28 10:46:38'),
(11, '5', 7, 'hhhh', '04:12:16pm', '28-09-2021', '2021-09-28 11:12:16', '2021-09-28 11:12:16'),
(12, '5', 7, 'hhhh', '04:12:41pm', '28-09-2021', '2021-09-28 11:12:41', '2021-09-28 11:12:41');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `primary_game` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `game_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postcode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_delete` tinyint(1) NOT NULL DEFAULT 0,
  `subscription` int(1) NOT NULL DEFAULT 0,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `primary_game`, `game_id`, `dob`, `phone`, `country`, `gender`, `city`, `address`, `postcode`, `image`, `email`, `password`, `status`, `is_delete`, `subscription`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Faisal', 'Iqbal', 'PUBG', 'ABC', '15/05/1996', '03336573890', 'faisal', 'Male', 'Lahore', 'Lahore , Pakistan', '40050', '1632473592.jpeg', 'faisaluol786@gmail.com', '$2y$10$a0X/h6U4JG9BnfxNT1HVqeWUFcTiDA2rrU73vKcvEs2zuKkVcfPPy', NULL, 0, 0, NULL, NULL, '2021-08-11 06:42:07', '2021-09-24 04:37:32'),
(2, 'faraz', 'ahmad', 'PUBG', 'ABC', '15/05/1998', '034', 'Pakistan', 'Male', 'karchi', 'Karchi , Pakistan', '233333333', '1632135811.png', 'faraz786@gmail.com', '$2y$10$a0X/h6U4JG9BnfxNT1HVqeWUFcTiDA2rrU73vKcvEs2zuKkVcfPPy', NULL, 0, 1, NULL, NULL, '2021-08-11 06:42:07', '2021-09-20 06:03:32'),
(3, 'bilal', 'bilu', 'PUBG', 'ABC', '15/05/1998', '034', 'Pakistan', 'Male', 'karchi', 'Karchi , Pakistan', '233333333', '1630924380.jpeg', 'bilal@gmail.com', '$2y$10$a0X/h6U4JG9BnfxNT1HVqeWUFcTiDA2rrU73vKcvEs2zuKkVcfPPy', NULL, 0, 0, NULL, NULL, '2021-08-11 06:42:07', '2021-09-06 06:16:19'),
(4, 'qasim', 'a', 'PUBG', 'ABC', '15/05/1998', '034', 'Pakistan', 'Male', 'karchi', 'Karchi , Pakistan', '233333333', '1632828066.jpeg', 'qasim@gmail.com', '$2y$10$a0X/h6U4JG9BnfxNT1HVqeWUFcTiDA2rrU73vKcvEs2zuKkVcfPPy', NULL, 0, 1, NULL, NULL, '2021-08-11 06:42:07', '2021-09-28 06:21:08'),
(5, 'taha', 'm', 'PUBG', 'ABC', '15/05/1998', '034', 'Pakistan', 'Male', 'karchi', 'Karchi , Pakistan', '233333333', '1630924380.jpeg', 'taha@gmail.com', '$2y$10$a0X/h6U4JG9BnfxNT1HVqeWUFcTiDA2rrU73vKcvEs2zuKkVcfPPy', NULL, 0, 1, NULL, NULL, '2021-08-11 06:42:07', '2021-09-06 06:16:19'),
(6, 'nasir', 'yasin', 'Pubg', '1', '2020-12-08', '0975432222', 'Ukraine', 'Male', 'adsda', 'addsadada', 'dadaad', '1632467348.jpeg', 'nasirkhan@gmail.com', '$2y$10$YNnKA8EDTF4WvA/GRXQAQu3OuF8Jwo4Uldp5L3oDexfynStidANmu', NULL, 0, 0, NULL, NULL, '2021-09-24 02:07:55', '2021-09-24 02:09:08'),
(7, 'umar', 'zaib', 'Pubg', '1', '2021-09-02', '03421234543', 'USA', 'Male', NULL, NULL, NULL, '1632477795.png', 'umar@gmail.com', '$2y$10$LZA9J9SPglYOSpaApv3RpeVo/U/oTTQ3WCc27R6MXxFopo2sONSA6', NULL, 0, 0, NULL, NULL, '2021-09-24 02:26:50', '2021-09-24 05:03:16');

-- --------------------------------------------------------

--
-- Table structure for table `user_auth_meta`
--

CREATE TABLE `user_auth_meta` (
  `id` int(10) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `validation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_auth_meta`
--

INSERT INTO `user_auth_meta` (`id`, `user_id`, `token`, `ip`, `validation`, `created_at`, `updated_at`) VALUES
(1, 1, '$2y$10$e0YOkR8DzBoeioY/q5LlWeeyI9mwrX8O6u9LkWNMaBcTfMOvuwPKC', '127.0.0.1', NULL, '2021-08-11 06:42:07', '2021-08-11 06:42:07'),
(2, 2, '$2y$10$4Rru5GT02qtgN/u7ZQrRCuJ5e4hfvaJ7J5tYKykXPP6O.21853STa', '127.0.0.1', NULL, '2021-08-26 08:57:56', '2021-08-26 08:57:56'),
(3, 5, '$2y$10$.4fJYs9JIHuYSwEzOYpQ7OFORf4U6k071eh0osigriNynenG9fjsm', '127.0.0.1', NULL, '2021-09-06 09:18:59', '2021-09-06 09:18:59'),
(4, 6, '$2y$10$jzaGlhCs7VxIIdMqrY6Kquan5l.KlASSlas/b2/A6fcqYMEvtdEVa', '127.0.0.1', NULL, '2021-09-24 02:07:56', '2021-09-24 02:07:56'),
(5, 7, '$2y$10$as4ARvgp04vNxN46lW28jewJFaeGCVk6uqkPBFwOcZieYr9nC36he', '127.0.0.1', NULL, '2021-09-24 02:26:50', '2021-09-24 02:26:50'),
(6, 4, '$2y$10$XA.PjYkcs8RR9UUL2FVN2eRyPMNonTnYkeQm/tR71oGYrofPShFIu', '127.0.0.1', NULL, '2021-09-28 06:20:13', '2021-09-28 06:20:13');

-- --------------------------------------------------------

--
-- Table structure for table `user_rights`
--

CREATE TABLE `user_rights` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `module` varchar(255) NOT NULL,
  `is_enabled` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_rights`
--

INSERT INTO `user_rights` (`id`, `user_id`, `module`, `is_enabled`, `created_at`, `updated_at`) VALUES
(1, 3, 'dashboard', 1, '2021-06-04 05:01:53', '2021-06-07 05:37:30'),
(2, 3, 'newsnarticles', 1, '2021-06-04 05:01:53', '2021-06-07 05:37:30'),
(3, 3, 'products', 0, '2021-06-04 05:01:53', '2021-06-07 05:37:20'),
(4, 3, 'videos', 0, '2021-06-04 05:01:53', '2021-06-07 05:36:53'),
(5, 3, 'support', 1, '2021-06-04 05:01:53', '2021-06-07 05:36:44'),
(6, 3, 'games', 1, '2021-06-04 05:01:53', '2021-06-04 08:33:49'),
(7, 3, 'websetting', 1, '2021-06-04 05:01:53', '2021-06-07 05:36:44'),
(8, 3, 'subadmins', 0, '2021-06-04 05:01:53', '2021-06-04 05:01:53'),
(9, 4, 'dashboard', 1, '2021-06-04 05:04:33', '2021-06-04 09:02:07'),
(10, 4, 'newsnarticles', 1, '2021-06-04 05:04:33', '2021-06-04 09:02:07'),
(11, 4, 'products', 0, '2021-06-04 05:04:33', '2021-06-04 05:04:33'),
(12, 4, 'videos', 0, '2021-06-04 05:04:33', '2021-06-04 05:04:33'),
(13, 4, 'support', 1, '2021-06-04 05:04:33', '2021-06-07 02:50:22'),
(14, 4, 'games', 0, '2021-06-04 05:04:33', '2021-06-04 05:04:33'),
(15, 4, 'websetting', 0, '2021-06-04 05:04:33', '2021-06-04 05:04:33'),
(16, 4, 'subadmins', 0, '2021-06-04 05:04:33', '2021-06-04 05:04:33'),
(17, 1, 'dashboard', 1, '2021-06-04 05:01:53', '2021-06-04 08:33:49'),
(18, 1, 'newsnarticles', 1, '2021-06-04 05:01:53', '2021-06-04 08:31:38'),
(19, 1, 'products', 1, '2021-06-04 05:01:53', '2021-06-04 08:31:38'),
(20, 1, 'videos', 1, '2021-06-04 05:01:53', '2021-06-04 08:22:09'),
(21, 1, 'support', 1, '2021-06-04 05:01:53', '2021-06-04 08:33:56'),
(22, 1, 'games', 1, '2021-06-04 05:01:53', '2021-06-04 08:33:49'),
(23, 1, 'websetting', 1, '2021-06-04 05:01:53', '2021-06-04 08:22:09'),
(24, 1, 'subadmins', 1, '2021-06-04 05:01:53', '2021-06-04 05:01:53'),
(25, 7, 'dashboard', 0, '2021-06-10 08:11:33', '2021-06-10 08:11:33'),
(26, 7, 'newsnarticles', 0, '2021-06-10 08:11:33', '2021-06-10 08:11:33'),
(27, 7, 'products', 0, '2021-06-10 08:11:33', '2021-06-10 08:11:33'),
(28, 7, 'videos', 0, '2021-06-10 08:11:33', '2021-06-10 08:11:33'),
(29, 7, 'support', 0, '2021-06-10 08:11:33', '2021-06-10 08:11:33'),
(30, 7, 'games', 0, '2021-06-10 08:11:33', '2021-06-10 08:11:33'),
(31, 7, 'websetting', 0, '2021-06-10 08:11:33', '2021-06-10 08:11:33'),
(32, 7, 'subadmins', 0, '2021-06-10 08:11:33', '2021-06-10 08:11:33');

-- --------------------------------------------------------

--
-- Table structure for table `user_social_links`
--

CREATE TABLE `user_social_links` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `google` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apple` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `battle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discord` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_social_links`
--

INSERT INTO `user_social_links` (`id`, `user_id`, `google`, `facebook`, `twitter`, `apple`, `battle`, `vk`, `discord`, `created_at`, `updated_at`) VALUES
(1, 1, 'asdasaxzxz\\xzx\\', 'sasasxzxz\\', 'sasasaxzxz\\', 'sasasxz\\xz\\', 'sasasxz\\xz\\', 'sasaxz\\xz\\', 'sasaxz\\xz\\', NULL, '2021-09-24 01:57:03'),
(2, 2, 'fdfdsdf', 'fdsds', 'xzxzxz', NULL, NULL, NULL, 'xzxz', '2021-09-24 02:07:56', '2021-09-24 02:25:44'),
(3, 7, 'hijkhj', 'guycxcx', 'cxcxcxcx', NULL, NULL, NULL, NULL, '2021-09-24 02:26:50', '2021-09-24 02:32:00');

-- --------------------------------------------------------

--
-- Table structure for table `user_team_member_chats`
--

CREATE TABLE `user_team_member_chats` (
  `id` int(20) UNSIGNED NOT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `reciver_id` int(11) DEFAULT NULL,
  `last_active` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_msg_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_team_member_chats`
--

INSERT INTO `user_team_member_chats` (`id`, `sender_id`, `reciver_id`, `last_active`, `last_msg_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 5, 4, '2021-09-30 12:15:09pm', NULL, NULL, '2021-09-30 07:15:09', '2021-09-30 07:15:09');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `video_youtube_id` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `delete_status` int(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `title`, `video_youtube_id`, `description`, `delete_status`, `created_at`, `updated_at`) VALUES
(5, 'Malang', 'OPkfKQpJKXA', 'Pabst irony tattooed, synth sriracha selvage pok pok.\nWayfarers kinfolk sartorial, helvetica you probably haven\'t heard of them tumeric venmo deep v mixtape semiotics brunch.', 0, '2021-06-18 07:11:42', '2021-09-21 03:23:50'),
(9, 'Bella Ciao', '9ao4FEaDGhQ', 'La Casa De Papel - Bella Ciao [Lyrics] (Money Heist)', 0, '2021-09-20 07:58:40', '2021-09-20 08:33:14'),
(10, 'Serhat Durmus - La Câlin', 'xm9PhL66JIY', 'Serhat Durmus - La CâlinSerhat Durmus - La Câlin', 0, '2021-09-20 08:25:40', '2021-09-20 08:28:47'),
(11, 'La ilaha illallah I Best Zikr ᴴᴰ', 'VKhLz7lhnvU', 'La ilaha illallah I Best Zikr ᴴᴰ I Listen Daily I Best For Relaxing Sleep I Mohammad Shariq', 0, '2021-09-21 03:20:28', '2021-09-21 03:22:17');

-- --------------------------------------------------------

--
-- Table structure for table `watchsteams`
--

CREATE TABLE `watchsteams` (
  `id` int(10) UNSIGNED NOT NULL,
  `tournament_id` int(11) NOT NULL,
  `videolink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delete_status` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `watchsteams`
--

INSERT INTO `watchsteams` (`id`, `tournament_id`, `videolink`, `delete_status`, `created_at`, `updated_at`) VALUES
(1, 1, 'xm9PhL66JIY', '1', '2021-09-21 05:41:46', '2021-09-21 05:46:02'),
(2, 3, 'OPkfKQpJKXA', '0', '2021-09-21 05:43:48', '2021-09-21 05:43:48'),
(3, 1, 'OPkfKQpJKXA', '1', '2021-09-21 05:46:44', '2021-09-21 05:47:15'),
(4, 1, 'LGA60cmltiU', '1', '2021-09-21 05:48:01', '2021-09-21 05:53:01'),
(5, 1, '7asP7Xw9emQ', '0', '2021-09-21 05:54:07', '2021-09-21 05:54:07'),
(6, 2, 'eaaa', '1', '2021-09-23 02:34:35', '2021-09-23 02:34:49');

-- --------------------------------------------------------

--
-- Table structure for table `websettings`
--

CREATE TABLE `websettings` (
  `id` int(11) NOT NULL,
  `slider_image1` varchar(255) DEFAULT NULL,
  `slider_image2` varchar(255) DEFAULT NULL,
  `slider_image3` varchar(255) DEFAULT NULL,
  `privacy_policy` text DEFAULT NULL,
  `terms_and_conditions` text DEFAULT NULL,
  `facebook_link` varchar(255) DEFAULT NULL,
  `twitter_link` varchar(255) DEFAULT NULL,
  `linkedin_link` varchar(255) DEFAULT NULL,
  `youtube_link` varchar(255) DEFAULT NULL,
  `gaming_link` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `websettings`
--

INSERT INTO `websettings` (`id`, `slider_image1`, `slider_image2`, `slider_image3`, `privacy_policy`, `terms_and_conditions`, `facebook_link`, `twitter_link`, `linkedin_link`, `youtube_link`, `gaming_link`, `created_at`, `updated_at`) VALUES
(1, '1623327897.png', '1623165291.png', '1623165291.png', '<p>asdasdasdasd4234234xzxz</p>', '<p>asdasdasdas</p>', 'https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/', NULL, '2021-09-20 05:40:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_auth_metas`
--
ALTER TABLE `admin_auth_metas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ads_banners`
--
ALTER TABLE `ads_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brackets`
--
ALTER TABLE `brackets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brackets` (`tournament_id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enrollments` (`tournament_id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `list_user_teams`
--
ALTER TABLE `list_user_teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `privacies__and_policies`
--
ALTER TABLE `privacies__and_policies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_comments`
--
ALTER TABLE `product_comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_variations`
--
ALTER TABLE `product_variations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support_tickets`
--
ALTER TABLE `support_tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support_ticket_details`
--
ALTER TABLE `support_ticket_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_user_messages`
--
ALTER TABLE `team_user_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `terms_and_conditions`
--
ALTER TABLE `terms_and_conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tournaments`
--
ALTER TABLE `tournaments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tournament_fields`
--
ALTER TABLE `tournament_fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tournament_field_user_answers`
--
ALTER TABLE `tournament_field_user_answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tournament_messages`
--
ALTER TABLE `tournament_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_auth_meta`
--
ALTER TABLE `user_auth_meta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_rights`
--
ALTER TABLE `user_rights`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_social_links`
--
ALTER TABLE `user_social_links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_team_member_chats`
--
ALTER TABLE `user_team_member_chats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `watchsteams`
--
ALTER TABLE `watchsteams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `websettings`
--
ALTER TABLE `websettings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `admin_auth_metas`
--
ALTER TABLE `admin_auth_metas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ads_banners`
--
ALTER TABLE `ads_banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `brackets`
--
ALTER TABLE `brackets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `enrollments`
--
ALTER TABLE `enrollments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `list_user_teams`
--
ALTER TABLE `list_user_teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `privacies__and_policies`
--
ALTER TABLE `privacies__and_policies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_comments`
--
ALTER TABLE `product_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product_variations`
--
ALTER TABLE `product_variations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `support_tickets`
--
ALTER TABLE `support_tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `support_ticket_details`
--
ALTER TABLE `support_ticket_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `team_user_messages`
--
ALTER TABLE `team_user_messages`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=281;

--
-- AUTO_INCREMENT for table `terms_and_conditions`
--
ALTER TABLE `terms_and_conditions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tournaments`
--
ALTER TABLE `tournaments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tournament_fields`
--
ALTER TABLE `tournament_fields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tournament_field_user_answers`
--
ALTER TABLE `tournament_field_user_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tournament_messages`
--
ALTER TABLE `tournament_messages`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user_auth_meta`
--
ALTER TABLE `user_auth_meta`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_rights`
--
ALTER TABLE `user_rights`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `user_social_links`
--
ALTER TABLE `user_social_links`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_team_member_chats`
--
ALTER TABLE `user_team_member_chats`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `watchsteams`
--
ALTER TABLE `watchsteams`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `websettings`
--
ALTER TABLE `websettings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `brackets`
--
ALTER TABLE `brackets`
  ADD CONSTRAINT `brackets` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
