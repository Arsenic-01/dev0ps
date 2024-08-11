import Appointment from './appwrite.types';
/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Status = 'pending' | 'scheduled' | 'cancelled';

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
  password: string;
}

declare interface LoginUserParams {
  email: string;
  password: string;
}

declare interface User extends CreateUserParams {
  $id: string;
}
declare type Status = 'pending' | 'scheduled' | 'cancelled';

declare type CreateAppointmentParams = {
  client: string;
  userId: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

declare interface UpdateAppointmentParams {
  appointmentId: string;
  userId: string;
  appointment: Appointment;
  type: string;
}
