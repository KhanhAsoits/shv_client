import React from 'react';
import generateSlug from '../../../../../utils/generateSlug';
import SectionLayout from '../SectionLayout';
import SectionHeader from '../SectionLayout/SectionHeader';
import NewRateComment from './NewRateComment';

const newRateCommentList = [
  {
    id: 1,
    userId: 123,
    avatarUrl: 'https://via.placeholder.com/150',
    name: 'Duongkha19',
    comment:
      ' Truyện hay, tình tiết chậm rãi, logic. Main đa mưu, túc trí, có khả năng phản ứng nhanh trước các tình tiết đột biến. Miêu tả các trận chiến đấu hay, lôi quấn. Mời các đạo hữu cùng thưởng thức ???? ???? ???? ',
    ratedComic: 'Đông Ly Trần Kiếp Diệt',
    star: '5.00',
  },
  {
    id: 2,
    userId: 165,
    avatarUrl: 'https://via.placeholder.com/150',
    name: 'Duongkha19',
    comment:
      ' Truyện hay, tình tiết chậm rãi, logic. Main đa mưu, túc trí, có khả năng phản ứng nhanh trước các tình tiết đột biến. Miêu tả các trận chiến đấu hay, lôi quấn. Mời các đạo hữu cùng thưởng thức ???? ???? ???? ',
    ratedComic: 'Đông Ly Trần Kiếp Diệt',
    star: '5.00',
  },
  {
    id: 3,
    userId: 193,
    avatarUrl: 'https://via.placeholder.com/150',
    name: 'Duongkha19',
    comment:
      ' Truyện hay, tình tiết chậm rãi, logic. Main đa mưu, túc trí, có khả năng phản ứng nhanh trước các tình tiết đột biến. Miêu tả các trận chiến đấu hay, lôi quấn. Mời các đạo hữu cùng thưởng thức ???? ???? ???? ',
    ratedComic: 'Đông Ly Trần Kiếp Diệt',
    star: '5.00',
  },
];

const NewRateSection = () => {
  return (
    <SectionLayout>
      <SectionHeader text='Mới đánh giá' to='/truyen' />
      <div>
        {newRateCommentList.length > 0 &&
          newRateCommentList.map((newRateComment) => {
            const slug = generateSlug(newRateComment.ratedComic);
            return (
              <NewRateComment
                key={newRateComment.id}
                newRateComment={newRateComment}
                slug={slug}
              />
            );
          })}
      </div>
    </SectionLayout>
  );
};

export default NewRateSection;
