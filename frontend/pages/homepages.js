import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Bem-vindo ao Weekly Planner</h1>
      <p>Organize sua semana de forma eficiente.</p>
      <Link to="/planner">
        <button>Ir para o Planner</button>
      </Link>
    </div>
  );
}

export default HomePage;
