require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userroutes = require('./routes/users')
const app = express()
const mongdb = 'mongodb+srv://E-learn52:BuildA299@e-learningbuildathon.4hlh2qa.mongodb.net/Backend?retryWrites=true&w=majority' 
mongoose.connect(mongdb)
.then((result) => app.listen(4000))
.catch((err) => console.log(err))

//express.json helps parse json files
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/user', userroutes)

