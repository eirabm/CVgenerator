const { Router } = require('express');
const updsumary = Router();
const Controller = require('../db/CvController');

updsumary.put('/Cv/sumary', Controller.sumary);

module.exports = updsumary;