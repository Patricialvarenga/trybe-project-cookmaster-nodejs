const recipes = require('../../models/document')('recipes');

module.exports = async () => {
    try {
        const recipesList = await recipes.list();
        return recipesList;
    } catch (e) {
        console.log(e);
    }    
};