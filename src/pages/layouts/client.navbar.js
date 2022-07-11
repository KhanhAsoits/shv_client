import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { logo } from '../../images/layouts';
import { logoMobile } from '../../images/layouts';

import ModalAuth from './client.modalAuth.js';

import '../../styles/clientNavbar.style.css';
import HeaderMobileMenu from '../client/components/HeaderMobileMenu';

import preventScroll from '../../utils/preventScroll';

const categoryList = [
  {
    path: '/truyen',
    content: 'Tất cả',
  },
  {
    path: '/truyen',
    content: 'Tiên Hiệp',
  },
  {
    path: '/truyen',
    content: 'Huyền Huyễn',
  },
  {
    path: '/truyen',
    content: 'Khoa Huyễn',
  },
  {
    path: '/truyen',
    content: 'Võng Du',
  },
  {
    path: '/truyen',
    content: 'Đô Thị',
  },
  {
    path: '/truyen',
    content: 'Đồng Nhân',
  },
  {
    path: '/truyen',
    content: 'Dã Sử',
  },
  {
    path: '/truyen',
    content: 'Cạnh Kỹ',
  },
  {
    path: '/truyen',
    content: 'Huyền Nghi',
  },
  {
    path: '/truyen',
    content: 'Kiếm Hiệp',
  },
  {
    path: '/truyen',
    content: 'Kỳ Ảo',
  },
];

const rankList = [
  {
    path: '/bang-xep-hang/tuan/thinh-hanh',
    content: 'Thịnh hành',
  },
  {
    path: '/bang-xep-hang/tuan/doc-nhieu',
    content: 'Đọc nhiều',
  },
  {
    path: '/bang-xep-hang/tuan/tang-thuong',
    content: 'Tặng thưởng',
  },
  {
    path: '/bang-xep-hang/tuan/de-cu',
    content: 'Đề cử',
  },
  {
    path: '/bang-xep-hang/tuan/yeu-thich',
    content: 'Yêu thích',
  },
  {
    path: '/bang-xep-hang/tuan/thao-luan',
    content: 'Thảo luận',
  },
];

