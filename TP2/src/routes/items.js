const express = require('express');
// const { findItem } = require('../controllers/item/');
const { insertItem } = require('../controllers/items/insertItem');
const router = express.Router();

// router.get('/item', findItem);
router.post('/insertItem', insertItem);

module.exports = router;