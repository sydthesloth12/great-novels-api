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

const getAuthorByLastNameFuzzy = async (req, res) => {
  try {
    const { lastName } = req.params

    if (!lastName) return res.sendStatus(404)

    const foundAuthor = await models.authors.findOne({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      where: {
        lastName: { [models.Op.like]: `%${lastName}%` }
      },
      include: [{ model: models.books, attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } }]
    })



    if (!foundAuthor) return res.sendStatus(404)

    return res.send(foundAuthor)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

module.exports = { getAuthors, getAuthorByLastNameFuzzy }
