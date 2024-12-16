const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'planner-app',
    brokers: ['localhost:9092'],
    createPartitioner: Partitioners.LegacyPartitioner
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'planner-group' });

const initKafka = async () => {
    await producer.connect();
    await consumer.connect();
    console.log('Kafka connected');
};

module.exports = { producer, consumer, initKafka };
