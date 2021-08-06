const { Router } = require('express');
const delEmployee = Router();
const Controller = require('../db/crudOperations');

delEmployee.delete('/employee/:id&:last_name', Controller.eliminate);

module.exports = delEmployee;