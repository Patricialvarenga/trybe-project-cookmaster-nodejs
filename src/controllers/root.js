const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/users', require('./users/router'));
root.use('/login', require('./login/router'));
root.use('/recipes', require('./recipes/router'));

/* Definindo nossa pasta pública, `app.use` com apenas um parâmetro quer dizer que
queremos aplicar esse middleware a todas as rotas, com qualquer método__dirname + '/uploads'
é o caminho da pasta que queremos expor publicamente.
Isso quer dizer que, sempre que receber uma request, o express vai primeiro
verificar se o caminho da request é o nome de um arquivo que existe em `uploads`.
Se for, o express envia o conteúdo desse arquivo e encerra a response.
Caso contrário, ele chama `next` e permite que os demais endpoints funcionem
 */
root.use('/images', express.static(`${__dirname}/../uploads`));

module.exports = root;