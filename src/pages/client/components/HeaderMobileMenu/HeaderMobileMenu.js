import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderMobileMenu = ({ rankList = [], categoryList = [] }) => {
  const [isShowRankList, setIsShowRankList] = useState(false);
  const [isShowCategoryList, setIsShowCategoryList] = useState(false);

  return (
    <div className='text-textPrimaryColor text-[16px]'>
      <div className='p-3 border-b-[1px] border-[#ebebeb] font-semibold'>
        <i className='fa-solid fa-user'></i>
        <span className='ml-3'>Đăng nhập</span>
      </div>
      <div className='p-3 border-b-[1px] border-[#ebebeb] font-semibold'>
        <i className='fa-solid fa-user-pen'></i>
        <span className='ml-3'>Đăng ký</span>
      </div>
      <div className={`p-3 font-semibold border-b-[1px] border-[#ebebeb]`}>
        <div
          className='flex items-center justify-between'
          onClick={() => setIsShowRankList((prev) => !prev)}
        >
          <div>
            <i className='fa-solid fa-chart-simple'></i>
            <span className='ml-3'>Bảng xếp hạng</span>
          </div>
          <span>
            <i
              className={`fa-solid fa-chevron-down transition-all duration-300 ${
                isShowRankList ? 'rotate-180' : 'rotate-0'
              }`}
            ></i>
          </span>
        </div>
        <ul className={`mt-2.5 ${isShowRankList ? 'block' : 'hidden'}`}>
          {rankList.length > 0 &&
            rankList.map((rank, index) => (
              <li key={index} className='py-2 px-3 font-normal'>
                <Link to={rank.path}>
                  <span className='py-2 px-3'>{rank.content}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className={`p-3 font-semibold border-b-[1px] border-[#ebebeb]`}>
        <div
          className='flex items-center justify-between'
          onClick={() => setIsShowCategoryList((prev) => !prev)}
        >
          <div>
            <i className='fa-solid fa-table-cells-large'></i>
            <span className='ml-3'>Thể loại</span>
          </div>
          <span>
            <i
              className={`fa-solid fa-chevron-down transition-all duration-300 ${
                isShowCategoryList ? 'rotate-180' : 'rotate-0'
              }`}
            ></i>
          </span>
        </div>
        <ul className={`mt-2.5 ${isShowCategoryList ? 'block' : 'hidden'}`}>
          {categoryList.length > 0 &&
            categoryList.map((category, index) => (
              <li key={index} className='py-2 px-3 font-normal'>
                <Link to={category.path}>
                  <span className='py-2 px-3'>{category.content}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

HeaderMobileMenu.propTypes = {
  rankList: PropTypes.array.isRequired,
  categoryList: PropTypes.array.isRequired,
};

export default HeaderMobileMenu;
