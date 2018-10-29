const express = require('express')
const cors = require('cors')
const app = express()

//Para liberar Cors:
const corsOptions = {
  origin: true,
  allowedHeaders: ['Content-Type']
}
app.use(cors())

//Para o express aceitar o body num request:
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(require('./routes'))

app.listen(process.env.PORT || 8080)
console.log('Server started =)')