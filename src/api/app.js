const express = require('express');

const app = express();
app.use(express.json());

app.use(require('../controllers/root'));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use(require('../middlewares/error'));

module.exports = app;
