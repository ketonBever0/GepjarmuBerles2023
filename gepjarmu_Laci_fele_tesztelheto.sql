-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2023 at 10:41 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gepjarmu`
--
CREATE DATABASE IF NOT EXISTS `gepjarmu` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `gepjarmu`;

-- --------------------------------------------------------

--
-- Table structure for table `arkategoriak`
--

CREATE TABLE `arkategoriak` (
  `gepjarmu_tipus` varchar(255) NOT NULL,
  `berleti_dij` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `arkategoriak`
--

INSERT INTO `arkategoriak` (`gepjarmu_tipus`, `berleti_dij`) VALUES
('sportautó', 20000),
('személygépkocsi', 8000),
('tehergépkocsi', 25000);

-- --------------------------------------------------------

--
-- Table structure for table `berlesnyugtak`
--

CREATE TABLE `berlesnyugtak` (
  `berles_kezdete` date NOT NULL,
  `berles_vege` date DEFAULT NULL,
  `idotartam` int(4) DEFAULT NULL,
  `gepjarmu_allapot` varchar(255) DEFAULT NULL,
  `uzemanyagszint` varchar(255) DEFAULT NULL,
  `napi_dij` int(6) NOT NULL,
  `kedvezmeny` int(3) DEFAULT NULL,
  `blo_id` int(11) NOT NULL,
  `gju_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `berlesnyugtak`
--

INSERT INTO `berlesnyugtak` (`berles_kezdete`, `berles_vege`, `idotartam`, `gepjarmu_allapot`, `uzemanyagszint`, `napi_dij`, `kedvezmeny`, `blo_id`, `gju_id`) VALUES
('2020-03-05', '2020-03-10', 5, 'Jó', 'Fél', 27000, NULL, 3, 3),
('2022-03-15', '2022-03-20', 5, 'Jó', 'Háromnegyed', 20000, 10, 1, 1),
('2023-01-01', '2023-01-30', 30, 'Jó', 'Tele', 30000, 30, 2, 1),
('2023-01-09', '2023-01-25', 14, 'Jó', 'Tele', 20000, NULL, 4, 7),
('2023-01-24', '2023-01-30', 7, 'Jó', 'Negyed', 30000, NULL, 1, 3),
('2023-02-24', NULL, NULL, NULL, NULL, 20000, NULL, 6, 2);

-- --------------------------------------------------------

--
-- Table structure for table `berlok`
--

