import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import { Providers } from './nextuiProvider';
import NavbarComponent from '@/components/ui/Navbar';
import FooterExp from '@/components/FooterExp';
import { Toaster } from 'sonner';
import { UserContextProvider } from '@/context/UserContext';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sunil Bhor & Associates',
  description:
    'SBA is a distinguished consultancy firm with over 25 years of experience providing an array of services encompassing architectural planning, structural design, project management consultancy, and property valuation for residential, commercial, and industrial projects nationwide in India.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/SBA_LOGO11-modified.webp' sizes='any' />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          forcedTheme='dark'
          disableTransitionOnChange
        >
          <UserContextProvider>
            <Providers>
              <NavbarComponent />
              {children}
              <SpeedInsights />
              <Toaster />
              <FooterExp />
            </Providers>
          </UserContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
