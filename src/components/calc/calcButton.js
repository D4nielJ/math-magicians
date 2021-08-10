import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class CalcButton extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <button type="button" className="calc__btn">
        {value}
      </button>
    );
  }
}

CalcButton.propTypes = {
  value: PropTypes.string,
};

CalcButton.defaultProps = {
  value: 'X',
};

export { CalcButton as default };
