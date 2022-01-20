const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    mobile : {type : Number, required: true, minlength : 10, maxlength : 10},

}, {
    timestamps : true,
    versionKey : false
})

module.exports = mongoose.model('login', loginSchema )