import { ProjectCarousal } from '@/components/ProjectCarousal';
import ProjectGrid from '@/components/ProjectGrid';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col w-full h-full py-20 gap-5 bg-black justify-center items-center'>
      {/* <h1 className='mt-14 text-5xl text-center lg:text-5xl'>
        Recent Projects
      </h1> */}
      {/* <ProjectCarousal /> */}
      <ProjectGrid />
    </div>
  );
};

export default page;
