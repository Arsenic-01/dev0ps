import OurServices from '@/components/OurServices';
import { TabsDemo } from '@/components/TabsContent';
import React from 'react';

const services = () => {
  return (
    <div className='flex flex-col w-full h-full mt-20 gap-5 bg-black justify-center items-center'>
      <h1 className='mt-16 text-5xl text-center lg:text-6xl'>Services</h1>
      {/* <TabsDemo /> */}
      {/* <div className='w-full my-20 h-10'> yo</div> */}
      <OurServices />
    </div>
  );
};

export default services;
