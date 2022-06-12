const models = require('../models')

const getAllBooksWithAuthorGenres = async (req, res) => {
  try {
    const allBooks = await models.books.findAll({
      include: [{ model: models.authors }, { model: models.genres }]
    })

    return allBooks
      ? res.status(200).send(allBooks)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const getBookbySearchOrIdWithAuthorsGenres = async (req, res) => {
  try {
    const { searchTerm } = req.params
    const book = await models.books.findAll({
      where: {
        [models.Op.or]: [
          { title: { [models.Op.like]: `%${searchTerm}%` } },
          { id: searchTerm },
        ]
      },
      include: [{ model: models.authors }, { model: models.genres }]
    })

    return book.length
      ? res.status(200).send(book)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getAllBooksWithAuthorGenres, getBookbySearchOrIdWithAuthorsGenres }
