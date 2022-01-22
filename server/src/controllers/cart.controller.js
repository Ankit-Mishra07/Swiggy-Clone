const express = require('express')

const router = express.Router()

const Cart = require('../models/cart.model')

router.post("/", async(req, res) => {
    try {

        const cart = await Cart.create(req.body)
        return res.status(200).send(cart)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/", async (req, res) => {
    try {

        const cart = await Cart.find()
        return res.status(200).send(cart)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.delete("/:id", async (req, res) => {
    try {

        const cart = await Cart.findByIdAndDelete(req.params.id)
        return res.status(200).send(cart)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})
module.exports = router
