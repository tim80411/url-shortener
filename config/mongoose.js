const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/url-shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb failed!')
})

db.once('open', () => {
  console.log('mongodb success!')
})

module.exports = db