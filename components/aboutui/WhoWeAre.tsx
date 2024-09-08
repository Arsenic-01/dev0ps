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
import BoxReveal from '../magicui/box-reveal';
import BlurFade from '../magicui/blur-fade';

const WhoWeAre = () => {
  return (
    <section className='relative '>
      <div className='text-slat-100 min-h-[90vh] overflow-hidden px-8 pb-12 pt-14 md:pt-10 sm:py-20 md:px-12 lg:mr-10 pl-10 md:py-32'>
        <WaterDropGrid />

        <div className='relative mx-auto max-w-7xl '>
          <div className='pointer-events-none relative z-10'>
            <div className='opacity-1 transform:none'>
              <BoxReveal boxColor={'#fff'} duration={0.4}>
                <h1 className='pointer-events-auto  mt-5 bg-gradient-to-br from-slate-300 to-slate-400 py-4 bg-clip-text text-left text-6xl md:text-7xl font-medium tracking-tight text-transparent'>
                  Who We Are
                  <span className='text-[#b92d2d] text-6xl lg:text-8xl select-none'>
                    .
                  </span>
                </h1>
              </BoxReveal>

              <div
                className='absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600'
                style={{ left: '100%' }}
              ></div>
            </div>
          </div>
          <div className='pointer-events-auto relative mt-11 z-10 flex justify-between gap-20'>
            <div className='opacity-1 transform:none flex flex-col items-start gap-12'>
              <BoxReveal boxColor={'#fff'} duration={0.4}>
                <p className='pointer-events-auto font-normal max-w-3xl text-base sm:text-lg  text-neutral-300 '>
                  At Sunil Bhor & Associates, we&apos;re passionate about
                  turning your dreams into reality. As a professional
                  consultancy firm, we offer a wide range of services, including
                  architectural planning, structural design, project management
                  consultancy, and property valuation for residential,
                  commercial, and industrial projects all over India.
                  <br /> Our team is led by the talented Mr. Sunil Bhor, an
                  architectural engineer with a wealth of experience in
                  architectural engineering services. Based in Nashik with a
                  branch in Thane, Mumbai, we are fully equipped with the latest
                  infrastructure and technology to provide top-notch service.
                  Our highly qualified and experienced professionals are here to
                  ensure your projects are handled with expertise and care.
                </p>
              </BoxReveal>
              <BlurFade delay={0.1} inView>
                <DialogDemo />
              </BlurFade>

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
        <Button color='primary' variant='shadow' radius='full'>
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
