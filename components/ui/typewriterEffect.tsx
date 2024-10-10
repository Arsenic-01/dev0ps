'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterEffect = () => {
  return (
    <div>
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
    </div>
  );
};

export default TypewriterEffect;
