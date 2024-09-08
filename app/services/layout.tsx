import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | SBA',
  description: ' ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className='bg-black'>{children}</main>
    </>
  );
}
