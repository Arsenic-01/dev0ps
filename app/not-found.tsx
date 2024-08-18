import { Boxes } from '@/components/ui/background-boxes';
import { Button } from '@/components/ui/button';
import CoolModeProvider from '@/components/ui/CoolModeProvider';
import { TransitionLink } from '@/components/utils/TransitionLink';

export default function notFound() {
  return (
    <div className='px-4 h-screen w-full flex flex-col justify-center select-none items-center text-center gap-10 relative'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-7xl 2xl:text-[120px] font-bold z-10'>
          404 Not Found
        </h1>
        <h1 className='mt-3 text-lg sm:text-2xl z-10'>
          Hmmm Looks like this Link is Broken 🤔
        </h1>
      </div>
      <div className='flex justify-center items-center gap-6 z-10'>
        <Button asChild>
          <TransitionLink className='text-lg md:text-xl' href={'/'}>
            Home
          </TransitionLink>
        </Button>
        <TransitionLink className='text-lg md:text-xl' href={'/cool404'}>
          <span className='text-lg md:text-xl underline underline-offset-8 hover:cursor-pointer hover:text-red-300  transition-all ease-in-out'>
            Cool 404?
          </span>{' '}
        </TransitionLink>
        <CoolModeProvider />
      </div>
      <div className='w-full h-full bg-black absolute inset-0 top-0 left-0 overflow-hidden'>
        <Boxes />
      </div>
    </div>
  );
}
