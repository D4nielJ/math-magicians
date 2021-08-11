import React from 'react';
import PropTypes from 'prop-types';
import displayLogic from './logic/displayLogic';

const Display = (props) => {
  const { total, next, operation } = props;
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
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: '',
  next: '',
  operation: '',
};

export { Display as default };
