const statusCodes = require('../statusCodes.json');
const service = require('../../services/recipes');

const errosSituations = {
  authNotFound: { err: {
    code: 'unauthorized',
    message: 'missing auth token',
  } },
  invalidToken: { err: {
    code: 'unauthorized',
    message: 'jwt malformed',
  } },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  const { name, ingredients, preparation } = req.body;

  try {
    const recipeUpdated = await service.update(id, { name, ingredients, preparation }, user);
    if (recipeUpdated.err) {
      return next(errosSituations[recipeUpdated.err.code]);
    }

    res.status(statusCodes.ok).json(recipeUpdated);
  } catch (e) {
    console.error(e);
  }
};