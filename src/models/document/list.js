const connection = require('../connection');

module.exports = async (collection, filter) => {
  try {
    const allRecipes = await (await connection()).collection(collection).find(filter).toArray();
    return allRecipes;
  } catch (e) {
    console.log(e);
  }
};