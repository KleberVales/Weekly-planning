const { Kafka } = require('kafkajs');

// Configuração do Kafka
const kafka = new Kafka({ brokers: ['localhost:9092'] });
const producer = kafka.producer();

const sendToKafka = async (topic, message) => {
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  });
  console.log(`Mensagem enviada para o tópico ${topic}:`, message);
};

module.exports = { sendToKafka };
