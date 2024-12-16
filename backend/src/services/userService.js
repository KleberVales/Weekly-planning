const db = require('../models');

exports.createUser = async (data) => {
    return await db.User.create(data);
};

exports.getAllUsers = async () => {
    return await db.User.findAll();
};
