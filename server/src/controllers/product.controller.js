const express = require('express')

const Product = require('../models/product.model')
const router = express.Router()

router.post('/', async(req, res) => {
    try{
        const product = await Product.create(req.body) 
        return res.status(200).send(product)
    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get('/', async(req, res) => {
    try{

        const products = await Product.find()
        return res.status(200).send(products)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})
