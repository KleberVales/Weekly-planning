const express = require('express');
const userController = require('../controllers/userController');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Usuários
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);

// Tarefas
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);

module.exports = router;
