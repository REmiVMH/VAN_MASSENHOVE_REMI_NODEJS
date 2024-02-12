const express = require('express')
const app = express()
const router = express.Router()
const userrouter=require("./users")
const itemrouter=require("./items")
const watchlistrouter=require("./watchlists")

app.use(express.json())

app.use("/users",userrouter)
app.use("/items",itemrouter)
app.use("/watchlists",watchlistrouter)

module.exports=app