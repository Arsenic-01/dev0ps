import ProjectGrid from '@/components/ProjectGrid';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col w-full h-full  py-14 sm:py-20 xl:py-10 2xl:py-12 gap-5 bg-black justify-center items-center'>
      <ProjectGrid />
    </div>
  );
};

export default page;
