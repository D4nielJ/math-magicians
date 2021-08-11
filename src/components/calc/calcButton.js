import React from 'react';
import PropTypes from 'prop-types';

class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, colored, span } = this.props;
    const classList = `calc__btn
      ${colored ? ' btn--colored' : ''} 
      ${span !== 1 ? ` btn--span-${span}` : ''}`;
    return (
      <button type="button" className={classList} data-name={value}>
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
