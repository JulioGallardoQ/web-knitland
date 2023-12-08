CREATE DATABASE  IF NOT EXISTS `contactknit` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `contactknit`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: contactknit
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `contactinfo`
--

DROP TABLE IF EXISTS `contactinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contactinfo` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phoneNumber` varchar(25) DEFAULT NULL,
  `Affair` varchar(45) DEFAULT NULL,
  `Message` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactinfo`
--

LOCK TABLES `contactinfo` WRITE;
/*!40000 ALTER TABLE `contactinfo` DISABLE KEYS */;
INSERT INTO `contactinfo` VALUES (1,'Julio Gallardo','julio.754.33@gmail.com','353830885154',NULL,NULL),(2,'Chandler Bing','bing.150@gmail.com','353830886589',NULL,NULL),(3,'Joe Tribianni','joe@gmail.com','(353) 111-1111','',''),(4,'Rachel Green','green@gmail.com','(353) 545-4545','Hello','I want to be part of your newsletter'),(5,'Monica Geller','geller@gmail.com','(353) 151-4645','Hello','I want to be part of your newsletter'),(6,'Rex Millar','mil@gmail.com','(353) 646-5987','',''),(7,'Rex Millar','mil@gmail.com','(353) 646-5987','',''),(8,'joe favreu','favreu@gmail.com','(353) 645-4848','',''),(9,'Joe Barban','mil@gmail.com','(353) 454-8462','',''),(10,'Berenice Aguirre','geller@gmail.com','(353) 111-1111','',''),(11,'Rex Dino','rex.12312@gmail.com','(353) 151-5155','',''),(12,'Rex Dino','rex@gmail.com','(353) 148-4845','',''),(13,'Ross Geller','rosss.12321@gmail.com','(353) 154-8985','',''),(14,'Monicuuq','asdas@gmail.com','(353) 548-4616','',''),(15,'Dua Lipa','dua.1231@gmail.com','(353) 594-5485','',''),(16,'Dua Lipa ','dua.123@gmail.com','(353) 848-4845','','');
/*!40000 ALTER TABLE `contactinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-26 23:42:41
