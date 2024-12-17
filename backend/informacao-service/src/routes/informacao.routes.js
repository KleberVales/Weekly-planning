const express = require('express');
const router = express.Router();
const prisma = require('../prisma-client');

// Criar uma informação manualmente
router.post('/', async (req, res) => {
  try {
    const informacao = await prisma.informacao.create({
      data: req.body,
    });
    res.status(201).json(informacao);
  } catch (error) {
    console.error('Erro ao criar informação:', error);
    res.status(500).json({ error: 'Erro ao criar informação.' });
  }
});

// Listar todas as informações
router.get('/', async (req, res) => {
  try {
    const informacoes = await prisma.informacao.findMany();
    res.status(200).json(informacoes);
  } catch (error) {
    console.error('Erro ao listar informações:', error);
    res.status(500).json({ error: 'Erro ao listar informações.' });
  }
});

module.exports = router;
