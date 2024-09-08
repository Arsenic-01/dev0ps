'use client';

import { ColumnDef } from '@tanstack/react-table';

import { formatDateTime } from '@/lib/utils';
import { Appointment } from '@/types/appwrite.types';

import { AppointmentModal } from '../AppointmentModal';
import { StatusBadge } from '../StatusBadge';

export const columns: ColumnDef<Appointment>[] = [
  {
    header: '#',
    cell: ({ row }) => {
      return <p className='text-14-medium '>{row.index + 1}</p>;
    },
  },
  {
    accessorKey: 'client',
    header: 'Client',
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className='text-14-medium '>{appointment.client?.name}</p>;
    },
  },
  {
    accessorKey: 'phone',
    header: 'Phone no.',
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className='text-14-medium '>{appointment.client?.phone}</p>;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className='min-w-[115px]'>
          <StatusBadge status={appointment.status} />
        </div>
      );
    },
  },
  {
    accessorKey: 'schedule',
    header: 'Appointment',
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className='text-14-regular min-w-[100px]'>
          {formatDateTime(appointment.schedule).dateTime}
        </p>
      );
    },
  },

  {
    id: 'actions',
    header: () => <div className='pl-4'>Actions</div>,
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <div className='flex gap-1'>
          <AppointmentModal
            clientId={appointment.client.$id}
            userId={appointment.userId}
            appointment={appointment}
            type='schedule'
            title='Schedule Appointment'
            description='Please confirm the following details to schedule.'
          />
          <AppointmentModal
            clientId={appointment.client.$id}
            userId={appointment.userId}
            appointment={appointment}
            type='cancel'
            title='Cancel Appointment'
            description='Are you sure you want to cancel your appointment?'
          />
        </div>
      );
    },
  },
];
