const mongoose = require('mongoose')

//schema
const Schema = mongoose.Schema

const userschema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userschema)