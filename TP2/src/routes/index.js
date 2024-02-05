const express = require('express')
const app = express()
const userrouter=require("./users")

app.use("/users",userrouter)

module.exports=app