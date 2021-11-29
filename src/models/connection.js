const { MongoClient } = require('mongodb');

// string de conexão com o banco
const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';

// configurações de conexão
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// variável para realizar "cache" da conexão
let db = null;

// Método que cria uma nova conexão ou retorna a existente
// Se tivermos, a colocamos dentro de uma Promise já resolvida, utilizando `Promise.resolve`
// Caso ainda não tenhamos, criamos uma nova conexão
// Uma vez com a conexão aberta, a armazenamos na variável `db`
// Definimos `db` como o resultado da Promise, que é retornada por `connection()`
const connection = () =>
    (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
    }));

module.exports = connection;