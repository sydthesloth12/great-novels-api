const models = require('../models')

const getAuthors = async (req, res) => {
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

module.exports = { getAuthors, getAuthorById }
