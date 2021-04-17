import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import 'modern-normalize/modern-normalize.css';
import './styles.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
