import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../lib/api';

export default function ProjectForm(){
  const nav = useNavigate();
  const { id } = useParams();
  const editing = Boolean(id);
  const [data,setData] = useState({ title:'', slug:'', summary:'', description:'', techStack:[], repoUrl:'', liveUrl:'', imageUrl:'', order:0, published:true, galleryImages:[], galleryVideos:[] });
  const [uploadMsg, setUploadMsg] = useState('');

  useEffect(()=>{
    if(editing){
      api.get('/projects').then(r=>{
        const f=r.data.find(x=>x._id===id);
        if(f) setData({ ...f, techStack: f.techStack||[], galleryImages: f.galleryImages||[], galleryVideos: f.galleryVideos||[] });
      });
    }
  },[id]);

  const save = async (e)=>{
    e.preventDefault();
    if(editing) await api.put(`/projects/${id}`, data); else await api.post('/projects', data);
    nav('/admin');
  };

  const uploadOne = async (file, type) => {
    const form = new FormData();
    form.append('file', file);
    const r = await api.post('/uploads/one', form, { headers: { 'Content-Type': 'multipart/form-data' } });
    if (type === 'image') setData(d => ({ ...d, imageUrl: r.data.url }));
    if (type === 'galleryImage') setData(d => ({ ...d, galleryImages: [...(d.galleryImages||[]), r.data.url] }));
    if (type === 'galleryVideo') setData(d => ({ ...d, galleryVideos: [...(d.galleryVideos||[]), r.data.url] }));
    setUploadMsg('Uploaded: ' + r.data.originalname);
    setTimeout(()=>setUploadMsg(''), 2000);
  };

  return (
    <form onSubmit={save} className="max-w-2xl space-y-3">
      <h2 className="text-2xl font-semibold mb-2">{editing? 'Edit':'New'} Project</h2>
      {['title','slug','summary','imageUrl','repoUrl','liveUrl'].map(k=> (
        <input key={k} className="w-full border rounded-lg px-3 py-2" placeholder={k} value={data[k]||''} onChange={e=>setData({...data,[k]:e.target.value})}/>
      ))}
      <textarea className="w-full border rounded-lg px-3 py-2" rows={6} placeholder="description" value={data.description||''} onChange={e=>setData({...data,description:e.target.value})}/>
      <input className="w-full border rounded-lg px-3 py-2" placeholder="techStack (comma separated)" value={(data.techStack||[]).join(', ')} onChange={e=>setData({...data,techStack:e.target.value.split(',').map(s=>s.trim()).filter(Boolean)})}/>
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2"><input type="checkbox" checked={!!data.published} onChange={e=>setData({...data,published:e.target.checked})}/> Published</label>
        <input type="number" className="border rounded-lg px-3 py-2 w-32" placeholder="order" value={data.order||0} onChange={e=>setData({...data,order:Number(e.target.value)})}/>
      </div>

      {/* Uploaders */}
      <div className="border rounded-2xl p-4 space-y-3">
        <div className="font-semibold">Upload Assets</div>
        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <div className="text-sm mb-1">Main Image</div>
            <input type="file" accept="image/*" onChange={e=>e.target.files[0] && uploadOne(e.target.files[0], 'image')} />
          </div>
          <div>
            <div className="text-sm mb-1">Gallery Images</div>
            <input type="file" accept="image/*" multiple onChange={async e=>{
              const files = Array.from(e.target.files||[]);
              for (const f of files) await uploadOne(f, 'galleryImage');
            }}/>
          </div>
          <div>
            <div className="text-sm mb-1">Gallery Videos</div>
            <input type="file" accept="video/*" multiple onChange={async e=>{
              const files = Array.from(e.target.files||[]);
              for (const f of files) await uploadOne(f, 'galleryVideo');
            }}/>
          </div>
        </div>
        {uploadMsg && <div className="text-sm text-green-600">{uploadMsg}</div>}
        {(data.galleryImages?.length || data.galleryVideos?.length) ? (
          <div className="grid grid-cols-3 gap-2 mt-2">
            {(data.galleryImages||[]).map((src,i)=>(<img key={i} src={src} className="w-full rounded-lg" />))}
            {(data.galleryVideos||[]).map((src,i)=>(<video key={i} src={src} className="w-full rounded-lg" />))}
          </div>
        ) : null}
      </div>

      <button className="px-4 py-2 rounded-lg bg-zinc-900 text-white">Save</button>
    </form>
  );
}
