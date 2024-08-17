import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sunil Bhor & Associates | Services',
  description: ' ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className='bg-black my-20'>{children}</main>
    </>
  );
}
