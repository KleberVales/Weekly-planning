let tasks = [];

exports.fetchTasks = async () => {
  return tasks; // Simulação de banco de dados
};

exports.saveTask = async (task) => {
  tasks.push(task);
  return task;
};
