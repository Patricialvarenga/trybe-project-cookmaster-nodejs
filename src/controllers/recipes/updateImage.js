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
  const { user } = req;

  try {
    const updated = await service.update(
      id,
      { image: `localhost:3000/src/uploads/${req.file.filename}` },
      user,
    );
    if (updated.err) {
      return next(errosSituations[updated.err.code]);
    }

    res.status(statusCodes.ok).json(updated);
  } catch (e) {
    console.error(e);
  }
};