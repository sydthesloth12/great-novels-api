const models = require('../models')

const getAuthorBySearchTermWithBooksGenres = async (req, res) => {
  try {
    const { searchTerm } = req.params
    const author = await models.authors.findAll({
      where: {
        [models.Op.or]: [
          { nameLast: { [models.Op.like]: `%${searchTerm}%` } },
          { id: searchTerm },
        ]
      },
      include: [{
        model: models.books,
        include: [{
          model: models.genres,
        }]
      }]
    })

    return res.send(author)
      ? res.status(200).send(author)
      : res.sendStatus(404)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) return res.sendStatus(404)

    const foundAuthor = await models.authors.findOne({
      where: { id },
    })


    if (!foundAuthor) return res.sendStatus(404)

    return res.send(foundAuthor)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getAuthorById, getAuthorBySearchTermWithBooksGenres }
