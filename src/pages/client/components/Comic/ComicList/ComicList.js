import React, { Fragment } from 'react';
import ComicCard from '../ComicCard';
import comicImage from '../../../../../images/common/comic-image.jpg';

import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const totalCol = 12;

const ComicList = ({ comicList, itemsPerRow = 2, hasRateInfo = false }) => {
  return (
    <Row>
      {comicList.length > 0 &&
        comicList.map((comic, index) => {
          let props = {
            title: 'Nguyên Tố Đại Lục',
            imageUrl: comicImage,
            description:
              "Dị giới ma pháp Nguyên Tố Đại Lục. Dạ Trần thiếu gia của cổ tộc Bạch gia quyền thế ngất trời đại lục, cũng vì vậy mà nội bộ tranh đấu, cha mẹ của Dạ Trần cũng bị kẻ khác rắp tâm bày kế, vô tình làm thất lạc đứa con duy nhất của mình. Vì việc này mà Dạ Trần được Băng gia chủ Băng Vũ nhận nuôi. Trong những năm tháng sống tẻ nhạt ở Băng gia, Dạ Trần đã quyết tâm tự xây dựng thế lực riêng cho mình, vì một ước muốn đứng đầu Nguyên Tố Đại Lục. Cũng từ đây hành trình vào sinh ra tử của Dạ Trần mở màn, tham gia bí cảnh tranh đoạt cơ duyên, kết bằng hữu trên con đường tu luyện, cùng bằng hữu kề vai sát cánh, gặp vô vàn khó khăn khi chính bản thân Dạ Trần cũng không biết ai là bạn ai là kẻ thù khi kẻ địch ẩn dấu quá sâu!.........Cảnh giới của Ma giả ( Cũng áp dụng cho Ma thú và Yêu tộc):Ma giả cấp thấp - chỉ số ma lực ( 1-999)Ma giả Trung cấp - chỉ số ma lực ( 1000 - 4999)Ma giả Cao cấp - chỉ số ma lực ( 5000 - 9999)Ma giả Siêu cấp - chỉ số ma lực đạt 10000 trở lên. Mỗi 10000 ma lực được quy làm 1 nguyên. Đạt Siêu cấp được phong danh hiệu ''Thánh''. Giới hạn 100000 ma lực.Hoàng Tuyền cấp - chỉ số ma lực không thể đo đếm. Chia làm ba tầng: Thiên Chiếu, Sinh Thần, Tử cảnh...Cảnh giới của Linh Thú: Trí cấp - Phàm Nguyên - Sơ Thần - Đế Hoàng - Hoàng Thiên...Cảnh giới của Ma vật: Nhục Huyết - Hoá Hình - Phá Hư - Chân Ma - Âm Thần...Vũ khí chia làm ba loại: +Pháp Bảo: chia làm mười cấp độ từ 1-10. (cấp9 trở lên được gọi là Chí Bảo)+Võ Linh Khí: Vũ khí mạnh yếu tuỳ theo thực lực của người sử dụng.+Hồn Linh Khí: Vũ khí mạnh yếu tuỳ theo sức chịu đựng thần hồn của người sử dụng.Chức nghiệp: Ma giả, Ma Trận Sư, Ma Khí Sư, Luyện Đan Sư... ",
            author: 'Dạ Tiểu Yêu',
            category: 'Huyền Huyễn',
            slug: 'nguyen-to-dai-luc',
          };

          if (hasRateInfo) {
            props = {
              ...props,
              star: '5.00',
              rate: 4,
            };
          }

          return (
            <Fragment key={index}>
              <Col lg={totalCol / itemsPerRow}>
                <ComicCard {...props} />
              </Col>
              {index % itemsPerRow !== 0 && index !== comicList.length - 1 && (
                <hr className='my-4'></hr>
              )}
            </Fragment>
          );
        })}
    </Row>
  );
};

ComicList.propTypes = {
  comicList: PropTypes.array.isRequired,
  itemsPerRow: PropTypes.number,
  hasRateInfo: PropTypes.bool,
};

export default ComicList;
