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
    star = null,
    rate = null,
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
        {star && rate && (
          <div className='mb-2 mt-0.5'>
            <span className='px-2 py-1 rounded-2xl bg-textHover text-white text-base'>
              {star}
            </span>
            <span className='ml-3 text-textSuccessColor'>{rate} đánh giá</span>
          </div>
        )}
        <p className='comic-description text-sm text-textSecondaryColor text-truncate-2'>
          {description}
        </p>
        <div className='flex justify-between items-center mt-3 text-textSecondaryColor'>
          <div className='flex text-sm items-center w-[50%]'>
            <i className='fa-solid fa-user-pen mr-2'></i>
            <p className='text-truncate-1'>{author}</p>
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
  star: PropTypes.string,
  rate: PropTypes.number,
};

export default ComicCard;
