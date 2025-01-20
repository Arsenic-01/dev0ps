import FooterExp from '@/components/FooterExp';
import NavbarComponent from '@/components/ui/Navbar';
import { UserContextProvider } from '@/context/UserContext';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import { Providers } from './nextuiProvider';
import { ThemeProvider } from './provider';
import WhatsAppButton from '@/components/ui/WhatsappButton';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  icons: {
    icon: '/logo.webp',
  },

  keywords: [
    'Sunil Bhor & Associates',
    'Property Valuation Experts',
    'Architectural Planning India',
    'Structural Design Services',
    'Real Estate Advisory Nashik',
    'Industrial Project Management',
    'SBA Consultancy Services',
    'Residential and Commercial Planning',
    'Nashik Valuation Experts',
    'Industrial Safety Audits India',
    'Land Conversion Consultants',
  ],

  openGraph: {
    title: 'Sunil Bhor & Associates - Premier Consultancy Firm in India',
    description:
      'Leading consultancy firm offering services like architectural planning, structural design, project management consultancy, and property valuation for residential, commercial, and industrial projects across India.',
    images: '/Letter_Head1_1.jpg',
    type: 'website',
    url: 'https://www.sunilbhor.com',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@SunilBhorSBA',
    title: 'Sunil Bhor & Associates',
    description:
      'Over 25 years of excellence in architectural planning, structural design, project management consultancy, and property valuation in India.',
    images: '/Letter_Head1_1.jpg',
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://www.sunilbhor.com',
    languages: {
      'en-IN': 'https://www.sunilbhor.com',
    },
  },

  creator: 'Vedant Bhor',

  title: 'Sunil Bhor & Associates - Valuation & Consultancy Experts',
  description:
    'Discover Sunil Bhor & Associates, a consultancy firm with over 25 years of experience in architectural planning, structural design, and property valuation for diverse projects across India. Contact us for expert solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/logo.webp' sizes='any' />
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
              <WhatsAppButton />
            </Providers>
          </UserContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
