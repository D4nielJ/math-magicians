import React, { useEffect, useState } from 'react';
import Display from './calc/display';
import ButtonsContainer from './calc/buttonsContainer';
import calculate from './calc/logic/calculate';
import './calc.css';

const updateState = (obj, key) => {
  const newObj = calculate(obj, key);
  return newObj;
};

const handleClick = (obj, e) => {
  updateState(obj, e.target.dataset.name);
};

const handleKeyDown = (e) => {
  e.preventDefault();
};

const Calc = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  useEffect(handleClick(calc, e));

  return (
    <div className="calc">
      <Display total={total} next={next} />
      <ButtonsContainer click={handleClick} keyDown={handleKeyDown} />
    </div>
  );
};

export { Calc as default };
