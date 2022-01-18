const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    food_name : {type : String, required :true},
    restaurent : {type : String, required : false},
    location : {type : String, required : false},
    price : {type : String, required : true},
    food_type : {type : String, required : true},
    description : {type : String, required : true},
    image : {type : String, required: true}
})


