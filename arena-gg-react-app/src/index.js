// src/index.js (Example)
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; // Remove or modify default CRA styles if needed
import '../arenagg_style.css';
import '../dashboard.css';
import '../style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);