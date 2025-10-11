import { useState } from 'react';
import { api } from '../lib/api';
import { setToken } from '../lib/auth';

export default function Login(){
  const [email,setEmail] = useState('admin@kashin.dev');
  const [password,setPassword] = useState('Admin@123');
  const [msg,setMsg] = useState('');
  const doLogin = async (e)=>{
    e.preventDefault();
    try{ const r = await api.post('/auth/login',{email,password}); setToken(r.data.token); window.location.href='/admin'; }
    catch(err){ setMsg(err?.response?.data?.message || 'Login failed'); }
  };
  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
      <form onSubmit={doLogin} className="space-y-3">
        <input className="w-full border rounded-lg px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
        <input type="password" className="w-full border rounded-lg px-3 py-2" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
        <button className="w-full px-3 py-2 rounded-lg bg-zinc-900 text-white">Login</button>
        {msg && <div className="text-red-600 text-sm">{msg}</div>}
      </form>
    </div>
  );
}
