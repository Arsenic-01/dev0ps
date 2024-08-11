import { AppleCardsCarouselDemo } from '@/components/ProjectCarousal';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col py-20 px-2 items-center justify-center gap-20 mx-auto'>
      <h1 className='mt-14 text-4xl xl:text-6xl font-bold'>
        Recent Projects ⚒️
      </h1>
      <AppleCardsCarouselDemo />
    </div>
  );
};

export default page;
