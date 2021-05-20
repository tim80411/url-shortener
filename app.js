const express = require('express')
const exphbs = require('express-handlebars')
const Url = require('./models/url.js')
const helpers = require('./config/helpers')
const bodyParser = require('body-parser')
const myFunctions = require('./config/myFunctions')

const DOMAIN = process.env.DOMAIN || 'http://localhost:3000'
const PORT = process.env.PORT || 3000

const app = express()

require('./config/mongoose')

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers
}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {

  res.render('index')
})

app.post('/', async (req, res) => {
  const redirectUrl = req.body.url
  const isExist = await Url.exists({ redirectUrl })


  let shortenUrl = ''

  if (isExist) {
    return Url.findOne({ redirectUrl })
      .lean()
      .then(urlFound => {
        shortenUrl = `${DOMAIN}/${urlFound.shortenUrl}`
        res.render('finish', { shortenUrl })
      })
  } else {
    shortenUrl = myFunctions.generateRandom()
    return Url.find()
      .lean()
      .then(urls => {
        while (urls.some(url => url.shortenUrl === shortenUrl)) {
          shortenUrl = myFunctions.generateRandom()
        }
        return Url.create({ redirectUrl, shortenUrl })
          .then(() => {
            shortenUrl = `${DOMAIN}/${shortenUrl}`
            res.render('finish', { shortenUrl })
          })
          .catch(err => {
            console.log(err)
            const errmsg = err.errors.redirectUrl.properties.message
            res.render('index', { errmsg })
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
})

app.get('/:url', (req, res) => {
  const shortenUrl = req.params.url

  return Url.findOne({ shortenUrl })
    .lean()
    .then(url => {
      res.redirect(url.redirectUrl)
    })
})

app.listen(PORT, () => {
  console.log(`this app is running on ${DOMAIN}`)
})

