const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/users', require('./users/router'));
root.use('/login', require('./login/router'));

module.exports = root;