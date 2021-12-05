const express = require('express');

const app = express();
app.use(express.json());

app.use(require('../controllers/root'));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

/* Definindo nossa pasta pública, `app.use` com apenas um parâmetro quer dizer que
queremos aplicar esse middleware a todas as rotas, com qualquer método__dirname + '/uploads'
é o caminho da pasta que queremos expor publicamente.
Isso quer dizer que, sempre que receber uma request, o express vai primeiro
verificar se o caminho da request é o nome de um arquivo que existe em `uploads`.
Se for, o express envia o conteúdo desse arquivo e encerra a response.
Caso contrário, ele chama `next` e permite que os demais endpoints funcionem
 */
app.use(express.static(`${__dirname}/../uploads`));

app.use(require('../middlewares/error'));

module.exports = app;
