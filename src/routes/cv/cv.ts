import { Router } from 'express';
import {createCv} from '../../db/CvController';
const upsCv = Router();

upsCv.post('/curriculum/', createCv);

export default upsCv;