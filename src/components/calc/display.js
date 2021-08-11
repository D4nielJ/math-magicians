import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next, operation } = props.state;
  console.log(total, next, operation);
  return (
    <div className="calc__display">
      <div className="display__operation">{operation}</div>
      <div className="display__total">{total}</div>
      <div className="display__next">{next}</div>
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
