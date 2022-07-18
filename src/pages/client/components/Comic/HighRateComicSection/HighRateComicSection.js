import React from 'react';
import ComicList from '../ComicList';
import SectionLayout from '../SectionLayout';
import SectionHeader from '../SectionLayout/SectionHeader';

const HighRateComicSection = () => {
  return (
    <SectionLayout>
      <SectionHeader text='Đánh giá cao' to='/truyen' />
      <ComicList comicList={Array(6).fill(0)} hasRateInfo />
    </SectionLayout>
  );
};

export default HighRateComicSection;
