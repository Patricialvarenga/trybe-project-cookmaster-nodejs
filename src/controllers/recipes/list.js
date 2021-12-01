const statusCodes = require('../statusCodes.json');
const service = require('../../services/recipes');

module.exports = async (_req, res, _next) => {
  try {
    const allRecipes = await service.list();
  res.status(statusCodes.ok).json(allRecipes);
  } catch (e) {
    console.log(e);
  }
};