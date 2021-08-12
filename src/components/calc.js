import React, { useEffect, useState } from 'react';
import Display from './calc/display';
import ButtonsContainer from './calc/buttonsContainer';
import { isNumber, calculate } from './calc/logic/calculate';
import './calc.css';

const Calc = () => {
  const [calc, setCalc] = useState({ total: null, next: null, operation: null });
  useEffect(() => {
    if (calc.total === 'Undefined') {
      setCalc({ total: null, next: null, operation: null });
    }
  });
  const maxLength = 20;

  const updateState = async (obj, key) => {
    if (obj.next !== null && obj.next.length >= maxLength && isNumber(key)) {
      return;
    }
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

  const { total, next, operation } = calc;

  return (
    <div className="calc">
      <Display total={total} next={next} operation={operation} />
      <ButtonsContainer click={(e) => handleClick(calc, e)} keyDown={handleKeyDown} />
    </div>
  );
};

export { Calc as default };
