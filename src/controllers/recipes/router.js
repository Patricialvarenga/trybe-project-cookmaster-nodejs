const express = require('express');

const router = express.Router({ mergeParams: true });

const validateJWT = require('../../middlewares/validateJWT');

router.post('/', validateJWT, require('./create'));
router.get('/', require('./list'));
router.get('/:id', require('./get'));
router.put('/:id', validateJWT, require('./update'));
router.delete('/:id', validateJWT, require('./delete'));

module.exports = router;