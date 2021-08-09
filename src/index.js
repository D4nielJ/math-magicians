import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './calc/calc';

ReactDOM.render(
  <React.StrictMode>
    <Calc test="Hello world" />
  </React.StrictMode>,
  document.getElementById('root'),
);
