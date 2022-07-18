import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewRateComment = ({ newRateComment, slug }) => {
  return (
    <div className='mb-3 bg-[#f7fafa] px-4 pb-3 pt-3 rounded-lg shadow-sm'>
      <div className='flex justify-between items-center'>
        <div className='flex'>
          <Link className='mr-2.5' to={`/ho-so/${newRateComment.userId}`}>
            <img
              src={newRateComment.avatarUrl}
              alt='avatar'
              className='w-[45px] h-[45px] object-cover rounded-full'
            />
          </Link>
          <div>
            <div>
              <Link to={`/ho-so/${newRateComment.userId}`}>
                <span className='text-textPrimaryColor font-semibold'>
                  {newRateComment.name}
                </span>
              </Link>
              <span className='ml-1 text-textSecondaryColor'>đánh giá</span>
            </div>
            <Link to={`/truyen/${slug}`}>
              <span className='text-textHover font-semibold'>
                {newRateComment.ratedComic}
              </span>
            </Link>
          </div>
        </div>
        <div>
          <span className='px-2 py-1 rounded-2xl bg-textHover text-white text-base'>
            {newRateComment.star}
          </span>
        </div>
      </div>
      <p className='text-truncate-3 text-textPrimaryColor mt-2 pt-1'>
        {newRateComment.comment}
      </p>
    </div>
  );
};

NewRateComment.propTypes = {
  newRateComment: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

export default NewRateComment;
