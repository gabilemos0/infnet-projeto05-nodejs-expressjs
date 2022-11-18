const express = require('express')
const app = express()
const port = 3000
const db = require('./db.js')
const session = require('express-session')
require('dotenv').config()

//Rotas
const user = require('./routes/user')
const auth = require('./routes/auth')
const product = require('./routes/product')
const category = require('./routes/category')

app.use(express.json())
app.use(
  session({
    secret:
      'a30c22464b53845671684283fce86434fd459a1bc185c23c64a022e09c654dbc711ac574e4466fefda9a3715853483e402558ba95ccd6d74f5dc52480c2d1e97',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      maxAge: 1000 * 60 * 30
    }
  })
)

app.use('/user', user)
app.use('/auth', auth)
app.use('/product', product)
app.use('/category', category)

db.sync(() => console.log('Banco de dados rodando'))

app.listen(port, function () {
  console.log('Aplicação rodando')
})
