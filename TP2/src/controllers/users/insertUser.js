const User = require('../../repositories/insertUser');

const insertUser = async (req, res) => {
  try {
    const { nom, prenom, age, adresse, email } = req.body;

    const newUser = new User({
      nom,
      prenom,
      age,
      adresse,
      email,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
};

module.exports = {
  insertUser,
};