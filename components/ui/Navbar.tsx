'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { navItems } from '@/data';
import useAuth from '@/context/useAuth';
import { account } from '@/lib/appwrite.config';
import { deleteSessionClient } from '@/lib/appwrite';

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { authStatus } = useAuth();

  return (
    <Navbar
      isBordered={true}
      onMenuOpenChange={setIsMenuOpen}
      className='fixed'
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <Link href={'/'}>
          <NavbarBrand>
            <img
              src='/nav.png'
              className='select-none pointer-events-none w-7 mr-2 rounded-md ml-2 sm:ml-0'
              alt=''
            />
            <p className='font-bold text-xl'>SBA</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {navItems.map((link, index) => (
          <NavbarItem key={index}>
            <Link href={link.path}>{link.display}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        {authStatus ? (
          <NavbarItem>
            <Button
              color='primary'
              variant='shadow'
              radius='full'
              onClick={async () => deleteSessionClient()}
            >
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <Link href='/login'>
            <NavbarItem>
              <Button color='primary' variant='shadow' radius='full'>
                Login
              </Button>
            </NavbarItem>
          </Link>
        )}
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((link, index) => (
          <NavbarMenuItem className='mt-5' key={index}>
            <Link href={link.path} className='w-full text-4xl'>
              {link.display}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
