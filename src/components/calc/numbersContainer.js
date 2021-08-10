import React from 'react';
import CalcButton from './calcButton';

// eslint-disable-next-line react/prefer-stateless-function
class ButtonsContainer extends React.Component {
  render() {
    const generateNumbers = () => {
      const numbers = [];
      for (let i = 0; i <= 9; i += 1) {
        numbers.push(<CalcButton value={i} />);
      }
      return numbers;
    };
    return generateNumbers();
  }
}

export { ButtonsContainer as default };
