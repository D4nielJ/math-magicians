import React from 'react';
import Display from './calc/display';
import ButtonsContainer from './calc/buttonsContainer';

// eslint-disable-next-line react/prefer-stateless-function
class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
    };
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className="calc">
        <Display value={displayValue} />
        <ButtonsContainer />
      </div>
    );
  }
}

export { Calc as default };
