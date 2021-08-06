const get = require('./employee/get');
const upsert = require('./employee/upsert');
const eliminate = require('./employee/eliminate');
const find = require('./employee/find');
const update = require('./employee/update');

module.exports =[upsert, update, get, eliminate, find];