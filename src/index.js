import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './Styles/reset.css';
import './Styles/main.css';
import './Styles/modificators.css';

import App from './Components/App';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
