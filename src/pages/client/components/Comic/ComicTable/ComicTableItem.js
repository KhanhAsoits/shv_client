import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ComicTableItem = ({ comic = {}, hasBackgroundColor = false }) => {
  return (
    <div
      className={`flex items-center hover:bg-[#fafafa] ${
        hasBackgroundColor ? 'bg-[#fafcfc]' : ''
      }`}
    >
      <div className='p-3 w-[10%]'>
        <h5 className='text-[#999999] text-sm text-truncate-1'>
          [{comic.category}]
        </h5>
      </div>
      <div className='p-3 w-[37.5%]'>
        <h4 className='text-textPrimaryColor font-semibold text-truncate-1'>
          <Link to={`truyen/${comic.slug}`} className='hover:text-textHover'>
            {comic.title}
          </Link>
        </h4>
      </div>
      <div className='p-3 w-[27.5%]'>
        <h4 className='text-textPrimaryColor text-sm hover:text-textHover'>
          <Link
            to={`/truyen/${comic.slug}/${comic.currentChapterSlug}`}
            className='pr-12 text-truncate-1'
          >
            {comic.currentChapter}
          </Link>
        </h4>
      </div>

      <div className='p-3 w-[15%]'>
        <h4 className='text-[#212529] text-sm text-truncate-1'>
          {comic.author}
        </h4>
      </div>
      <div className='p-3 w-[10%] flex justify-end'>
        <h4 className='text-[#999999] text-sm text-truncate-1'>
          {comic.timeUpdated}
        </h4>
      </div>
    </div>
  );
};

ComicTableItem.propTypes = {
  comic: PropTypes.object.isRequired,
  hasBackgroundColor: PropTypes.bool,
};

export default ComicTableItem;
