import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next } = props;
  let display = '0';
  if (total) {
    display = total;
  }
  if (next) {
    display = next;
  }
  return <div className="calc__display">{display}</div>;
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: '',
  next: '',
};

export { Display as default };
