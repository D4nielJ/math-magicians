import React from 'react';
import Display from './calc/display';
import ButtonsContainer from './calc/buttonsContainer';
import calculate from './calc/logic/calculate';
import './calc.css';

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

  handleClick = (e) => {
    this.updateState(e.target.dataset.name);
  };

  handleKeyDown = (e) => {
    e.preventDefault();
  };

  updateState = (key) => {
    const { total, next, operation } = calculate(this.state, key);
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
