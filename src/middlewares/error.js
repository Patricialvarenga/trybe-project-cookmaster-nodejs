const statusCodes = require('../controllers/statusCodes.json');

function setStatus(code) {
  switch (code) {
    case 'invalid_entries':
      return statusCodes.badRequest;
    case 'email_already_exists':
      return statusCodes.conflict;
    default:
  }
}

module.exports = (err, _req, res, _next) => {
  // Caso o erro possua uma propriedade `status`, devolvemos esse status, juntamente com a mensagem do erro
  const status = setStatus(err.err.code);
  return res.status(status).json({ message: err.err.message });
};