const express = require('express');

const router = express.Router({ mergeParams: true });

const validateJWT = require('../../middlewares/validateJWT');

router.post('/', validateJWT, require('./create'));

module.exports = router;