const kafka = require('./kafkaClient');

const producer = kafka.producer();

const sendMessage = async (topic, messages) => {
  try {
    await producer.connect();
    await producer.send({
      topic: topic,
      messages: messages.map((msg) => ({ value: msg })), // Envia mensagens no formato [{ value: '...' }]
    });
    console.log(`Mensagem enviada para o tópico ${topic}`);
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
  } finally {
    await producer.disconnect();
  }
};

// Exemplo de uso:
sendMessage('example-topic', ['Olá Kafka!']);
