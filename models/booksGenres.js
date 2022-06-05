const booksGenres = (connection, Sequelize, books, genres) => {
  return connection.define('booksGenres', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    booksId: {
      type: Sequelize.INTEGER,
      references: { model: books, key: 'id' }
    },
    genreId: {
      type: Sequelize.INTEGER,
      references: { model: genres, key: 'id' }
    }
  })
}

module.exports = booksGenres

