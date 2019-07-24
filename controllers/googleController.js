const axios = require('axios')
const db = require('../models')

module.exports = {
  findAll: function (req, res) {
    //  const params === req.params
    const { query: params } = req
    axios.get('https://www.googleapis.com/books/v1/volumes', { params })
      .then(results => {
        console.log(results.data)
        //
        res.json(results.data)
      })
      .catch(err => res.status(422).json(err))
  }
}
