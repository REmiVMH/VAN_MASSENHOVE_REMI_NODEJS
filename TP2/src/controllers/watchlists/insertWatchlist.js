const Watchlist = require('../../repositories/insertWatchlist');

const insertWatchlist = async (req, res) => {
  try {
    const { idwatchlist, idproprietaire, items} = req.body;

    const newWatchlist = await Watchlist.createWatchlist({
      idwatchlist,
      idproprietaire,
      items
    });

    res.status(201).json(newWatchlist);
  } catch (error) {
    console.error('Erreur lors de la création de la watchlist :', error);
    res.status(500).json({ error: 'Erreur lors de la création de la watchlist' });
  }
};

module.exports = {
  insertWatchlist,
};