require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const TopicRoutes = require('./routes/topics')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/topics', TopicRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('connected to mongodb & listeneing on port ', process.env.PORT)
        })
    }).catch((err) => {
        console.log(err)
    })

