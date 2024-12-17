const express = require('express');
const bodyParser = require('body-parser');
const { runConsumer } = require('../kafka/consumer');
const eventRoutes = require('./routes/event.routes');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Rotas
app.use('/event-bus', eventRoutes);

// Callback para tratar mensagens Kafka
const messageHandler = (topic, message) => {
  console.log(`Processando mensagem do tópico "${topic}":`, message);

  // Aqui você pode redirecionar as mensagens para outros serviços
  if (topic === 'compromissos') {
    console.log('Evento relacionado a compromissos:', message);
    // Chame APIs de outros serviços, se necessário
  } else {
    console.log(`Tópico não tratado: ${topic}`);
  }
};

// Iniciar o consumidor Kafka
runConsumer(['compromissos', 'informacoes'], messageHandler);

// Inicialização do servidor
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Event Bus rodando na porta ${PORT}`);
});
