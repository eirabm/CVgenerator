const { Router } = require('express');
const updheader = Router();
const Controller = require('../db/CvController');

updheader.put('/Cv/header', Controller.header);

module.exports = updheader;