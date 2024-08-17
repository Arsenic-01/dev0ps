import Image from 'next/image';
import Link from 'next/link';
import { PasskeyModal } from '@/components/PasskeyModal';
import * as Sentry from '@sentry/nextjs';
import { SearchParamProps } from '@/types';
import { ClientLoginForm } from '@/components/forms/ClientLoginForm';

const Home = async ({ searchParams }: SearchParamProps) => {
  Sentry.metrics.set('user_view_appointment', 'client');

  const isAdmin = searchParams?.admin === 'true';
  const year = new Date().getFullYear();

  return (
    <div className='flex h-screen min-h-screen bg-black'>
      {isAdmin && <PasskeyModal />}

      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <ClientLoginForm />
          <div className='text-14-regular mt-20 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              © {year} SBA
            </p>
            <Link href='/register' className='text-green-500'>
              Register
            </Link>
            <Link href='/login/?admin=true' className='text-green-500'>
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
          alt='Side image login'
          className='side-img select-none pointer-events-none  max-w-[100%]'
        />
      </div>
    </div>
  );
};

export default Home;
