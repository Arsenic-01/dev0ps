import { AppleCardsCarouselDemo } from '@/components/ProjectCarousal';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col py-20 px-2 items-center justify-center gap-20 mx-auto bg-black'>
      <h1 className='mt-14 text-5xl text-center lg:text-6xl xl:text-[69px]'>
        Recent Projects
      </h1>
      <AppleCardsCarouselDemo />
    </div>
  );
};

export default page;
