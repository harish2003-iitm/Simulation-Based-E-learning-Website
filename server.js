const express = require('express')
const mongoose = require('mongoose')
const userroutes = require('./routes/users')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes

