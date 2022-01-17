const express = require("express")
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())


const registerController = require('./controllers/register.controller')
app.use("/user", registerController)



module.exports = app