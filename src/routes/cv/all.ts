import { Router } from 'express';
import {CvAll} from '../../db/CvController';
const cvs = Router();

cvs.get('/curriculum/', CvAll);

export default cvs;