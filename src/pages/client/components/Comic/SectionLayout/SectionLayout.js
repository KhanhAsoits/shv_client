import React from 'react';
import PropTypes from 'prop-types';

const SectionLayout = ({ children, className }) => {
  return <div className={`group overflow-hidden ${className}`}>{children}</div>;
};

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionLayout;
