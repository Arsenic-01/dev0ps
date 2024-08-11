'use client';
import React from 'react';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });
import { CardStack } from './ui/card-stack';
import { cn } from '@/lib/utils';

const Values = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between lg:gap-11 lg:mb-20'>
      <div className='flex flex-col justify-center p-5 lg:ml-10 gap-7'>
        <h3 className='text-3xl md:text-4xl pl-3  text-pretty xl:text-5xl font-bold md:font-medium	 text-left '>
          Support development{' '}
          <span className={`${playfair.className} text-green-400`}>
            success
          </span>{' '}
          and build lasting{' '}
          <span className={`${playfair.className} text-red-400`}>
            relationships
          </span>
        </h3>
        <div className='flex justify-center gap-3'>
          —
          <div className='flex flex-col gap-6'>
            <p className='text-base sm:text-lg'>
              SBA is built on positive culture and customer focus. Our
              experience in high-rise design , large scale developments and
              steel manufacturing yielded systems that produce predictable and
              repeatable results. Aligned to our mission, SBA is positioned to
              deliver a better experience to architects and CRE developers
              across the country.
            </p>
            <a
              href='/aboutus'
              className='text-red-400 hover:underline underline-offset-8 text-xl'
            >
              <span className=' inline-flex justify-start gap-1  '>
                More about us{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#f87171'
                >
                  <path d='m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z' />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <CardStackDemo />
    </div>
  );
};

export function CardStackDemo() {
  return (
    <div className='my-20 flex items-center justify-center w-full'>
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: 'Manu Arora',
    designation: 'Senior Software Engineer',
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: 'Elon Musk',
    designation: 'Senior Shitposter',
    content: (
      <p>
        I dont like this Twitter thing,{' '}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Tyler Durden',
    designation: 'Manager Project Mayhem',
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];

export default Values;
