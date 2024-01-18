const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validationMiddleware = require('../middleware/validationMiddleware');

// POST / registration and login
router.post('/register', validationMiddleware.validateRegistration, userController.registerUser);
router.post('/login', userController.loginUser);

// GET all users
router.get('/', userController.getAllUsers);

// GET / id
router.get('/:id', userController.getUserById);

// PUT / update
router.put('/:id', userController.updateUserById);

module.exports = router;
