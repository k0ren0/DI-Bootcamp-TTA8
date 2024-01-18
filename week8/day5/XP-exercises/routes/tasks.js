const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const { validateTaskData } = require('../middleware/validationMiddleware');

router.get('/', tasksController.getAllTasks);
router.get('/:id', tasksController.getTaskById);
router.post('/', validateTaskData, tasksController.createTask); // Apply validation middleware here
router.put('/:id', validateTaskData, tasksController.updateTaskById); // Apply validation middleware here
router.delete('/:id', tasksController.deleteTaskById);

module.exports = router;
