'use client'
import { useState } from 'react';
import axios from 'axios';

interface Lead {
  id: string;
  name: string;
}

interface Project {
  id: string;
  name: string;
}

const LeadsPage = () => {

  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadName, setLeadName] = useState<string>('');
  const [projectName, setProjectName] = useState<string>('');
  const [currentProject, setCurrentProject] = useState<Project | null>(null);


 


  // return (
  //   <div style={{ padding: '20px' }}>
  //     <h1>Leads para o Projeto: {projectName}</h1>
  //     <div>
  //       <input
  //         type="text"
  //         value={leadName}
  //         onChange={(e) => setLeadName(e.target.value)}
  //         placeholder="Nome do Lead"
  //       />
  //       <button onClick={addLead}>Adicionar Lead</button>
  //     </div>
  //     <ul>
  //       {leads.map((lead) => (
  //         <li key={lead.id}>{lead.name}</li>
  //       ))}
  //     </ul>
  //     <button onClick={() => router.push('/projects')}>Voltar aos Projetos</button>
  //   </div>
  // )
};

export default LeadsPage;
