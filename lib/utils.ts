import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date | string) => {
  // IST Offset (UTC+5:30)
  const IST_OFFSET = 5 * 60 + 30;

  // Create a date object from the input dateString
  const date = new Date(dateString);

  // Convert the date to UTC and then to IST
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000; // UTC time in milliseconds
  const istDate = new Date(utcTime + IST_OFFSET * 60000); // IST time in milliseconds

  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDateTime: string = istDate.toLocaleString(
    'en-IN',
    dateTimeOptions
  );
  const formattedDateDay: string = istDate.toLocaleString(
    'en-IN',
    dateDayOptions
  );
  const formattedDate: string = istDate.toLocaleString('en-IN', dateOptions);
  const formattedTime: string = istDate.toLocaleString('en-IN', timeOptions);

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

export function encryptKey(passkey: string) {
  return btoa(passkey);
}

export function decryptKey(passkey: string) {
  return atob(passkey);
}
