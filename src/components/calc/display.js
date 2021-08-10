import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const { value } = this.props;
    return <div className="display">{value}</div>;
  }
}

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: 0,
};

export { Display as default };
