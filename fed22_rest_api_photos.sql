-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:8889
-- Tid vid skapande: 20 feb 2023 kl 14:31
-- Serverversion: 5.7.34
-- PHP-version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `fed22_rest_api_photos`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `Album`
--

CREATE TABLE `Album` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumpning av Data i tabell `Album`
--

INSERT INTO `Album` (`id`, `title`, `userId`) VALUES
(1, 'Confetti Album', 15),
(2, 'Confetti Album', 15),
(3, 'Confetti Album', 15),
(4, 'Confetti\'R\'Us', 15),
(5, 'Confetti Album', 15),
(6, 'Confetti Album', 15),
(7, 'Confetti Album 234', 15),
(9, 'Confetti Album 234234', 17),
(10, 'Confetti Album 2sdf4234', 17),
(11, 'Confetti Album 2sdf4234', 17),
(12, 'Confetti Album 2sdf4234', 17),
(14, 'New album2', 18),
(15, 'NeWWe', 18);

-- --------------------------------------------------------

--
-- Tabellstruktur `Photo`
--

CREATE TABLE `Photo` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumpning av Data i tabell `Photo`
--

INSERT INTO `Photo` (`id`, `title`, `url`, `comment`, `userId`) VALUES
(1, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(2, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(3, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(4, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(5, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(6, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(7, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(8, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(9, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(10, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(11, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(12, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(13, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(14, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(15, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(16, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 13),
(17, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 13),
(18, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 13),
(19, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 14),
(20, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 13),
(21, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 13),
(22, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 15),
(25, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 15),
(26, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 15),
(27, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 15),
(28, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 15),
(29, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 15),
(30, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 15),
(31, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 15),
(32, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 15),
(33, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 17),
(34, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 17),
(35, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 17),
(36, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 17),
(37, 'Confetti asdf #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 17),
(38, 'Confetti asdf #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 17),
(39, 'Confetti asdf #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 17),
(40, 'Confetti asdf #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 17),
(46, 'Confetti asdf #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 18),
(48, 'Confetti asdf #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 18),
(49, 'Confetti asdf #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 18);

-- --------------------------------------------------------

--
-- Tabellstruktur `User`
--

CREATE TABLE `User` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumpning av Data i tabell `User`
--

INSERT INTO `User` (`id`, `email`, `password`, `first_name`, `last_name`) VALUES
(1, 'jn@badcameraphotography.com', 'omg-smile', 'Johan', 'Nordström'),
(3, 'jn@badcameraphsdfotography.com', '$2b$10$e.efBywn.1RNRpklSNOmIe..zxnfGkOuPrvJreNz31T5flUkT2v0O', 'Johan', 'Nordström'),
(4, 'jn@badcameraphsdfosdftography.com', '$2b$10$nS9uKrPZ0eKEa8TNfv8y/ebQ3VRkQa9TylW5k6W2zgnThYVEVzMw2', 'Johan', 'Nordström'),
(5, 'jn@badcameraphsdfosdography.com', '$2b$10$K4wmY8ouBDERDf/8bWNwIOJ.NJYTTfLq1FTg9RPzwEaUTBSXcXav6', 'Johan', 'Nordström'),
(6, 'jn@badcamerapfosdography.com', '$2b$10$SEsMzd7wQtMrq/l/DDGqXe8suQrC54F3ai/Q2n5hL3CcbI6lbf0A.', 'Johan', 'Nordström'),
(8, 'jn@badcamerasdffosdography.com', '$2b$10$Fsi6tA3b9cfWqXJQpuXKs.aX2kEBwVOQsArv5hM4Ilw9zB213pX1q', 'Johan', 'Nordström'),
(9, 'jn@badcamerasdfsdography.com', '$2b$10$rcNE1rH8vhBgVEjm9VznKeM3iicP5CzW6ZKCaDgQm.ZXnsByVtCAC', 'Johan', 'Nordström'),
(10, 'jn@badcamerasdfssderaphy.com', '$2b$10$uVOFgOtatnchz5o7M.SYv.ZP/giNGbYK/vHqloCCARySI.DkxPp96', 'Johan', 'Nordström'),
(13, 'jn@badcamerasdfssraphy.com', '$2b$10$AqACgqlrEQxw0c6ODC3F0uJoEQ.8BrgMgVikQFgBDF86YdtN2GvEe', 'Johan', 'Nordström'),
(14, 'jn@badcamesdfrasdfssraphy.com', '$2b$10$K/n/UOMiDJQ7/mJCQ8YzW.f3ynuGVbuFEla24.PzT1lKfXf3RsKra', 'Johan', 'Nordström'),
(15, 'jn@badcamesdfrasdraphy.com', '$2b$10$FDBQxwrQMFSwzrSJ5Gx43e7jK72HS5j.vUz1xrjrL8oxhRbmp48H6', 'Johan', 'Nordström'),
(16, 'jn@badcamesdfrasdrasdfaphy.com', '$2b$10$spa75hwCpwdkD/8JFSru3uZqKiAYG/YD/HFZs8lHxcswR8vL3SUcW', 'Johan', 'Nordström'),
(17, 'jn@badcamesdfrasdfsdrasdfaphy.com', '$2b$10$3xS7P8ME5dwzaAlJ6U99MOiuzu5pcLV8L09BQVBRbJyh8vyFw68Q.', 'Johan', 'Nordström'),
(18, 'jn@badcamsdfsdrasdfaphy.com', '$2b$10$W6FUEkkUuzodbFAQ5p4WEueQk05FfBMcHq3U9QVt1DbClsiNOUPuu', 'Johan', 'Nordström');

-- --------------------------------------------------------

--
-- Tabellstruktur `_AlbumToPhoto`
--

CREATE TABLE `_AlbumToPhoto` (
  `A` int(10) UNSIGNED NOT NULL,
  `B` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumpning av Data i tabell `_AlbumToPhoto`
--

INSERT INTO `_AlbumToPhoto` (`A`, `B`) VALUES
(9, 33),
(10, 33),
(12, 33),
(9, 34),
(10, 34),
(12, 34),
(12, 35),
(12, 36),
(12, 39);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `Album`
--
ALTER TABLE `Album`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Album_userId_fkey` (`userId`);

--
-- Index för tabell `Photo`
--
ALTER TABLE `Photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Photo_userId_fkey` (`userId`);

--
-- Index för tabell `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Index för tabell `_AlbumToPhoto`
--
ALTER TABLE `_AlbumToPhoto`
  ADD UNIQUE KEY `_AlbumToPhoto_AB_unique` (`A`,`B`),
  ADD KEY `_AlbumToPhoto_B_index` (`B`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `Album`
--
ALTER TABLE `Album`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT för tabell `Photo`
--
ALTER TABLE `Photo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT för tabell `User`
--
ALTER TABLE `User`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `Album`
--
ALTER TABLE `Album`
  ADD CONSTRAINT `Album_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Restriktioner för tabell `Photo`
--
ALTER TABLE `Photo`
  ADD CONSTRAINT `Photo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Restriktioner för tabell `_AlbumToPhoto`
--
ALTER TABLE `_AlbumToPhoto`
  ADD CONSTRAINT `_AlbumToPhoto_A_fkey` FOREIGN KEY (`A`) REFERENCES `Album` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_AlbumToPhoto_B_fkey` FOREIGN KEY (`B`) REFERENCES `Photo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
