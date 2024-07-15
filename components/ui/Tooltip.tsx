'use client';
import React from 'react';
import { AnimatedTooltip } from '../ui/animated-tooltip';
const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image: '/users/user-1.png',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image: '/users/user-2.png',
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image: '/users/user-3.png',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image: '/users/user-4.jpg',
  },
  {
    id: 5,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image: '/users/user-5.jpg',
  },
];

export function AnimatedTooltipPreview() {
  return <AnimatedTooltip items={people} />;
}
