import { Models } from 'node-appwrite';
import { Status } from '.';

export interface Client extends Models.Document {
  userId: string;
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface Appointment extends Models.Document {
  client: Client;
  schedule: Date;
  status: Status;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
