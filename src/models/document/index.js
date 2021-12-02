const find = require('./find');
const insert = require('./insert');
const create = require('./create');
const list = require('./list');
const update = require('./update');
const remove = require('./delete');

module.exports = (collection) => ({
  find: (filter) => find(collection, filter),
  insert: (entity) => insert(collection, entity),
  create: (entity) => create(collection, entity), 
  list: () => list(collection),
  update: (filter, newUpdated) => update(collection, filter, newUpdated),
  remove: (filter) => remove(collection, filter),
});