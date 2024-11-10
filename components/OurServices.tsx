'use client';

import { ServiceCards } from '@/data/index';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import EnquireExpanded from './ui/EnquiryModel';
import ServicesExpanded from './ui/ServicesExpanded';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
interface Service {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  imgAlt: string;
}

const OurServices = () => {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('serviceId');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    if (serviceId) {
      const service = ServiceCards.find(
        (service) => service.id.toString() === serviceId
      );
      if (service) {
        setSelectedService(service);
        setIsModalOpen(true);
      }
    }
  }, [serviceId]);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };
  function BreadcrumbWithCustomSeparator() {
    return (
      <Breadcrumb className='mt-10 md:mt-16 pl-2 '>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href='/'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Services</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  return (
    <div className='max-w-7xl mb-10 px-8'>
      <BreadcrumbWithCustomSeparator />
      <div className='mt-10 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-7'>
        {ServiceCards.map((service) => (
          <div
            key={service.id}
            className='cursor-pointer snap-y bg-black border-[0.5px] border-[#353535] md:border-[#1f1f1f] hover:bg-[#141414] transition-all active:bg-[#1F1F1F] rounded-lg p-3'
          >
            <div className='flex flex-col gap-8 justify-between w-full h-full'>
              <div>
                <div className='w-full h-48 relative overflow-hidden rounded-md'>
                  <Image
                    src={service.imgSrc}
                    alt={service.imgAlt}
                    className='w-full h-full absolute rounded-md object-cover select-none pointer-events-none'
                    width={1000}
                    height={600}
                    quality={100}
                    loading='eager'
                  />
                </div>
                <h1 className='mt-3 text-lg lg:text-xl'>{service.title}</h1>
                <p className='text-neutral-300 my-3 text-sm'>
                  {service.description}
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <div>
                  <Button
                    color='primary'
                    size='sm'
                    variant='solid'
                    radius='full'
                    className='w-full'
                  >
                    Pricing
                  </Button>
                </div>
                {/* <div className='flex flex-col gap-3'>
                  <div className='flex justify-between gap-3'>
                    <EnquireExpanded />

  
                  </div>
                </div> */}
                <Button
                  color='primary'
                  size='sm'
                  variant='flat'
                  radius='full'
                  className='w-full'
                  onClick={() => handleOpenModal(service)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedService && (
        <ServicesExpanded
          Modaltitle={selectedService.title}
          ModalDescription={selectedService.description}
          id={selectedService.id}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default OurServices;
