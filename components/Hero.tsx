import {
  FaCircleArrowDown,
  FaDownLong,
  FaLocationArrow,
} from 'react-icons/fa6';
import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Typewriter from 'typewriter-effect';
import { socialMedia } from '@/data';
import { Star } from 'lucide-react';
import { Outfit } from 'next/font/google';
import Link from 'next/link';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { AnimatedTooltipPreview } from './ui/Tooltip';

const outfit = Outfit({ subsets: ['latin'] });
const Hero = () => {
  return (
    <div className='pb-20 pt-20 sm:pt-32 2xl:pt-[110px] md:pt-20 lg:pt-32 xl:pt-20'>
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-[100vh] w-[100vw] md:h-[80vh] md:w-[50vw] '
          fill='white'
        />{' '}
        <Spotlight
          className='h-[100vh] w-[100vw] md:h-[80vh] md:w-[50vw] top-10 left-full'
          fill='purple'
        />
        <Spotlight
          className='left-80 top-28 h-[100vh] w-[100vw] md:h-[80vh] md:w-[50vw] '
          fill='red'
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div className='h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.01] absolute flex top-0 left-0 items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      </div>

      <div className='flex w-[90vw] justify-between  items-center relative xl:mt-3 lg:mb-5  z-10'>
        <div className='lg:text-left max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center sm:items-start justify-center'>
          <div className='mb-4 flex md:mt-11 text-sm  lg:mt-0 text-center'>
            <HoverBorderGradient
              containerClassName='rounded-full'
              as='button'
              className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2'
            >
              <span> Turning blueprints into landmarks🏗️✨</span>
            </HoverBorderGradient>
          </div>
          <span className='mt-4 sm:mt-5 font-bold text-5xl lg:text-6xl xl:text-7xl'>
            <Typewriter
              options={{
                strings: [
                  'Chartered Engineers',
                  'Structural Engineers',
                  'Architects',
                  'Govt. Reg. Valuers',
                  'Industrial Consultants',
                  'Arbitrators',
                  'Auctioneers',
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <span className='text-[#ED5F5F]'>actually</span>
            <br />
            <span className='text-[#FF7878]'>focused</span> on your results
          </span>
          <TextGenerateEffect
            className='mt-10 sm:mt-12 text-pretty leading-relaxed sm:hidden text-base'
            words='SUNIL BHOR & ASSOCIATES offers expert consultancy offers expert consultancy n architecture, structural design, project management, and property valuation nationwide'
          />

          <TextGenerateEffect
            words='SUNIL BHOR & ASSOCIATES is a distinguished consultancy firm with
            over 25 years of experience providing an array of services
            encompassing architectural planning, structural design, project
            management consultancy, and property valuation for residential,
            commercial, and industrial projects nationwide in India.'
            className='mt-4 text-pretty hidden sm:block text-base leading-loose lg:text-lg'
          />

          <div className='md:mt-10 mt-8 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-20'>
            <Link href='/register'>
              <MagicButton
                title='Get Started'
                icon={<FaLocationArrow />}
                position='right'
                otherClasses='bg-black'
              />
            </Link>
            <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center  gap-5'>
              {/* <img
                  className='inline-block select-none pointer-events-none	 h-10 w-10 rounded-full  '
                  src='/users/user-1.png'
                  alt='user image'
                />
                <img
                  className='inline-block select-none pointer-events-none	 h-10 w-10 rounded-full '
                  src='/users/user-2.png'
                  alt='user image'
                />
                <img
                  className='inline-block select-none pointer-events-none	 h-10 w-10 rounded-full'
                  src='/users/user-3.png'
                  alt='user image'
                />
                <img
                  className='inline-block select-none pointer-events-none	 h-10 w-10 rounded-full '
                  src='/users/user-4.jpg'
                  alt='user image'
                />
                <img
                  className='inline-block select-none pointer-events-none	 object-cover h-10 w-10 rounded-full'
                  src='/users/user-5.jpg'
                  alt='user image'
                /> */}
              <div className='flex -space-x-3'>
                <AnimatedTooltipPreview />
              </div>

              <div className='flex flex-col justify-between items-center sm:items-start'>
                <div className='flex gap-0.5'>
                  <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  <Star className='h-4 w-4 text-green-600 fill-green-600' />
                </div>

                <p>
                  <span className='font-semibold'>1500+</span> happy customers
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center md:gap-3 gap-3'>
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className='w-10 h-10 cursor-pointer flex justify-center mt-7 sm:mt-14 items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
              >
                <img
                  src={info.img}
                  className='select-none pointer-events-none	'
                  alt='icons'
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
        <img
          src='/construction.jpg'
          className='rounded-lg greyscale  select-none pointer-events-none	  lg:w-[20%] hidden lg:block '
          alt=''
        />
        {/* <Example /> */}
        <span
          onClick={() => {
            window.scrollTo({ top: 600, behavior: 'smooth' });
          }}
          className='hidden opacity-65 hover:opacity-90 md:inline-flex absolute select-none gap-2 rounded-full right-20 bottom-0 2xl:-bottom-10'
        >
          Scroll down <FaCircleArrowDown className='animate-bounce w-6 h-6 ' />
        </span>
      </div>
    </div>
  );
};

export default Hero;
