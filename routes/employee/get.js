const { Router } = require('express');
const employees = Router();
const controller  = require('../db/crudOperations');

employees.get('/', controller.Get);

module.exports = employees;