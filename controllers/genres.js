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


module.exports = { getGenres }
