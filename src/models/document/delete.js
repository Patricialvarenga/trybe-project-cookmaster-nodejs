const connection = require('../connection');

module.exports = async (collection, filter) => {
  try {
    const recipeDeleted = await (await connection())
    .collection(collection).deleteOne(filter);
    return recipeDeleted;
  } catch (e) {
    console.log(e);
  }
};