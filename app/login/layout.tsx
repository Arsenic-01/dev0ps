import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | SBA',
  description: 'Login to Appointment Booking System of SBA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
