// o multer suporta requests no formato conhecido como Form Data ( Content-Type: multipart/form-data )
const multer = require('multer');

// destination: destino do nosso arquivo
// filename: nome do nosso arquivo.
// o nome  do arq no caso do requisito, deve ser o ID da receita, e sua extensão .jpeg
const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, `${__dirname}/../uploads`),
  filename: (req, file, callback) => {
    callback(null, `${req.params.id}.jpeg`);
  },
});

/* Cria uma instância do`multer`configurada. O`multer`recebe um objeto que,
nesse caso, contém o destino do arquivo enviado.  */

const upload = multer({ storage });

module.exports = (field) => upload.single(field);