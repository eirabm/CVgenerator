declare function require(name:string);
export const get = require('./employee/get');
export const upsert = require('./employee/upsert');
export const eliminate = require('./employee/eliminate');
export const find = require('./employee/find');
export const update = require('./employee/update');
export const cv = require('./cv/cv');