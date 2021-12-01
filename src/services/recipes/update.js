const { ObjectId } = require('mongodb');
const recipe = require('../../models/document')('recipes');

// Essa parte foi baseada no repositório : https://github.com/tryber/sd-012-cookmaster/pull/39/commits
module.exports = async (recipeId, newRecipe, user) => {
     try {
        const validRecipe = await recipe.find(new ObjectId(recipeId));
        const { role, _id: userId } = user;

        if (role === 'admin' || userId === validRecipe.userId) {
            const update = await recipe.update(validRecipe, newRecipe);
            return update.value;
        }
        return { err: { code: 'invalidEntries' } };
    } catch (e) {
        console.error(e);
    }
};