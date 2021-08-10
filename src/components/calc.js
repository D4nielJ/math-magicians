import React from 'react';
import Display from './calc/display';
import Button from './calc/button';

class Calc extends React.Component {
  render() {
    return (
      <div className='calc'>
        <Display />
        <Button />
      </div>
    );
  }
}

export { Calc as default };
