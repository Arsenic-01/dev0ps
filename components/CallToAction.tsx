import { Button } from '@nextui-org/button';
import ShinyButton from './ui/ShinyButton';
import MagicButtonCTA from './utils/Misc';
import dynamic from 'next/dynamic';
const BackgroundBeams = dynamic(
  () => import('@/components/ui/background-beams'),
  { ssr: false }
);

const year = new Date().getFullYear();

const CallToAction = () => {
  return (
    <div className='w-full relative'>
      <div
        className='w-full lg:mt-28 md:mt-24 sm:mt-20 mt-18 md:relative px-2 md:px-10 py-20'
        id='contact'
      >
        {/* background grid */}
        <div className='w-full absolute left-0 -bottom-24 min-h-96'>
          <img
            src='/footer-grid.svg'
            alt='grid'
            className='w-full h-full hidden md:block user-select-none pointer-events-none -z-10'
          />
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='font-medium text-center text-pretty text-4xl lg:text-5xl w-full lg:max-w-[45vw] z-30'>
            Ready to take <span className='text-red-400'>your</span> ideas to
            the next level?
          </h1>
          <p className='text-white-200 md:mt-7 my-5 text-center z-30'>
            Reach out to us today and let&apos;s discuss how we can help you
            achieve your goals.
          </p>
          <MagicButtonCTA />
          <ShinyButton />
        </div>
        <div className='hidden md:block'>
          <BackgroundBeams />
        </div>{' '}
      </div>
    </div>
  );
};

export default CallToAction;
