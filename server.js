const express = require('express')
const mongoose = require('mongoose')
const app = express()
const passport = require('passport')
const session = require('express-session')
const PORT = 2022
// const MongoStore = require('connect-mongo')(session)
// const flash = require('express-flash')
// const logger = require('morgan')
// const connectDB = require('./config/database')
// const mainRoutes = require('./routes/main')
// const todoRoutes = require('./routes/todos')
// const cors = require("cors")
// const passportLocalMongoose = require("passport-local-mongoose")
// const async = require("async")

// app.set('view engine', 'ejs')
// app.use(cors())
// app.use(express.static('public'))
// app.use(express.urlencoded({extended: true}))
// app.use(express.json())
// app.use(logger('dev'))

// app.listen(process.env.PORT || PORT, ()=>{
//     console.log(`Server running on port ${PORT}`)
// })
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})