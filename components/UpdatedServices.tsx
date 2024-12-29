import React from 'react';
import EmblaCarousel from './ui/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import '../app/embla.css';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Services = () => {
  return (
    <div className='xl:hidden py-10 px-2 sm:px-4 md:p-10 lg:mb-28 flex flex-col'>
      <h1 className='text-4xl text-center sm:text-5xl lg:text-6xl xl:text-7xl mb-7 z-50'>
        Our Prime Services
      </h1>

      <div className='flex px-4 flex-col lg:flex-row mt-10 sm:mt-16 lg:mt-20 justify-center  gap-16 xl:gap-20'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        <div className='flex flex-col gap-9'>
          <p className='text-base text-pretty z-10 pt-10'>
            Our consultancy offers a wide range of services, including
            architectural planning, structural design, project management
            consultancy, and property valuation for residential, commercial, and
            industrial projects across India. Managed by Mr. Sunil Bhor, an
            esteemed Architectural Engineer, our team of highly qualified
            professionals ensures excellence. With a base in Nashik and a branch
            in Thane, Mumbai, we have been fully equipped and automated since
            1999, providing top-tier services with advanced infrastructure.
          </p>
          <div className='flex gap-4'>
            <Link href={'/services'}>
              <Button
                color='primary'
                variant='shadow'
                radius='full'
                className='w-24'
              >
                View All
              </Button>
            </Link>
            <Link href={'/login'}>
              <Button
                color='primary'
                variant='shadow'
                radius='full'
                className='w-[165px]'
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
