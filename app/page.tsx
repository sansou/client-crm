'use client'
import ProjectForm from '@/componentes/projectForm';
import { useState, useEffect } from 'react';

interface Project {
  pk: string,
  sk: string,
  name: string,
  status: string,
  entityType: string;
  createdAt?: Date,
  updatadAt?: Date,
}

interface Lead {
  id: string;
  name: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean>(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/projects');  // Substitua pela URL da sua API        
        if (!response.ok) {
          throw new Error('Falha na requisição');
        }
        const result = await response.json();
        console.log('result', result);
        
        setProjects(result);
      } catch (err) {
        setError('Erro ao buscar dados');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   try {
  //     const res = await fetch('http://localhost:3000/projects', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ data: formData }),
  //     });

  //     if (!res.ok) {
  //       throw new Error('Falha ao enviar dados');
  //     }

  //     const result = await res.json();
  //     setResponse(result);
  //   } catch (err) {
  //     setError('Erro ao enviar dados');
  //   }
  // };
  
  return (
    <div className='container mx-auto px-4 py-16 justify-around'>
    <div>
      <ProjectForm></ProjectForm>
    </div>
      <ul>
        {projects.map((project) => (
          <li key={project.pk}>
            {project.pk}{' '}
            {/* <button onClick={() => goToLeads(project.pk)}>Gerenciar Leads</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
