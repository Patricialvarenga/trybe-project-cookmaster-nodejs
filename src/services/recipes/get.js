const { ObjectId } = require('mongodb');
const recipe = require('../../models/document')('recipes');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    return { err: { code: 'RecipeNotFound' } };
  }
  try {
    const recipes = await recipe.find(new ObjectId(id));
    if (!recipes) {
      return { err: { code: 'RecipeNotFound' } };
    }
    return recipes;
  } catch (e) {
    console.log(e);
  }
};
