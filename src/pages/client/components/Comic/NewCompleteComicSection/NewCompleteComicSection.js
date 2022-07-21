import React from 'react';
import ComicList from '../ComicList';
import SectionLayout from '../SectionLayout';
import SectionHeader from '../SectionLayout/SectionHeader';

const NewCompleteComicSection = () => {
  return (
    <SectionLayout>
      <SectionHeader text='Mới hoàn thành' to='/truyen' />
      <ComicList comicList={Array(6).fill(0)} />
    </SectionLayout>
  );
};

export default NewCompleteComicSection;
