const express = require('express');
// const { findUser } = require('../controllers/users/');
const { insertUser } = require('../controllers/users/insertUser');
const router = express.Router();

// router.get('/user', findUser);
router.post('/insertuser', insertUser);

module.exports = router;