const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name : {type : String, required: true},
    mobile : {type : String, required: true, minlength : 10, maxlength : 10, unique : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    referral : {type : String, required : false}
}, {
    timestamps : true,
    versionKey : false
})

module.exports = mongoose.model('register', registerSchema)



