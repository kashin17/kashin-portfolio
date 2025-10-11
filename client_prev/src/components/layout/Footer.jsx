import React from 'react';

export default function Footer(){
  return (
    <footer className="mt-16">
      <div className="hr"></div>
      <div className="container py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
        <div>© {new Date().getFullYear()} Kashin Arora</div>
        <div className="opacity-70">Built with React · Node · MongoDB</div>
      </div>
    </footer>
  );
}


// export default function Footer(){
//   return (
//     <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6">
//       <div className="container text-sm flex flex-col md:flex-row items-center justify-between gap-2">
//         <div>© {new Date().getFullYear()} Kashin Arora</div>
//         <div className="opacity-70">Built with React · Node · MongoDB</div>
//       </div>
//     </footer>
//   );
// }
