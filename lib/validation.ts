import { z } from 'zod';

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),

  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number'),
  password: z
    .string()
    .min(7, 'Password must be at least 7 characters')
    .max(50, 'Password must be at most 50 characters'),
});
export const LoginFormValidation = z.object({
  email: z.string().email('Invalid email address'),

  password: z
    .string()
    .min(7, 'Password must be at least 7 characters')
    .max(50, 'Password must be at most 50 characters'),
});

export const ClientFormValidation = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  password: z
    .string()
    .min(7, 'Password must be at least 7 characters')
    .max(50, 'Password must be at most 50 characters'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number'),
});
export const ContactFormValidation = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  email: z.string().email('Invalid email address'),
  subject: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters'),

  message: z
    .string()
    .min(10, 'Name must be at least 10 characters')
    .max(50, 'Name must be at most 50 characters'),
});

export const CreateAppointmentSchema = z.object({
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(5, 'Reason must be at least 5 characters')
    .max(500, 'Reason must be at most 500 characters'),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(5, 'Reason must be at least 5 characters')
    .max(500, 'Reason must be at most 500 characters'),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case 'create':
      return CreateAppointmentSchema;
    case 'cancel':
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
