const express = require('express')
const { getAllAuthors, getAuthorBySearchTermWithBooksGenres } = require('./controllers/authors')
const { getGenres, getGenreByIdWithBooksAuthors } = require('./controllers/genres')
const { getAllBooksWithAuthorGenres, getBookByIdWithAuthorGenres } = require('./controllers/books')
const app = express()

app.get('/authors', getAllAuthors)
app.get('/genres', getGenres)
app.get('/authors/:searchTerm', getAuthorBySearchTermWithBooksGenres)
app.get('/genres/:id', getGenreByIdWithBooksAuthors)
app.get('/books', getAllBooksWithAuthorGenres)
app.get('/books/:id', getBookByIdWithAuthorGenres)

app.get('*', (req, res) => {
  return res.status(404).send('Page not found. Try /authors or /books or /genres.')
})

app.listen(1337, () => {
  console.log('listening @ http://localhost:1337')// eslint-disable-next-line no-console
})
