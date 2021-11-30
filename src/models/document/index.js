const find = require('./find');
const insert = require('./insert');
const create = require('./create');

module.exports = (collection) => ({
  find: (filter) => find(collection, filter),
  insert: (entity) => insert(collection, entity),
  create: (entity) => create(collection, entity),  
});