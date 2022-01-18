const express = require("express")
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())


const registerController = require('./controllers/register.controller')
const loginController = require('./controllers/login.controller')

const productController = require('./controllers/product.controller')
app.use("/user", registerController)
app.use("/user", loginController)
app.use('/products', productController)


module.exports = app