import React, { Fragment } from 'react';
import { Col } from 'react-bootstrap';
import SectionLayout from '../SectionLayout';
import SectionHeader from '../SectionLayout/SectionHeader';
import TopRateComicItem from './TopRateComicItem';

import imageUrl from '../../../../../images/homePage/reward-week.jpg';

const rewardedWeekComicList = [
  {
    title: 'Ba Năm Quét Rác - Bắt Đầu Điệu Thấp Tu Hành',
    topRate: 1,
    author: 'Hắc Bạch Miêu',
    category: 'Tiên Hiệp',
    imageUrl: imageUrl,
    point: 345000,
  },
  {
    title: 'Vô Tận Trùng Sinh',
    topRate: 2,
    point: 200000,
  },
  {
    title: 'Thiên Mệnh Chiến',
    topRate: 3,
    point: 120000,
  },
  {
    title: 'Chí Tôn Chi Lộ',
    topRate: 4,
    point: 110000,
  },
  {
    title: 'Chí Tôn Chi Lộ',
    topRate: 5,
    point: 110000,
  },
  {
    title: 'Chí Tôn Chi Lộ',
    topRate: 6,
    point: 110000,
  },
  {
    title: 'Chí Tôn Chi Lộ',
    topRate: 7,
    point: 110000,
  },
  {
    title: 'Chí Tôn Chi Lộ',
    topRate: 8,
    point: 110000,
  },
  {
    title: 'Chí Tôn Chi Lộ',
    topRate: 9,
    point: 110000,
  },
  {
    title: 'Chí Tôn Chi Lộ',
    topRate: 10,
    point: 110000,
  },
];

const TopRateComicList = () => {
  return (
    <Fragment>
      <Col xs={4}>
        <SectionLayout className='pb-2 px-4 pt-3 rounded-lg shadow-xl'>
          <SectionHeader
            text='Nhận thưởng tuần'
            to='/bang-xep-hang/tuan/tang-thuong'
          />
          <TopRateComicItem comicList={rewardedWeekComicList} rewardedWeek />
        </SectionLayout>
      </Col>
      <Col xs={4}>
        <SectionLayout className='pb-2 px-4 pt-3 rounded-lg shadow-xl'>
          <SectionHeader
            text='Thịnh hành tuần'
            to='/bang-xep-hang/tuan/thinh-hanh'
          />
          <TopRateComicItem comicList={rewardedWeekComicList} popularWeek />
        </SectionLayout>
      </Col>
      <Col xs={4}>
        <SectionLayout className='pb-2 px-4 pt-3 rounded-lg shadow-xl'>
          <SectionHeader text='Đề cử tuần' to='/bang-xep-hang/tuan/de-cu' />
          <TopRateComicItem comicList={rewardedWeekComicList} suggestWeek />
        </SectionLayout>
      </Col>
    </Fragment>
  );
};

export default TopRateComicList;
