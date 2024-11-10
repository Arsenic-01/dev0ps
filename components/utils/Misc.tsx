'use client';
import React from 'react';
import MagicButton from '../MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';

const MagicButtonCTA = () => {
  const router = useRouter();

  return (
    <MagicButton
      className='mt-2 sm:mt-5 z-50 md:hidden'
      title="Let's talk"
      icon={<FaLocationArrow />}
      position='right'
      otherClasses='bg-black'
      handleClick={() => {
        router.push('/contact');
      }}
    />
  );
};

export default MagicButtonCTA;

export const HeroButtonGetStarted = () => {
  const router = useRouter();
  return (
    <Button
      color='primary'
      variant='shadow'
      radius='full'
      className='w-32 relative overflow-visible'
      aria-description='Get Started Button'
      onClick={() => router.push('/register')}
    >
      <span className='absolute top-0 right-0'>
        <span className='relative flex h-3 w-3'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-600 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-[#0B879C]/90'></span>
        </span>
      </span>
      Get Started
    </Button>
  );
};
