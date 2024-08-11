import type { Metadata } from 'next';
import NavbarComponent from '@/components/ui/Navbar';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Sunil Bhor & Associates | About',
  description: ' ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarComponent />
      {children}
      <Toaster />
    </>
  );
}
