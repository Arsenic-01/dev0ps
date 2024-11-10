import OurServices from '@/components/OurServices';
import React from 'react';

const services = () => {
  return (
    <div className='flex flex-col w-full h-full mt-20 gap-5 bg-black justify-center items-center'>
      {/* <h1 className='mt-10 md:mt-16 text-5xl text-center lg:text-6xl'>
        Services
      </h1> */}
      {/* <div className='inline-flex max-w-6xl w-full justify-start items-center'>
        {' '}
        <BreadcrumbWithCustomSeparator />
      </div> */}
      <OurServices />
    </div>
  );
};

export default services;
