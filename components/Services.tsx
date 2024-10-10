import React from 'react';
import EmblaCarousel from './ui/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import '../app/embla.css';
import { Button } from '@nextui-org/button';
import { TransitionLink } from './utils/TransitionLink';

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Services = () => {
  return (
    <>
      <div className='pb-10 px-4 md:p-10 lg:mb-28  flex flex-col -mt-48'>
        <div className='flex flex-col lg:flex-row justify-center gap-16 xl:gap-20'>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          <div className='flex flex-col gap-9'>
            <p className='text-base text-pretty sm:text-base z-10 pt-10'>
              Our consultancy offers a wide range of services, including
              architectural planning, structural design, project management
              consultancy, and property valuation for residential, commercial,
              and industrial projects across India. Managed by Mr. Sunil Bhor,
              an esteemed Architectural Engineer, our team of highly qualified
              professionals ensures excellence. With a base in Nashik and a
              branch in Thane, Mumbai, we have been fully equipped and automated
              since 1999, providing top-tier services with advanced
              infrastructure.
            </p>
            <div className='flex gap-4'>
              <Button
                color='primary'
                variant='shadow'
                radius='full'
                className='w-24'
              >
                <TransitionLink href={'/services'}>View All</TransitionLink>
              </Button>
              <Button
                color='primary'
                variant='shadow'
                radius='full'
                className='w-[165px]'
              >
                <TransitionLink href={'/login'}>
                  Book Appointment
                </TransitionLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
