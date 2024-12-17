const { Kafka } = require('kafkajs');
require('dotenv').config();

const kafka = new Kafka({
  clientId: 'event-bus',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

const producer = kafka.producer();

const runProducer = async (topic, message) => {
  try {
    await producer.connect();
    console.log(`Produzindo mensagem no tópico "${topic}":`, message);

    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });

    console.log('Mensagem enviada com sucesso!');
  } catch (error) {
    console.error('Erro ao produzir mensagem:', error);
  } finally {
    await producer.disconnect();
  }
};

module.exports = { runProducer };
