const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UrlSchena = new Schema({
  redirectUrl: {
    type: String
  },
  shortenUrl: {
    type: String
  }
})

module.exports = mongoose.model('url', UrlSchena)