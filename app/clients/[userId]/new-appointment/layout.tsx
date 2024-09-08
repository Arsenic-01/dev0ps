import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Appointments | SBA',
  description: ' ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
