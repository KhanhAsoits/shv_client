import React from 'react';

import PropTypes from 'prop-types';
import ComicTableItem from './ComicTableItem';

const ComicTable = ({ comicList = [] }) => {
  return (
    <div className='border-t-[1px] border-[#ebebeb]'>
      {comicList.map((comic, index) => {
        const hasBackgroundColor = index % 2 === 0 ? false : true;
        return (
          <ComicTableItem
            comic={comic}
            key={index}
            hasBackgroundColor={hasBackgroundColor}
          />
        );
      })}
    </div>
  );
};

ComicTable.propTypes = {
  comicList: PropTypes.array.isRequired,
};

export default ComicTable;
