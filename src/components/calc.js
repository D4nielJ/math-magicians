import React from 'react';
import Display from './calc/display';
import ButtonsContainer from './calc/buttonsContainer';

class Calc extends React.Component {
  render() {
    return (
      <div className="calc">
        <Display />
        <ButtonsContainer />
      </div>
    );
  }
}

export { Calc as default };
