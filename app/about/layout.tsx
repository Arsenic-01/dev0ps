import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | SBA',
  description: 'About Sunil Bhor & Associates',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
