import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick = () => {}, className }) => {
  return (
    <button className={className} onClick={() => onClick()}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
