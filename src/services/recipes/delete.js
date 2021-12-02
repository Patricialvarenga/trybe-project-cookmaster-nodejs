const { ObjectId } = require('mongodb');
const recipe = require('../../models/document')('recipes');

module.exports = async (recipeId) => {
    try {
       const deleteRecipe = await recipe.remove({ _id: new ObjectId(recipeId) });
       return deleteRecipe;
   } catch (e) {
       console.error(e);
   }
};