const db = require('../config/db');

const createTask = async (task) => {
    const { title, description, dueDate, status } = task;
    const [result] = await db.query(
        'INSERT INTO tasks (title, description, due_date, status) VALUES (?, ?, ?, ?)',
        [title, description, dueDate, status]
    );
    return result;
};

module.exports = { createTask };
