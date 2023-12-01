const express = require('express')
const cors = require('cors')

const app = express()

// use dotenv
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 3001

// get routes
app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/send-mails-to-recipients', (req, res) => {
  console.log(req.body.message[0].blocks)

  res.statusCode = 200
  res.send(req.body)
})

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Server is running on port ${PORT}`)
)
