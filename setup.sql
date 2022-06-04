CREATE DATABASE novels;

create USER 'novels'@'localhost' IDENTIFIED BY 'novels1234';

GRANT ALL ON novels.* TO 'novels'@'localhost';

USE novels; 

CREATE TABLE authors (
	id INT auto_increment,
    firstName VARCHAR(225),
    lastName VARCHAR(225),
    createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
    primary key(id)
);
