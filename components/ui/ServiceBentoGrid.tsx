import React from 'react';
import Countup from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });
// Also install this npm i --save-dev @types/react-lottie
import Lottie from 'react-lottie';

import { cn } from '@/lib/utils';
import { BackgroundGradientAnimation } from './GradientBg';
import GridGlobe from './GridGlobe';
import animationData from '@/data/confetti.json';
import MagicButton from '../MagicButton';
import { Check } from 'lucide-react';
import { FaCheck, FaLocationArrow } from 'react-icons/fa6';
import Image from 'next/image';
import ChartComponent from './Charts';
import { Button } from '@nextui-org/button';

export const ServiceBentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        'grid grid-cols-1 grid-row-2 md:grid-cols-5 lg:grid-cols-6 md:grid-row-2 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const ServiceBentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const intern = [
    'Short-term internship programs',
    'Training and Project Exposure',
    'Develop technical skills using industry-standard software',
  ];
  return (
    <div
      className={
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        `row-span-1 relative overflow-hidden  bg-black	 md:bg-zinc-900/90 rounded-3xl  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ${className}`
      }
    >
      {id === 1 && (
        <div className='w-full border rounded-3xl h-full inset-0 absolute'>
          <Image
            src='/embla/analysis.jpg'
            alt='analysis'
            width={768}
            height={432}
            className={cn(
              imgClassName,
              'w-full h-full rounded-3xl inset-0 object-cover object-center '
            )}
          />
        </div>
      )}

      {id === 2 && (
        <div className='w-full border rounded-3xl h-full absolute py-10 flex flex-col gap-3 items-center justify-around text-white  px-4 pointer-events-none '>
          <h1 className=' md:text-4xl text-3xl font-bold text-center'>
            How it Works
          </h1>
          <ul className='list-none space-y-2 px-2'>
            {intern.map((item, i) => (
              <li
                className='flex gap-1.5 items-center text-left text-base'
                key={i}
              >
                <FaCheck style={{ color: '#63E6BE' }} />
                {item}
              </li>
            ))}
          </ul>{' '}
        </div>
      )}

      {id === 3 && (
        <div className='w-full h-full'>
          <div className='  md:py-10 lg:py-0'>
            {' '}
            <ChartComponent />
          </div>
        </div>
      )}

      {id === 4 && (
        <div>
          <div className='flex rounded-3xl border flex-col gap-3 px-5 py-10'>
            <p className='text-lg	 '>
              Our firm offers comprehensive Funds & Cash Flow Analysis services,
              ensuring meticulous scrutiny and strategic planning to optimize
              financial resources and enhance project sustainability and
              profitability.
            </p>
            <div className='inline-flex justify-end items-end'>
              <Button color='primary' variant='shadow' radius='full'>
                Ask AI
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
