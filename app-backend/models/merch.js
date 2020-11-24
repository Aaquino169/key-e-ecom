const mongoose = require('mongoose')

const merchSchema = mongoose.Schema({
    name: {type:String, require:true},
    type:{type:String, require:true},
    img: String,
    price: {type:Number, require:true},
    quantity:{type:Number, require:true},
    description: {type:String, require:true},
    reviews: []
})

const Merch = mongoose.model('Merch', merchSchema)
module.exports = Merch
