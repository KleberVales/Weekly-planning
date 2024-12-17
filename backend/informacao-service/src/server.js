const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/informacao.routes');
const { runKafkaConsumer } = require('./kafka/consumer');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Rotas do serviço de informações
app.use('/informacoes', routes);

// Inicialização do servidor
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Informacao Service rodando na porta ${PORT}`);
  runKafkaConsumer(); // Inicia o consumidor Kafka
});
