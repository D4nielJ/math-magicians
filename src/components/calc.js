import React, { useState } from 'react';
import Display from './calc/display';
import ButtonsContainer from './calc/buttonsContainer';
import calculate from './calc/logic/calculate';
import './calc.css';

const Calc = () => {
  const [calc, setCalc] = useState({ total: null, next: null, operation: null });

  const updateState = async (obj, key) => {
    console.log(obj, key);
    let { total, next, operation } = await calculate(obj, key);
    if (total === undefined) {
      total = obj.total;
    }
    if (next === undefined) {
      next = obj.next;
    }
    if (operation === undefined) {
      operation = obj.operation;
    }
    setCalc({ total, next, operation });
  };

  const handleClick = (obj, e) => {
    updateState(obj, e.target.dataset.name);
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
  };

  return (
    <div className="calc">
      <Display total={calc.total} next={calc.next} />
      <ButtonsContainer click={(e) => handleClick(calc, e)} keyDown={handleKeyDown} />
    </div>
  );
};

export { Calc as default };
