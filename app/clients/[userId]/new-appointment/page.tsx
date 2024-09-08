import Image from 'next/image';

import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { getClient } from '@/lib/actions/client.actions';
import * as Sentry from '@sentry/nextjs';
import { SearchParamProps } from '@/types';
import { getLoggedInUser } from '@/lib/appwrite';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const client = await getClient(userId);
  Sentry.metrics.set('user_view_new-appointment', 'client');
  const user = await getLoggedInUser();
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
  if (!user) redirect('/login');

  return (
    <div className='flex h-screen bg-black sm:max-h-screen'>
      <section className='remove-scrollbar container mt-20 my-auto'>
        <div className='sub-container max-w-[860px] flex-1 py-10 justify-between'>
          {/* <div className='md:inline-flex hidden  gap-2 justify-items-center items-center mb-12'>
            <Image
              src='/nav.png'
              height={1000}
              width={1000}
              alt='patient'
              className=' h-10 w-fit'
            />
            <h2 className='text-24-bold'>SBA</h2>
          </div> */}
          <BreadcrumbWithCustomSeparator />
          <AppointmentForm
            clientId={client?.$id}
            userId={userId}
            type='create'
          />
          <p className='justify-items-end mt-10 text-dark-600 xl:text-left'>
            © {year} SBA
          </p>{' '}
        </div>
      </section>

      <Image
        src='/assets/images/appointment-img.png'
        height={1500}
        width={1500}
        alt='appointment'
        className='side-img max-w-[390px] bg-bottom'
      />
    </div>
  );
};

export default Appointment;

function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumb className='mb-10'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href='/'>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Appointments</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
