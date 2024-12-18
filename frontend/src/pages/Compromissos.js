import React, { useEffect, useState } from 'react';
import AdicionarTarefaForm from '../components/AdicionarTarefaForm';
import api from '../services/api';

function Compromissos() {
  const [compromissos, setCompromissos] = useState([]);

  useEffect(() => {
    const fetchCompromissos = async () => {
      try {
        const response = await api.get('/compromissos');
        setCompromissos(response.data);
      } catch (error) {
        console.error('Erro ao buscar compromissos:', error);
      }
    };

    fetchCompromissos();
  }, []);

  return (
    <div>
      <h1>Compromissos</h1>
      <AdicionarTarefaForm />
      <h2>Lista de Compromissos</h2>
      <ul>
        {compromissos.map((compromisso) => (
          <li key={compromisso.id}>
            <strong>{compromisso.nome}</strong> - {new Date(compromisso.data).toLocaleString()} - {compromisso.dia} - {compromisso.categoria} - {compromisso.concluido ? 'Concluído' : 'Pendente'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Compromissos;
