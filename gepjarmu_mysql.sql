CREATE DATABASE IF NOT EXISTS `gepjarmu` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `gepjarmu`;


CREATE TABLE `telephelyek` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iranyitoszam` varchar(255) NOT NULL,
  `telepules_neve` varchar(255) NOT NULL,
  `kozterulet_neve` varchar(255) NOT NULL,
  `kozterulet_jellege` varchar(255) NOT NULL,
  `hazszam` varchar(255) NOT NULL,
  `ferohely` int(3) NOT NULL,
  `telefonszam` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  CONSTRAINT thly_id_pk PRIMARY KEY (id)
  );

INSERT INTO `telephelyek` (`iranyitoszam`, `telepules_neve`, `kozterulet_neve`, `kozterulet_jellege`, `hazszam`, `ferohely`, `telefonszam`, `email`) VALUES
('4002', 'Debrecen', 'Harmat', 'utca', '22', 26, '+36(20)375-5231', 'autoberlesdebrcen@gmail.com');

CREATE TABLE `arkategoriak` (
  `gepjarmu_tipus` varchar(255) NOT NULL,
  `berleti_dij` int(6) NOT NULL,
   CONSTRAINT aka_gju_tipus_pk PRIMARY KEY (gepjarmu_tipus)
);

INSERT INTO `arkategoriak` (`gepjarmu_tipus`, `berleti_dij`) VALUES
('személygépkocsi', 20000),
('tehergépkocsi', 25000);

CREATE TABLE `berlok` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
   CONSTRAINT blo_id_pk PRIMARY KEY (id),
   CONSTRAINT blo_adoszam_uk UNIQUE KEY (adoszam)
);


INSERT INTO `berlok` (`nev`, `adoszam`, `iranyitoszam`, `telepules_nev`, `kozterulet_nev`, `kozterulet_jelleg`, `hazszam`, `telefonszam`, `email`, `kedvezmeny`) VALUES
('Mészáros Sándor', 7351948274, '3815', 'Abaújlak', 'Pesti', 'utca', '32', '+36(70)638-1664', 'meszarossandor@gmail.com', NULL),
('Bodnár István', 9846210758, '9789', 'Sé', 'Rajki', 'út', '7', '+36(20)5398-227', NULL, 20),
('Takács Vilmos', 3160971732, '6060', 'Tiszakécske', 'Hunyadi', 'sor', '20', '+36(20)734-5261', 'takacsvilmos@citromail.hu', 10),
('Halász Fanni', NULL, '8200', 'Veszprém', 'Corvin', 'köz', '10', '+36(20)345-7263', 'halaszfanni@hotmail.com', NULL),
('Nemes Attila', NULL, '1104', 'Budapest', 'Harmat', 'utca', '10', '+36(20)846-1356', NULL, NULL);


CREATE TABLE `gepjarmuvek` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rendszam` varchar(255) NOT NULL,
  `marka` varchar(255) NOT NULL,
  `modell` varchar(255) NOT NULL,
  `kilometerora_allas` varchar(255) NOT NULL,
  `muszaki_ervenyesseg` date NOT NULL,
  `uzemanyag_kapacitas` int(11) NOT NULL,
  `ferohely` int(3) NOT NULL,
  `kedvezmeny` int(3) DEFAULT NULL,
  `egyedi_ar` int(6) DEFAULT NULL,
  `thly_id` int(11) NOT  NULL,
  `aka_gepjarmu_tipus` varchar(255) NOT NULL,
   `kep_url` varchar(255),
   CONSTRAINT gju_id_pk PRIMARY KEY (id),
   CONSTRAINT gju_thly_fk FOREIGN KEY (thly_id) REFERENCES telephelyek(id),
   CONSTRAINT gju_aka_fk FOREIGN KEY (aka_gepjarmu_tipus) REFERENCES arkategoriak(gepjarmu_tipus)
  
);

INSERT INTO `gepjarmuvek` (`rendszam`, `marka`, `modell`, `kilometerora_allas`, `muszaki_ervenyesseg`, `uzemanyag_kapacitas`, `ferohely`, `kedvezmeny`, `egyedi_ar`, `thly_id`, `aka_gepjarmu_tipus`,`kep_url`) VALUES
('JLK-263', 'Cadillac', 'Escalade', '200928', '2023-08-13', 60, 5, 0, 0, 1, 'személygépkocsi',NULL),
('SFO-328', 'Toyota', 'Century', '302100', '2024-02-01', 50, 4, 0, 0, 1, 'személygépkocsi',NULL),
('HDD-124', 'Mazda', 'Carol', '198424', '2025-11-21', 30, 4, 0, 0, 1, 'személygépkocsi',NULL),
('WAL-812', 'Audi', 'A8', '214234', '2026-03-04', 72, 4, 0, 0, 1, 'személygépkocsi',NULL),
('SWU-462', 'SEAT', 'Altea', '200113', '2026-09-16', 87, 4, 0, 0, 1, 'személygépkocsi',NULL);

