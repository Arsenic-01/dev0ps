'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '@/components/ui/form';
import { UserFormValidation } from '@/lib/validation';

import 'react-phone-number-input/style.css';
import CustomFormField, { FormFieldType } from '../CustomFormField';
import SubmitButton from '../SubmitButton';
import { toast, Toaster } from 'sonner';
import {
  createUser,
  registerUserDocument,
} from '../../lib/actions/client.actions';
import { UserContext } from '@/context/UserContext';

export const ClientForm = () => {
  const userContext = useContext(UserContext);

  // Handle the case when `userContext` is undefined
  if (!userContext) {
    throw new Error('ClientForm must be used within a UserContextProvider');
  }

  const { isLoggedIn, setIsLoggedIn } = userContext;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      toast.warning('Hmm Looks like you are already logged in 🤔');
    }
  }, [isLoggedIn]);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
      };

      // Create user and handle response
      const newUser = await createUser(user);

      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });

      const data = await response.json();

      if (data && data.status === 'success') {
        const fetchData = async () => {
          const result = await fetch('/api/user'); // Replace with your API endpoint
          const userData = await result.json();

          if (userData && userData.status === 'success') {
            const id = userData?.user?.$id;

            const newUserDoc = {
              userId: id,
              name: values.name,
              email: values.email,
              phone: values.phone,
              password: values.password,
            };

            await registerUserDocument(newUserDoc);

            setIsLoggedIn(true);
            router.push(`/clients/${id}/new-appointment`);
            toast.success('Login Successful! 🎉');
          } else {
            toast.error('User data fetch failed.');
          }
        };

        await fetchData();
      } else {
        toast.error(
          'Login Failed: User already exists or credentials are incorrect.'
        );
      }
    } catch (error) {
      console.error('Error during user registration or login:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex-1 space-y-6'>
        <section className='mb-12 space-y-4'>
          <h1 className='header'>Hi there 👋</h1>
          <p className='text-dark-700'>Get started with appointments.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='name'
          label='Full name'
          placeholder='Enter your Name'
          iconSrc='/assets/icons/user.svg'
          iconAlt='user'
        />

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

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name='phone'
          label='Phone number'
          placeholder='Enter your Phone number'
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
      <Toaster />
    </Form>
  );
};
