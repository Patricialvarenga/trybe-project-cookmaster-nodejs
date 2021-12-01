const connection = require('../connection');

module.exports = async (collection, filter, newUpdate) => {
  try {
    const recipeUpdate = await (await connection()).collection(collection).findOneAndUpdate(
      { ...filter },
      { $set: { ...newUpdate } },
      { returnOriginal: false },
    );
    return recipeUpdate;
  } catch (e) {
    console.log(e);
  }
};