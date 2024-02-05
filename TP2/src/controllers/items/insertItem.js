const Item = require('../../repositories/insertItem');

const insertItem = async (req, res) => {
  try {
    const { iditem, titre, realisateur, annee, genre, duree, note } = req.body;

    const newItem = await Item.createItem({
        iditem,
        titre,
        realisateur,
        annee,
        genre,
        duree,
        note
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error('Erreur lors de la création de l\'item :', error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'item' });
  }
};

module.exports = {
  insertItem,
};