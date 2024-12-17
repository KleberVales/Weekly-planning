import React, { useEffect, useState } from 'react';
import api from '../services/api';

function InformacaoList() {
  const [informacoes, setInformacoes] = useState([]);

  useEffect(() => {
    api.get('/informacoes')
      .then(response => setInformacoes(response.data))
      .catch(error => console.error('Erro ao buscar informações:', error));
  }, []);

  return (
    <div>
      <h2>Informações</h2>
      <ul>
        {informacoes.map(info => (
          <li key={info.id}>
            {info.titulo} - {info.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InformacaoList;
