import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | SBA',
  description: 'Projects completed by SBA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
