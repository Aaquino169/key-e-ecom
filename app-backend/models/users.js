const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {type:String, require:true},
    user: {type:String, require:true},
    password: {type:String, require:true},
    cart: []
})