CREATE TABLE `berlok` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `adoszam` bigint(12) DEFAULT NULL,
  `iranyitoszam` varchar(255) NOT NULL,
  `telepules_nev` varchar(255) NOT NULL,
  `kozterulet_nev` varchar(255) NOT NULL,
  `kozterulet_jelleg` varchar(255) NOT NULL,
  `hazszam` varchar(255) NOT NULL,
  `telefonszam` varchar(30) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `kedvezmeny` int(3) DEFAULT NULL,
  `jelszo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `berlok`
--

INSERT INTO `berlok` (`id`, `nev`, `adoszam`, `iranyitoszam`, `telepules_nev`, `kozterulet_nev`, `kozterulet_jelleg`, `hazszam`, `telefonszam`, `email`, `kedvezmeny`, `jelszo`) VALUES
(1, 'Mészáros Sándor', 7351948274, '3815', 'Abaújlak', 'Pesti', 'utca', '32', '+36(70)638-1664', 'meszarossandor@gmail.com', NULL, ''),
(2, 'Bodnár István', 9846210758, '9789', 'Sé', 'Rajki', 'út', '7', '+36(20)5398-227', NULL, 20, ''),
(3, 'Takács Vilmos', 3160971732, '6060', 'Tiszakécske', 'Hunyadi', 'sor', '20', '+36(20)734-5261', 'takacsvilmos@citromail.hu', 10, ''),
(4, 'Halász Fanni', NULL, '8200', 'Veszprém', 'Corvin', 'köz', '10', '+36(20)345-7263', 'halaszfanni@hotmail.com', NULL, ''),
(5, 'Nemes Attila', NULL, '1104', 'Budapest', 'Harmat', 'utca', '10', '+36(20)846-1356', NULL, NULL, ''),
(6, 'Lakatos Brendon Bajnok', NULL, '1020', 'Budapest', 'Váci', 'út', '69', '+36 50 341 2231', 'kiabajnok@gmail.com', NULL, '$2b$10$YhtOeMq9juGwknBHSvyJN..2/tWT2Naue3jJoWUynTxDUf71bxSMi'),
(7, 'Takács Lajos', NULL, '4000', 'Debrecen', 'Puskin', 'út', '81', '+36 30 517 9216', 'tlajos00@gmail.com', 7, '$2b$10$4xe3oka.f2MuL1of/Q1bZOvmZ.RV1AGcjgnX6mBewOoQ9UTD0pF5y');

-- --------------------------------------------------------

--
-- Table structure for table `gepjarmuvek`
--

CREATE TABLE `gepjarmuvek` (
  `id` int(11) NOT NULL,
  `rendszam` varchar(255) NOT NULL,
  `marka` varchar(255) NOT NULL,
  `modell` varchar(255) NOT NULL,
  `kilometerora_allas` varchar(255) NOT NULL,
  `muszaki_ervenyesseg` date NOT NULL,
  `uzemanyag_kapacitas` int(11) NOT NULL,
  `ferohely` int(3) NOT NULL,
  `kedvezmeny` int(3) DEFAULT NULL,
  `egyedi_ar` int(6) DEFAULT NULL,
  `thly_id` int(11) NOT NULL,
  `aka_gepjarmu_tipus` varchar(255) NOT NULL,
  `kep_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gepjarmuvek`
--

INSERT INTO `gepjarmuvek` (`id`, `rendszam`, `marka`, `modell`, `kilometerora_allas`, `muszaki_ervenyesseg`, `uzemanyag_kapacitas`, `ferohely`, `kedvezmeny`, `egyedi_ar`, `thly_id`, `aka_gepjarmu_tipus`, `kep_url`) VALUES
(1, 'JLK-263', 'Cadillac', 'Escalade', '200928', '2023-03-10', 60, 5, NULL, NULL, 1, 'személygépkocsi', NULL),
(2, 'SFO-328', 'Toyota', 'Century', '302100', '2024-02-01', 50, 4, NULL, NULL, 1, 'személygépkocsi', NULL),
(3, 'HDD-124', 'Mazda', 'Carol', '198424', '2023-03-09', 30, 4, NULL, NULL, 1, 'személygépkocsi', NULL),
(4, 'WAL-812', 'Audi', 'A8', '214234', '2026-03-04', 72, 4, 10, NULL, 1, 'személygépkocsi', NULL),
(5, 'SWU-462', 'SEAT', 'Altea', '200113', '2026-09-16', 87, 4, NULL, NULL, 1, 'személygépkocsi', NULL),
(6, 'GFE-523', 'Opel', 'Corsa', '305125', '2024-10-06', 40, 5, NULL, NULL, 1, 'személygépkocsi', 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Opel_Corsa_B_WorldCup_Facelift.JPG'),
(7, 'ZFJ-634', 'Lamborghini', 'Gallardo', '361232', '2025-05-15', 45, 2, NULL, NULL, 1, 'sportautó', 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/gallardo-lp-550-2-2/Gallardo%20LP%20550-2-HEADER.jpg'),
(9, 'UFV-289', 'Fiat', 'Ducato', '495278', '2024-11-08', 81, 5, 10, NULL, 1, 'tehergépkocsi', 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Fiat_Ducato_Kastenwagen_130_Multijet_%28III%2C_Facelift%29_%E2%80%93_Frontansicht%2C_13._Juli_2014%2C_D%C3%BCsseldorf.jpg'),
(10, 'DFA-527', 'Wartburg', '311', '755862', '2023-05-27', 35, 2, 5, 11000, 1, 'személygépkocsi', 'https://prod.pictures.autoscout24.net/listing-images/c4afba09-9397-4ece-8f4d-0c0cf1342434_d3efbdd4-9c67-4337-ad14-c78b1921aee1.jpg/420x315.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `szervizelesek`
--

CREATE TABLE `szervizelesek` (
  `kezdo_datum` date NOT NULL,
  `befejezo_datum` date DEFAULT NULL,
  `kilometerora_allas` int(7) NOT NULL,
  `olajcsere` tinyint(1) DEFAULT NULL,
  `elvegzett_munka` varchar(255) DEFAULT NULL,
  `szervizt_vegzo_adatai` varchar(255) DEFAULT NULL,
  `osszeg` int(6) DEFAULT NULL,
  `gju_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `szervizelesek`
--

