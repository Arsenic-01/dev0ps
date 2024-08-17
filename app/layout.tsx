import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import { Providers } from './nextuiProvider';
import NavbarComponent from '@/components/ui/Navbar';
import FooterExp from '@/components/FooterExp';
import { Toaster } from 'sonner';
import { UserContextProvider } from '@/context/UserContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sunil Bhor & Associates',
  description: ' ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/nav.png' sizes='any' />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <UserContextProvider>
            <Providers>
              <NavbarComponent />
              {children}
              <Toaster />
              <FooterExp />
            </Providers>
          </UserContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
