const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/compromisso.routes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Rotas do microsserviço
app.use('/compromissos', routes);

// Inicialização do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Compromisso Service rodando na porta ${PORT}`);
});

/**
 * Projeto acadêmico - Kleber Vales (2024)
 * Este código é fornecido "como está", para uso educacional e não comercial.
 */

