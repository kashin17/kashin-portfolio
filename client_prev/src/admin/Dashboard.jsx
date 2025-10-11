import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';
import ProjectsTable from './ProjectsTable.jsx';

export default function Dashboard(){
  const [projects,setProjects] = useState([]);
  const reload = ()=> api.get('/projects').then(r=>setProjects(r.data));
  useEffect(()=>{ reload(); },[]);
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        <Link to="/admin/new" className="px-3 py-2 rounded-lg bg-zinc-900 text-white">New Project</Link>
      </div>
      <ProjectsTable items={projects} reload={reload} />
    </section>
  );
}
