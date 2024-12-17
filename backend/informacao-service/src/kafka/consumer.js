const { Kafka } = require('kafkajs');
const prisma = require('../prisma-client');

// Configuração do Kafka
const kafka = new Kafka({ brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'informacao-group' });

const runKafkaConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'compromissos', fromBeginning: true });

  console.log('Kafka Consumer conectado e escutando o tópico "compromissos"...');

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const compromisso = JSON.parse(message.value.toString());
      console.log('Mensagem recebida do Kafka:', compromisso);

      // Cria uma informação associada ao compromisso
      await prisma.informacao.create({
        data: {
          idCompromisso: compromisso.id,
          texto: `Informação automática para o compromisso: ${compromisso.nome}`,
        },
      });
      console.log(`Informação salva no banco para o compromisso ${compromisso.nome}`);
    },
  });
};

module.exports = { runKafkaConsumer };
