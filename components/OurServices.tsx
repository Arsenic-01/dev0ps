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

const OurServices = () => {
  return (
    <div className='max-w-7xl mb-10 px-8'>
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
                      className='w-full absolute rounded-md object-cover'
                      width={1000}
                      height={600}
                    />
                  </div>
                  <h1 className='mt-3 text-lg lg:text-xl'>{service.title}</h1>
                  <p className='text-neutral-300 my-3 text-sm'>
                    {service.description}
                  </p>
                </div>
                <ServicesExpanded Modaltitle={service.title} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;

function ServicesExpanded({ Modaltitle }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button color='primary' size='sm' variant='shadow' radius='full'>
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-7xl overflow-y-scroll remove-scrollbar max-h-[80vh]'>
        <DialogHeader className='mt-5'>
          <DialogTitle className='font-bold text-3xl text-center lg:text-4xl xl:text-5xl'>
            {Modaltitle}
          </DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button radius='lg' size='md' variant='ghost' type='submit'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
