const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

// Importing routes
const studentRoutes = require('./routes/student.route')
const absenceRoutes = require('./routes/absence.route')
const justificationRoutes = require('./routes/justification.route')


const MONGO_PROD_SERVER = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@uml-db.t2cmz4v.mongodb.net/uml-db?retryWrites=true&w=majority`

const MONGO_DEV_SERVER = `mongodb://127.0.0.1:27017/${process.env.MONGO_DBNAME}`

// Create an instance of the Express.js server
const app = express()

// Setting up middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Connecting to MongoDB Atlas
mongoose.connect(process.env.IS_DEV ? MONGO_DEV_SERVER : MONGO_PROD_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas")
}).catch((error) => {
    console.log("Error connecting to MongoDB Atlas", error)
})

// Setting up routes
app.use('/', studentRoutes)
app.use('/', absenceRoutes)
app.use('/', justificationRoutes)

// Starting the server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
