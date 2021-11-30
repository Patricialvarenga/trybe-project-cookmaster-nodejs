const express = require('express');

const router = express.Router({ mergeParams: true });

const auth = require('../../services/users/auth');

router.post('/', auth, require('./create'));

module.exports = router;