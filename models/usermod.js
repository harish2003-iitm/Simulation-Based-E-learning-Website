const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
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

//static method-signup
userschema.statics.signup = async function(email, password) {
    //validation
    if (!email || !password) {
        throw Error('Please fill out all fields.')
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid Email')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('The password is not strong enough.')
    }
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already registered.')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({ email, password: hash })
    return user
}

//static method-login
userschema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('Please fill out all fields.')
    }
    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Invalid login credentials')
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Invalid login credentials')
    }
    return user
}

module.exports = mongoose.model('User', userschema)