import React, { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail(){
  const { slug } = useParams();
  const [item,setItem] = useState(null);
  useEffect(()=>{ api.get(`/projects/slug/${slug}?publishedOnly=true`).then(r=>setItem(r.data)).catch(()=>setItem(null)); },[slug]);
  if(!item) return <div>Loading…</div>;

  return (
    <article className="space-y-8">
      <nav className="text-sm opacity-70">
        <Link to="/projects" className="hover:underline">Projects</Link> <span>›</span> <span className="opacity-100">{item.title}</span>
      </nav>

      <header className="grid md:grid-cols-2 gap-6 items-start">
        <img src={item.imageUrl} alt={item.title} className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800" />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">{item.title}</h1>
          <p className="text-lg opacity-80">{item.summary}</p>
          {item.techStack?.length ? (
            <div className="flex flex-wrap gap-2">
              {item.techStack.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">{t}</span>)}
            </div>
          ) : null}
          <div className="flex gap-3">
            {item.repoUrl && <a className="btn btn-outline" href={item.repoUrl} target="_blank" rel="noreferrer">GitHub</a>}
            {item.liveUrl && <a className="btn btn-primary" href={item.liveUrl} target="_blank" rel="noreferrer">Live</a>}
          </div>
        </div>
      </header>

      {item.description && (
        <div className="prose dark:prose-invert">
          <p>{item.description}</p>
        </div>
      )}

      {(item.galleryImages?.length || item.galleryVideos?.length) ? (
        <section className="space-y-3">
          <h3 className="text-xl font-semibold">Gallery</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(item.galleryImages||[]).map((src,i)=>(
              <img key={i} src={src} alt={"img-"+i} className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800" />
            ))}
            {(item.galleryVideos||[]).map((src,i)=>(
              <video key={i} controls src={src} className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"></video>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}


// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { api } from '../lib/api';

// export default function ProjectDetail(){
//   const { slug } = useParams();
//   const [item,setItem] = useState(null);
//   useEffect(()=>{ api.get(`/projects/slug/${slug}?publishedOnly=true`).then(r=>setItem(r.data)).catch(()=>setItem(null)); },[slug]);
//   if(!item) return <div>Loading…</div>
//   return (
//     <article className="prose dark:prose-invert max-w-none">
//       <img src={item.imageUrl} alt={item.title} className="w-full rounded-2xl mb-6"/>
//       <h1>{item.title}</h1>
//       <p>{item.summary}</p>
//       {item.description && <p>{item.description}</p>}
//       <ul>
//         {(item.techStack||[]).map(t => <li key={t}>{t}</li>)}
//       </ul>
//       <div className="mt-4 flex gap-3">
//         {item.repoUrl && <a className="px-3 py-2 border rounded-lg" href={item.repoUrl} target="_blank">GitHub</a>}
//         {item.liveUrl && <a className="px-3 py-2 border rounded-lg" href={item.liveUrl} target="_blank">Live</a>}
//       </div>
//       {/* Gallery */}
//       {(item.galleryImages?.length || item.galleryVideos?.length) ? (
//         <div className="mt-8">
//           <h3>Gallery</h3>
//           <div className="grid sm:grid-cols-2 gap-4">
//             {(item.galleryImages||[]).map((src,i)=>(
//               <img key={i} src={src} alt={"img-"+i} className="w-full rounded-2xl"/>
//             ))}
//             {(item.galleryVideos||[]).map((src,i)=>(
//               <video key={i} controls src={src} className="w-full rounded-2xl"></video>
//             ))}
//           </div>
//         </div>
//       ): null}
//     </article>
//   );
// }
