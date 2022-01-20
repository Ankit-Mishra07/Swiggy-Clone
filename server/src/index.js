const express = require("express")
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())


const registerController = require('./controllers/register.controller')
const loginController = require('./controllers/login.controller')

const productController = require('./controllers/product.controller')
const cartController = require('./controllers/cart.controller')
app.use("/user", registerController)
app.use("/login", loginController)
app.use('/products', productController)
app.use('/cart', cartController)


module.exports = app