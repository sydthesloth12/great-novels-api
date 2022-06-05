const express = require('express')
const { getAuthors, getAuthorById } = require('./controllers/authors')
const { getGenres } = require('./controllers/genres')
const app = express()

app.get('/authors', getAuthors)
app.get('/genre', getGenres)
app.get('/authors/:id', getAuthorById)

app.get('/genres', getGenres)

app.listen(1337, () => {
  console.log('listening @ http://localhost:1337')// eslint-disable-next-line no-console
})
