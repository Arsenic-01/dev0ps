import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';
import BlurFade from './magicui/blur-fade';
import Image from 'next/image';
import { TransitionLink } from './utils/TransitionLink';
import { linkdata } from '@/data';
const FooterExp = () => {
  return (
    <footer className='w-full dark:bg-black'>
      <BlurFade delay={0.1} inView>
        <div className=' px-5 py-16 sm:px-6 lg:px-8'>
          <div className='flex justify-center text-teal-600 dark:text-teal-300'>
            {}
            <TransitionLink href={'/'}>
              <Image
                src='/nav.png'
                width={150}
                height={150}
                className='w-12 select-none pointer-events-none'
                alt=''
              />
            </TransitionLink>
          </div>

          <p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400'>
            Innovate. Design. Construct.
          </p>

          <ul className='mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
            {linkdata.map((item) => (
              <li
                key={item.id}
                className='text-gray-700 dark:text-white transition hover:text-gray-700/75 dark:hover:text-white/75'
              >
                {item.next && (
                  <TransitionLink
                    className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
                    href={item.link}
                  >
                    {item.title}
                  </TransitionLink>
                )}

                {!item.next && (
                  <a
                    className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
                    href={item.link}
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <ul className='mt-12 flex justify-center items-center gap-6 md:gap-8'>
            <li>
              <a
                href='https://www.facebook.com/sunil.bhor.31/'
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
              >
                <span className='sr-only'>Facebook</span>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href='https://www.instagram.com/sdbhor/'
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
              >
                <span className='sr-only'>Instagram</span>

                <FaInstagram className='w-5 h-5 select-none pointer-events-none' />
              </a>
            </li>

            <li>
              <a
                href='https://x.com/sdbhor/'
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
              >
                <span className='sr-only'>Twitter</span>
                <FaXTwitter className='w-5 h-5 select-none pointer-events-none' />
              </a>
            </li>

            <li>
              <a
                href='https://www.linkedin.com/in/sdbhor/'
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
              >
                <span className='sr-only'>Linkdin</span>
                <FaLinkedin className='w-5 h-5 select-none pointer-events-none' />
              </a>
            </li>

            <li>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75'
              >
                <span className='sr-only'>Whatsapp</span>
                <FaWhatsapp className='w-5 h-5 select-none pointer-events-none' />
              </a>
            </li>
          </ul>
        </div>
      </BlurFade>
    </footer>
  );
};

export default FooterExp;
