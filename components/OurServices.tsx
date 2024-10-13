import Image from 'next/image';
import React from 'react';
import { ServiceCards } from '@/data/index';
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
import ModalContent from './ModalDescription';

const OurServices = () => {
  return (
    <div className='max-w-7xl mt-10 mb-10 px-8'>
      <div className='mt-8 grid-cols-1 sm:grid-cols-2 grid  md:grid-cols-3 gap-7'>
        {ServiceCards.map((service, index) => {
          return (
            <div
              className='cursor-pointer snap-y bg-black border-[0.5px]	border-[#353535] md:border-[#1f1f1f] hover:border-collapse hover:bg-[#141414] transition-all active:bg-[#1F1F1F] active:border-collapse hover:shadow-sm  ease-in-out rounded-lg  p-3'
              key={index}
            >
              <div className='flex flex-col gap-8 justify-between w-full h-full'>
                <div>
                  <div className='w-full h-48 relative overflow-hidden rounded-md'>
                    <Image
                      src={service.imgSrc}
                      alt='alt'
                      className='w-full absolute rounded-md object-cover select-none pointer-events-none'
                      width={1000}
                      height={600}
                    />
                  </div>
                  <h1 className='mt-3 text-lg lg:text-xl'>{service.title}</h1>
                  <p className='text-neutral-300 my-3 text-sm'>
                    {service.description}
                  </p>
                </div>
                <div className='flex flex-col gap-3'>
                  <div>
                    <EnquireExpanded />
                  </div>
                  <div>
                    <ServicesExpanded
                      Modaltitle={service.title}
                      ModalDescription={service.description}
                      id={service.id}
                      service={service}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;

function ServicesExpanded({ Modaltitle, ModalDescription, id, service }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          color='primary'
          size='sm'
          variant='faded'
          radius='full'
          className='w-full'
        >
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-7xl overflow-y-scroll remove-scrollbar max-h-[80vh] scrollbar-hide'>
        <DialogHeader className='mt-5'>
          <DialogTitle className='font-bold text-3xl text-center lg:text-4xl xl:text-5xl'>
            {Modaltitle}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className='text-center'>
          {ModalDescription}
        </DialogDescription>
        <ModalContent id={id} />
        <DialogFooter>
          <div className='flex flex-col sm:flex-row gap-4 sm:justify-end '>
            <Button color='secondary' variant='shadow' radius='lg'>
              Enquire Now 📞
            </Button>
            <Button color='secondary' variant='shadow' radius='lg'>
              Whatsapp 📩
            </Button>
            <Button color='secondary' variant='shadow' radius='lg'>
              Email 📧
            </Button>
            <DialogClose asChild>
              <Button radius='lg' size='md' variant='ghost' type='submit'>
                Close
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
function EnquireExpanded() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          color='primary'
          size='sm'
          variant='shadow'
          radius='full'
          className='w-full'
        >
          Enquire Now
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-xs overflow-y-scroll remove-scrollbar max-h-[80vh] scrollbar-hide'>
        <DialogHeader className='mt-10'>
          <DialogTitle className='font-bold text-3xl text-center lg:text-4xl xl:text-5xl'>
            Enquire Now
          </DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-4 sm:justify-end py-14'>
          <Button
            color='secondary'
            variant='shadow'
            radius='lg'
            className='w-full'
          >
            Call us 📞
          </Button>
          <Button
            color='secondary'
            variant='shadow'
            radius='lg'
            className='w-full'
          >
            Whatsapp 📩
          </Button>
          <Button
            color='secondary'
            variant='shadow'
            radius='lg'
            className='w-full'
          >
            Email 📧
          </Button>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
