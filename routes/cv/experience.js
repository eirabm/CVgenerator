const { Router } = require('express');
const updexp = Router();
const Controller = require('../db/CvController');

updexp.put('/Cv/header', Controller.experience);

module.exports = updexp;