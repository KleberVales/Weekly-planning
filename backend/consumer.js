const kafka = require('./kafkaClient');

const consumer = kafka.consumer({ groupId: 'my-group' }); // Identifique o grupo de consumidores

const runConsumer = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: 'example-topic', fromBeginning: true });

    console.log('Consumidor conectado e aguardando mensagens...');
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          topic,
          partition,
          offset: message.offset,
          value: message.value.toString(), // Mensagem recebida
        });
      },
    });
  } catch (error) {
    console.error('Erro no consumidor:', error);
  }
};

runConsumer();
