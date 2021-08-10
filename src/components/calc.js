import React from 'react';
import Display from './calc/display';
import ButtonsContainer from './calc/buttonsContainer';
import operate from './calc/logic/operate';
import './calc.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(e) {
    operate(this.state, e.target.dataset.name);
    this.setState({
      displayValue: '1',
    });
  }

  handleKeyDown(e) {
    console.log(e.keyCode, this);
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className="calc">
        <Display value={displayValue} />
        <ButtonsContainer
          click={this.handleClick}
          keyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export { Calc as default };
