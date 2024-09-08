'use server';

import { revalidatePath } from 'next/cache';
import { ID, Query } from 'node-appwrite';

import { Appointment } from '@/types/appwrite.types';

import {
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
  messaging,
} from '../appwrite.config';
import { formatDateTime, parseStringify } from '../utils';
import { CreateAppointmentParams, UpdateAppointmentParams } from '@/types';
import { getClient } from './client.actions';
import { Resend } from 'resend';
import { FollowUpEmail } from '@/emails/FollowUpEmail';
import SendAdminEmail from '@/emails/SendAdminEmail';

const resend = new Resend(process.env.RESEND_API_KEY!);

//  CREATE APPOINTMENT
export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );
    // console.log('Appointment', newAppointment);
    revalidatePath('/admin');
    const smsMessage = `Greetings from SBA. A new Appointment has been scheduled on ${formatDateTime(appointment.schedule!).dateTime}. click the link below to view the details. https://sba-main.vercel.app/admin`;
    // await sendSMSNotification(process.env.ADMIN_USER_ID!, smsMessage);
    await sendAdminEmailNotification(newAppointment);
    return parseStringify(newAppointment);
  } catch (error) {
    console.error('An error occurred while creating a new appointment:', error);
  }
};

export const sendAdminEmailNotification = async (appointment: any) => {
  try {
    const subject = `New Appointment form submission from ${appointment.client.name}`;

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Add the correct sender email address here
      to: appointment.client.email, // Change to appointment.client.email when deploying
      subject,
      react: SendAdminEmail({
        name: appointment.client.name,
        email: appointment.client.email,
        time: formatDateTime(appointment.schedule).dateTime, // Ensure correct date formatting
        phone: appointment.client.phone,
        message: appointment.reason || 'No message provided', // Default message
      }),
    });

    console.log('Admin email sent successfully');
  } catch (error) {
    console.error('Error occurred while sending admin email:', error);
  }
};

//  GET RECENT APPOINTMENTS
export const getRecentAppointmentList = async () => {
  try {
    const appointments = await databases.listDocuments(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      [Query.orderDesc('$createdAt')]
    );

    const initialCounts = {
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
    };

    const counts = (appointments.documents as Appointment[]).reduce(
      (acc, appointment) => {
        switch (appointment.status) {
          case 'scheduled':
            acc.scheduledCount++;
            break;
          case 'pending':
            acc.pendingCount++;
            break;
          case 'cancelled':
            acc.cancelledCount++;
            break;
        }
        return acc;
      },
      initialCounts
    );

    const data = {
      totalCount: appointments.total,
      ...counts,
      documents: appointments.documents,
    };

    return parseStringify(data);
  } catch (error) {
    console.error(
      'An error occurred while retrieving the recent appointments:',
      error
    );
  }
};

//  SEND SMS NOTIFICATION
export const sendSMSNotification = async (userId: string, content: string) => {
  try {
    // https://appwrite.io/docs/references/1.5.x/server-nodejs/messaging#createSms
    const message = await messaging.createSms(
      ID.unique(),
      content,
      [],
      [userId]
    );
    return parseStringify(message);
  } catch (error) {
    console.error('An error occurred while sending sms:', error);
  }
};

export const sendFollowUpEmailNotification = async (appointment: any) => {
  try {
    const subject =
      appointment.status === 'scheduled'
        ? `Appointment Scheduled: ${formatDateTime(appointment.schedule).dateTime}`
        : `Appointment Cancelled: ${formatDateTime(appointment.schedule).dateTime}`;

    const body =
      appointment.status === 'scheduled'
        ? `Greetings from SBA. Your appointment is confirmed for ${formatDateTime(appointment.schedule).dateTime} with Mr. Sunil D. Bhor.`
        : `We regret to inform you that your appointment for ${formatDateTime(appointment.schedule).dateTime} is cancelled. Reason: ${appointment.cancellationReason || 'No reason provided.'}.`;

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Add the correct sender email address here
      to: appointment.client.email, // Client's email
      subject,
      react: FollowUpEmail({
        name: appointment.client.name,
        time: formatDateTime(appointment.schedule).dateTime, // Ensure correct date formatting
        message: appointment.cancellationReason || 'No reason provided',
        type: appointment.status === 'scheduled' ? 'success' : 'cancelled',
      }),
    });

    console.log('Follow-up email sent successfully');
  } catch (error) {
    console.error('Error occurred while sending follow-up email:', error);
  }
};

//  UPDATE APPOINTMENT
export const updateAppointment = async ({
  appointmentId,
  userId,
  appointment,
  type,
}: UpdateAppointmentParams) => {
  try {
    // Update appointment to scheduled -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#updateDocument
    const updatedAppointment = await databases.updateDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId,
      appointment
    );

    if (!updatedAppointment) throw Error;
    const client = await getClient(userId);
    console.log('client', client);
    // console.log('updatedAppointment', updatedAppointment);

    // sendEmailNotification(client, appointment);
    const smsMessage = `Greetings from SBA. ${type === 'schedule' ? `Your appointment is confirmed for ${formatDateTime(appointment.schedule!).dateTime} with Mr. Sunil D. Bhor` : `We regret to inform that your appointment for ${formatDateTime(appointment.schedule!).dateTime} is cancelled. Reason:  ${appointment.cancellationReason}`}.`;
    // await sendSMSNotification(userId, smsMessage);
    await sendFollowUpEmailNotification(updatedAppointment);
    revalidatePath('/admin');
    return parseStringify(updatedAppointment);
  } catch (error) {
    console.error('An error occurred while scheduling an appointment:', error);
  }
};

// GET APPOINTMENT
export const getAppointment = async (appointmentId: string) => {
  try {
    const appointment = await databases.getDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId
    );

    return parseStringify(appointment);
  } catch (error) {
    console.error(
      'An error occurred while retrieving the existing client:',
      error
    );
  }
};
