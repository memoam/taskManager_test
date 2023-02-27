import { Router } from 'express';
import { createToken } from '../controllers/token.controllers.js';

const router = Router();

router.post('/', createToken);

export default router;
