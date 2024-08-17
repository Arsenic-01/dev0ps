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
import Link from 'next/link';

export default function NavbarComponent() {
  const userContext = useContext(UserContext);

  // Handle the case when `userContext` is undefined
  if (!userContext) {
    throw new Error('Navbar must be used within a UserContextProvider');
  }
  const { isLoggedIn, setIsLoggedIn } = userContext;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fetchUser, setFetchUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getLoggedInUser();
        setFetchUser(result);
        setIsLoggedIn(!!result); // Update `isLoggedIn` state based on the result
      } catch (error) {
        console.error('Error fetching user:', error);
        setFetchUser(null);
        setIsLoggedIn(false);
      }
    };
    fetchData();
  }, [isLoggedIn, setIsLoggedIn]);

  const router = useRouter();

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
        <TransitionLink href={'/'}>
          <NavbarBrand>
            <img
              src='/nav.png'
              className='select-none pointer-events-none w-7 mr-2 rounded-md ml-2 sm:ml-0'
              alt=''
            />
            <p className='font-bold text-xl'>SBA</p>
          </NavbarBrand>
        </TransitionLink>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {navItems.map((link, index) => (
          <NavbarItem key={index}>
            <TransitionLink href={link.path}>{link.display}</TransitionLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify='end'>
        {fetchUser ? (
          <NavbarItem>
            <Button
              color='primary'
              variant='shadow'
              radius='full'
              onClick={async () => {
                await deleteSessionClient();
                setIsLoggedIn(false);
                setFetchUser(null); // Clear user state on logout
                router.push('/login');
              }}
            >
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button color='primary' variant='shadow' radius='full'>
              <TransitionLink href='/login'>Login</TransitionLink>
            </Button>
          </NavbarItem>
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
