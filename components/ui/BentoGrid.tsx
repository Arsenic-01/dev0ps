'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { IoCopyOutline } from 'react-icons/io5';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import { BackgroundGradientAnimation } from './GradientBg';
import MagicButton from '../MagicButton';
import { Check } from 'lucide-react';
import { FaLocationArrow } from 'react-icons/fa6';
import NumberTicker from '../magicui/number-ticker';
import { useRouter } from 'next/navigation'; // Moved this to top level

// Dynamically load client-side only components
const GridGlobe = dynamic(() => import('./GridGlobe'), { ssr: false });

const playfair = Playfair_Display({ subsets: ['latin'] });
import animationData from '@/data/confetti.json';
import Lottie from 'lottie-react'; // Import Lottie
import Image from 'next/image';

// BentoGrid component
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem component
export const BentoGridItem = ({
  className,
  id,
  title,
  description,
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
    'Work on diverse projects to build a robust portfolio',
    'Explore career paths and industry insights firsthand',
  ];

  const [copied, setCopied] = useState(false);
  const router = useRouter(); // Use the hook at the top level of the component

  const handlerAbout = () => {
    router.push('/about'); // Now it can be used safely here
  };

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText('sba.nashik@gmail.com');
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (copied) {
      timeout = setTimeout(() => setCopied(false), 3000);
    }
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-black group-hover/bento:bg-white transition-all rounded-xl md:rounded-3xl border-[0.9px] duration-300 border-[#353535] md:border-[#1f1f1f] hover:border-collapse hover:bg-[#131313] hover:cursor-pointer group/bento hover:shadow-xl shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
    >
      <div className={`${id === 6 ? 'flex justify-center' : ''} h-full`}>
        {img && (
          <div className='w-full h-full absolute'>
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          </div>
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-1 transition duration-200 relative md:h-full min-h-40 flex flex-col',
            id === 3 ? 'p-3' : 'px-5 p-5 lg:p-10'
          )}
        >
          <div
            className={`absolute right-0 -bottom-5 ${id === 5 ? 'w-full opacity-80' : ''}`}
          >
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className='object-cover object-center w-full h-full'
              />
            )}
          </div>
          <div className='font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
            {description}
          </div>
          <div
            className={`font-sans text-lg ${id === 2 ? 'lg:text-2xl' : 'lg:text-3xl'} max-w-96 font-bold z-10 ${id === 5 ? 'text-xl' : ''}`}
          >
            {title}
          </div>

          {id === 2 && (
            <div className='translate-y-5 sm:translate-y-0 xl:-translate-y-4'>
              <GridGlobe />
            </div>
          )}

          {id === 5 && (
            <>
              <div className='flex flex-col gap-1 space-y-2 my-2.5 sm:p-3 p-2'>
                <ul className='list-none space-y-3'>
                  {intern.map((item, i) => (
                    <li
                      className='flex gap-1.5 items-center text-left text-base'
                      key={i}
                    >
                      <Check className='h-5 w-5 shrink-0' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <MagicButton
                title='Apply for Job'
                icon={<FaLocationArrow />}
                position='right'
                width={true}
                className='md:mt-5'
                otherClasses='bg-black'
              />
            </>
          )}

          {id === 3 && (
            <div className='flex flex-col gap-10 py-3'>
              <h2
                className={`text-xl md:text-2xl font-bold lg:text-3xl px-4 ${playfair.className}`}
              >
                We Know what we are doing
              </h2>
              <div className='flex justify-center gap-5 sm:px-5'>
                <div className='flex flex-col gap-5'>
                  <h2 className='text-3xl sm:text-4xl font-bold text-green-400'>
                    <NumberTicker value={4500} />
                    Cr+
                  </h2>
                  <span>Total Development</span>
                </div>

                <div className='flex flex-col gap-5'>
                  <h2 className='text-3xl sm:text-4xl font-bold text-green-400'>
                    <NumberTicker value={1500} />+
                  </h2>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
          )}

          {id === 4 && (
            <>
              <div className='relative'>
                <div
                  className={`font-sans text-lg lg:text-3xl font-bold z-10 `}
                >
                  <span className='text-red-400'>25 Years</span> of Experience
                  <br />
                  Providing Exceptional Value Since{' '}
                  <span className='text-red-400'>1999</span>
                  <br />
                </div>
                <MagicButton
                  handleClick={handlerAbout}
                  title='About Us'
                  icon={<FaLocationArrow />}
                  position='right'
                  width={true}
                  className='mt-7'
                  otherClasses='bg-black'
                />
              </div>
            </>
          )}

          {id === 6 && (
            <div className='mt-5 relative'>
              <div
                className={`absolute -bottom-5 right-0 ${copied ? 'block' : 'block'}`}
              >
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ height: 200, width: 400 }}
                />
              </div>

              <MagicButton
                title={copied ? 'Email is Copied!' : 'Copy email address'}
                icon={<IoCopyOutline />}
                position='left'
                handleClick={handleCopy}
                width={true}
                otherClasses='!bg-[#161A31]'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
