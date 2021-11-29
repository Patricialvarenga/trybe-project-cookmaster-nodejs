const connection = require('../connection');

module.exports = async (collection, filter = {}) => {
  try {
    const find = await (await connection()).collection(collection).findOne(filter);
    return find;
  } catch (e) {
    console.log(e);
  }
};