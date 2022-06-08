const books = (connection, Sequelize, authors) => {
  return connection.define('books', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    authorId: {
      type: Sequelize.INTEGER,
      references: { model: authors, key: 'id' }
    }
  },
  { paranoid: true })
}

module.exports = books

