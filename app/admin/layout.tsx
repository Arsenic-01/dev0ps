import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | SBA',
  description: 'Admin Dashboard of SBA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
