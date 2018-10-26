-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema petDb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema petDb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `petDb` DEFAULT CHARACTER SET utf8 ;
USE `petDb` ;

-- -----------------------------------------------------
-- Table `petDb`.`pet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petDb`.`pet` (
  `pet_id` INT NOT NULL,
  `name` VARCHAR(64) NULL,
  `animal` VARCHAR(32) NULL,
  `photo` VARCHAR(256) NULL,
  PRIMARY KEY (`pet_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `petDb`.`toy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `petDb`.`toy` (
  `toy_id` INT NOT NULL,
  `name` VARCHAR(64) NULL,
  `pet_id` INT NOT NULL,
  PRIMARY KEY (`toy_id`),
  INDEX `toy_pet_fk_idx` (`pet_id` ASC),
  CONSTRAINT `toy_pet_fk`
    FOREIGN KEY (`pet_id`)
    REFERENCES `petDb`.`pet` (`pet_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `petDb`.`pet`
-- -----------------------------------------------------
START TRANSACTION;
USE `petDb`;
INSERT INTO `petDb`.`pet` (`pet_id`, `name`, `animal`, `photo`) VALUES (1, 'Frida', 'DOG', 'https://www.debate.com.mx/export/sites/debate/img/2017/10/13/frida_ap2.jpeg_715265926.jpeg');
INSERT INTO `petDb`.`pet` (`pet_id`, `name`, `animal`, `photo`) VALUES (2, 'Chuck', 'CAT', 'https://www.petdarling.com/articulos/wp-content/uploads/2014/11/eliminar-pis-de-gato.jpg');
INSERT INTO `petDb`.`pet` (`pet_id`, `name`, `animal`, `photo`) VALUES (3, 'Gordo', 'TURTLE', 'https://www.curiosfera.com/wp-content/uploads/2018/01/que-come-tortuga.jpg');

COMMIT;


-- -----------------------------------------------------
-- Data for table `petDb`.`toy`
-- -----------------------------------------------------
START TRANSACTION;
USE `petDb`;
INSERT INTO `petDb`.`toy` (`toy_id`, `name`, `pet_id`) VALUES (1, 'Ball', 1);
INSERT INTO `petDb`.`toy` (`toy_id`, `name`, `pet_id`) VALUES (2, 'Bone', 2);
INSERT INTO `petDb`.`toy` (`toy_id`, `name`, `pet_id`) VALUES (3, 'Sausage with mustard', 1);

COMMIT;

