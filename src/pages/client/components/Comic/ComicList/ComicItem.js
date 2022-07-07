import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ComicItem = (props) => {
  const { title = '', imageUrl = '', slug = '' } = props;
  return (
    <div className='flex mb-3.5'>
      <Link
        to={`/truyen/${slug}`}
        className='shrink-0 w-[32px] h-[43px] mr-3 shadow-sm hover:opacity-90'
      >
        <img src={imageUrl} alt='Comic' />
      </Link>
      <div className='flex flex-col'>
        <h4>
          <Link
            to={`/truyen/${slug}`}
            className='text-textPrimaryColor font-semibold hover:text-textHover'
          >
            {title}
          </Link>
        </h4>
        <p className='text-[#6c757d]'> Đã đọc: 0/2476</p>
      </div>
    </div>
  );
};

ComicItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ComicItem;
