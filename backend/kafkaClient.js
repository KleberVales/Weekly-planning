const { Kafka } = require('kafkajs');

// Configuração do cliente Kafka
const kafka = new Kafka({
  clientId: 'my-backend-service', // Identificador do cliente
  brokers: ['localhost:9092'],   // URL(s) do Kafka Broker
});

module.exports = kafka;
