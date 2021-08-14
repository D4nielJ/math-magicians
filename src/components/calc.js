import React, { useEffect, useState } from 'react';
import Display from './calc/display';
import ButtonsContainer from './calc/buttonsContainer';
import { isNumber, calculate } from './calc/logic/calculate';
import './calc.css';
import Warning from './calc/warning';

const Calc = () => {
  const [calc, setCalc] = useState({ total: null, next: null, operation: null });

  const [badDivision, setBadDivision] = useState(false);
  useEffect(() => {
    if (badDivision) {
      setTimeout(() => {
        setBadDivision(false);
      }, 5000);
    }
  });

  const maxLength = 20;

  const updateState = (obj, key) => {
    if (obj.next !== null && obj.next.length >= maxLength && isNumber(key)) {
      return;
    }

    const newObj = calculate(obj, key);

    if (newObj.total === 'Undefined') {
      setBadDivision(true);
      setCalc({ total: null, next: null, operation: null });
    } else {
      setCalc((preObj) => ({ ...preObj, ...newObj }));
    }
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
      <Warning warning={badDivision} />
    </div>
  );
};

export default Calc;
