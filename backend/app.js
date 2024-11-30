const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: 'sua-api-key',
});
const openai = new OpenAIApi(configuration);