'use client';
import { Button, Input, Textarea } from '@nextui-org/react';
import React, { useState } from 'react';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as Sentry from '@sentry/nextjs';

const page = () => {
  Sentry.metrics.set('user_view_contact', 'client');

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Email sent successfully.🎉');
      } else {
        toast.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error occured while sending email :', error);
      toast.error('An error occurred.');
    } finally {
      setFormData({
        email: '',
        name: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className='min-h-[100vh] relative  bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto '>
      <div className='mt-16 sm:mt-24 md:px-8'>
        <h1 className='hidden sm:block sm:text-5xl lg:text-6xl mt-8 sm:mt-0  text-center md:text-left px-8'>
          Let&apos;s Work Together
          <span className='text-[#EF4444] text-6xl lg:text-8xl select-none hidden sm:inline-block'>
            .
          </span>
        </h1>
        <h1 className='text-4xl sm:hidden mt-8 sm:mt-0  text-center md:text-left px-8'>
          Get in Touch
          <span className='text-[#EF4444] text-6xl lg:text-8xl select-none hidden sm:inline-block'>
            .
          </span>
        </h1>
        <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 sm:px-4 py-6'>
          <div className='px-5 sm:px-4 sm:py-3'>
            <form className='sm:mt-12' onSubmit={handleSubmit}>
              <div className='mt-4 sm:mt-10 relative'>
                <Input
                  size='sm'
                  type='email'
                  isRequired
                  required
                  name='email'
                  label='Email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='mt-10 relative'>
                <Input
                  size='sm'
                  type='text'
                  isRequired
                  required
                  name='name'
                  label='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='mt-10 relative'>
                <Input
                  size='sm'
                  type='text'
                  isRequired
                  required
                  name='subject'
                  label='Subject'
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className='mt-10 relative'>
                <Textarea
                  required
                  isRequired
                  name='message'
                  labelPlacement='outside'
                  placeholder='Enter your Message'
                  className='w-full'
                  minRows={10}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className='mt-10 relative'>
                <Button
                  color='primary'
                  type='submit'
                  variant='shadow'
                  className='max-sm:w-full text-sm'
                >
                  Send Message 🚀
                </Button>
              </div>
            </form>
          </div>
          <div className='grid-rows-2 gap-16	md:gap-10 px-5 sm:px-4 py-3'>
            <div className=' sm:px-3 py-4 mb-7'>
              <h2 className='text-3xl text-center sm:text-left font-medium'>
                Contact Details
              </h2>
              <div className='flex flex-col gap-6 sm:gap-4 mt-10 sm:mt-4'>
                <p className='text-slate-300 inline-flex gap-7 lg:gap-5 items-center'>
                  <FaLocationDot className='w-7 h-7 sm:w-5 md:w-10 md:h-10 sm:h-5 lg:h-5 lg:w-5' />
                  Regd. Office: 8, First Floor, Rambaug Society, Vidya Vikas
                  Circle, Gangapur Road, Nashik-422013
                </p>
                <a
                  href='mailto:sba.nashik@gmail.com?subject=Hey%20there!&body=I%20am%20_____%20and%20I%20want%20to%20Contact%20you%20for%20______'
                  className='text-slate-300 inline-flex gap-5 items-center'
                >
                  <FaEnvelope className='w-5 h-5' /> sba.nashik@gmail.com
                </a>

                <div className='text-slate-300 flex flex-col lg:inline-flex lg:flex-row gap-5 items-start lg:items-center'>
                  <a
                    className='inline-flex gap-5 items-center'
                    href='tel:+919822377366'
                  >
                    <FaPhone className='w-5 h-5' /> +91 98223 77366
                  </a>
                  <span className='text-slate-700 hidden lg:inline-block select-none pointer-events-none'>
                    |
                  </span>{' '}
                  <a
                    className='inline-flex gap-5 items-center'
                    href='tel:+917972418920'
                  >
                    <FaPhone className='w-5 h-5' /> +91 79724 18920
                  </a>
                </div>
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
