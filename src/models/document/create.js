const connection = require('../connection');

module.exports = async (collection, entity) => {
  try {
    const inserted = await (await connection()).collection(collection).insertOne(entity);
    return inserted;
  } catch (e) {
    console.log(e);
  }
};