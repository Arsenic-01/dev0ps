'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { number, string, z } from 'zod';

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
import useAuth from '@/context/useAuth';

export const ClientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
      const newUser = await createUser(user);

      const email = user.email;
      const password = user.password;

      const response = fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response;
      console.log(data);

      const fetchData = async () => {
        const promise = await fetch('/api/user'); // Replace with your API endpoint
        const result = await promise.json();
        const id: string | number = result.$id;
        console.log(result);
        if (result) {
          const newUser = {
            userId: id,
            name: values.name,
            email: values.email,
            phone: values.phone,
            password: values.password,
          };
          registerUserDocument(newUser);
          router.push(`/clients/${id}/new-appointment`);
          toast('Login Successful! 🎉');
        } else {
          toast('Login Failed User Already Exists');
        }
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
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
          placeholder='Tony Stark'
          iconSrc='/assets/icons/user.svg'
          iconAlt='user'
        />

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

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name='phone'
          label='Phone number'
          placeholder='(555) 123-4567'
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};
