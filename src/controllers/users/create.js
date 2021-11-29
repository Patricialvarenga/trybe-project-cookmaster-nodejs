const statusCodes = require('../statusCodes.json');
const service = require('../../services/users');

const errosSituations = {
  invalidEntries: { err: {
    code: 'invalid_entries',
    message: 'Invalid entries. Try again.',
  } },
  emailAlreadyExists: { err: {
    code: 'email_already_exists',
    message: 'Email already registered',
  } },
};

module.exports = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const insert = await service.create({ name, email, password });
    
        if (insert.err) {
          return next(errosSituations[insert.err.code]);
        }
        res.status(statusCodes.created).json({ user: insert });
    } catch (e) {
      console.log(e);
    }
};