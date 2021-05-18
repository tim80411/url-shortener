const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('success')
})



app.listen(3000, () => {
  console.log('this app is running on http://localhost:3000')
})