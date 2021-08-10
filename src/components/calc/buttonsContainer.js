import React from 'react';
import CalcButton from './calcButton';
// import NumbersContainer from './numbersContainer';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonsContainer extends React.Component {
  render() {
    return (
      <div className="calc__btns-container">
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

export { ButtonsContainer as default };
