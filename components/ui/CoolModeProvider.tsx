'use client';
import React from 'react';
import { CoolMode } from '../magicui/cool-mode';

function CoolModeProvider() {
  return (
    <CoolMode>
      <span className='text-lg md:text-xl underline underline-offset-8 hover:cursor-pointer hover:text-red-300 select-none transition-all ease-in-out'>
        Fun?
      </span>
    </CoolMode>
  );
}

export default CoolModeProvider;
