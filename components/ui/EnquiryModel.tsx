'use client';
import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@nextui-org/button';

export default function EnquireExpanded() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          color='primary'
          size='sm'
          variant='flat'
          radius='full'
          className='w-28'
        >
          Enquire
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-full overflow-y-scroll remove-scrollbar scrollbar-hide'>
        <DialogHeader className='mt-10'>
          <DialogTitle className='font-bold text-3xl text-center lg:text-4xl xl:text-5xl'>
            Enquire Now
          </DialogTitle>
          <DialogDescription className='text-center'>
            95% Reponse Rate ✅
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-4 sm:justify-end py-14'>
          <Button
            color='secondary'
            variant='shadow'
            radius='lg'
            className='w-full'
            onClick={() => {
              window.open(
                'https://www.google.com/maps/place/Sunil+Bhor+and+Associates/@20.0096498,73.7639052,17z/data=!3m1!4b1!4m6!3m5!1s0x3bddea4d3d397d1f:0x69841f86cbb89521!8m2!3d20.0096448!4d73.7664801!16s%2Fg%2F11b7dyj_dn?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D',
                '_blank',
                'noopener,noreferrer'
              );
            }}
          >
            Visit Our Office 🏢
          </Button>
          <Button
            color='secondary'
            variant='shadow'
            radius='lg'
            className='w-full'
            onClick={() => {
              window.open('tel:+917972418920', '_blank', 'noopener,noreferrer');
            }}
          >
            Call us 📞
          </Button>
          <Button
            color='secondary'
            variant='shadow'
            radius='lg'
            className='w-full'
            onClick={() => {
              window.open(
                'https://wa.me/+919822377366',
                '_blank',
                'noopener,noreferrer'
              );
            }}
          >
            Whatsapp 📩
          </Button>
          <Button
            color='secondary'
            variant='shadow'
            radius='lg'
            className='w-full'
            onClick={() => {
              window.open(
                'mailto:sba.nashik@gmail.com?subject=Hey%20there!&body=I%20am%20_____%20and%20I%20want%20to%20Contact%20you%20for%20______',
                '_blank',
                'noopener,noreferrer'
              );
            }}
          >
            Email 📧
          </Button>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
