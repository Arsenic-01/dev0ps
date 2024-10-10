import React from 'react';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });
import { TransitionLink } from './utils/TransitionLink';
import CardStackDemo from './ui/CardStack';

const Values = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between lg:gap-11 lg:mb-20'>
      <div className='flex flex-col justify-center py-5 lg:ml-10 gap-7'>
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

        <div className='flex justify-center gap-3'>
          <span className='select-none'>—</span>
          <div className='flex flex-col gap-6'>
            <p className='text-base sm:text-lg'>
              SBA is built on positive culture and customer focus. Our
              experience in high-rise design , large scale developments and
              steel manufacturing yielded systems that produce predictable and
              repeatable results. Aligned to our mission, SBA is positioned to
              deliver a better experience to architects and CRE developers
              across the country.
            </p>
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
          </div>
        </div>
      </div>

      <CardStackDemo />
    </div>
  );
};

export default Values;
