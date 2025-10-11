import { Link } from 'react-router-dom';
import { api } from '../lib/api';

export default function ProjectsTable({ items, reload }){
  const del = async (id)=>{ if(confirm('Delete project?')){ await api.delete(`/projects/${id}`); reload(); } };
  const toggle = async (p)=>{ await api.put(`/projects/${p._id}`, { published: !p.published }); reload(); };
  return (
    <div className="overflow-x-auto border rounded-2xl card">
      <table className="w-full text-sm">
        <thead className="bg-zinc-100 dark:bg-zinc-900/30">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3">Published</th>
            <th className="p-3">Order</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(p => (
            <tr key={p._id} className="border-t">
              <td className="p-3 text-left">{p.title}</td>
              <td className="p-3 text-center">{p.published? 'Yes':'No'}</td>
              <td className="p-3 text-center">{p.order}</td>
              <td className="p-3 flex gap-2 justify-center">
                <Link className="px-2 py-1 border rounded" to={`/admin/edit/${p._id}`}>Edit</Link>
                <button className="px-2 py-1 border rounded" onClick={()=>toggle(p)}>{p.published? 'Unpublish':'Publish'}</button>
                <button className="px-2 py-1 border rounded" onClick={()=>del(p._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
