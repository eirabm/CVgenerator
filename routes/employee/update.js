const { Router } = require('express');
const updEmployee = Router();
const Controller = require('../db/crudOperations');

updEmployee.put('/employee/', Controller.update);

module.exports = updEmployee;