const db = require('../services/db/connection');

const createUser = async (userData) => {
  const usersCollection = db.collection('users');
  const result = await usersCollection.insertOne(userData);
  return result.ops[0];
};

const getUserById = async (userId) => {
  const usersCollection = db.collection('users');
  const user = await usersCollection.findOne({ _id: userId });
  return user;
};



module.exports = {
  createUser,
  getUserById,
};