const connection = require('../connection');

module.exports = async (collection, entity) => {
  try {
    const created = await (await connection()).collection(collection).insertOne(entity);
    return created;
  } catch (e) {
    console.error(e);
  }
};