CREATE TABLE `szervizelesek` (
  `kezdo_datum` date NOT NULL,
  `befejezo_datum` date DEFAULT NULL,
  `kilometerora_allas` int(7) NOT NULL,
  `olajcsere` tinyint(1) DEFAULT NULL,
  `elvegzett_munka` varchar(255) DEFAULT NULL,
  `szervizt_vegzo_adatai` varchar(255) DEFAULT NULL,
  `osszeg` int(6) DEFAULT NULL,
  `gju_id` int(11) NOT NULL,
  CONSTRAINT szvs_kezdodatum_gju_pk PRIMARY KEY (kezdo_datum,gju_id),
  CONSTRAINT szvs_gju_fk FOREIGN KEY (gju_id) REFERENCES gepjarmuvek(id)
);

INSERT INTO `szervizelesek` (`kezdo_datum`, `befejezo_datum`, `kilometerora_allas`, `olajcsere`, `elvegzett_munka`, `szervizt_vegzo_adatai`, `osszeg`, `gju_id`) VALUES
('2022-03-05', '2022-04-01', 200254, 1, 'Szélvédőcsere', 'Név: Németh Balázs, Telszam: +36704839225', 27000, 1),
('2018-10-10', '2018-10-11', 302157, 1, 'Motorfelújítás', 'Név: Zétény Patrik, Telsz.: +36(30)237-4532, E-mail: zetenybalazs@gmail.com', 40000, 5),
('2019-05-02', '2019-05-10', 243057, 0, 'Műszaki vizsga', 'Név: Budai Balázs, Telsz.: +36(20)543-0003, E-mail: budaibalazs@gmail.com', 24000, 3),
('2020-08-02', '2020-09-01', 403841, 0, 'Akkumulátorcsere', 'Név: Tóth Oliver, Telsz.: +36(20)387-6554, E-mail: totholiver@gmail.com', 25000, 1),
('2021-03-10', '2021-03-30', 361604, 0, 'Klíma javítás, tisztítás', 'Név: Faragó Bence, Telsz.: +36(20)692-6620, E-mail: faragobence@gmail.com', 17000, 2),
('2022-12-22', '2023-01-21', 200654, 1, 'Szélvédőcsere', 'Név: Szabó Gyula, Telsz.: +36(70)253-5991, E-mail: szabogyula@gmail.com', 27500, 4);

CREATE TABLE `berlesnyugtak` (
  `berles_kezdete` date NOT NULL,
  `berles_vege` date DEFAULT NULL,
  `idotartam` int(4) DEFAULT NULL,
  `gepjarmu_allapot` varchar(255) DEFAULT NULL,
  `uzemanyagszint` varchar(255) DEFAULT NULL,
  `napi_dij` int(6) NOT NULL,
  `kedvezmeny` int(3) NOT NULL,
  `blo_id` int(11) NOT NULL,
  `gju_id` int(11) NOT NULL,
  CONSTRAINT bla_kezdete_gju_pk PRIMARY KEY (berles_kezdete, gju_id),
  CONSTRAINT bla_blo_fk FOREIGN KEY (blo_id) REFERENCES berlok(id),
  CONSTRAINT bla_gju_fk FOREIGN KEY (gju_id) REFERENCES gepjarmuvek(id)
);

INSERT INTO `berlesnyugtak` (`berles_kezdete`, `berles_vege`, `idotartam`, `gepjarmu_allapot`, `uzemanyagszint`, `napi_dij`, `kedvezmeny`, `blo_id`,`gju_id`) VALUES
('2022-03-15', '2022-03-20', 5, 'Jó', 'Háromnegyed', 20000, 10, 1,1),
('2020-03-05', '2020-03-10', 5, 'Jó', 'Fél', 27000, 0, 3, 3),
('2023-01-01', '2023-01-30', 30, 'Jó', 'Tele', 30000, 30, 2, 1),
('2023-01-24', '2023-01-30', 7, 'Jó', 'Negyed', 30000, 0, 1, 3);


