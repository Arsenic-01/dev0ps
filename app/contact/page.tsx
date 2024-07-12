import { Button, Input, Textarea } from '@nextui-org/react';
import React from 'react';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import * as Sentry from '@sentry/nextjs';

const page = () => {
  Sentry.metrics.set('user_view_contact', 'client');

  return (
    <div className='min-h-[100vh] relative sm:py-10 bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto '>
      <div className='mt-24 md:px-8'>
        <h1 className='pointer-events-auto text-5xl md:text-6xl font-black text-center md:text-left text-slate-100 xl:text-7xl'>
          Let&apos;s Work Together
          <span className='text-red-600'>.</span>
        </h1>
        <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 sm:px-4 py-6'>
          <div className='px-5 sm:px-4 sm:py-3'>
            <form className='mt-12' action={''} method='POST'>
              <div className='mt-10 relative'>
                <Input
                  size='sm'
                  type='email'
                  isRequired
                  required
                  label='Email'
                />
              </div>
              <div className='mt-10 relative'>
                <Input
                  size='sm'
                  type='name'
                  isRequired
                  required
                  label='Your Name'
                />
              </div>
              <div className='mt-10 relative'>
                <Input
                  size='sm'
                  type='subject'
                  isRequired
                  required
                  label='Subject'
                />
              </div>
              <div className='mt-10 relative'>
                <Textarea
                  required
                  isRequired
                  // label="Message"
                  labelPlacement='outside'
                  placeholder='Enter your Message'
                  className='w-full'
                  minRows={10}
                />
              </div>
              <div className='mt-10 relative'>
                <Button color='primary' type='submit' variant='shadow'>
                  Send 🚀
                </Button>
              </div>
            </form>
          </div>
          <div className='grid-rows-2 gap-16	md:gap-10 px-5 sm:px-4 py-3'>
            <div className=' sm:px-3 py-4 mb-7'>
              <h2 className='text-3xl font-semibold'>Contact Info</h2>
              <div className='flex flex-col gap-4 mt-4'>
                <p className='text-slate-300 inline-flex gap-5 items-center'>
                  <FaLocationDot className='w-5 h-5' />
                  Regd. Office: 8, First Floor, Rambaug Society, Vidya Vikas
                  Circle,Gangapur Road, Nashik422013
                </p>
                <p className='text-slate-300 inline-flex gap-5 items-center'>
                  <FaEnvelope className='w-5 h-5' /> sba.nashik@gmail.com
                </p>
                <p
                  className='text-slate-300 inline-flex gap-5 items-center'
                  suppressHydrationWarning
                >
                  <FaPhone className='w-5 h-5' /> +91 98223 77366{' '}
                  <span className='text-slate-700 select-none pointer-events-none'>
                    |
                  </span>{' '}
                  +91 79724 18920
                </p>
              </div>
            </div>
            <div className='text-center mx-auto'>
              <iframe
                className='rounded-lg w-full'
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14995.89229266695!2d73.7664801!3d20.0096448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea4d3d397d1f%3A0x69841f86cbb89521!2sSunil%20Bhor%20and%20Associates!5e0!3m2!1sen!2sin!4v1719696639207!5m2!1sen!2sin'
                width={400}
                height={300}
                style={{ border: 0, borderRadius: 20 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
