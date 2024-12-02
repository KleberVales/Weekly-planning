const { fetchTasks, saveTask } = require('./tasks.service');
const { sendToChatGPT } = require('../../utils/chatgpt');

// Controlador para obter tarefas
exports.getTasks = async (req, res) => {
  try {
    const tasks = await fetchTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefas' });
  }
};

// Controlador para adicionar tarefas
exports.addTask = async (req, res) => {
  try {
    const task = req.body;

    // Envia o prompt para o ChatGPT para obter sugestões
    const prompt = `Adicione uma tarefa: ${task.description}`;
    const chatResponse = await sendToChatGPT(prompt);

    // Adiciona a sugestão gerada pelo ChatGPT à tarefa
    task.suggestion = chatResponse;

    // Salva a tarefa
    const newTask = await saveTask(task);

    // Retorna a tarefa criada
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao salvar tarefa' });
  }
};
