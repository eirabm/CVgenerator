const { Router } = require('express');
const upsEmployee = Router();
const Controller = require('../db/crudOperations');

upsEmployee.post('/employee/', Controller.upsert);

module.exports = upsEmployee;