import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Compromissos from './pages/Compromissos';
import Informacoes from './pages/Informacoes';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compromissos" element={<Compromissos />} />
          <Route path="/informacoes" element={<Informacoes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
