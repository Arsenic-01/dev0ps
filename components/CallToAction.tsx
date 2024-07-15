import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './MagicButton';

const year = new Date().getFullYear();

const CallToAction = () => {
  return (
    <div
      className='w-full lg:mt-28 md:mt-24 sm:mt-20 mt-18 relative px-10 py-20'
      id='contact'
    >
      {/* background grid */}
      <div className='w-full absolute left-0 -bottom-24 min-h-96'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full user-select-none  '
        />
      </div>

      <div className='flex flex-col items-center z-30'>
        <h1 className='font-bold text-center text-pretty text-4xl lg:text-5xl xl:text-6xl lg:max-w-[45vw]'>
          Ready to take <span className='text-red-400'>your</span> ideas to the
          next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <MagicButton
          className='mt-2 sm:mt-5'
          title="Let's talk"
          icon={<FaLocationArrow />}
          position='right'
          otherClasses='bg-slate-950'
          handleClick={() => window.open('mailto:sba.nashik@gmail.com')}
        />
      </div>
    </div>
  );
};

export default CallToAction;
