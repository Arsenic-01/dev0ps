import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | SBA',
  description: 'Register for booking appointment with SBA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
