import { useEffect, useState } from 'react';
import { api } from '../lib/api';

export default function Skills(){
  const [items,setItems] = useState([]);
  useEffect(()=>{ api.get('/skills').then(r=>setItems(r.data)); },[]);
  const groups = items.reduce((acc, s) => { (acc[s.group] ||= []).push(s); return acc; }, {});
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Skills</h2>
      {Object.entries(groups).map(([g, arr]) => (
        <div key={g}>
          <div className="font-semibold capitalize mb-2">{g}</div>
          <div className="flex flex-wrap gap-2">
            {arr.map(s => <span key={s._id} className="px-3 py-1 border rounded-full text-sm">{s.name}</span>)}
          </div>
        </div>
      ))}
    </section>
  );
}
