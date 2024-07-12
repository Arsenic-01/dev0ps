export const GenderOptions = ['Male', 'Female', 'Other'];

export const ClientFormDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  gender: 'Male' as Gender,
  organizationName: '',
  emergencyContactName: '',
  emergencyContactNumber: '',
  identificationDocument: [],
  privacyConsent: false,
};

export const IdentificationTypes = [
  'Birth Certificate',
  "Driver's License",
  'Medical Insurance Card/Policy',
  'Military ID Card',
  'National Identity Card',
  'Passport',
  'Resident Alien Card (Green Card)',
  'Social Security Card',
  'State ID Card',
  'Student ID Card',
  'Voter ID Card',
];

export const StatusIcon = {
  scheduled: '/assets/icons/check.svg',
  pending: '/assets/icons/pending.svg',
  cancelled: '/assets/icons/cancelled.svg',
};
