'use client';

import React, { Suspense } from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { Star, StarHalf } from 'lucide-react';
import { AnimatedTooltipPreview } from './ui/Tooltip';
import { Button } from '@nextui-org/react';
import WordRotateEffect from './ui/wordRotate';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='pb-20 mt-9 sm:pt-14 2xl:pt-[110px] md:pt-20 lg:pt-32 xl:pt-[13vh] xl:mt-[5vh] xl:px-16'>
      {/* UI: Spotlights */}
      <div>
        <Spotlight
          className='top-0 left-0 sm:-top-40 sm:-left-10 lg:-top-20 h-[100vh] w-[100vw]'
          fill='white'
        />
      </div>

      {/* Radial gradient background */}
      <div className='h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] absolute flex top-0 left-0 items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      </div>

      <div className='flex max-w-[80vw] mt-12 sm:mt-0 justify-between items-center relative lg:mb-5 z-10'>
        <div className='lg:text-left max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center sm:items-start justify-center'>
          <span className='mt-2 sm:mt-5 text-5xl lg:text-6xl sm:leading-tight'>
            <div className='font-normal my-1'>
              <WordRotateEffect />
            </div>
            <span className='text-[#ED5F5F] font-semibold'>actually</span>
            <span className='font-normal'> focused</span>
            <br className='md:block hidden' />
            <span className='font-normal'> on your results.</span>
          </span>

          <TextGenerateEffect
            className='mt-7 sm:mt-12 text-pretty text-[#BDBDBD] block leading-relaxed sm:hidden sm:text-left text-center text-base'
            words='SBA offers expert consultancy in architecture, structural design, project management, and property valuation nationwide.'
          />

          <div className='mt-4 text-pretty hidden font-light sm:block leading-loose md:text-base text-neutral-300 lg:max-w-[50vw]'>
            SBA is a distinguished consultancy firm with over 25 years of
            experience providing an array of services encompassing architectural
            planning, structural design, project management consultancy, and
            property valuation for residential, commercial, and industrial
            projects nationwide in India.
          </div>

          <div className='md:mt-10 mt-8 flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20'>
            <Button
              color='primary'
              variant='shadow'
              radius='full'
              className='w-32 relative overflow-visible'
              aria-description='Get Started Button'
            >
              <span className='absolute top-0 right-0'>
                <span className='relative flex h-3 w-3'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-600 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-3 w-3 bg-[#0B879C]/90'></span>
                </span>
              </span>
              <Link href={'/register'}>Get Started</Link>
            </Button>

            <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-5'>
              <div className='flex -space-x-3'>
                <AnimatedTooltipPreview />
              </div>

              <div className='flex flex-col justify-between items-center sm:items-start'>
                <div className='flex gap-0.5'>
                  <Star className='h-4 w-4 text-red-500 fill-red-500' />
                  <Star className='h-4 w-4 text-red-500 fill-red-500' />
                  <Star className='h-4 w-4 text-red-500 fill-red-500' />
                  <Star className='h-4 w-4 text-red-500 fill-red-500' />
                  <StarHalf className='h-4 w-4 text-red-500 fill-red-500' />
                </div>
                <p>
                  <span className='font-semibold'>1500+</span> happy customers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Construction image */}
        <Image
          src='/construction.webp'
          className='rounded-lg greyscale select-none pointer-events-none lg:w-[20%] hidden lg:block'
          alt='Hero Image'
          aria-label='Hero Image'
          aria-description='Hero Image of a crane on a construction site'
          width={1000}
          height={600}
          priority={true} // Only set to true for important images to improve lazy loading
          sizes='(max-width: 768px) 40vw),(max-width: 1200px) 30vw,
         20vw' // Adjust the size for large screens only since it's hidden on smaller ones
        />
      </div>
    </div>
  );
};

export default Hero;
