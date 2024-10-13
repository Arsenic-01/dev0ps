import Image from 'next/image';
import React from 'react';
import { ServiceCards } from '@/data/index';

import EnquireExpanded from './ui/EnquiryModel';
import ServicesExpanded from './ui/ServicesExpanded';

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
                      alt={service.imgAlt}
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
