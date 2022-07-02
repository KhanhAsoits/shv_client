import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type = 'text' }) => {
  return <input type={type} />;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Input;
