const jwt = require('jsonwebtoken');
const users = require('../../models/document')('users');

// chave secreta. É com ela que os dados do usuário serão encriptados.
const secret = 'mySecret';

const errosSituations = {
  invalidEntries: { err: {
    code: 'unauthorized',
    message: 'All fields must be filled',
  } },
  incorrectEntries: { err: {
    code: 'unauthorized',
    message: 'Incorrect username or password',
  } },
};

// config básica para o nosso JWT, expiresIn significa o tempo pelo qual esse token será válido;
// algorithm -> algoritmo que você usará para assinar a mensagem
const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(errosSituations.invalidEntries);
    }

    const user = await users.find({ email, password });
    if (!user) {
      return next(errosSituations.incorrectEntries);
    }

    // Aqui é assinado de fato nossa mensagem com a nossa "chave secreta".
    //  Mensagem essa que contém dados do seu usuário e/ou demais dados que serão colocados dentro de "data".
    req.user = user;
    req.loginToken = jwt.sign({ data: user }, secret, jwtConfig);
    next();
  } catch (e) {
    console.error(e);
  }
};