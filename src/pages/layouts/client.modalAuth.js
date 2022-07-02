import React from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '../../components/Modal';

import Button from '../../components/Button';

const ModalAuth = ({
  setIsShowModal,
  isShowModal,
  isShowModalLogin,
  setIsShowModalLogin,
}) => {
  const handleToggleModalLogin = () => {
    if (!isShowModalLogin) {
      setIsShowModalLogin(true);
    }
  };

  const handleToggleModalRegister = () => {
    if (isShowModalLogin) {
      setIsShowModalLogin(false);
    }
  };
  return (
    <Modal setIsShowModal={setIsShowModal} isShowModal={isShowModal}>
      <ModalHeader>
        <div className='p-3'>
          <span
            className={`p-3 text-2xl cursor-pointer font-semibold ${
              isShowModalLogin
                ? 'text-textPrimaryColor'
                : 'text-[#999999] hover:text-[#737373]'
            }`}
            onClick={handleToggleModalLogin}
          >
            Đăng nhập
          </span>
          <span
            className={`p-3 text-2xl cursor-pointer font-semibold  ${
              isShowModalLogin
                ? 'text-[#999999] hover:text-[#737373]'
                : 'text-textPrimaryColor'
            }`}
            onClick={handleToggleModalRegister}
          >
            Đăng ký
          </span>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className='flex flex-wrap w-full px-20 py-6'>
          <div className='w-full mb-4'>
            <label
              htmlFor='email'
              className='block text-start mb-2 ml-1 text-textSecondaryColor'
            >
              Email
            </label>
            <input
              id='email'
              type='text'
              placeholder='Email'
              className='w-full px-3 py-1.5 border-2 border-transparent border-gray-300 rounded-full bg-[#f7f7f7] outline-none focus:border-[#dfe5e5]'
            />
          </div>
          <div className='w-full mb-4'>
            <label
              htmlFor='password'
              className='block text-start mb-2 ml-1 text-textSecondaryColor'
            >
              Mật khẩu
            </label>
            <input
              id='password'
              type='password'
              placeholder='Mật khẩu'
              className='w-full px-3 py-1.5 border-2 border-transparent border-gray-300 rounded-full bg-[#f7f7f7] outline-none focus:border-[#dfe5e5]'
            />
          </div>
          {isShowModalLogin && (
            <div className='w-full mb-4 text-start flex items-center'>
              <input type='checkbox' id='rememberPassword' />
              <label
                className='ml-2.5 text-textSecondaryColor'
                htmlFor='rememberPassword'
              >
                Ghi nhớ mật khẩu
              </label>
            </div>
          )}
          {!isShowModalLogin && (
            <div className='w-full mb-4'>
              <label
                htmlFor='passwordConfirm'
                className='block text-start mb-2 ml-1 text-textSecondaryColor'
              >
                Nhập lại mật khẩu
              </label>
              <input
                id='passwordConfirm'
                type='password'
                placeholder='Nhập lại mật khẩu'
                className='w-full px-3 py-1.5 border-2 border-transparent border-gray-300 rounded-full bg-[#f7f7f7] outline-none focus:border-[#dfe5e5]'
              />
            </div>
          )}

          <Button
            className={
              'w-full flex items-center justify-center py-2 px-3 bg-textHover rounded-full text-white font-semibold hover:text-[#212529] hover:bg-[#91a1a1] '
            }
          >
            <span>{isShowModalLogin ? 'Đăng nhập' : 'Đăng ký'}</span>
          </Button>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className='bg-[#f7f7f7] p-3 px-20'>
          {isShowModalLogin && (
            <p className='text-[14.5px]'>
              Bạn chưa có tài khoản?{' '}
              <span
                className='text-textHover cursor-pointer hover:text-[#7d9090] font-semibold'
                onClick={handleToggleModalRegister}
              >
                Đăng ký ngay
              </span>
            </p>
          )}
          {!isShowModalLogin && (
            <p className='text-[14.5px]'>
              Bạn đã có tài khoản?{' '}
              <span
                className='text-textHover cursor-pointer hover:text-[#7d9090] font-semibold'
                onClick={handleToggleModalLogin}
              >
                Đăng nhập ngay
              </span>
            </p>
          )}
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default ModalAuth;
