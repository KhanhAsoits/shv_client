import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ComicCard = (props) => {
  const {
    title = '',
    description = '',
    imageUrl = '',
    author = '',
    category = '',
    slug = '',
  } = props;
  return (
    <div className='flex justify-between'>
      <Link
        to={`/truyen/${slug}`}
        className='shrink-0 w-[72px] h-[96px] mr-3 shadow-lg hover:opacity-90'
      >
        <img src={imageUrl} alt='Comic' />
      </Link>
      <div className='flex flex-col'>
        <h4 className='mb-1.5'>
          <Link
            to={`/truyen/${slug}`}
            className='text-textPrimaryColor font-semibold hover:text-textHover'
          >
            {title}
          </Link>
        </h4>
        <p className='comic-description text-truncate-2'>{description}</p>
        <div className='flex justify-between items-center mt-2 text-textSecondaryColor'>
          <div className='flex text-sm items-center'>
            <i className='fa-solid fa-user-pen mr-2'></i>
            <p>{author}</p>
          </div>
          <Link
            to='/truyen'
            className='border text-textHover text-[12px] px-2 leading-[18px] bg-white'
          >
            <span>{category}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

ComicCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ComicCard;
