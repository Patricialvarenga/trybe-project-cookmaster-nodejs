const express = require('express');

const router = express.Router({ mergeParams: true });

const validateJWT = require('../../middlewares/validateJWT');
const validateUpload = require('../../middlewares/validateUpload');
const uploadImage = require('../../middlewares/uploadImage');

router.post('/', validateJWT, require('./create'));
router.get('/', require('./list'));
router.get('/:id', require('./get'));
router.put('/:id', validateJWT, require('./update'));
router.delete('/:id', validateJWT, require('./delete'));
// Para ajudar no desenvolvimento do req 9 , consultei o repositório: https://github.com/tryber/sd-012-cookmaster/pull/39
router.put(
    '/:id/image', validateJWT, validateUpload, uploadImage('image'), require('./updateImage'),
    );

module.exports = router;