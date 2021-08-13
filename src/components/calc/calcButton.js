import React from 'react';
import PropTypes from 'prop-types';

const CalcButton = (props) => {
  const { value, colored, span } = props;
  const classList = `calc__btn
      ${colored ? ' btn--colored' : ''} 
      ${span !== 1 ? ` btn--span-${span}` : ''}`;
  return (
    <button type="button" className={classList} data-name={value}>
      {value}
    </button>
  );
};

CalcButton.propTypes = {
  value: PropTypes.string,
  colored: PropTypes.bool,
  span: PropTypes.number,
};

CalcButton.defaultProps = {
  value: 'X',
  colored: false,
  span: 1,
};

export { CalcButton as default };
