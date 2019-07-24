export default {
  // Gets all books
  getBooks: function (q) {
    return fetch(`/api/google?q=title:${q}`)
  },
  // Gets the book with the given id
  getSavedBooks: function () {
    return fetch('/api/books')
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return fetch('/api/books/' + id, {
      method: 'DELETE'
    })
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookData)
    })
  }
}
