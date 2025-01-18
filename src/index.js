import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { KcalCalculator } from './KcalCaluculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KcalCalculator />
  </React.StrictMode>
);

