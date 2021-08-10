import React from 'react';
import CalcButton from './calcButton';
import NumbersContainer from './numbersContainer';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonsContainer extends React.Component {
  render() {
    return (
      <>
        <NumbersContainer />
        <CalcButton name="clear" value="AC" />
        <CalcButton name="sign" value="+/-" />
        <CalcButton name="percentage" value="%" />
        <CalcButton name="division" value="÷" />
        <CalcButton name="mult" value="x" />
        <CalcButton name="substr" value="-" />
        <CalcButton name="sum" value="+" />
        <CalcButton name="floating" value="." />
        <CalcButton name="result" value="=" />
      </>
    );
  }
}

export { ButtonsContainer as default };
