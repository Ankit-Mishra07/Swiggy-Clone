const express = require('express')

const router = express.Router()
const Register = require('../models/register.model')

router.post('/', async (req, res) => {
    try {


       let login = await Register.findOne({mobile : req.body.mobile})
        if(login) {
            return res.status(200).send(login)
        }
        return res.status(200).send({msg : 'User does not exists'})

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

module.exports = router