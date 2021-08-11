import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next, operation } = props.state;
  let display = 0;
  let holder = '';
  if (total) {
    display = total;
  }
  if (next) {
    display = next;
  }
  if (total && operation) {
    display = '';
    holder = total;
    if (next) {
      display = next;
    }
  }
  return (
    <div className="calc__display">
      <div className="display__operation">{operation}</div>
      <div className="display__total">{holder}</div>
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

export { Display as default };
