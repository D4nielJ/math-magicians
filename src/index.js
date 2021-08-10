import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './components/calc';
import 'modern-css-reset';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Calc />
  </React.StrictMode>,
  document.getElementById('root'),
);
