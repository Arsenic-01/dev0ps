import React from 'react';
import Countup from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });
// Also install this npm i --save-dev @types/react-lottie
import Lottie from 'react-lottie';

import { cn } from '@/lib/utils';
import { BackgroundGradientAnimation } from './GradientBg';
import GridGlobe from './GridGlobe';
import animationData from '@/data/confetti.json';
import MagicButton from '../MagicButton';
import { Check } from 'lucide-react';
import { FaLocationArrow } from 'react-icons/fa6';

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
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
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

  const [CounterOn, SetCounterOn] = useState(false);

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleCopy = () => {
    const text = 'sba.nashik@gmail.com';
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        'row-span-1 relative overflow-hidden bg-neutral-950/60	 md:bg-zinc-900/90 rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
    >
      {/* add img divs */}
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className='w-full h-full absolute'>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center ')}
            />
          )}
        </div>

        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className='absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl'></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col  ${
              id === 3 ? 'p-3' : 'px-5 p-5 lg:p-10'
            }
            }`
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className='font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg
            ${id === 2 ? 'lg:text-2xl' : 'lg:text-3xl'}
              max-w-96 font-bold z-10 ${id === 5 && 'text-xl'}`}
          >
            {title}
          </div>
          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 && 'w-full opacity-80'
            } `}
          >
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                //   width={220}
                className='object-cover object-center w-full h-full'
              />
            )}
          </div>

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
                otherClasses=' bg-slate-950 '
              />
            </>
          )}

          {id === 3 && (
            <div className='flex flex-col gap-10 py-3 '>
              <h2 className={`text-xl sm:text-4xl px-4	${playfair.className}`}>
                We Know what we are doing
              </h2>
              <div className='flex justify-center gap-5 px-5'>
                <div className='flex flex-col gap-5'>
                  <h2 className='text-3xl sm:text-4xl font-bold text-green-400'>
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <span>
                          {isVisible ? (
                            <Countup
                              start={4200}
                              end={4500}
                              prefix='₹'
                              // enableScrollSpy={true}
                              duration={35}
                              delay={0}
                              suffix={'Cr+'}
                            />
                          ) : (
                            <Countup
                              start={4000}
                              end={4500}
                              prefix='₹'
                              // scrollSpyOnce={true}
                              duration={40}
                              delay={0}
                              suffix={'Cr+'}
                            />
                          )}
                        </span>
                      )}
                    </VisibilitySensor>
                  </h2>
                  <span>Total Development</span>
                </div>

                <div className='flex flex-col gap-5'>
                  <h2 className='text-3xl sm:text-4xl font-bold text-green-400'>
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <span>
                          {isVisible ? (
                            <Countup
                              start={1000}
                              end={1500}
                              prefix=''
                              // enableScrollSpy={true}
                              duration={35}
                              delay={0}
                              suffix={'+'}
                            />
                          ) : (
                            <Countup
                              start={1000}
                              end={1500}
                              prefix=''
                              scrollSpyOnce={true}
                              duration={35}
                              delay={0}
                              suffix={'+'}
                            />
                          )}
                        </span>
                      )}
                    </VisibilitySensor>
                  </h2>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>
          )}
          {id === 6 && (
            <div className='mt-5 relative'>
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? 'block' : 'block'
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? 'Email is Copied!' : 'Copy our email address'}
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
