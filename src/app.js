import React from 'react';
import Calc from './components/calc';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calc />
      </div>
    );
  }
}

export default App;
