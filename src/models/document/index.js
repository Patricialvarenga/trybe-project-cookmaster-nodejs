const find = require('./find');
const create = require('./create');

module.exports = (collection) => ({
  find: (filter) => find(collection, filter),
  create: (entity) => create(collection, entity),  
});