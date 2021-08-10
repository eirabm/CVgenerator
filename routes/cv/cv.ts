declare function require(name:string);
const { Router } = require('express');
const upsCv = Router();
const Controller = require('../db/CvController');

upsCv.post('/curriculum/', Controller.Cv);

export {upsCv};