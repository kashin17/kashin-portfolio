import { useEffect, useState } from 'react';
import { api } from '../lib/api';

export default function Experience(){
  const [items,setItems] = useState([]);
  useEffect(()=>{ api.get('/experience').then(r=>setItems(r.data)); },[]);
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Experience</h2>
      {items.map(x => (
        <div key={x._id} className="border rounded-2xl p-4">
          <div className="font-semibold">{x.role} — {x.company}</div>
          <div className="text-sm opacity-70">{x.location}</div>
          <ul className="mt-2 list-disc pl-5">
            {(x.bullets||[]).map((b,i)=> <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
