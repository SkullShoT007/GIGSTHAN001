import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { AllRoutes } from './routes/AllRoutes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AllRoutes>
          <App />
      </AllRoutes>
      
    </Router>
    
  </React.StrictMode>
);
