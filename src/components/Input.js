import React, { PropTypes } from 'react';

const Input = ({ className, onKeyPress }) => (
  <div className={`amount ${className}`}>
    <input
      name="Amount"
      type="text"
      placeholder="Input amount"
      onKeyPress={onKeyPress} />
  </div>
);

Input.propTypes = {
  onKeyPress: PropTypes.func,
};

Input.defaultProps = {
  onKeyPress: () => {}
};

export default Input;
