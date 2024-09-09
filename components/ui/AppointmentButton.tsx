'use client';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const AppointmentButton = ({
  userId,
  className,
  href,
  name,
}: {
  userId?: string;
  className?: string;
  href?: string;
  name: string;
}) => {
  const router = useRouter();
  return (
    <Button
      color='primary'
      type='submit'
      radius='sm'
      className={`bg-green-500 mt-4 text-white font-medium px-10` + className}
      onClick={() =>
        router.push(href ? href : `/clients/${userId}/new-appointment`)
      }
    >
      {name}
    </Button>
  );
};

export default AppointmentButton;
