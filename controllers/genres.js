const models = require('../models')

const getGenres = async (req, res) => {
  try {
    const { genres } = req.params

    const genre = await models.genres.findAll()

    return genre
      ? res.send(genre)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const getGenreByIdWithBooksAuthors = async (req, res) => {
  try {
    const { id } = req.params
    const genre = await models.genres.findOne({
      where: { id },
      include: [{
        model: models.books,
        include: [{
          model: models.authors,
        }]
      }]
    })

    return genre
      ? res.status(200).send(genre)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getGenres, getGenreByIdWithBooksAuthors }
