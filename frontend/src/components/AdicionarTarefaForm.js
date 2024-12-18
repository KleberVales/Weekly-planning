import React, { useState } from 'react';
import api from '../services/api'; // Serviço para consumo do back-end

function AdicionarTarefaForm() {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    categoria: '',
    concluido: false,
    dia: '',
  });

  const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.data || !formData.dia || !formData.categoria) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    try {
      await api.post('/compromissos', formData);
      alert('Compromisso adicionado com sucesso!');
      setFormData({ nome: '', data: '', categoria: '', concluido: false, dia: '' });
    } catch (error) {
      console.error('Erro ao adicionar compromisso:', error);
      alert('Erro ao adicionar compromisso.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Compromisso</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome do compromisso"
        />
      </div>
      <div>
        <label>Data:</label>
        <input
          type="datetime-local"
          name="data"
          value={formData.data}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Dia da Semana:</label>
        <select name="dia" value={formData.dia} onChange={handleChange}>
          <option value="">Selecione</option>
          {diasDaSemana.map((dia, index) => (
            <option key={index} value={dia}>
              {dia}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Categoria:</label>
        <input
          type="text"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          placeholder="Categoria"
        />
      </div>
      <div>
        <label>Concluído:</label>
        <input
          type="checkbox"
          name="concluido"
          checked={formData.concluido}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AdicionarTarefaForm;
