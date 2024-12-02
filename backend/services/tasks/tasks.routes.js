const express = require('express');
const { getTasks, addTask } = require('./tasks.controller');

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);

module.exports = router;