INSERT INTO `szervizelesek` (`kezdo_datum`, `befejezo_datum`, `kilometerora_allas`, `olajcsere`, `elvegzett_munka`, `szervizt_vegzo_adatai`, `osszeg`, `gju_id`) VALUES
('2018-10-10', '2018-10-11', 302157, 1, 'Motorfelújítás', 'Név: Zétény Patrik, Telsz.: +36(30)237-4532, E-mail: zetenybalazs@gmail.com', 40000, 5),
('2019-05-02', '2019-05-10', 243057, 0, 'Műszaki vizsga', 'Név: Budai Balázs, Telsz.: +36(20)543-0003, E-mail: budaibalazs@gmail.com', 24000, 3),
('2020-06-08', NULL, 243265, 0, 'Első lökhárító javítás', 'Név: Budai Balázs, Telsz.: +36(20)543-0003, E-mail: budaibalazs@gmail.com', NULL, 4),
('2020-08-02', '2020-09-01', 403841, 0, 'Akkumulátorcsere', 'Név: Tóth Oliver, Telsz.: +36(20)387-6554, E-mail: totholiver@gmail.com', 25000, 1),
('2021-03-10', '2021-03-30', 361604, 0, 'Klíma javítás, tisztítás', 'Név: Faragó Bence, Telsz.: +36(20)692-6620, E-mail: faragobence@gmail.com', 17000, 2),
('2022-03-05', '2022-04-01', 200254, 1, 'Szélvédőcsere', 'Név: Németh Balázs, Telszam: +36704839225', 27000, 1),
('2022-12-22', '2023-01-21', 200654, 1, 'Szélvédőcsere', 'Név: Szabó Gyula, Telsz.: +36(70)253-5991, E-mail: szabogyula@gmail.com', 27500, 4),
('2023-02-23', NULL, 305373, 0, 'Bal ajtókeret csere', 'Név: Zétény Patrik, Telsz.: +36(30)237-4532, E-mail: zetenybalazs@gmail.com', NULL, 6);

-- --------------------------------------------------------

--
-- Table structure for table `telephelyek`
--

CREATE TABLE `telephelyek` (
  `id` int(11) NOT NULL,
  `iranyitoszam` varchar(255) NOT NULL,
  `telepules_neve` varchar(255) NOT NULL,
  `kozterulet_neve` varchar(255) NOT NULL,
  `kozterulet_jellege` varchar(255) NOT NULL,
  `hazszam` varchar(255) NOT NULL,
  `ferohely` int(3) NOT NULL,
  `telefonszam` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `telephelyek`
--

INSERT INTO `telephelyek` (`id`, `iranyitoszam`, `telepules_neve`, `kozterulet_neve`, `kozterulet_jellege`, `hazszam`, `ferohely`, `telefonszam`, `email`) VALUES
(1, '4002', 'Debrecen', 'Harmat', 'utca', '22', 26, '+36(20)375-5231', 'autoberlesdebrcen@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `arkategoriak`
--
ALTER TABLE `arkategoriak`
  ADD PRIMARY KEY (`gepjarmu_tipus`);

--
-- Indexes for table `berlesnyugtak`
--
ALTER TABLE `berlesnyugtak`
  ADD PRIMARY KEY (`berles_kezdete`,`gju_id`),
  ADD KEY `bla_blo_fk` (`blo_id`),
  ADD KEY `bla_gju_fk` (`gju_id`);

--
-- Indexes for table `berlok`
--
ALTER TABLE `berlok`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blo_adoszam_uk` (`adoszam`);

--
-- Indexes for table `gepjarmuvek`
--
ALTER TABLE `gepjarmuvek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gju_thly_fk` (`thly_id`),
  ADD KEY `gju_aka_fk` (`aka_gepjarmu_tipus`);

--
-- Indexes for table `szervizelesek`
--
ALTER TABLE `szervizelesek`
  ADD PRIMARY KEY (`kezdo_datum`,`gju_id`),
  ADD KEY `szvs_gju_fk` (`gju_id`);

--
-- Indexes for table `telephelyek`
--
ALTER TABLE `telephelyek`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `berlok`
--
ALTER TABLE `berlok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `gepjarmuvek`
--
ALTER TABLE `gepjarmuvek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `telephelyek`
--
ALTER TABLE `telephelyek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `berlesnyugtak`
--
ALTER TABLE `berlesnyugtak`
  ADD CONSTRAINT `bla_blo_fk` FOREIGN KEY (`blo_id`) REFERENCES `berlok` (`id`),
  ADD CONSTRAINT `bla_gju_fk` FOREIGN KEY (`gju_id`) REFERENCES `gepjarmuvek` (`id`);

--
-- Constraints for table `gepjarmuvek`
--
ALTER TABLE `gepjarmuvek`
  ADD CONSTRAINT `gju_aka_fk` FOREIGN KEY (`aka_gepjarmu_tipus`) REFERENCES `arkategoriak` (`gepjarmu_tipus`),
  ADD CONSTRAINT `gju_thly_fk` FOREIGN KEY (`thly_id`) REFERENCES `telephelyek` (`id`);

--
-- Constraints for table `szervizelesek`
--
ALTER TABLE `szervizelesek`
  ADD CONSTRAINT `szvs_gju_fk` FOREIGN KEY (`gju_id`) REFERENCES `gepjarmuvek` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
