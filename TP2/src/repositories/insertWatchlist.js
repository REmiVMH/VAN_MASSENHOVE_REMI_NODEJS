const db = require('../services/db/connection');

const createWatchlist = async (watchlistData) => {
  const watchlistsCollection = db.getCollection('watchlists');
  const result = await watchlistsCollection.insertOne(watchlistData);
  return result;
};

const getWatchlistById = async (watchlistId) => {
  const watchlistsCollection = db.getCollection('watchlists');
  const watchlist = await watchlistsCollection.findOne({ _id: watchlistId });
  return watchlist;
};



module.exports = {
  createWatchlist,
  getWatchlistById,
};