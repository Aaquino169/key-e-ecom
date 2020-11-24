const mongoose = require('mongoose')
const Merch = require("../models/merch")

const userSchema = mongoose.Schema({
    username: {type:String, require:true},
    password: {type:String, require:true},
    cart: [Merch.schema],
    orderHistory:[]
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users
