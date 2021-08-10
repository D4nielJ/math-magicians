import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, next } = this.props;
    let display = '0';
    if (total) {
      display = total;
    }
    if (next) {
      display = next;
    }
    return <div className="calc__display">{display}</div>;
  }
}

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: '',
  next: '',
};

export { Display as default };
