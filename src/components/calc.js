import React from 'react';
import Display from './calc/display';
import ButtonsContainer from './calc/buttonsContainer';
import calculate from './calc/logic/calculate';
import './calc.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: undefined,
      next: undefined,
      operation: undefined,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick = async (e) => {
    const { total, next, operation } = await calculate(
      this.state,
      e.target.dataset.name,
    );
    if (total || total === null) {
      this.setState({
        total,
      });
    }
    if (next || next === null) {
      this.setState({
        next,
      });
    }
    if (operation || operation === null) {
      this.setState({
        operation,
      });
    }
  };

  handleKeyDown(e) {
    console.log(e.keyCode, this);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calc">
        <Display total={total} next={next} />
        <ButtonsContainer
          click={this.handleClick}
          keyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export { Calc as default };
