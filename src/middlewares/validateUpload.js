const service = require('../services/recipes');

module.exports = async (req, _res, next) => {
  const { id } = req.params;
  const { user: { _id: userId, role } } = req;
  try {
    const recipe = await service.get(id);

    if (role === 'admin' || recipe.userId === userId) {
      return next();
    }

    return next({ err: { code: 'unauthorized' } });
  } catch (e) {
    console.error(e);
  }
}; 
