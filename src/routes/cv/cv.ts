import { Router } from 'express';
const upsCv = Router();
import {createCv} from '../../db/CvController';

upsCv.post('/curriculum/',createCv);

export default upsCv;