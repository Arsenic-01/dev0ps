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

export const ClientLoginForm = () => {
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
          toast('Login Failed Invalid Credentials 👀');
          return;
        }
        const id = result.user.$id;
        console.log(result);
        if (result) {
          router.replace(`/clients/${id}/new-appointment`);
          toast('Login Successful! 🎉');
        } else {
          toast('Login Failed');
        }
      } catch (error) {
        toast('Login Failed');
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
          placeholder='tonystark@gmail.com'
          iconSrc='/assets/icons/email.svg'
          iconAlt='email'
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='password'
          label='Password'
          placeholder='somethingUnique@123'
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
