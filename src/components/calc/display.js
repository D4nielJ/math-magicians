import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next, operation } = props.state;
  const { operationChar, holder, display } = displayLogic(total, next, operation);
  let classOperation = 'display__operation';
  if (operationChar === 0) {
    classOperation = 'display__operation no-opacity';
  }
  let classHolder = 'display__holder';
  if (holder === 0) {
    classHolder = 'display__holder no-opacity';
  }
  return (
    <div className="calc__display">
      <div className={classOperation}>{operationChar}</div>
      <div className={classHolder}>{holder}</div>
      <div className="display__next">{display}</div>
    </div>
  );
};

Display.propTypes = {
  state: PropTypes.object,
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: '',
  next: '',
  operation: '',
};

const displayLogic = (total, next, operation) => {
  let display = 0;
  let holder = 0;
  let operationChar = 0;
  if (operation) {
    operationChar = operation;
  }
  if (total) {
    display = total;
  }
  if (next) {
    display = next;
  }
  if (total && operation) {
    display = ' ';
    holder = total;
    if (next) {
      display = next;
    }
  }
  return { display, holder, operationChar };
};

export { Display as default };
