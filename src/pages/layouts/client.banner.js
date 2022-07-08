import React from 'react';
import { Link } from 'react-router-dom';
import { banner } from '../../images/layouts';

const Banner = () => {
  return (
    <div className='relative'>
      <Link to='/' className='block'>
        <div
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className='w-full h-[383px] absolute top-0 left-0 z-0'
        ></div>
      </Link>
    </div>
  );
};

export default Banner;
