-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: finalprojectkea.mysql.database.azure.com    Database: finalproject
-- ------------------------------------------------------
-- Server version	5.7.42-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `influencer_ID` varchar(55) DEFAULT NULL,
  `user_ID` varchar(55) DEFAULT NULL,
  KEY `fk_user_id` (`user_ID`),
  KEY `fk_ID_influencer` (`influencer_ID`),
  CONSTRAINT `fk_ID_influencer` FOREIGN KEY (`influencer_ID`) REFERENCES `influencers_profile` (`influencer_ID`),
  CONSTRAINT `fk_ID_user` FOREIGN KEY (`user_ID`) REFERENCES `users` (`user_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `influencers_profile`
--

DROP TABLE IF EXISTS `influencers_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `influencers_profile` (
  `influencer_ID` varchar(55) NOT NULL,
  `user_ID` varchar(55) DEFAULT NULL,
  `influencer_username` varchar(45) DEFAULT NULL,
  `influencer_bio_description` mediumtext,
  `influencer_location` varchar(255) DEFAULT NULL,
  `influencer_website` varchar(45) DEFAULT NULL,
  `influencer_instagram` varchar(45) DEFAULT NULL,
  `influencer_youtube` varchar(45) DEFAULT NULL,
  `influencer_tiktok` varchar(45) DEFAULT NULL,
  `influencer_tags` json DEFAULT NULL,
  `influencer_category` varchar(80) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `profile_created_at` varchar(55) DEFAULT NULL,
  `profile_updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`influencer_ID`),
  KEY `fk_user_ID` (`user_ID`),
  CONSTRAINT `fk_user_ID` FOREIGN KEY (`user_ID`) REFERENCES `users` (`user_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `influencers_profile`
--

LOCK TABLES `influencers_profile` WRITE;
/*!40000 ALTER TABLE `influencers_profile` DISABLE KEYS */;
INSERT INTO `influencers_profile` VALUES ('31af32b2-7655-4617-9c2c-fd362d0e35f9','d5189778-f570-4c32-9a65-1c1c16ff69a3','alexguru','I am a fashion lover and style influencer, dedicated to helping you express your unique sense of style.','Taiwan, Republic of China','https://www.styledbyalex.com/','https://www.instagram.com/styledbyalex','https://www.youtube.com/c/styledbyalex','','\"#fashion,#beauty,#instagood\"','Fashion','7dddc8fe-3efa-4432-b8ff-9184617a0fd6.jpeg','1686695290','2023-06-13 22:28:14'),('423b450b-1470-4fda-8788-264ccf37627d','1d01b116-0a98-4e81-a369-d34b74340b4d','StyleByEm','Hey there! I&#x27;m Emily Anderson, a fashion enthusiast and style influencer. Through my Instagram page and blog, StyleByEm, I share my love for fashion.','Denmark','https://www.stylebyem.com/','https://www.instagram.com/stylebyem','https://www.youtube.com/c/stylebyem','','\"#fashion,#fashionista,#fashionstyle\"','Fashion','0e9eee91-1e4a-42bc-b627-cdde7de636a2.jpeg','1686694355','2023-06-13 22:12:39'),('57ce513d-660e-41e0-9e05-6fceb6ca8348','1d01b116-0a98-4e81-a369-d34b74340b4d','LifeWithEmily','Welcome to Life with Emily!, I share practical tips, inspiration, and experiences to help you create a life you love.','Denmark','https://www.lifewithemily.com/','https://www.instagram.com/lifewithemily','https://www.youtube.com/c/lifewithemily','','\"#happiness,#happytime\"','Lifestyle','60efb433-210d-40b1-b7d9-cb3fa2cfd8b5.jpeg','1686694669','2023-06-13 22:17:52'),('6001030d-b7c9-4ea6-9700-aedef16ea375','0c8c89ec-ea31-4167-885d-8bcee14f2ee4','PetWhisperer','I have a deep love and connection with animals, and through my platform, I share expert tips and heartwarming stories.','Spain','','https://www.instagram.com/petwhisperer','https://www.youtube.com/c/petwhisperer','','\"#cute,#cuteanimals\"','Pets','53e1f293-f8d8-444d-b528-d8a33993fdcb.jpeg','1686695520','2023-06-13 22:32:03'),('8f0ef76b-2da2-4377-a75d-72e3224eac2f','4cb54554-0b26-4462-882e-4b409f2f0d8b','GlowingSarah','Hi, I&#x27;m Sarah Thompson, your go-to beauty guru! As a skincare enthusiast and makeup addict, I&#x27;m here to share my passion.','United States','https://www.glowingsarah.com/','https://www.instagram.com/glowingsarah','https://www.youtube.com/c/glowingsarah','https://www.tiktok.com/@glowingsarah','\"#beautiful,#beautifulgirls,#beauty\"','Beauty','5c815372-71de-4a02-9e14-d9e4460e4b47.jpeg','1686694877','2023-06-13 22:21:20');
/*!40000 ALTER TABLE `influencers_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_ID` varchar(55) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `user_first_name` varchar(45) NOT NULL,
  `user_last_name` varchar(45) NOT NULL,
  `user_email` varchar(45) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_image_ID` varchar(55) DEFAULT '',
  `is_influencer` tinyint(4) DEFAULT '0',
  `user_created_at` varchar(55) DEFAULT NULL,
  `user_updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0c8c89ec-ea31-4167-885d-8bcee14f2ee4','PetWhisperer','Michael','Collins','michael.collins@example.com','$2b$12$mqS6TPQke7JhvTJkC6jCG.j73qMC.DjNf.1CU8IwfM94qs2GHne12','',1,'1686695390','2023-06-13 22:32:03'),('1d01b116-0a98-4e81-a369-d34b74340b4d','StyleByEm','Emily','Anderson','emily.anderson@example.com','$2b$12$ymPQdJPFQKyJ.qH2AgDDHeXURIGf1AfV.Yp5wllt2fl0b7usYupRq','',1,'1686693280','2023-06-13 22:12:38'),('24907368-7dfb-4b98-8bfe-d9185e87fced','StyledByAlex','Alex','Parker','alex.parker@example.com','$2b$12$0JxxYNWrmbDUmWlTS.ZvuufrL18mrTGjZgSTxt/ghcALRH7O5/OGq','',0,'1686694955','2023-06-13 22:22:37'),('4cb54554-0b26-4462-882e-4b409f2f0d8b','GlowingSarah','Sarah','Thompson','sarah.thompson@example.com','$2b$12$2lhqySLMHoGZdMjcLnnlpeVOTYeKNXvlxuM6KLfXdx.LogLFqBRRa','',1,'1686694720','2023-06-13 22:21:20'),('d5189778-f570-4c32-9a65-1c1c16ff69a3','alexguru','Alex','Parker','alex.parker12@example.com','$2b$12$2UQ5X4/VlEmIM0ctsL5FtuqUW.XV9E8oX07FdItgJ7UB7tegCn7kS','',1,'1686695198','2023-06-13 22:28:13'),('ed92803b-d8ce-4475-9ac6-d65b4e5d5710','GetDressedAlex','Alex','Parker','alex.parker22@example.com','$2b$12$0E6RQnwzEtYHmOwvdONMPuno8tqHIeTe0jFGGD7iAyUZbFE6XD7VO','',0,'1686695156','2023-06-13 22:25:58');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-14  0:34:35
