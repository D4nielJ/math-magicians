import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class CalcButton extends React.Component {
  render() {
    const { value, colored, span } = this.props;
    const classList = `calc__btn
      ${colored ? ' btn--colored' : ''} 
      ${span !== 1 ? ` btn--span-${span}` : ''}`;
    return (
      <button type="button" className={classList}>
        {value}
      </button>
    );
  }
}

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
