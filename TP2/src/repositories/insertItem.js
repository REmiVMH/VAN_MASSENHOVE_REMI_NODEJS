const db = require('../services/db/connection');

const createItem = async (itemData) => {
  const itemsCollection = db.getCollection('items');
  const result = await itemsCollection.insertOne(itemData);
  return result;
};

const getItemById = async (itemId) => {
  const itemsCollection = db.getCollection('items');
  const item = await itemsCollection.findOne({ _id: itemId });
  return item;
};



module.exports = {
  createItem,
  getItemById,
};