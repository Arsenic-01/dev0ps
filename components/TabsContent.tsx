'use client';

import Image from 'next/image';
import { Tabs } from './ui/tabs';

import ServiceGrid from './ServiceBento';

export function TabsDemo() {
  const tabs = [
    {
      title: 'Product',
      value: 'product',
      content: (
        <div className='w-full px-0 sm:px-5 flex flex-col gap-10 py-10 bg-black	max-h-screen sm:rounded-3xl md:bg-neutral-900  '>
          <h1 className='text-white md:text-5xl text-3xl mb-2 text-center font-bold'>
            Product Tab
          </h1>{' '}
          <ServiceGrid />
        </div>
      ),
    },
    {
      title: 'Services',
      value: 'services',
      content: (
        <div className='w-full px-0 sm:px-5 flex flex-col gap-10 py-10 bg-black	sm:rounded-3xl md:bg-neutral-900  '>
          <h1 className='text-white md:text-5xl text-3xl mb-2 text-center font-bold'>
            Product Tab
          </h1>{' '}
          <ServiceGrid />
        </div>
      ),
    },
    {
      title: 'Playground',
      value: 'playground',
      content: (
        <div className='w-full px-0 sm:px-5 flex flex-col gap-10 py-10 bg-black	sm:rounded-3xl md:bg-neutral-900  '>
          <h1 className='text-white md:text-5xl text-3xl mb-2 text-center font-bold'>
            Product Tab
          </h1>{' '}
          <ServiceGrid />
        </div>
      ),
    },
    {
      title: 'Content',
      value: 'content',
      content: (
        <div className='w-full px-0 sm:px-5 flex flex-col gap-10 py-10 bg-black	sm:rounded-3xl md:bg-neutral-900  '>
          <h1 className='text-white md:text-5xl text-3xl mb-2 text-center font-bold'>
            Product Tab
          </h1>{' '}
          <ServiceGrid />
        </div>
      ),
    },
    {
      title: 'Random',
      value: 'random',
      content: (
        <div className='w-full px-0 sm:px-5 flex flex-col gap-10 py-10 bg-black	sm:rounded-3xl md:bg-neutral-900  '>
          <h1 className='text-white md:text-5xl text-3xl mb-2 text-center font-bold'>
            Product Tab
          </h1>{' '}
          <ServiceGrid />
        </div>
      ),
    },
  ];

  return (
    <div className=' mb-10 py-10 sm:px-5 z-10 [perspective:200px] bg-black relative flex flex-col max-w-6xl max-h-screen w-full items-center justify-center'>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src='/facility.png'
      alt='dummy image'
      width='1000'
      height='1000'
      className='object-cover object-left-top h-[70%] opacity-50 grayscale m-10  absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto'
    />
  );
};
