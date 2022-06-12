const models = require('../models')

const getAllAuthors = async (req, res) => {
  try { 
    const { authors } = req.params

    const author = await models.authors.findAll()

    return author
    ? res.send(author)
    : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  } 
}

const getAuthorBySearchTermWithBooksGenres = async (req, res) => {
  try {
    const { searchTerm } = req.params
    const author = await models.authors.findAll({
      where: {
        [models.Op.or]: [
          { lastName: { [models.Op.like]: `%${searchTerm}%` } },
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

    return author.length
      ? res.status(200).send(author)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}


module.exports = { getAllAuthors, getAuthorBySearchTermWithBooksGenres }
