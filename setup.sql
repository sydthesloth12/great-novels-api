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


CREATE TABLE books (
	id INT auto_increment,
    title VARCHAR(225),
    createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
	PRIMARY KEY(id),
    authorId INT, 
    FOREIGN KEY (authorId) REFERENCES authors(id)
);

CREATE TABLE genres (
	id int auto_increment,
    genreType VARCHAR(225),
    primary key(id)
);

CREATE TABLE booksGenres (
	id int auto_increment,
    bookId INT,
    genreId INT, 
    primary key (id),
    foreign key (bookId) references books(id),
    foreign key (genreId) references genres(id)
 );