'use client';

import React, { useState } from 'react';

interface ProjectFormData {
  name: string;
  domains: string[];
}

const ProjectForm: React.FC = () => {
  const [projectName, setProjectName] = useState<string>('');
  const [domains, setDomains] = useState<string[]>(['']);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleDomainChange = (index: number, value: string) => {
    const updatedDomains = [...domains];
    updatedDomains[index] = value;
    setDomains(updatedDomains);
  };

  const addDomainField = () => {
    setDomains([...domains, '']);
  };

  const removeDomainField = (index: number) => {
    const updatedDomains = domains.filter((_, i) => i !== index);
    setDomains(updatedDomains);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData: ProjectFormData = {
      name: projectName,
      domains: domains.filter((domain) => domain.trim() !== ''), // Remove campos vazios
    };

    try {
      const response = await fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setResponseMessage('Projeto cadastrado com sucesso!');
      } else {
        setResponseMessage('Erro ao cadastrar o projeto.');
      }
    } catch (error) {
      setResponseMessage('Erro de conexão com o servidor.');
    }
    // Limpa o formulário
    setProjectName('');
    setDomains(['']);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Cadastrar Novo Projeto</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label>
            Nome do Projeto:
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Digite o nome do projeto"
              required
              style={{
                display: 'block',
                marginTop: '5px',
                padding: '8px',
                width: '100%',
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Domínios:</label>
          {domains.map((domain, index) => (
            <div key={index} style={{ display: 'flex', marginTop: '5px' }}>
              <input
                type="text"
                value={domain}
                onChange={(e) => handleDomainChange(index, e.target.value)}
                placeholder={`Digite o domínio ${index + 1}`}
                required={index === 0} // O primeiro domínio é obrigatório
                style={{
                  flex: 1,
                  padding: '8px',
                  marginRight: '5px',
                }}
              />
              {domains.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeDomainField(index)}
                  style={{
                    backgroundColor: '#ff4d4d',
                    color: 'white',
                    border: 'none',
                    padding: '8px 12px',
                    cursor: 'pointer',
                  }}
                >
                  Remover
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addDomainField}
            style={{
              marginTop: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              cursor: 'pointer',
            }}
          >
            Adicionar Domínio
          </button>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#008CBA',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Cadastrar Projeto
        </button>
      </form>

      {responseMessage && (
        <div style={{ marginTop: '20px' }}>
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectForm;
