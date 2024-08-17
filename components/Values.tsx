// 'use client';
import React from 'react';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });
import { CardStack } from './ui/card-stack';
import { cn } from '@/lib/utils';
import BlurFade from './magicui/blur-fade';
import BoxReveal from './magicui/box-reveal';
import { TransitionLink } from './utils/TransitionLink';

const Values = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between lg:gap-11 lg:mb-20'>
      <div className='flex flex-col justify-center py-5 lg:ml-10 gap-7'>
        <BoxReveal boxColor={'#fff'} duration={0.4}>
          <h3 className='text-3xl md:text-4xl pl-3 py-1 text-pretty xl:text-5xl font-bold md:font-medium	 text-left '>
            Support development{' '}
            <span className={`md:${playfair.className} text-green-400`}>
              success
            </span>{' '}
            and build lasting{' '}
            <span className={`md:${playfair.className} text-red-400`}>
              relationships
            </span>
          </h3>
        </BoxReveal>

        <div className='flex justify-center gap-3'>
          <span className='select-none'>—</span>
          <div className='flex flex-col gap-6'>
            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <p className='text-base sm:text-lg'>
                SBA is built on positive culture and customer focus. Our
                experience in high-rise design , large scale developments and
                steel manufacturing yielded systems that produce predictable and
                repeatable results. Aligned to our mission, SBA is positioned to
                deliver a better experience to architects and CRE developers
                across the country.
              </p>
            </BoxReveal>
            <BoxReveal boxColor={'#fff'} duration={0.4}>
              <TransitionLink
                href='/about'
                className='text-[#F87171] hover:underline underline-offset-8 text-xl'
              >
                <span className=' inline-flex justify-start gap-1  '>
                  More about us{' '}
                  <svg
                    fill='none'
                    height='24'
                    viewBox='0 0 24 24'
                    width='20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17.25 15.25V6.75H8.75'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                    ></path>
                    <path
                      d='M17 7L6.75 17.25'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                    ></path>
                  </svg>
                </span>
              </TransitionLink>
            </BoxReveal>
          </div>
        </div>
      </div>

      <CardStackDemo />
    </div>
  );
};

export function CardStackDemo() {
  return (
    <BlurFade delay={0.1} inView>
      <div className='my-20 flex  items-center justify-center w-full'>
        <CardStack items={CARDS} />
      </div>
    </BlurFade>
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
