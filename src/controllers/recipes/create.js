const statusCodes = require('../statusCodes.json');
const service = require('../../services/recipes');

const errosSituations = {
  invalidEntries: { err: {
    code: 'invalid_entries',
    message: 'Invalid entries. Try again.',
  } },
};

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { user: { _id: userId } } = req;

    const created = await service.create({ name, ingredients, preparation }, userId);
    if (created.err) {
      return next(errosSituations[created.err.code]);
    }

    return res.status(statusCodes.created).json({ recipe: { ...created } });
  } catch (e) {
    console.error(e);
  }
};
