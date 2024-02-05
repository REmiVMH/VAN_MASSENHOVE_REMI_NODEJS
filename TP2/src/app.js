const app=require("./routes/index.js")
const port = 3000
const { connectTodB } = require('./services/db/connection.js');
const { findOne, find, insertOne, insertMany, updateOne, updateMany, replace, deleteOne, deleteMany } = require('./services/db/crud');

const express = require('express')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectTodB();
})



