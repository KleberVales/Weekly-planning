import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Projeto MBA Web</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/compromissos">Compromissos</Link>
        <Link to="/informacoes">Informações</Link>
      </nav>
    </header>
  );
}

export default Header;
