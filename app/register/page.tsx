import Image from 'next/image';
import Link from 'next/link';

import { ClientForm } from '@/components/forms/ClientRegisterForm';
import { PasskeyModal } from '@/components/PasskeyModal';
import * as Sentry from '@sentry/nextjs';
import { SearchParamProps } from '@/types';

const Home = ({ searchParams }: SearchParamProps) => {
  Sentry.metrics.set('user_view_appointment', 'client');

  const isAdmin = searchParams?.admin === 'true';
  const year = new Date().getFullYear();
  isAdmin && console.log('im here');
  return (
    <div className='flex h-screen max-h-screen'>
      {isAdmin && <PasskeyModal />}

      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <div className='inline-flex gap-2 justify-items-center items-center mb-12'>
            <Image
              src='/nav.png'
              height={1000}
              width={1000}
              alt='patient'
              className=' h-10 w-fit'
            />
            <h2 className='text-24-bold'>SBA</h2>
          </div>

          <ClientForm />

          <div className='text-14-regular mt-20 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              © {year} SBA
            </p>
            <Link href='/login' className='text-green-500'>
              Login
            </Link>
            <Link href='/register/?admin=true' className='text-green-500'>
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src='/side_img2.jpg'
        height={1000}
        width={1000}
        alt='patient'
        className='side-img max-w-[50%]'
      />
    </div>
  );
};

export default Home;
