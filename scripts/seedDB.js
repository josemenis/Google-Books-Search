const mongoose = require('mongoose')
const db = require('../models')

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  // Name of database, check ROBO3T
  'mongodb://localhost/googlebooks'
)

const Book = [{
  title: 'cygvjhbk',
  subtitle: 'vghbjk',
  authors: ['ghbjn', 'tcfgvhbj'],
  description: 'fgvhbjnkm',
  image: 'dfcvgbhj',
  link: 'rydtfjgk',
  googleId: '12, 34'
}]

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(Book))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
