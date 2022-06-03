import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { total, next } = props;
  return (
    <div className="calculator-output">{next || total || 0}</div>
  );
};
Display.propTypes = {
  next: PropTypes.string,
  total: PropTypes.string,
};
Display.defaultProps = {
  next: null,
  total: null,
};

export default Display;
