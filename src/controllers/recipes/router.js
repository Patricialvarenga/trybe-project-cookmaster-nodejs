const express = require('express');

const router = express.Router({ mergeParams: true });

const validateJWT = require('../../middlewares/validateJWT');

router.post('/', validateJWT, require('./create'));
router.get('/', require('./list'));
router.get('/:id', require('./get'));
router.put('/:id', validateJWT, require('./update'));

module.exports = router;