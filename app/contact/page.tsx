'use client';
import { Button, Input, Textarea } from '@nextui-org/react';
import React, { useState, useCallback } from 'react';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as Sentry from '@sentry/nextjs';
import { z } from 'zod';

// Define the validation schema using Zod
const contactSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(1, 'Name is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message should be at least 10 characters long'),
});

const ContactPage = () => {
  Sentry.metrics.set('user_view_contact', 'client');

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form data
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const formErrors = validation.error.flatten().fieldErrors;
      setErrors({
        email: formErrors.email?.[0] || '',
        name: formErrors.name?.[0] || '',
        subject: formErrors.subject?.[0] || '',
        message: formErrors.message?.[0] || '',
      });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Email sent successfully. 🎉');
      } else {
        toast.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error occurred while sending email:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setFormData({
        email: '',
        name: '',
        subject: '',
        message: '',
      });
      setErrors({
        email: '',
        name: '',
        subject: '',
        message: '',
      });
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto'>
      <div className='mt-16 sm:mt-24 md:px-8'>
        <h1 className='hidden sm:block sm:text-5xl lg:text-6xl text-center md:text-left px-8'>
          Let's Work Together
          <span className='text-[#EF4444] text-6xl lg:text-8xl'>.</span>
        </h1>
        <h1 className='text-4xl sm:hidden mt-8 text-center md:text-left px-8'>
          Get in Touch
          <span className='text-[#EF4444] text-6xl lg:text-8xl'>.</span>
        </h1>

        <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 sm:px-4 py-5'>
          {/* Contact Form */}
          <div className='px-5 sm:px-4 py-2'>
            <form className='mt-12' onSubmit={handleSubmit}>
              <div className='mt-4 relative'>
                <Input
                  size='sm'
                  type='email'
                  isRequired
                  name='email'
                  label='Email'
                  value={formData.email}
                  onChange={handleChange}
                  aria-label='Your email address'
                  isInvalid={errors.email !== ''}
                />
                {errors.email && (
                  <div className='text-red-500 text-sm'>{errors.email}</div>
                )}
              </div>
              <div className='mt-8 relative'>
                <Input
                  size='sm'
                  type='text'
                  isRequired
                  name='name'
                  label='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  aria-label='Your full name'
                  isInvalid={errors.name !== ''}
                />
                {errors.name && (
                  <div className='text-red-500 text-sm'>{errors.name}</div>
                )}
              </div>
              <div className='mt-8 relative'>
                <Input
                  size='sm'
                  type='text'
                  isRequired
                  name='subject'
                  label='Subject'
                  value={formData.subject}
                  onChange={handleChange}
                  aria-label='Subject of your message'
                  isInvalid={errors.subject !== ''}
                />
                {errors.subject && (
                  <div className='text-red-500 text-sm'>{errors.subject}</div>
                )}
              </div>
              <div className='mt-8 relative'>
                <Textarea
                  isRequired
                  name='message'
                  label='Message'
                  value={formData.message}
                  onChange={handleChange}
                  aria-label='Your message'
                  isInvalid={errors.message !== ''}
                  minRows={6}
                />
                {errors.message && (
                  <div className='text-red-500 text-sm'>{errors.message}</div>
                )}
              </div>
              <div className='mt-8 relative'>
                <Button
                  color='primary'
                  type='submit'
                  variant='shadow'
                  className='w-full text-sm'
                  isDisabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message 🚀'}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className='px-5 sm:px-4 py-3 md:mt-5'>
            <div className='py-4 mb-7'>
              <h2 className='text-3xl text-center sm:text-left font-medium'>
                Contact Details
              </h2>
              <div className='flex flex-col gap-6 mt-6'>
                <p className='text-slate-300 inline-flex gap-4 items-center'>
                  <FaLocationDot className='w-6 h-6' />
                  Regd. Office: 8, First Floor, Rambaug Society, Vidya Vikas
                  Circle, Gangapur Road, Nashik-422013
                </p>
                <a
                  href='mailto:sba.nashik@gmail.com'
                  className='text-slate-300 inline-flex gap-5 items-center'
                >
                  <FaEnvelope className='w-5 h-5' /> sba.nashik@gmail.com
                </a>

                <div className='text-slate-300 flex flex-col gap-5 items-start'>
                  <a
                    className='inline-flex gap-5 items-center'
                    href='tel:+919822377366'
                  >
                    <FaPhone className='w-5 h-5' /> +91 98223 77366
                  </a>
                  <a
                    className='inline-flex gap-5 items-center'
                    href='tel:+917972418920'
                  >
                    <FaPhone className='w-5 h-5' /> +91 79724 18920
                  </a>
                </div>
              </div>
            </div>
            {/* Google Maps Embed */}
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
                aria-label='Google Maps showing office location'
                title='Office Location'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
