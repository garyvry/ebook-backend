require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log('hello World!')
  res.status(200).send('Hello World!')
})

app.listen(port, () => {
  console.log('Started on port ' + port)
})

module.exports = { app }
