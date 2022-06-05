const Sequelize = require('sequelize')
const authorsModel = require('./authors')

const connection = new Sequelize('novels', 'novels', 'novels1234', {
  host: 'localhost',
  dialect: 'mysql',
})

const authors = authorsModel(connection, Sequelize)

module.exports = {
  authors,
}
