'use client';
import React from 'react';
import EmblaCarousel from './ui/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import '../app/embla.css';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import BlurFade from './magicui/blur-fade';

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Services = () => {
  return (
    <div className='2xl:hidden mt-20 py-10 px-4 md:p-10 lg:mb-28  flex flex-col'>
      <BlurFade delay={0.01} inView>
        <h1 className='text-5xl lg:text-6xl xl:text-7xl mb-7 z-50'>
          Our Prime Services
        </h1>
      </BlurFade>

      <div className='flex flex-col lg:flex-row mt-0 sm:mt-16 lg:mt-20 justify-center  gap-16 xl:gap-20'>
        <BlurFade delay={0.1} inView>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </BlurFade>

        <div className='flex flex-col gap-9'>
          <BlurFade delay={0.1} inView>
            <p className='text-base text-pretty sm:text-lg z-10 pt-10'>
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
          </BlurFade>
          <BlurFade delay={0.2} inView>
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
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default Services;
