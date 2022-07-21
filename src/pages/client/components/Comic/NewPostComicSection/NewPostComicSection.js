import React from 'react';
import SectionLayout from '../SectionLayout';
import SectionHeader from '../SectionLayout/SectionHeader';

import Button from '../../../../../components/Button';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: 'Nhân Tộc Đại Kiếp',
    imageUrl: 'https://i.imgur.com/XqQXqQJ.jpg',
    description:
      'Thời đại huy hoàng cũng mai táng trong dòng thời gian, một đoạn lịch sử thất lạc, cổ vật bỗng biến chất.... Theo linh khí khôi phục, di tích hiện thế, lịch sử một lần nữa trở về với thế nhân. Vén lên tấm màn lịch sử. Nhân tộc đại kiếp xuất hiện.',
    author: 'Thời Quang Sự',
    category: 'Huyền Huyễn',
  },
  {
    id: 2,
    title: 'Nhân Tộc Đại Kiếp 2',
    imageUrl: 'https://i.imgur.com/XqQXqQJ.jpg',
    description:
      'Thời đại huy hoàng cũng mai táng trong dòng thời gian, một đoạn lịch sử thất lạc, cổ vật bỗng biến chất.... Theo linh khí khôi phục, di tích hiện thế, lịch sử một lần nữa trở về với thế nhân. Vén lên tấm màn lịch sử. Nhân tộc đại kiếp xuất hiện.',
    author: 'Thời Quang Sự',
    category: 'Huyền Huyễn',
  },
  {
    id: 3,
    title: 'Nhân Tộc Đại Kiếp 3',
    imageUrl: 'https://i.imgur.com/XqQXqQJ.jpg',
    description:
      'Thời đại huy hoàng cũng mai táng trong dòng thời gian, một đoạn lịch sử thất lạc, cổ vật bỗng biến chất.... Theo linh khí khôi phục, di tích hiện thế, lịch sử một lần nữa trở về với thế nhân. Vén lên tấm màn lịch sử. Nhân tộc đại kiếp xuất hiện.',
    author: 'Thời Quang Sự',
    category: 'Huyền Huyễn',
  },
  {
    id: 4,
    title: 'Nhân Tộc Đại Kiếp 4',
    imageUrl: 'https://i.imgur.com/XqQXqQJ.jpg',
    description:
      'Thời đại huy hoàng cũng mai táng trong dòng thời gian, một đoạn lịch sử thất lạc, cổ vật bỗng biến chất.... Theo linh khí khôi phục, di tích hiện thế, lịch sử một lần nữa trở về với thế nhân. Vén lên tấm màn lịch sử. Nhân tộc đại kiếp xuất hiện.',
    author: 'Thời Quang Sự',
    category: 'Huyền Huyễn',
  },
  {
    id: 5,
    title: 'Nhân Tộc Đại Kiếp 5',
    imageUrl: 'https://i.imgur.com/XqQXqQJ.jpg',
    description:
      'Thời đại huy hoàng cũng mai táng trong dòng thời gian, một đoạn lịch sử thất lạc, cổ vật bỗng biến chất.... Theo linh khí khôi phục, di tích hiện thế, lịch sử một lần nữa trở về với thế nhân. Vén lên tấm màn lịch sử. Nhân tộc đại kiếp xuất hiện.',
    author: 'Thời Quang Sự',
    category: 'Huyền Huyễn',
  },
  {
    id: 6,
    title: 'Nhân Tộc Đại Kiếp 6',
    imageUrl: 'https://i.imgur.com/XqQXqQJ.jpg',
    description:
      'Thời đại huy hoàng cũng mai táng trong dòng thời gian, một đoạn lịch sử thất lạc, cổ vật bỗng biến chất.... Theo linh khí khôi phục, di tích hiện thế, lịch sử một lần nữa trở về với thế nhân. Vén lên tấm màn lịch sử. Nhân tộc đại kiếp xuất hiện.',
    author: 'Thời Quang Sự',
    category: 'Huyền Huyễn',
  },
  {
    id: 7,
    title: 'Nhân Tộc Đại Kiếp 7',
    imageUrl: 'https://i.imgur.com/XqQXqQJ.jpg',
    description:
      'Thời đại huy hoàng cũng mai táng trong dòng thời gian, một đoạn lịch sử thất lạc, cổ vật bỗng biến chất.... Theo linh khí khôi phục, di tích hiện thế, lịch sử một lần nữa trở về với thế nhân. Vén lên tấm màn lịch sử. Nhân tộc đại kiếp xuất hiện.',
    author: 'Thời Quang Sự',
    category: 'Huyền Huyễn',
  },
  {
    id: 8,
    title: 'Nhân Tộc Đại Kiếp 8',
    imageUrl: 'https://i.imgur.com/XqQXqQJ.jpg',
    description:
      'Thời đại huy hoàng cũng mai táng trong dòng thời gian, một đoạn lịch sử thất lạc, cổ vật bỗng biến chất.... Theo linh khí khôi phục, di tích hiện thế, lịch sử một lần nữa trở về với thế nhân. Vén lên tấm màn lịch sử. Nhân tộc đại kiếp xuất hiện.',
    author: 'Thời Quang Sự',
    category: 'Huyền Huyễn',
  },
];

const NewPostComicSection = () => {
  return (
    <SectionLayout className='p-3 rounded bg-[#f7fafa]'>
      <SectionHeader text='Mới đăng' to='/truyen' />
      <div>
        <div>
          <span className='mb-2 text-textPrimaryColor font-semibold text-lg'>
            Nhân Tộc Đại Kiếp
          </span>
          <p className='text-truncate-3 text-textSecondaryColor mb-2'>
            Thời đại huy hoàng cũng mai táng trong dòng thời gian, một đoạn lịch
            sử thất lạc, cổ vật bỗng biến chất.... Theo linh khí khôi phục, di
            tích hiện thế, lịch sử một lần nữa trở về với thế nhân. Vén lên tấm
            màn lịch sử. Nhân tộc đại kiếp xuất hiện.
          </p>
          <div className='flex justify-between mb-4 py-1'>
            <div className='text-textSecondaryColor flex w-[50%]'>
              <i className='fa-solid fa-user-pen mr-2'></i>
              <span className='text-truncate-1'>Thời Quang Sự</span>
            </div>
            <Link
              class='border text-textHover text-[12px] px-2 leading-[18px] bg-white'
              to='truyen'
            >
              Huyền Huyễn
            </Link>
          </div>
          <div className='flex justify-center'>
            <Button
              className='text-white text-base font-semibold py-2 px-12 rounded-full flex items-center justify-center bg-textHover border border-textHover hover:bg-[#91a1a1] hover:border-[#8a9c9c] max-w-[160px] w-full'
              to='/truyen/nhan-toc-dai-kiep'
            >
              Đọc ngay
            </Button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default NewPostComicSection;
