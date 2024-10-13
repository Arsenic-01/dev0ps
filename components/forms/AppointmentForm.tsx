'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  createAppointment,
  updateAppointment,
} from '@/lib/actions/appointment.actions';
import { getAppointmentSchema } from '@/lib/validation';
import { Appointment } from '@/types/appwrite.types';

import 'react-datepicker/dist/react-datepicker.css';

import CustomFormField, { FormFieldType } from '../CustomFormField';
import SubmitButton from '../SubmitButton';
import { Form } from '../ui/form';
import { toast } from 'sonner';
import { Status } from '@/types';

// Helper function to get 3:30 PM IST
const getDefaultAppointmentTime = () => {
  const now = new Date();
  now.setUTCHours(10, 0, 0, 0); // 10:00 AM UTC = 3:30 PM IST
  return now;
};

export const AppointmentForm = ({
  userId,
  clientId,
  type = 'create',
  appointment,
  setOpen,
}: {
  userId: string;
  clientId: string;
  type: 'create' | 'schedule' | 'cancel';
  appointment?: Appointment;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const AppointmentFormValidation = getAppointmentSchema(type);

  // Set default time to 3:30 PM IST or use the existing appointment time if available
  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      schedule: appointment
        ? new Date(appointment.schedule)
        : getDefaultAppointmentTime(),
      reason: appointment?.reason || '',
      note: appointment?.note || '',
      cancellationReason: appointment?.cancellationReason || '',
    },
  });

  const onSubmit = async (
    values: z.infer<typeof AppointmentFormValidation>
  ) => {
    setIsLoading(true);

    let status;
    switch (type) {
      case 'schedule':
        status = 'scheduled';
        break;
      case 'cancel':
        status = 'cancelled';
        break;
      default:
        status = 'pending';
    }

    try {
      if (type === 'create' && clientId) {
        const appointment = {
          userId,
          client: clientId,
          schedule: new Date(values.schedule),
          reason: values.reason!,
          status: status as Status,
          note: values.note,
        };

        const newAppointment = await createAppointment(appointment);

        if (newAppointment) {
          form.reset();
          router.push(
            `/clients/${userId}/new-appointment/success?appointmentId=${newAppointment.$id}`
          );
          toast.success('Appointment Created Successfully🎉');
        }
      } else {
        const appointmentToUpdate = {
          userId,
          appointmentId: appointment!.$id!,
          appointment: {
            schedule: new Date(values.schedule),
            status: status as Status,
            cancellationReason: values.cancellationReason,
          },
          type,
        };

        const updatedAppointment = await updateAppointment(appointmentToUpdate);

        if (updatedAppointment) {
          setOpen && setOpen(false);
          form.reset();
        }
      }
    } catch (error) {
      console.log('Error while creating appointment', error);
      toast.error('Error occurred while creating appointment');
    }
    setIsLoading(false);
  };

  let buttonLabel: string;
  switch (type) {
    case 'cancel':
      buttonLabel = 'Cancel Appointment';
      break;
    case 'schedule':
      buttonLabel = 'Schedule Appointment';
      break;
    default:
      buttonLabel = 'Submit Appointment';
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex-1 space-y-6'>
        {type === 'create' && (
          <section className='mb-11 sm:mb-12 space-y-4'>
            <h1 className='header'>New Appointment</h1>
            <p className='text-dark-700'>
              Request a new appointment in 10 seconds.
            </p>
          </section>
        )}

        {type !== 'cancel' && (
          <>
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name='schedule'
              label='Preferred appointment date and time (weekdays only, anytime between 3:30pm and 8:00pm).'
              showTimeSelect
              dateFormat='MM/dd/yyyy  -  h:mm aa'
            />

            <div
              className={`flex flex-col gap-6  ${type === 'create' && 'xl:flex-row'}`}
            >
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name='reason'
                label='Appointment reason'
                placeholder='Project Follow Up, Wanted to Start a New Project, etc.'
                disabled={type === 'schedule'}
              />

              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name='note'
                label='Comments/notes'
                placeholder='Prefer afternoon appointments, if possible'
                disabled={type === 'schedule'}
              />
            </div>
          </>
        )}

        {type === 'cancel' && (
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name='cancellationReason'
            label='Reason for cancellation'
            placeholder='Urgent meeting came up'
          />
        )}

        <SubmitButton
          isLoading={isLoading}
          className={`${type === 'cancel' ? 'shad-danger-btn' : 'shad-primary-btn'} w-full`}
        >
          {buttonLabel}
        </SubmitButton>
      </form>
    </Form>
  );
};
