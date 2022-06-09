const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')
const authorsModel = require('./authors')
const genresModel = require('./genres')
const booksModel = require('./books')
const booksGenresModel = require('./booksGenres')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]


const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
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
  Op: Sequelize.Op,
}
