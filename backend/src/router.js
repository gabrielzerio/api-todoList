import express from 'express';
const router = express.Router();
import * as tasksController from './controllers/tasksController.js';
import * as tasksMiddleware from './middlewares/tasksMiddleware.js';

router.get('/tasks', tasksController.getAll);

router.post('/tasks',tasksMiddleware.validateFieldTitle ,tasksController.createTask);

router.delete('/tasks/:id', tasksController.deleteTask);

router.put('/tasks/:id', tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus, tasksController.updateTask);

export default router;
