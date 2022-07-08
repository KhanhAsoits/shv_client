import React from 'react';
import PropTypes from 'prop-types';

const SectionLayout = ({ children }) => {
  return <div className='group overflow-hidden'>{children}</div>;
};

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionLayout;
