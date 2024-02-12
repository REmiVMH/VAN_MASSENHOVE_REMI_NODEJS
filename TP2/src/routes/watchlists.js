const express = require('express');
// const { findWatchlist } = require('../controllers/watchlists/');
const { insertWatchlist } = require('../controllers/watchlists/insertWatchlist');
const router = express.Router();

// router.get('/watchlist', findWatchlist);
router.post('/insertwatchlist', insertWatchlist);

module.exports = router;