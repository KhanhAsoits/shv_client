import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { logo } from '../../images/layouts';

import ModalAuth from './client.modalAuth.js';

const categoriesItem = [
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

const rankItem = [
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

  const navigate = useNavigate();

  return (
    <header className={'bg-[#f2f5f5]'}>
      <Container>
        <div className='flex justify-between items-center'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='mr-6'>
              <img
                src={logo}
                alt='Logo'
                className='w-[48px] h-[48px] object-cover'
              />
            </Link>

            <div className='px-3 py-6 font-semibold cursor-pointer hover:bg-[#edf0f0] relative group hover:after:block after:hidden after:content-[""] after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2 after:border-8 after:border-transparent after:border-b-white'>
              <span>
                <i className='fa-solid fa-bars'></i>
              </span>
              <span className='ml-1.5'>
                Thể loại
                <ul className='flex flex-wrap w-[500px] px-6 py-3 bg-white shadow-sm transition-all invisible opacity-0 absolute top-full left-0 group-hover:visible group-hover:opacity-100 '>
                  {categoriesItem.length > 0 &&
                    categoriesItem.map((item, index) => {
                      return (
                        <Link
                          to={item.path}
                          key={index}
                          className='w-[50%] py-1.5 text-[#212529] hover:text-textHover'
                        >
                          {item.content}
                        </Link>
                      );
                    })}
                </ul>
              </span>
            </div>

            <div className='px-3 py-6 font-semibold cursor-pointer hover:bg-[#edf0f0] relative group hover:after:block after:hidden after:content-[""] after:absolute after:bottom-0 after:right-1/2 after:translate-x-1/2 after:border-8 after:border-transparent after:border-b-white'>
              <div onClick={() => navigate('/bang-xep-hang')}>
                <span className='text-textPrimaryColor'>
                  Bảng xếp hạng
                  <ul className='flex flex-wrap w-[160px] py-3 px-0 bg-white shadow-sm transition-all invisible opacity-0 absolute top-full left-0 group-hover:visible group-hover:opacity-100'>
                    {rankItem.length > 0 &&
                      rankItem.map((item, index) => {
                        return (
                          <Link
                            to={item.path}
                            key={index}
                            className='w-full py-1.5 px-3 text-[#212529] hover:text-textHover'
                          >
                            {item.content}
                          </Link>
                        );
                      })}
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div
            className={`flex items-center relative rounded-full border-[3px] ${
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

          <div>
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
