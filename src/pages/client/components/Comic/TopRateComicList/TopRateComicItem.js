import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../../../../styles/topRateComic.style.css';

import medalOne from '../../../../../images/common/medal-1.svg';
import medalTwo from '../../../../../images/common/medal-2.svg';
import medalThree from '../../../../../images/common/medal-3.svg';
import iconCandy from '../../../../../images/homePage/candy.svg';
import iconFlower from '../../../../../images/homePage/flower.svg';

import generateSlug from '../../../../../utils/generateSlug';

const TopRateComicItem = ({
  comicList,
  rewardedWeek = false,
  popularWeek = false,
  suggestWeek = false,
}) => {
  return (
    <div>
      {comicList.map((comic, index) => {
        const slug = generateSlug(comic.title);
        return (
          <Fragment key={index}>
            {comic.topRate === 1 && (
              <div className='flex justify-between border-b-[1px] border-[#ebebeb] pb-3'>
                <div className='flex'>
                  <span className='w-[32px]'>
                    <img src={medalOne} alt='top-1' />
                  </span>
                  <div className='ml-1'>
                    <h5 className='text-truncate-1 text-textPrimaryColor font-semibold hover:text-textHover'>
                      <Link to={`/truyen/${slug}`}>{comic.title}</Link>
                    </h5>
                    <div className='flex'>
                      <span
                        className={`mr-2 ${rewardedWeek && 'text-[#65c0ba]'} ${
                          popularWeek && 'text-[#ebb617]'
                        } ${rewardedWeek && 'text-textHover'}`}
                      >
                        {comic.point}
                      </span>
                      <span>
                        {rewardedWeek && (
                          <img
                            src={iconCandy}
                            alt=''
                            className='w-[20px] h-[20px]'
                          />
                        )}

                        {popularWeek && (
                          <i className='fa-solid fa-circle-up text-[#ebb617]'></i>
                        )}

                        {suggestWeek && (
                          <img
                            src={iconFlower}
                            alt=''
                            className='w-[11px] h-[18px]'
                          />
                        )}
                      </span>
                    </div>
                    <div className='text-textSecondaryColor text-[13px]'>
                      <i className='fa-solid fa-user-pen mr-2'></i>
                      <span>{comic.author}</span>
                    </div>
                    <div className='text-textSecondaryColor text-[13px]'>
                      <i className='fa-solid fa-book mr-2'></i>
                      <span>{comic.category}</span>
                    </div>
                  </div>
                </div>

                <div className='ml-2 flex-shrink-0 book-cover'>
                  <Link to={`/truyen/${slug}`} className='book-cover-link'>
                    <img
                      src={comic.imageUrl}
                      alt='comic-image'
                      className='w-[70px] h-[105px] '
                    />
                  </Link>
                  <span className='book-cover-shadow'></span>
                </div>
              </div>
            )}

            {(comic.topRate === 2 || comic.topRate === 3) && (
              <div className='flex justify-between items-center border-b-[1px] border-[#ebebeb] h-[43px]'>
                <div className='flex flex-1'>
                  <span className='w-[32px] ml--1'>
                    <img
                      src={comic.topRate === 2 ? medalTwo : medalThree}
                      alt='top-2'
                    />
                  </span>
                  <h5 className='text-textPrimaryColor hover:text-textHover flex items-center flex-1'>
                    <Link to={`/truyen/${slug}`} className='flex-1'>
                      {comic.title}
                    </Link>
                  </h5>
                </div>
                <div>
                  <span className='text-textSecondaryColor '>
                    {comic.point}
                  </span>
                </div>
              </div>
            )}

            {comic.topRate > 3 && (
              <div
                className={`flex justify-between items-center ${
                  index === comicList.length - 1
                    ? ''
                    : 'border-b-[1px] border-[#ebebeb]'
                } h-[43px]`}
              >
                <div className='flex flex-1'>
                  <span className='text-textPrimaryColor font-semibold w-[32px] flex justify-center ml-[-6px]'>
                    {comic.topRate}
                  </span>
                  <h5 className='text-textPrimaryColor hover:text-textHover flex items-center flex-1'>
                    <Link to={`/truyen/${slug}`} className='flex-1'>
                      {comic.title}
                    </Link>
                  </h5>
                </div>
                <div>
                  <span className='text-textSecondaryColor '>
                    {comic.point}
                  </span>
                </div>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

TopRateComicItem.propTypes = {
  comicList: PropTypes.array.isRequired,
  rewardedWeek: PropTypes.bool,
  popularWeek: PropTypes.bool,
  suggestWeek: PropTypes.bool,
};

export default TopRateComicItem;
