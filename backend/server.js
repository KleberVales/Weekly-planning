const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const plannerRoutes = require("./src/routes/plannerRoutes");
const { initializeEventBus } = require("./src/events/eventBus");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use("/api/planner", plannerRoutes);

// Inicializar barramento de eventos
initializeEventBus();

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Planner Service is running on http://localhost:${PORT}`);
});
