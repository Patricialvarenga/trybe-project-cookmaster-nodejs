const statusCodes = require('../statusCodes.json');
   
module.exports = async (req, res, _next) => {
      res.status(statusCodes.ok).json({ token: req.loginToken });
};