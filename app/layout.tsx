import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import { Providers } from './nextuiProvider';
import NavbarComponent from '@/components/ui/Navbar';
import FooterExp from '@/components/FooterExp';
import { Toaster } from 'sonner';
import { UserContextProvider } from '@/context/UserContext';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  icons: {
    icon: '/SBA_LOGO11-modified.webp',
  },

  keywords: [
    'Sunil Bhor & Associates',
    'Sunil Bhor',
    'Sunil Bhor Associates',
    'Sunil Bhor & Associates',
    'SBA',
    'sba',
  ],

  openGraph: {
    images: '/SBA_LOGO11-modified.webp',
  },

  twitter: {
    images: '/SBA_LOGO11-modified.webp',
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://www.sunilbhor.com',
  },

  creator: 'Vedamt Bhor',

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
      <body className={dmSans.className}>
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
              <Analytics />
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
