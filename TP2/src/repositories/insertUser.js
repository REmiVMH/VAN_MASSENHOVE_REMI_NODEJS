const db = require('../services/db/connection');

const createUser = async (userData) => {
  const usersCollection = db.getCollection('users');
  const result = await usersCollection.insertOne(userData);
  return result;
};

const getUserById = async (userId) => {
  const usersCollection = db.getCollection('users');
  const user = await usersCollection.findOne({ _id: userId });
  return user;
};



module.exports = {
  createUser,
  getUserById,
};