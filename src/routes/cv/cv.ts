import { Router } from 'express';
import {createCv} from '../../db/CvController';
const upsCv = Router();

upsCv.post('/cv/', createCv);

export default upsCv;