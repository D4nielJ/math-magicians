import React from 'react';
import Display from './calc/display';
import ButtonsContainer from './calc/buttonsContainer';
import './calc.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
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
      <div
        className="calc"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        aria-hidden="true"
      >
        <Display value={displayValue} />
        <ButtonsContainer />
      </div>
    );
  }
}

export { Calc as default };
