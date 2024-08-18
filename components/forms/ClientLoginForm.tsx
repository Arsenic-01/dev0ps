'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '@/components/ui/form';
import { LoginFormValidation, UserFormValidation } from '@/lib/validation';

import 'react-phone-number-input/style.css';
import CustomFormField, { FormFieldType } from '../CustomFormField';
import SubmitButton from '../SubmitButton';
import { toast } from 'sonner';
import { FaRightToBracket } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';

export const ClientLoginForm = () => {
  const userContext = useContext(UserContext);

  // Handle the case when `userContext` is undefined
  if (!userContext) {
    throw new Error('Navbar must be used within a UserContextProvider');
  }
  const { isLoggedIn, setIsLoggedIn } = userContext;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginFormValidation>) => {
    setIsLoading(true);
    const email = values.email;
    const password = values.password;

    const response = fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response;

    const fetchData = async () => {
      try {
        const promise = await fetch('/api/user'); // Replace with your API endpoint
        const result = await promise.json();
        if (result?.error?.code === 401 || result?.status === 'error') {
          toast.error('Login Failed Invalid Credentials 👀');
          return;
        }
        const id = result.user.$id;
        if (result) {
          setIsLoggedIn(true);
          router.replace(`/clients/${id}/new-appointment`);
          toast.success('Login Successful! 🎉');
        } else {
          toast.error('Login Failed');
        }
      } catch (error) {
        toast.error('Login Failed');
      }
    };
    fetchData();
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex-1 space-y-6'>
        <section className='mb-12 space-y-4'>
          <h1 className='header'>Hi there 👋</h1>
          <p className='text-dark-700'>Login to your account.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='email'
          label='Email'
          placeholder='Enter your Email'
          iconSrc='/assets/icons/email.svg'
          iconAlt='email'
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='password'
          label='Password'
          placeholder='Enter your Password'
          iconSrc='/assets/icons/password.svg'
          iconAlt='password'
        />

        <SubmitButton isLoading={isLoading}>
          Login <FaRightToBracket className='ml-2 w-4 h-4' />
        </SubmitButton>
      </form>
    </Form>
  );
};
