import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import ClientMainLayout from './components/ClientMainLayout';
import ComicList from './components/Comic/ComicList';
import ComicItem from './components/Comic/ComicList/ComicItem';
import SectionLayout from './components/Comic/SectionLayout';
import SectionHeader from './components/Comic/SectionLayout/SectionHeader';

import imageUrl from '../../images/common/comic-image1.jpg';
import { Link } from 'react-router-dom';
import NewUpdatedComic from './components/Comic/NewUpdatedComic';

function Index() {
  return (
    <div className='pt-[250px]'>
      <ClientMainLayout>
        <Row>
          <Col xs={8}>
            <SectionLayout>
              <Fragment>
                <SectionHeader text='Biên tập viên đề cử' to='/truyen' />
                <ComicList comicList={Array(8).fill(0)} fullComicInfo />
              </Fragment>
            </SectionLayout>
          </Col>
          <Col xs={4}>
            <SectionLayout>
              <Fragment>
                <SectionHeader text='Đang đọc' to='/tai-khoan/tu-truyen' />
                <Row>
                  <Col xs={12}>
                    {Array(5)
                      .fill(0)
                      .map((comic, index) => (
                        <ComicItem
                          key={index}
                          title='Ma Thần Thiên Quân'
                          imageUrl={imageUrl}
                          slug='/truyen/ma-than-thien-quan'
                        />
                      ))}
                    <hr className='my-4' />
                  </Col>
                  <Col xs={12}>
                    <SectionLayout>
                      <Fragment>
                        <SectionHeader
                          text='Hướng dẫn'
                          to='/thong-tin/hoi-dap'
                        />
                        <div className='flex flex-col justify-end'>
                          {Array(6)
                            .fill(0)
                            .fill(0)
                            .map((item, index) => (
                              <li
                                className='text-textPrimaryColor mb-2 .text-truncate-1-block hover:text-textHover cursor-pointer'
                                key={index}
                              >
                                <Link to='/thong-tin/hoi-dap'>
                                  Làm sao để lên cấp vậy?
                                </Link>
                              </li>
                            ))}
                        </div>
                      </Fragment>
                    </SectionLayout>
                  </Col>
                </Row>
              </Fragment>
            </SectionLayout>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <NewUpdatedComic />
          </Col>
        </Row>
      </ClientMainLayout>
    </div>
  );
}

export default Index;
