const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : {type : String, required :true},
    rating : {type : Number, required : true},
    location : {type : String, required : false},
    price : {type : Number, required : true},
    veg : {type : Boolean, required : true},
    best_seller : {type : Boolean, required : true},
    description : {type : String, required : true},
    img_url : {type : String, required: true},
    category : {type : String, required : true},
    average_time : {type : Number, required : true}
})

module.exports = mongoose.model('product', productSchema)

