import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  logo,
  appStore,
  googlePlay,
  footerBackground,
} from '../../images/layouts';

const Footer = () => {
  return (
    <Container fluid>
      <hr />

      <div
        style={{
          background: `url(${footerBackground}) no-repeat bottom`,
        }}
      >
        <div className='text-center max-w-[877px] w-full flex flex-col items-center m-auto py-4'>
          <div>
            <img src={logo} alt='logo' className='w-[64px] h-[64px]' />
          </div>
          <p className='my-3 text-textPrimaryColor'>
            vTruyen là nền tảng mở dành cho các tác giả và độc giả đam mê truyện
            chữ, nơi thành viên có thể tự do xuất bản các tác phẩm của mình với
            nhiều chức năng liên tục được cải tiến sẽ mang lại trải nghiệm tốt
            nhất cho các tác giả sáng tác truyện lẫn người đọc truyện online.
          </p>
          <div className='flex mb-4'>
            <div>
              <img
                src={appStore}
                alt='download app for ios'
                className='h-[34px] object-cover'
              />
            </div>
            <div className='ml-2'>
              <img
                src={googlePlay}
                alt='download app for android'
                className='h-[34px] object-cover'
              />
            </div>
          </div>
          <div>
            <Link
              className='px-3 py-2 text-textPrimaryColor hover:text-textHover'
              to='/thong-tin/dieu-khoan-dich-vu'
            >
              Điều khoản dịch vụ
            </Link>
            <Link
              className='px-3 py-2 text-textPrimaryColor hover:text-textHover'
              to='/thong-tin/chinh-sach-bao-mat'
            >
              Chính sách bảo mật
            </Link>
            <Link
              className='px-3 py-2 text-textPrimaryColor hover:text-textHover'
              to='/thong-tin/ve-ban-quyen'
            >
              Về bản quyền
            </Link>
            <Link
              className='px-3 py-2 text-textPrimaryColor hover:text-textHover'
              to='/thong-tin/hoi-dap'
            >
              Hướng dẫn sử dụng
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
