import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import Forms from './Components/Forms';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Forms />
  </React.StrictMode>
);

reportWebVitals();
