import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SectionHeader = ({ to, text, onClick = () => {} }) => {
  return (
    <div className='flex items-center justify-between mb-4'>
      <h3 className='text-textPrimaryColor font-semibold text-xl'>{text}</h3>
      <Link
        to={to}
        onClick={onClick}
        className='opacity-0 group-hover:opacity-100'
      >
        <span className='text-textHover hover:text-[#7d9090]'>Xem tất cả</span>
      </Link>
    </div>
  );
};

SectionHeader.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SectionHeader;
