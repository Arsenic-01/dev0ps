'use client';
import React from 'react';
import WhoWeAre from '@/components/aboutui/WhoWeAre';
import OurTeam from '@/components/aboutui/OurTeam';
import Experience from '@/components/aboutui/Experience';
import * as Sentry from '@sentry/nextjs';

const About = () => {
  Sentry.metrics.set('user_view_contact', 'client');

  return (
    <div className='relative py-10 bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto '>
      <WhoWeAre />
      {/* <Experience /> */}
    </div>
  );
};

export default About;
