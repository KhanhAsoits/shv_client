import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  onClick = () => {},
  className = '',
  to = false,
}) => {
  let Component = 'button';

  let props = {
    onClick,
  };
  if (to) {
    Component = Link;
    props = {
      ...props,
      to,
    };
  }
  return (
    <Component className={`cursor-pointer ${className}`} {...props}>
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default Button;
