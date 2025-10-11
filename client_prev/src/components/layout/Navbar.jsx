import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LinkCls = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-lg transition hover:bg-zinc-100 dark:hover:bg-zinc-800/60 ${isActive ? 'text-brand-700 dark:text-brand-400' : 'text-zinc-700 dark:text-zinc-300'}`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-900">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg tracking-tight">
          <span className="text-brand-600">Kashin</span> Arora
        </Link>
        <nav className="flex gap-1">
          <LinkCls to="/projects">Projects</LinkCls>
          <LinkCls to="/experience">Experience</LinkCls>
          <LinkCls to="/skills">Skills</LinkCls>
          <LinkCls to="/about">About</LinkCls>
          <LinkCls to="/contact">Contact</LinkCls>
          <LinkCls to="/admin">Admin</LinkCls>
        </nav>
      </div>
    </header>
  );
}



// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const LinkCls = ({ to, children }) => (
//   <NavLink to={to} className={({isActive}) => `px-3 py-2 rounded-lg ${isActive? 'bg-zinc-200 dark:bg-zinc-800' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}>{children}</NavLink>
// );

// export default function Navbar(){
//   return (
//     <header className="border-b border-zinc-200 dark:border-zinc-800">
//       <div className="container flex items-center justify-between h-16">
//         <Link to="/" className="font-semibold text-lg">Kashin Arora</Link>
//         <nav className="flex gap-2">
//           <LinkCls to="/projects">Projects</LinkCls>
//           <LinkCls to="/experience">Experience</LinkCls>
//           <LinkCls to="/skills">Skills</LinkCls>
//           <LinkCls to="/about">About</LinkCls>
//           <LinkCls to="/contact">Contact</LinkCls>
//           <LinkCls to="/admin">Admin</LinkCls>
//         </nav>
//       </div>
//     </header>
//   );
// }
