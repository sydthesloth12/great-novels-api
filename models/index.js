const Sequelize = require('sequelize')
const authorsModel = require('./authors')
const genresModel = require('./genres')
const booksModel = require('./books')
const booksGenresModel = require('./booksGenres')


const connection = new Sequelize('novels', 'novels', 'novels1234', {
  host: 'localhost',
  dialect: 'mysql',
})

const authors = authorsModel(connection, Sequelize)
const genres = genresModel(connection, Sequelize)
const books = booksModel(connection, Sequelize)
const booksGenres = booksGenresModel(connection, Sequelize)

authors.hasMany(books)
books.belongsTo(authors)

genres.belongsToMany(books, { through: booksGenres })
books.belongsToMany(genres, { through: booksGenres })

module.exports = {
  authors,
  genres,
  books,
  booksGenres,
}
