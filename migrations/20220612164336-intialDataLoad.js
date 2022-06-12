'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('authors', [
      {firstName: "Bram", lastName: "Stoker",},
      {firstName: "Leo", lastName: "Tolstoy",},
      {firstName: "Alexandre", lastName: "Dumas",},
      {firstName: "Fyodor", lastName: "Dostoyevsky",},
      {firstName: "George", lastName: "Orwell",},
    ])
    await queryInterface.bulkInsert('genres', [
      {genreType: "Fiction"},
      {genreType: "Horror"},
      {genreType: "Fantasy"},
      {genreType: "Historical Fiction"},
      {genreType: "War"},
      {genreType: "Russian Literature"},
      {genreType: "Adventure"},
      {genreType: "French Literature"},
      {genreType: "Mystery"},
      {genreType: "Science Fiction"},
      {genreType: "Dystopia"},
    ])
    await queryInterface.bulkInsert('books', [
      {title: "Dracula", authorId: 1},
      {title: "War and Peace", authorId: 2},
      {title: "Three Musketeers", authorId: 3},
      {title: "Crime and Punishment", authorId: 4},
      {title: "Animal Farm", authorId: 5},
    ])

    return queryInterface.bulkInsert('booksGenres', [
      {bookId: 1, genreId: 1},
      {bookId: 1, genreId: 2},
      {bookId: 1, genreId: 3},

      {bookId: 2, genreId: 1},
      {bookId: 2, genreId: 4},
      {bookId: 2, genreId: 5},
      {bookId: 2, genreId: 6},

      {bookId: 3, genreId: 1},
      {bookId: 3, genreId: 4},
      {bookId: 3, genreId: 7},
      {bookId: 3, genreId: 8},

      {bookId: 4, genreId: 1},
      {bookId: 4, genreId: 6},
      {bookId: 4, genreId: 9},

      {bookId: 5, genreId: 1},
      {bookId: 5, genreId: 10},
      {bookId: 5, genreId: 11},
    ])
  },

  async down (queryInterface) {
    await queryInterface.dropTable('authors')
    await queryInterface.dropTable('genres')
    await queryInterface.dropTable('books')
    await queryInterface.dropTable('booksGenres')
  }
};