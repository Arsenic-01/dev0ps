import React from 'react';
import WaterDropGrid from '../ui/WaterDropGrid';
import { Button } from '@nextui-org/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import OurTeam from './OurTeam';
import { Bitter } from 'next/font/google';
const bitter = Bitter({ subsets: ['latin'] });

const WhoWeAre = () => {
  return (
    <section className='relative py-20 sm:py-28 xl:py-28 2xl:py-36 mb-8 md:px-8'>
      <div className='text-slat-100 overflow-hidden px-8 flex items-center justify-center'>
        <WaterDropGrid />

        <div className='relative mx-auto max-w-6xl'>
          <div className='pointer-events-none relative z-10'>
            <div className='opacity-1 transform:none'>
              <h1 className={`${bitter.className} text-4xl lg:text-5xl`}>
                who we are
                <span className='text-[#EF4444] text-6xl select-none'>.</span>
              </h1>

              <div
                className='absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600'
                style={{ left: '100%' }}
              ></div>
            </div>
          </div>
          <div className='pointer-events-auto relative mt-6 sm:mt-11 z-10 flex justify-between gap-20'>
            <div className='opacity-1 transform:none flex flex-col items-start gap-12'>
              <p className='pointer-events-auto font-normal max-w-3xl text-base sm:text-lg bg-black/90  text-neutral-300 '>
                At Sunil Bhor & Associates, we are dedicated and passionate
                about turning your dreams into reality. With over 25 years of
                experience, we offer a range of services including architectural
                planning, structural design, Chartered Engineer Certifications,
                Project Management Consultancy (PMC), and Asset Valuation for
                projects across India.
                <br /> Led by Mr. Sunil Bhor, an expert architectural engineer,
                our firm is based in Nashik, with branches in Chhatrapati
                Sambhajinagar, Thane, and Mumbai. Equipped with the latest
                infrastructure and technology, our highly skilled and
                experienced team ensures that your projects are handled with the
                utmost care and expertise.
              </p>
              <DialogDemo />

              <div
                className='absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600'
                style={{ left: '100%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          color='primary'
          variant='shadow'
          radius='full'
          className='z-30 mb-4'
        >
          View Team
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-7xl overflow-y-scroll remove-scrollbar max-h-[80vh]'>
        <DialogHeader className='mt-5'>
          <DialogTitle className='font-bold text-3xl text-center lg:text-4xl xl:text-5xl'>
            Meet the Team.
          </DialogTitle>
          <DialogDescription className='text-center'>
            Behind Every Success, There’s a Great Team.
          </DialogDescription>
        </DialogHeader>
        <OurTeam />
        <DialogFooter>
          <DialogClose asChild>
            <Button radius='lg' size='md' variant='ghost' type='submit'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
