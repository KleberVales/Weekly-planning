import React, { useState } from 'react';
import api from '../services/api';
import './Compromissos.css'; // Arquivo de estilos (CSS)

function Compromissos() {
  const [tarefa, setTarefa] = useState('');
  const [diaSelecionado, setDiaSelecionado] = useState('');
  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  const handleSubmit = async () => {
    if (!tarefa || !diaSelecionado) {
      alert('Por favor, preencha a tarefa e selecione um dia!');
      return;
    }

    try {
      await api.post('/compromissos', { 
        nome: tarefa, 
        dia: diaSelecionado, 
        data: new Date(), 
        categoria: 'Pessoal', 
        concluido: false 
      });
      alert('Compromisso adicionado com sucesso!');
      setTarefa('');
      setDiaSelecionado('');
    } catch (error) {
      console.error('Erro ao salvar compromisso:', error);
      alert('Erro ao salvar compromisso no banco.');
    }
  };

  return (
    <div className="compromissos-container">
      <h1>Planejamento Semanal</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite sua tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <div className="dias-container">
          {diasDaSemana.map((dia) => (
            <button
              key={dia}
              className={`dia-button ${diaSelecionado === dia ? 'selected' : ''}`}
              onClick={() => setDiaSelecionado(dia)}
            >
              {dia}
            </button>
          ))}
        </div>
        <button className="adicionar-button" onClick={handleSubmit}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Compromissos;
