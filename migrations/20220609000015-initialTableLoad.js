'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('genres', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      genreType: { type: Sequelize.STRING, allowNull: false },
    })

    await queryInterface.createTable('books', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING },
      authorId: {
        type: Sequelize.INTEGER,
        references: { model: "authors", key: 'id' }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('booksGenres', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      bookId: {
        type: Sequelize.INTEGER,
        references: { model: "books", key: 'id' }
      },
      genreId: {
        type: Sequelize.INTEGER,
        references: { model: "genres", key: 'id' }
      }
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('authors')
    await queryInterface.dropTable('genres')
    await queryInterface.dropTable('books')
    await queryInterface.dropTable('booksGenres')
  }
}
