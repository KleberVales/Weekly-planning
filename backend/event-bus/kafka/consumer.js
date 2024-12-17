const { Kafka } = require('kafkajs');
require('dotenv').config();

const kafka = new Kafka({
  clientId: 'event-bus',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'event-bus-group' });

const runConsumer = async (topics, callback) => {
  try {
    await consumer.connect();
    console.log(`Consumidor conectado. Escutando tópicos: ${topics.join(', ')}`);

    for (const topic of topics) {
      await consumer.subscribe({ topic, fromBeginning: true });
    }

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Mensagem recebida no tópico "${topic}":`, message.value.toString());
        callback(topic, JSON.parse(message.value.toString()));
      },
    });
  } catch (error) {
    console.error('Erro ao consumir mensagem:', error);
  }
};

module.exports = { runConsumer };
