import React, { useMemo } from 'react';
import { Spotlight } from './ui/Spotlight';
import { Star, StarHalf } from 'lucide-react';
// import { AnimatedTooltipPreview } from './ui/Tooltip';
import { Button } from '@nextui-org/react';
import WordRotateEffect from './ui/wordRotate';
import Image from 'next/image';
import { AnimatedTooltipPreview } from './ui/Tooltip-wrapper';
import { HeroButtonGetStarted } from './utils/Misc';
import loading from '@/app/loading';

const Hero = () => {
  const rotatedWords = useMemo(() => <WordRotateEffect />, []);
  const people = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      image: '/users/user-1.png',
    },
    {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image: '/users/user-2.png',
    },
    {
      id: 3,
      name: 'Jane Smith',
      designation: 'Data Scientist',
      image: '/users/user-3.png',
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image: '/users/user-4.jpg',
    },
  ];
  return (
    <div className='pb-20 mt-9 sm:pt-14 xl:pt-[80px] 2xl:pt-[110px] md:pt-20 lg:pt-32 2xl:mt-[5vh] xl:px-16 h-[97svh] xl:h-[100vh] sm:h-auto max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
      {/* UI: Spotlights */}
      {/* <Spotlight
        className='top-0 left-0 sm:-top-40 sm:-left-10 lg:-top-20 h-[100vh] w-[100vw] md:block hidden'
        fill='white'
      /> */}

      {/* Radial gradient background */}
      <div className='h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] absolute flex top-0 left-0 items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      </div>

      <div className='flex max-w-[80vw] mt-12 sm:mt-0 justify-center sm:justify-between items-center xl:gap-x-20 2xl:gap-x-40 relative lg:mb-5 z-10'>
        <div className='lg:text-left max-w-[89vw] md:max-w-2xl lg:max-w-[100vw] xl:max-w-[60vw] flex flex-col items-center sm:items-start justify-center'>
          <span className='mt-2 sm:mt-5 text-5xl lg:text-6xl md:leading-tight'>
            <div className='font-normal my-1'>{rotatedWords} </div>
            <span className='text-[#ED5F5F] font-semibold'>actually</span>
            <span className='font-normal'> focused</span>
            <br className='md:block hidden' />
            <span className='font-normal'> on your results.</span>
          </span>

          {/* <TextGenerateEffect
            words='SBA offers expert consultancy in architecture, structural design, project management, and property valuation nationwide.'
          /> */}

          <div className='mt-7 sm:mt-12 text-pretty text-[#BDBDBD] block leading-relaxed sm:hidden sm:text-left text-center text-base'>
            SBA offers expert consultancy in architecture, structural design,
            project management, and property valuation nationwide.
          </div>

          <div className='mt-4 text-pretty hidden font-light sm:block  md:text-base text-neutral-300 lg:max-w-[50vw] xl:max-w-[45vw]'>
            SBA is a distinguished consultancy firm with over 25 years of
            experience providing an array of services encompassing architectural
            planning, structural design, project management consultancy, and
            property valuation for residential, commercial, and industrial
            projects nationwide in India.
          </div>

          <div className='md:mt-10 mt-8 flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20'>
            <HeroButtonGetStarted />

            <div className='flex flex-col sm:flex-row items-center gap-5'>
              <div className='flex -space-x-3'>
                {/* <AnimatedTooltipPreview /> */}
                {people.map((person) => (
                  <Image
                    key={person.id}
                    src={person.image}
                    alt={person.name}
                    width={40}
                    height={40}
                    loading='eager'
                    className='rounded-full inline-block h-full w-full object-cover select-none pointer-events-none'
                  />
                ))}
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
          className='rounded-lg greyscale select-none pointer-events-none hidden xl:block xl:mx-5'
          alt='Hero Image'
          aria-label='Hero Image'
          aria-description='Hero Image of a crane on a construction site'
          width={250}
          height={100}
          priority={true} // Only set to true for important images to improve lazy loading
          loading='eager'
        />
      </div>
    </div>
  );
};

export default Hero;
