import React from 'react';

class Calc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{ this.props.test }</div>
    );
  }
}

export { Calc as default };
