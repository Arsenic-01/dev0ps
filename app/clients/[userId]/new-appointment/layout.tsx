import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sunil Bhor & Associates | Appointment',
  description: ' ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
