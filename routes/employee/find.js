const { Router } = require('express');
const findEmployee = Router();
const Controller = require('../db/crudOperations');

findEmployee.get('/employee/:id&:last_name', Controller.find);

module.exports = findEmployee;