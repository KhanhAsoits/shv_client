import React from 'react';
import ComicTable from '../ComicTable/ComicTable';
import SectionLayout from '../SectionLayout';
import SectionHeader from '../SectionLayout/SectionHeader';

const comicList = [
  {
    category: 'Tiên Hiệp',
    title: 'Dị Nhân Đại Náo Tu Tiên Giới',
    currentChapter: 'Chương 362: Yêu nữ phá ta tu hành',
    currentChapterSlug: 'chuong-362',
    author: 'Lừa con',
    timeUpdated: '22 phút trước',
    slug: 'di-nhan-dai-nao-tu-tien-gioi',
  },
  {
    category: 'Huyền Huyễn',
    title: 'Ma Thần Thiên Quân',
    currentChapter: 'Chương 2494: Đệ nhất Thiên Vương',
    currentChapterSlug: 'chuong-2494',
    author: 'Đế Thanh',
    timeUpdated: '33 phút trước',
    slug: 'ma-than-thien-quan',
  },
  {
    category: 'Tiên Hiệp',
    title: 'Dị Nhân Đại Náo Tu Tiên Giới',
    currentChapter: 'Chương 362: Yêu nữ phá ta tu hành',
    currentChapterSlug: 'chuong-362',
    author: 'Đế Thanh',
    timeUpdated: '22 phút trước',
    slug: 'di-nhan-dai-nao-tu-tien-gioi',
  },
  {
    category: 'Dã Sử',
    title: 'Việt Hùng Diễn Nghĩa',
    currentChapter: 'Chương 116 Một thế giới rộng lớn 2',
    currentChapterSlug: 'chuong-116',
    author: 'Tiểu lão nhân',
    timeUpdated: '51 phút trước',
    slug: 'viet-hung-dien-nghia',
  },
  {
    category: 'Tiên Hiệp',
    title: 'Dị Nhân Đại Náo Tu Tiên Giới',
    currentChapter: 'Chương 362: Yêu nữ phá ta tu hành',
    currentChapterSlug: 'chuong-362',
    author: 'Đế Thanh',
    timeUpdated: '22 phút trước',
    slug: 'di-nhan-dai-nao-tu-tien-gioi',
  },
  {
    category: 'Huyền Huyễn',
    title: 'Đạo Ma',
    currentChapter: 'Chương 18: Tinh Tuyệt Luyện Ma trận!',
    currentChapterSlug: 'chuong-18',
    author: 'nhân thường',
    timeUpdated: '2 giờ trước',
    slug: 'dao-ma-1',
  },
  {
    category: 'Tiên Hiệp',
    title: 'Dị Nhân Đại Náo Tu Tiên Giới',
    currentChapter: 'Chương 362: Yêu nữ phá ta tu hành',
    currentChapterSlug: 'chuong-362',
    author: 'Đế Thanh',
    timeUpdated: '22 phút trước',
    slug: 'di-nhan-dai-nao-tu-tien-gioi',
  },
  {
    category: 'Tiên Hiệp',
    title: 'Ba Năm Quét Rác - Bắt Đầu Điệu Thấp Tu Hành',
    currentChapter: 'Chương 350: Tử Xích Nhận Chủ',
    currentChapterSlug: 'chuong-350',
    author: 'Hắc Bạch Miêu',
    timeUpdated: '2 giờ trước',
    slug: 'ba-nam-quet-rac-bat-dau-dieu-thap-tu-hanh',
  },
  {
    category: 'Tiên Hiệp',
    title: 'Dị Nhân Đại Náo Tu Tiên Giới',
    currentChapter: 'Chương 362: Yêu nữ phá ta tu hành',
    currentChapterSlug: 'chuong-362',
    author: 'Đế Thanh',
    timeUpdated: '22 phút trước',
    slug: 'di-nhan-dai-nao-tu-tien-gioi',
  },
  {
    category: 'Đồng Nhân',
    title: 'Đồng Nhân : Survival',
    currentChapter: 'Chương 99: Lam Ngân Hoàng ',
    currentChapterSlug: 'chuong-99',
    author: 'FlamacosVô ảnh',
    timeUpdated: '55 phút trước',
    slug: 'dong-nhan-survival',
  },
];

const NewUpdatedComic = () => {
  return (
    <div className='mt-4'>
      <SectionLayout>
        <SectionHeader text='Mới cập nhật' to='/truyen' flexStart />
        <ComicTable comicList={comicList} />
      </SectionLayout>
    </div>
  );
};

export default NewUpdatedComic;
