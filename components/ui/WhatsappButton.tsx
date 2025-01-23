// components/WhatsAppButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href='https://wa.me/+919822377366?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-5 lg:bottom-8 lg:right-8 xl:bottom-10 xl:right-8 size-14 2xl:size-16 2xl:right-10 flex items-center justify-center bg-green-500 rounded-full shadow-lg hover:bg-green-600 ease-linear transition-transform transform hover:scale-105'
      aria-label='Chat on WhatsApp'
    >
      <FaWhatsapp className='text-white text-4xl 2xl:text-4xl' />
    </a>
  );
};

export default WhatsAppButton;
