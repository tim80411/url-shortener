const Url = require('../url')
const db = require('../../config/mongoose')

const seeds = [
  {
    redirectUrl: 'https://www.google.com.tw/',
    shortenUrl: 'abcd1'
  },
  {
    redirectUrl: 'https://github.com/',
    shortenUrl: 'abce2'
  }
]

db.once('open', () => {
  console.log('start making seed')

  let dbCloseCount = 0

  seeds.forEach(seed => {
    return Url.create(seed)
      .then(() => {
        dbCloseCount++
        if (dbCloseCount === seeds.length) {
          return db.close()
            .then(() => {
              console.log('db close!')
            })
            .catch(err => {
              console.error(err)
            })
        }
      })
      .catch(() => {
        dbCloseCount++
        if (dbCloseCount === seeds.length) {
          return db.close()
            .then(() => {
              console.log('db close!')
            })
            .catch(err => {
              console.error(err)
            })
        }
      })
  })
})
