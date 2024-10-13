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

  return (
    <div className='flex min-h-screen  bg-black'>
      {isAdmin && <PasskeyModal />}

      <section className='remove-scrollbar container my-auto py-14'>
        <div className='sub-container max-w-[496px]'>
          <ClientForm />

          <div className='text-14-regular mt-10 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              © {year} SBA
            </p>
            <Link href='/login' className='text-green-500 mr-3 sm:mr-0'>
              Login
            </Link>
            <Link
              href='/register/?admin=true'
              className='text-green-500 mr-3 sm:mr-0'
            >
              Admin
            </Link>
          </div>
        </div>
      </section>
      <div className='w-[50%] hidden md:block'>
        <Image
          src='/side_img2.jpg'
          height={1000}
          width={1000}
          alt='Register side image'
          className='side-img select-none pointer-events-none max-w-[100%]'
        />
      </div>
    </div>
  );
};

export default Home;
