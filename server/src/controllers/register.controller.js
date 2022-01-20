const express = require('express')

const router = express.Router()

const Register = require('../models/register.model')

router.post('/register', async (req, res) => {
    try{


        let findemail = await Register.findOne({email : req.body.email})
        let findnumber = await Register.findOne({mobile : req.body.mobile})
         
         if(findemail) {
           return res.status(401).json({msg : "Email is Already Exists"})  
         }
         
         if(findnumber){
         return res.status(401).json({msg : "Phone Number is Already Exists"}) 
         }
        let register = await Register.create(req.body)
        return res.status(200).send(register)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get('/register', async (req, res) => {
    try{

        const register = await Register.find()
        return res.status(200).send(register)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get('/:id', async(req, res) => {
    try{

        const register = await Register.findById(req.params.id)
        return res.status(200).send(register)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})



module.exports = router