const User = require('../../repositories/insertUser');

const insertUser = async (req, res) => {
  try {
    const { nom, prenom, age, adresse, email } = req.body;

    const newUser = await User.createUser({
      nom,
      prenom,
      age,
      adresse,
      email,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
};

module.exports = {
  insertUser,
};