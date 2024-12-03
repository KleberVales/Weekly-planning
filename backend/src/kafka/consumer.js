const { Kafka } = require('kafkajs');
const TaskService = require('../services/taskService');

const kafka = new Kafka({
    clientId: 'planner-app',
    brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'task-group' });

const consumeMessages = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'tasks', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const task = JSON.parse(message.value.toString());
            console.log(`Recebido no Kafka: ${JSON.stringify(task)}`);
            await TaskService.createTask(task); // Salva no MySQL
        },
    });
};

module.exports = consumeMessages;
