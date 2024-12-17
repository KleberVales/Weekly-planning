const express = require('express');
const router = express.Router();
const prisma = require('../prisma-client');
const { sendToKafka } = require('../kafka/producer');
const { getChatGPTResponse } = require('../chatgpt/chatgpt');

// Criar um compromisso
router.post('/', async (req, res) => {
  try {
    const compromisso = await prisma.compromisso.create({ data: req.body });
    await sendToKafka('compromissos', compromisso); // Envia o evento ao Kafka
    res.status(201).json(compromisso);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar compromisso.' });
  }
});

// Listar todos os compromissos
router.get('/', async (req, res) => {
  try {
    const compromissos = await prisma.compromisso.findMany();
    res.status(200).json(compromissos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar compromissos.' });
  }
});

// Obter resposta do ChatGPT
router.post('/gpt', async (req, res) => {
  try {
    const { prompt } = req.body;
    const resposta = await getChatGPTResponse(prompt);
    res.status(200).json({ resposta });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar ChatGPT.' });
  }
});

module.exports = router;
