const express = require('express');
const router = express.Router();
const sendMessage = require('../kafka/producer');

router.post('/tasks', async (req, res) => {
    const task = req.body;

    // Envia a mensagem para o Kafka
    await sendMessage('tasks', task);

    res.status(202).json({ message: 'Tarefa enviada para processamento' });
});

module.exports = router;
