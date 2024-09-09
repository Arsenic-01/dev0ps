import { AppleCardsCarouselDemo } from '@/components/ProjectCarousal';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col py-20 px-2 items-center justify-center gap-16 mx-auto bg-black'>
      <h1 className='mt-14 text-4xl font-semibold sm:text-5xl text-center lg:text-6xl'>
        Recent Projects
      </h1>
      <AppleCardsCarouselDemo />
    </div>
  );
};

export default page;
