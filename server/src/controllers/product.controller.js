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
        let category = req.query.category
        let products;
        if(category) {
         products = await Product.find({category : category})
        }else {

            products = await Product.find()
        }
        return res.status(200).send(products)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})
router.get('/:id', async(req, res) => {
    try{

        const products = await Product.findById(req.params.id)
        return res.status(200).send(products)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})



module.exports = router
