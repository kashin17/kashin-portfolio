import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import Login from './admin/Login.jsx';
import Dashboard from './admin/Dashboard.jsx';
import ProjectForm from './admin/ProjectForm.jsx';

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-10 md:py-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/new" element={<ProjectForm />} />
          <Route path="/admin/edit/:id" element={<ProjectForm />} />

          <Route path="*" element={<div className="py-20 text-center">Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar.jsx';
// import Footer from './components/layout/Footer.jsx';
// import Home from './pages/Home.jsx';
// import Projects from './pages/Projects.jsx';
// import ProjectDetail from './pages/ProjectDetail.jsx';
// import About from './pages/About.jsx';
// import Experience from './pages/Experience.jsx';
// import Skills from './pages/Skills.jsx';
// import Contact from './pages/Contact.jsx';
// import Login from './admin/Login.jsx';
// import Dashboard from './admin/Dashboard.jsx';
// import ProjectForm from './admin/ProjectForm.jsx';

// export default function App(){
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-1 container py-8">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/projects/:slug" element={<ProjectDetail />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/contact" element={<Contact />} />

//           <Route path="/admin/login" element={<Login />} />
//           <Route path="/admin" element={<Dashboard />} />
//           <Route path="/admin/new" element={<ProjectForm />} />
//           <Route path="/admin/edit/:id" element={<ProjectForm />} />

//           <Route path="*" element={<div className="py-20 text-center">Not Found</div>} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }
