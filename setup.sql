drop database if exists novels;

CREATE DATABASE if not exists novels;

create user if not exists 'novels'@'localhost' IDENTIFIED BY 'novels1234';

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
    createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
    primary key(id)
    
);

CREATE TABLE booksGenres (
	id int auto_increment,
    bookId INT,
    genreId INT, 
    createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME,
    primary key (id),
    foreign key (bookId) references books(id),
    foreign key (genreId) references genres(id)
 );

INSERT INTO authors (firstName, lastName) VALUES ("Bram", "Stoker");
INSERT INTO authors (firstName, lastName) VALUES ("Leo", "Tolstoy");
INSERT INTO authors (firstName, lastName) VALUES ("Alexandre", "Dumas");
INSERT INTO authors (firstName, lastName) VALUES ("Fyodor", "Dostoyevsky");
INSERT INTO authors (firstName, lastName) VALUES ("George", "Orwell");


insert into genres (genreType) VALUES ("Fiction");
insert into genres (genreType) VALUES ("Horror");
insert into genres (genreType) VALUES ("Fantasy");
insert into genres (genreType) VALUES ("Historical Fiction");
insert into genres (genreType) VALUES ("War");
insert into genres (genreType) VALUES ("Russian Literature");
insert into genres (genreType) VALUES ("Adventure");
insert into genres (genreType) VALUES ("French Literature");
insert into genres (genreType) VALUES ("Mystery");
insert into genres (genreType) VALUES ("Science Fiction");
insert into genres (genreType) VALUES ("Dystopia");

insert into books (title, authorId) VALUES ("Dracula", 1);
insert into books (title, authorId) VALUES ("War and Peace", 2);
insert into books (title, authorId) VALUES ("Three Musketeers", 3);
insert into books (title, authorId) VALUES ("Crime and Punishment", 4);
insert into books (title, authorId) VALUES ("Animal Farm", 5);


insert into booksGenres (bookId, genreId) VALUES (1,1);
insert into booksGenres (bookId, genreId) VALUES (1,2);
insert into booksGenres (bookId, genreId) VALUES (1,3);

insert into booksGenres (bookId, genreId) VALUES (2,1);
insert into booksGenres (bookId, genreId) VALUES (2,4);
insert into booksGenres (bookId, genreId) VALUES (2,5);
insert into booksGenres (bookId, genreId) VALUES (2,6);

insert into booksGenres (bookId, genreId) VALUES (3,1);
insert into booksGenres (bookId, genreId) VALUES (3,4);
insert into booksGenres (bookId, genreId) VALUES (3,7);
insert into booksGenres (bookId, genreId) VALUES (3,8);

insert into booksGenres (bookId, genreId) VALUES (4,1);
insert into booksGenres (bookId, genreId) VALUES (4,6);
insert into booksGenres (bookId, genreId) VALUES (4,9);


insert into booksGenres (bookId, genreId) VALUES (5,1);
insert into booksGenres (bookId, genreId) VALUES (5,10);
insert into booksGenres (bookId, genreId) VALUES (5,11);