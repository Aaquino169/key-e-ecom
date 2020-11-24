const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const cors = require('cors')
const bodyParser = require("body-parser")
const app = express()


const port = 8000

const whitelist = ["http://localhost:3000"]
const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }, credentials: true
}

app.use(cors(corsOptions))

app.use(bodyParser.json());


//middleware for sessions
app.use( session({ secret: 'i love shopping',resave: false,saveUninitialized: false}))



//middleware for mongoose
mongoose.connect('mongodb://localhost:27017/store_db', { useNewUrlParser:true })
mongoose.connection.once('open', () => {
    console.log('connected to db')
})
mongoose.connection.on('error', err =>console.log(err.message))
mongoose.connection.on('disconnected', () =>console.log('mongo disconnected'))

const storeController = require('./controllers/store')
app.use('/', storeController)

const usersController = require('./controllers/users')
app.use('/user', usersController)

const sessionsController = require('./controllers/session')
app.use('/login', sessionsController)

app.listen(port, () => {
    console.log('app is running on port:',port)
})
