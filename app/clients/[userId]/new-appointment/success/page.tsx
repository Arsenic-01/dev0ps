import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { getAppointment } from '@/lib/actions/appointment.actions';
import { formatDateTime } from '@/lib/utils';
import * as Sentry from '@sentry/nextjs';
import { SearchParamProps } from '@/types';
import { redirect } from 'next/navigation';
import { getLoggedInUser } from '@/lib/appwrite';
const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || '';
  const appointment = await getAppointment(appointmentId);
  Sentry.metrics.set('user_view_new-appointment_success', 'client');
  const user = await getLoggedInUser();
  if (!user) redirect('/login');

  return (
    <div className='min-h-[100vh] flex flex-col items-center justify-center bg-black'>
      <div className=' flex  px-[5%] mb-10'>
        <div className='success-img'>
          <div className='pt-10'></div>
          <section className='flex flex-col items-center'>
            <Image
              src='/assets/gifs/success.gif'
              height={300}
              width={280}
              alt='success'
            />
            <h2 className='header mb-6 max-w-[600px] text-center'>
              Your <span className='text-green-500'>appointment request</span>{' '}
              has been successfully submitted!
            </h2>
            <p>We&apos;ll be in touch shortly to confirm.</p>
          </section>
          <section className='request-details'>
            <p>Requested appointment details: </p>
            <div className='flex items-center gap-3'>
              <Image
                src={'/person1.png'}
                alt='sba_chief'
                width={100}
                height={200}
                className='w-6 h-8 rounded-md'
              />
              <p className='whitespace-nowrap'>Sunil D. Bhor</p>
            </div>
            <div className='flex gap-2'>
              <Image
                src='/assets/icons/calendar.svg'
                height={24}
                width={24}
                alt='calendar'
              />
              <p> {formatDateTime(appointment.schedule).dateTime}</p>
            </div>
          </section>
          <Button variant='outline' className='shad-primary-btn' asChild>
            <Link href={`/clients/${userId}/new-appointment`}>
              New Appointment
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestSuccess;
