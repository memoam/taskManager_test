import { Router } from 'express';
import { verifyToken } from '../middlewares/validateToken.js';
import {
  getAllTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/task.controllers.js';

const router = Router();

router.get('/', [verifyToken], getAllTask);
router.get('/:id', [verifyToken], getTask);
router.post('/', [verifyToken], createTask);
router.put('/:id', [verifyToken], updateTask);
router.delete('/:id', [verifyToken], deleteTask);

export default router;
