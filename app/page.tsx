'use client';
import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import CallToAction from '@/components/CallToAction';
import Work from '@/components/ui/Work';
import Values from '@/components/Values';
import Development from '@/components/Development';
import { Testimonials } from '@/components/Testimonials';
import FAQ from '@/components/Accordian';
import * as Sentry from '@sentry/nextjs';
import { InfiniteMovingCards } from '@/components/ui/InfiniteCards';
import { companieslogo } from '@/data';
import { LampDemo } from '@/components/ui/lamp';
import Services from '@/components/UpdatedServices';

const Home = () => {
  Sentry.metrics.set('user_view_home', 'client');

  return (
    <>
      <main className='relative bg-black-100 flex z-0 justify-center items-center flex-col overflow-hidden mx-auto '>
        <Hero />
        {/* <Clients /> */}
        <InfiniteMovingCards items={companieslogo} />
        <div className=' max-w-7xl  w-full sm:px-10 px-5'>
          <Services />
          <LampDemo />
        </div>
        <div className='max-w-7xl w-full sm:px-10 px-5'>
          <Work />
          <Grid />
          <Development />
        </div>
        <div className='xl:max-w-[1450px] max-w-7xl  w-full sm:px-10 px-5'>
          <Values />
          <Testimonials />
        </div>

        <div className='max-w-7xl w-full sm:px-10 px-5'>
          <CallToAction />
          <FAQ />
        </div>
      </main>
    </>
  );
};

export default Home;
