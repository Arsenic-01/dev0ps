import FAQ from '@/components/Accordian';
import CallToAction from '@/components/CallToAction';
import Development from '@/components/Development';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import InfiniteMovingCards from '@/components/ui/InfiniteCards';
import { LampDemo } from '@/components/ui/lamp';
import Work from '@/components/ui/Work';
import Services from '@/components/UpdatedServices';
import { companieslogo } from '@/data';
import * as Sentry from '@sentry/nextjs';

const Home = () => {
  Sentry.metrics.set('user_view_home', 'client');

  return (
    <>
      <main className='relative bg-black-100 flex z-0 justify-center items-center flex-col overflow-hidden mx-auto '>
        <Hero /> {/* Mostly SSR */}
        <InfiniteMovingCards logos={companieslogo} />
        {/* <Clients /> */}
        {/* Client */}
        <div className='max-w-7xl  w-full sm:px-10 px-2'>
          <Services /> {/* Mostly SSR */}
          <LampDemo /> {/* Client */}
        </div>
        <div className='max-w-6xl 2xl:max-w-7xl w-full sm:px-10 px-5'>
          <Work /> {/* SSR */}
          <Grid /> {/* Mostly Client */}
          <Development /> {/* SSR */}
        </div>
        <div className='max-w-6xl 2xl:max-w-7xl  w-full sm:px-10 px-5'>
          <Testimonials /> {/* Client */}
        </div>
        <div className='max-w-7xl w-full sm:px-10 px-5'>
          <CallToAction />
        </div>
        <div className='max-w-6xl w-full sm:px-10 px-5'>
          <FAQ />
        </div>
      </main>
    </>
  );
};

export default Home;
