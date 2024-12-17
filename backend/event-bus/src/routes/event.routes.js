const express = require('express');
const router = express.Router();
const { runProducer } = require('../../kafka/producer');

// Rota para enviar mensagens para o Kafka
router.post('/produce', async (req, res) => {
  const { topic, message } = req.body;

  if (!topic || !message) {
    return res.status(400).json({ error: 'Topic e message são obrigatórios.' });
  }

  try {
    await runProducer(topic, message);
    res.status(200).json({ success: `Mensagem enviada ao tópico ${topic}` });
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    res.status(500).json({ error: 'Erro ao produzir mensagem.' });
  }
});

module.exports = router;
