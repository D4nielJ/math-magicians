import React from 'react';
import PropTypes from 'prop-types';

const Calc = ({ test }) => <div>{ test }</div>;

Calc.propTypes = {
  test: PropTypes.string,
};

Calc.defaultProps = {
  test: '',
};

export { Calc as default };
