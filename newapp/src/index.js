import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Demo from './Demo';
import Timer from './Timer';
import reportWebVitals from './reportWebVitals';
import StudentManagementSystem from './Semo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Demo />
    <Timer />
    <StudentManagementSystem />
    
  </>
);

reportWebVitals();

