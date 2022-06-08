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

const getBookByIdWithAuthorGenres = async (req, res) => {
  try {
    const { id } = req.params
    const book = await models.books.findOne({
      where: { id },
      include: [{ model: models.authors }, { model: models.genres }]
    })

    return book
      ? res.status(200).send(book)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getAllBooksWithAuthorGenres, getBookByIdWithAuthorGenres }
