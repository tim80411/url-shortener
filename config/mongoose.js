const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/url-shortener'

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb failed!')
})

db.once('open', () => {
  console.log('mongodb success!')
})

module.exports = db