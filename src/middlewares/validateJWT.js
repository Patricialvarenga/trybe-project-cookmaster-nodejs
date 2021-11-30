const jwt = require('jsonwebtoken');

const secret = 'mySecret';

module.exports = async (req, _res, next) => {
  const { authorization: token } = req.headers;

  try {
    const { data } = jwt.verify(token, secret);

    req.user = data;
    next();
  } catch (e) {
    return next({ err: { message: 'jwt malformed', code: 'unauthorized' } });
  }
};