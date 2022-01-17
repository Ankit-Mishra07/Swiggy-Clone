const express = require('express')

const router = express.Router()

const Register = require('../models/register.model')

router.post('/register', async (req, res) => {
    try{

        const register = await Register.create(req.body)
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