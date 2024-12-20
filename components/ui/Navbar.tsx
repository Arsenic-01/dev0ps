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
import { useContext, useEffect, useState } from 'react';
import { navItems } from '@/data';
import { deleteSessionClient, getLoggedInUser } from '@/lib/appwrite';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';
import { TransitionLink } from '../utils/TransitionLink';
import NavigationMenuContents from './NavigationMenuDemo';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarComponent() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error(
      'NavbarComponent must be used within a UserContextProvider'
    );
  }

  const { isLoggedIn, setIsLoggedIn } = userContext;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await getLoggedInUser();
        setUser(result);
        setIsLoggedIn(!!result);
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
        setIsLoggedIn(false);
      }
    };

    fetchUser();
  }, [isLoggedIn, setIsLoggedIn]);

  return (
    <header role='banner'>
      <Navbar
        maxWidth='lg'
        isBordered
        onMenuOpenChange={setIsMenuOpen}
        className='fixed custom-navbar'
        disableAnimation={true}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden'
          />
          <NavbarBrand>
            <div
              onClick={() => router.push('/')}
              className='hover:cursor-pointer flex justify-center items-center'
              role='link'
              aria-label='Navigate to homepage'
            >
              <Image
                src='/SBA_LOGO11-modified.webp'
                width={30}
                height={30}
                priority
                className='w-7 sm:w-[30px] mr-2 ml-2 sm:ml-0 hover:animate-hovereffect transition-all duration-100 ease-in-out'
                alt='Company logo: SBA'
              />
              <h1 className='font-bold text-xl sm:text-[22px] select-none'>
                SBA
              </h1>
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className='hidden sm:flex gap-4'
          justify='center'
          role='navigation'
          aria-label='Primary navigation'
        >
          <NavigationMenuContents />
        </NavbarContent>

        <NavbarContent justify='end'>
          {user ? (
            <NavbarItem>
              <Button
                color='primary'
                variant='shadow'
                radius='full'
                onClick={async () => {
                  try {
                    await deleteSessionClient();
                    setIsLoggedIn(false);
                    setUser(null);
                    router.push('/login');
                  } catch (error) {
                    console.error('Error during logout:', error);
                  }
                }}
                aria-label='Logout'
                aria-description='Log out of the application'
              >
                Logout
              </Button>
            </NavbarItem>
          ) : (
            <NavbarItem>
              <Button
                color='primary'
                variant='shadow'
                radius='full'
                onClick={() => router.push('/login')}
                aria-label='Login'
                aria-description='Log in to the application'
              >
                Login
              </Button>
            </NavbarItem>
          )}
        </NavbarContent>

        <NavbarMenu>
          {navItems.map((link, index) => (
            <NavbarMenuItem className='mt-5' key={index}>
              <Link
                href={link.path}
                className='w-full text-3xl md:text-4xl'
                aria-label={`Navigate to ${link.display}`}
              >
                {link.display}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
