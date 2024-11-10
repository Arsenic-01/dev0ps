import React from 'react';
import BlurFade from './magicui/blur-fade';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const Development = () => {
  const DevelopmentData = [
    {
      id: 1,
      title: 'Cost Effective Design',
      imgSrc: '/d1.svg',
    },
    {
      id: 2,
      title: 'Informed Decisions',
      imgSrc: '/d2.svg',
    },
    {
      id: 3,
      title: 'Meet Deadlines',
      imgSrc: '/d3.svg',
    },
    {
      id: 4,
      title: 'Development Success',
      imgSrc: '/d4.svg',
    },
  ];
  return (
    <section className='relative bg-black border-[0.5px]	border-[#353535]  md:border-[#1f1f1f] w-full rounded-xl flex justify-center items-center  lg:my-36 my-16 px-4 md:px-7 py-7 md:py-14'>
      <div className='max-w-7xl w-full'>
        <div className='flex flex-col justify-center items-center'>
          <h2
            className={`${playfair.className} text-4xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left mt-4 sm:mt-0`}
          >
            why choose <span className='text-red-400'>us</span>?
          </h2>
          <div className='flex flex-col md:flex-row justify-around gap-7 md:gap-10 lg:px-3 select-none mt-12 sm:mt-16 mb-5 '>
            {DevelopmentData.map((item) => (
              <div
                key={item.id}
                className='rounded-xl p-7 flex flex-col text-left gap-5 md:gap-10 justify-center items-center bg-zinc-950 border-[0.5px]	border-[#353535] md:border-[#1f1f1f] hover:border-collapse hover:bg-[#1F1F1F] transition-all active:bg-[#1F1F1F] active:border-collapse hover:cursor-pointer'
              >
                <img
                  src={`${item.imgSrc}`}
                  alt=''
                  className='lg:w-24 w-20 select-none pointer-events-none'
                />
                <h3 className='capitalize text-center text-lg md:text-xl lg:text-2xl'>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
