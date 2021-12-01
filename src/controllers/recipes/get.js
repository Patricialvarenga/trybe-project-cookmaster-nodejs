const statusCodes = require('../statusCodes.json');
const service = require('../../services/recipes');

const errosSituations = {
  RecipeNotFound: { err: {
    code: 'not_found',
    message: 'recipe not found',
  } },
};

module.exports = async (req, res, next) => {
    const { id } = req.params;
   try {
    const recipeFound = await service.get(id);
   if (recipeFound.err) {
     return next(errosSituations[recipeFound.err.code]);
   }
       res.status(statusCodes.ok).json(recipeFound);
   } catch (e) {
     console.log(e);
   }
  };