const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Task = sequelize.define('Task', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    due_date: { type: DataTypes.DATE }
});

Task.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Task;
