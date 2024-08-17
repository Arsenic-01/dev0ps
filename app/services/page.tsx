import { TabsDemo } from '@/components/TabsContent';
import React from 'react';

const services = () => {
  return (
    <div className='flex flex-col pb-20 mt-20 my-10 gap-16 bg-black justify-center items-center'>
      <h1 className='mt-16 text-5xl text-center lg:text-6xl xl:text-[69px]'>
        Services
      </h1>
      <TabsDemo />
      {/* <div className='w-full my-20 h-10'> yo</div> */}
    </div>
  );
};

export default services;
