import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './components/calc';

ReactDOM.render(
  <React.StrictMode>
    <Calc test="Hello world" />
  </React.StrictMode>,
  document.getElementById('root'),
);
