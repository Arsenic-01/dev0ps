import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Appointments | SBA',
  description: 'Book new appointment with SBA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
