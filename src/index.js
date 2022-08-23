import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
       <App /> 
    </BrowserRouter>
  
  // </React.StrictMode>
);

const API_KEY = '2fbaf0abda7e75b14a06c1d021f41a8b'
console.log('API_KEY', API_KEY)
