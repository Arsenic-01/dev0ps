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
import { toast } from 'sonner';
import {
  createUser,
  registerUserDocument,
} from '../../lib/actions/client.actions';
import { UserContext } from '@/context/UserContext';
import { getLoggedInUser } from '@/lib/appwrite';

export const ClientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('ClientForm must be used within a UserContextProvider');
  }

  const { isLoggedIn, setIsLoggedIn } = userContext;

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUserData = async () => {
        const user = await getLoggedInUser();
        if (user) {
          toast.warning('Hmm Looks like you are already logged in 🤔');
          toast.warning('Redirecting...');
          router.push(`/clients/${user.$id}/new-appointment`);
          toast.success('Login Successful! 🎉');
          setIsLoggedIn(true);
        }
      };
      fetchUserData();
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

      // Create the user
      await createUser(user);

      // Log in the user
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });

      if (response.ok) {
        const result = await fetch('/api/user');
        const userData = await result.json();

        if (userData && userData.status === 'success') {
          const newUserDoc = {
            userId: userData.user.$id,
            name: values.name,
            email: values.email,
            phone: values.phone,
            password: values.password,
          };

          await registerUserDocument(newUserDoc);
          toast('Login Successful! 🎉');
          setIsLoggedIn(true);
          router.push(`/clients/${userData.user.$id}/new-appointment`);
        } else {
          toast.error(
            'Invalid user credentials, User already Exists or something went wrong.'
          );
        }
      } else {
        toast.error('Login Failed. Please try again.');
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
          placeholder='Enter your Name'
          iconSrc='/assets/icons/user.svg'
          iconAlt='user'
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='email'
          placeholder='Enter your Email'
          iconSrc='/assets/icons/email.svg'
          iconAlt='email'
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='password'
          placeholder='Enter your Password'
          iconSrc='/assets/icons/password.svg'
          iconAlt='password'
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name='phone'
          placeholder='(555) 123-4567'
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};
