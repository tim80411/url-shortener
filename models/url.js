const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UrlSchena = new Schema({
  redirectUrl: {
    type: String,
    unique: true,
    match: [/((http|https):\/\/)([\w]+\.)/, '不符合網址格式 ex: https://www.google.com'],
    require: true
  },
  shortenUrl: {
    type: String,
    unique: true,
    require: true
  }
})

module.exports = mongoose.model('url', UrlSchena)