export const ClientNavbar = (props) => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalLogin, setIsShowModalLogin] = useState(true);

  const [isShowSearch, setIsShowSearch] = useState(false);

  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);

  const navigate = useNavigate();

  return (
    <header
      className={'min-h-[58px] bg-white desktop:bg-[#f2f5f5] desktop:h-[72px]'}
    >
      <Container className='min-h-[58px]'>
        <div className='flex justify-between items-center min-h-[58px]'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='mr-6'>
              <img
                src={logo}
                alt='Logo'
                className='w-[48px] h-[48px] object-cover hidden desktop:block'
              />

              <img
                src={logoMobile}
                alt='Logo'
                className='w-[122px] h-[24px] object-cover block desktop:hidden'
              />
            </Link>

            <div className='px-3 py-6 font-semibold cursor-pointer hover:bg-[#edf0f0] relative group hover:after:block after:hidden after:content-[""] after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2 after:border-8 after:border-transparent after:border-b-white hidden desktop:block'>
              <span>
                <i className='fa-solid fa-bars'></i>
              </span>
              <span className='ml-1.5'>
                Thể loại
                <ul className='z-10 flex flex-wrap w-[500px] px-6 py-3 bg-white shadow-sm transition-all invisible opacity-0 absolute top-full left-0 group-hover:visible group-hover:opacity-100 '>
                  {categoryList.length > 0 &&
                    categoryList.map((category, index) => {
                      return (
                        <Link
                          to={category.path}
                          key={index}
                          className='w-[50%] py-1.5 text-[#212529] hover:text-textHover'
                        >
                          {category.content}
                        </Link>
                      );
                    })}
                </ul>
              </span>
            </div>

            <div className='px-3 py-6 font-semibold cursor-pointer hover:bg-[#edf0f0] relative group hover:after:block after:hidden after:content-[""] after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2 after:border-8 after:border-transparent after:border-b-white hidden desktop:block'>
              <div onClick={() => navigate('/bang-xep-hang')}>
                <span className='text-textPrimaryColor'>
                  Bảng xếp hạng
                  <ul className='z-10 flex flex-wrap w-[160px] py-3 px-0 bg-white shadow-sm transition-all invisible opacity-0 absolute top-full left-0 group-hover:visible group-hover:opacity-100'>
                    {rankList.length > 0 &&
                      rankList.map((rank, index) => {
                        return (
                          <Link
                            to={rank.path}
                            key={index}
                            className='w-full py-1.5 px-3 text-[#212529] hover:text-textHover'
                          >
                            {rank.content}
                          </Link>
                        );
                      })}
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div
            className={`items-center relative rounded-full border-[3px] hidden desktop:flex ${
              isInputFocus ? 'border-[#dfe5e5]' : 'border-transparent'
            }`}
          >
            <input
              type='text'
              placeholder='Tìm kiếm'
              className='py-1.5 pl-6 pr-14 h-10 rounded-full outline-none'
              onFocus={() => {
                setIsInputFocus(true);
              }}
              onBlur={() => setIsInputFocus(false)}
            />
            <div className='absolute right-1 px-6 py-4 cursor-pointer w-5 h-5 flex items-center justify-center'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </div>
          </div>

          <div className='hidden desktop:block'>
            <span
              to='/'
              className='px-3 py-2 hover:text-textHover cursor-pointer'
            >
              <i className='fa-solid fa-circle-arrow-up mr-1.5'></i>
              <span>Đăng truyện</span>
            </span>
            <span
              className='px-3 py-2 hover:text-textHover cursor-pointer'
              onClick={() => {
                setIsShowModal(true);
                setIsShowModalLogin(true);
                setIsShowSearch(true);
              }}
            >
              Đăng nhập
            </span>
            <span
              className='px-3 py-2 hover:text-textHover cursor-pointer'
              onClick={() => {
                setIsShowModal(true);
                setIsShowModalLogin(false);
              }}
            >
              Đăng ký
            </span>
          </div>

          <div className='desktop:hidden flex items-center'>
            <div>
              <span
                className={`${isShowSearch ? 'hidden' : 'block'}`}
                onClick={() => {
                  setIsShowSearch(true);
                  setIsShowMenuMobile(false);
                  preventScroll(false);
                }}
              >
                <i className='fa-solid fa-magnifying-glass p-2 text-xl'></i>
              </span>

              <span
                className={`${isShowSearch ? 'block' : 'hidden'}`}
                onClick={() => setIsShowSearch(false)}
              >
                <i className='fa-solid fa-xmark p-2 text-2xl'></i>
              </span>
            </div>
            <div className='ml-4'>
              <span
                className={`${isShowMenuMobile ? 'hidden' : 'block'}`}
                onClick={() => {
                  setIsShowMenuMobile(true);
                  setIsShowSearch(false);
                  preventScroll(true);
                }}
              >
                <i className='fa-solid fa-bars p-2 text-2xl'></i>
              </span>
              <span
                className={`${isShowMenuMobile ? 'block' : 'hidden'}`}
                onClick={() => {
                  setIsShowMenuMobile(false);
                  preventScroll(false);
                }}
              >
                <i className='fa-solid fa-xmark p-2 text-3xl'></i>
              </span>
            </div>
          </div>
        </div>

        <div
          className={`relative bg-[#f7f7f7] mt-2 mb-[20px] shadow-sm rounded-full h-[42px] ${
            isShowSearch ? 'block' : 'hidden'
          } desktop:hidden`}
        >
          <input
            type='text'
            className='w-full h-full py-1.5 pl-3 pr-[60px] text-textPrimaryColor rounded-full outline-none bg-[#f7f7f7] border-[3px] border-transparent focus:border-[#dfe5e5]'
            placeholder='Tìm kiếm tên truyện hoặc tác giả'
          />
          <span className='absolute p-2 right-3 bottom-1/2 translate-y-1/2'>
            <i className='fa-solid fa-magnifying-glass text-xl'></i>
          </span>
        </div>

        <div>
          <div className={`mobile-menu ${isShowMenuMobile ? 'active' : ''}`}>
            <HeaderMobileMenu rankList={rankList} categoryList={categoryList} />
          </div>

          <div
            className='overlay'
            onClick={() => {
              setIsShowMenuMobile(false);
              preventScroll(false);
            }}
          ></div>
        </div>

        {isShowModal && (
          <ModalAuth
            isShowModal={isShowModal}
            setIsShowModal={setIsShowModal}
            isShowModalLogin={isShowModalLogin}
            setIsShowModalLogin={setIsShowModalLogin}
          />
        )}
      </Container>
    </header>
  );
};
