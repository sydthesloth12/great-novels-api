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

INSERT INTO authors (firstName, lastName) VALUES ("Arthur", "Miller");
INSERT INTO authors (firstName, lastName) VALUES ("Alexandre", "Dumas");
INSERT INTO authors (firstName, lastName) VALUES ("Charles", "Dickens");
INSERT INTO authors (firstName, lastName) VALUES ("George", "Orwell");
INSERT INTO authors (firstName, lastName) VALUES ("Oscar", "Wilde");

insert into books (title, authorId) VALUES ("Dracula", 2);

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

insert into books (title, authorId) VALUES ("War and Peace", 1);
insert into books (title, authorId) VALUES ("Three Musketeers", 3);
insert into books (title, authorId) VALUES ("Crime and Punishment", 4);
insert into books (title, authorId) VALUES ("Animal Farm", 5);


insert into booksGenres (bookId, genreId) VALUES (1,4);
insert into booksGenres (bookId, genreId) VALUES (1,1);
insert into booksGenres (bookId, genreId) VALUES (1,2);

insert into booksGenres (bookId, genreId) VALUES (2,4);
insert into booksGenres (bookId, genreId) VALUES (2,5);
insert into booksGenres (bookId, genreId) VALUES (2,6);
insert into booksGenres (bookId, genreId) VALUES (2,7);

insert into booksGenres (bookId, genreId) VALUES (4,4);
insert into booksGenres (bookId, genreId) VALUES (4,5);
insert into booksGenres (bookId, genreId) VALUES (4,8);
insert into booksGenres (bookId, genreId) VALUES (4,9);

insert into booksGenres (bookId, genreId) VALUES (5,4);
insert into booksGenres (bookId, genreId) VALUES (5,7);
insert into booksGenres (bookId, genreId) VALUES (5,10);


insert into booksGenres (bookId, genreId) VALUES (6,4);
insert into booksGenres (bookId, genreId) VALUES (6,11);
insert into booksGenres (bookId, genreId) VALUES (6,12);