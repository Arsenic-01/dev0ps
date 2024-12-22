import { linkdata } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

const FooterExp = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      href: 'https://www.facebook.com/sunil.bhor.31/',
      icon: FaFacebook,
      label: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/sdbhor/',
      icon: FaInstagram,
      label: 'Instagram',
    },
    { href: 'https://x.com/sdbhor/', icon: FaXTwitter, label: 'Twitter' },
    {
      href: 'https://www.linkedin.com/in/sdbhor/',
      icon: FaLinkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://wa.me/+919822377366',
      icon: FaWhatsapp,
      label: 'Whatsapp',
    },
  ];

  const iconClass =
    'text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75';

  return (
    <footer className='w-full dark:border-t-stone-800 border dark:bg-black'>
      <div className='px-5 pt-16 pb-7 sm:px-6 lg:px-8'>
        {/* Logo Section */}
        <div className='flex justify-center text-teal-600 dark:text-teal-300'>
          <Link href='/'>
            <Image
              src='/nav_red3.png'
              width={48}
              height={72}
              loading='eager'
              className='w-12 h-auto select-none pointer-events-none'
              alt='company logo'
            />
          </Link>
        </div>

        {/* Tagline */}
        <p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400'>
          Innovate. Value. Design.
        </p>

        {/* Navigation Links */}
        <ul className='mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
          {linkdata.map((item) => (
            <li key={item.id} className={iconClass}>
              {item.next ? (
                <Link className={iconClass} href={item.link}>
                  {item.title}
                </Link>
              ) : (
                <a className={iconClass} href={item.link}>
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <ul className='mt-12 flex justify-center items-center gap-6 md:gap-8'>
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                rel='noreferrer'
                target='_blank'
                className={iconClass}
              >
                <span className='sr-only'>{label}</span>
                <Icon className='w-5 h-5 select-none pointer-events-none' />
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className='text-sm text-neutral-400 mt-12 text-center mx-auto'>
          &copy; {currentYear} Sunil Bhor & Associates. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterExp;
