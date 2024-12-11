'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Project {
  id: string;
  name: string;
  leads: Lead[];
}

interface Lead {
  id: string;
  name: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectName, setProjectName] = useState<string>('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get<Project[]>('/api/projects'); // Substitua pela URL real da sua API
      setProjects(response.data);
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
    }
  };

  const createProject = async () => {
    if (!projectName.trim()) return;

    try {
      const response = await axios.post<Project>('/api/projects', { name: projectName });
      setProjects([...projects, response.data]);
      setProjectName('');
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
    }
  };

 
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gerenciar Projetos</h1>
      <div>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Nome do Projeto"
        />
        <button onClick={createProject}>Criar Projeto</button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.id}{' '}
            <button >Gerenciar Leads</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
