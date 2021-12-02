const statusCodes = require('../statusCodes.json');
const service = require('../../services/recipes');

const errosSituations = {
  authNotFound: { err: {
    code: 'unauthorized',
    message: 'missing auth token',
  } },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleteRecipe = await service.remove(id);
    if (deleteRecipe.err) {
      return next(errosSituations[deleteRecipe.err.code]);
    }
    res.status(statusCodes.noContent).json(deleteRecipe);
  } catch (e) {
    console.error(e);
  }
};