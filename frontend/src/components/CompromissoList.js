import React, { useEffect, useState } from 'react';
import api from '../services/api';

function CompromissoList() {
  const [compromissos, setCompromissos] = useState([]);

  useEffect(() => {
    api.get('/compromissos')
      .then(response => setCompromissos(response.data))
      .catch(error => console.error('Erro ao buscar compromissos:', error));
  }, []);

  return (
    <div>
      <h2>Compromissos</h2>
      <ul>
        {compromissos.map(item => (
          <li key={item.id}>
            {item.nome} - {item.data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompromissoList;
