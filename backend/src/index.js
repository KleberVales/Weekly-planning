const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const consumeMessages = require('./kafka/consumer');

const app = express();
app.use(bodyParser.json());

// Rotas
app.use('/api', taskRoutes);

// Inicializar o Kafka Consumer
consumeMessages();

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
