const OpenAI = require('openai');
require('dotenv').config();

// Configuração da API do OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Substitua pela sua chave no arquivo .env
});

// Função para obter resposta do ChatGPT
const getChatGPTResponse = async (prompt) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Ou 'gpt-4' se sua API suportar
      messages: [
        { role: 'system', content: 'Você é um assistente útil.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 150,
    });
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Erro ao acessar a API do ChatGPT:', error.message);
    throw error;
  }
};

module.exports = { getChatGPTResponse };


