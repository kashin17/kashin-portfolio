import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/globals.css';

console.log('🚀 Kashin portfolio booting…');

const rootEl = document.getElementById('root');
if (!rootEl) {
  console.error('❌ #root not found in index.html');
} else {
  createRoot(rootEl).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}


// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.jsx';
// import './styles/globals.css';

// console.log("🚀 Kashin portfolio booting…");
// createRoot(document.getElementById('root')).render(
  
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
  
// );
