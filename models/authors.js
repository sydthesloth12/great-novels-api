const authors = (connection, Sequelize) => {
  return connection.define('authors', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
  },
  { paranoid: true })
}

module.exports = authors