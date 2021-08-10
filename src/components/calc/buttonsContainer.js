import React from 'react';
import PropTypes from 'prop-types';
import CalcButton from './calcButton';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonsContainer extends React.Component {
  render() {
    const { click, keyDown } = this.props;
    return (
      <div
        className="calc__btns-container"
        onClick={click}
        onKeyDown={keyDown}
        aria-hidden="true"
      >
        <CalcButton name="clear" value="AC" />
        <CalcButton name="sign" value="+/-" />
        <CalcButton name="percentage" value="%" />
        <CalcButton name="division" value="÷" colored />

        <CalcButton name="number" value="7" />
        <CalcButton name="number" value="8" />
        <CalcButton name="number" value="9" />
        <CalcButton name="mult" value="x" colored />

        <CalcButton name="number" value="4" />
        <CalcButton name="number" value="5" />
        <CalcButton name="number" value="6" />
        <CalcButton name="substr" value="-" colored />

        <CalcButton name="number" value="1" />
        <CalcButton name="number" value="2" />
        <CalcButton name="number" value="3" />
        <CalcButton name="sum" value="+" colored />

        <CalcButton name="number" value="0" span={2} />
        <CalcButton name="floating" value="." />
        <CalcButton name="result" value="=" colored />
      </div>
    );
  }
}

ButtonsContainer.propTypes = {
  click: PropTypes.func,
  keyDown: PropTypes.func,
};

ButtonsContainer.defaultProps = {
  click: () => console.log(-1),
  keyDown: () => console.log(-1),
};

export { ButtonsContainer as default };
