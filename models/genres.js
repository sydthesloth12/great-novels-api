const genres = (connection, Sequelize) => {
  return connection.define('genres', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    genreType: { type: Sequelize.STRING, allowNull: false },
  })
}

module.exports = genres
