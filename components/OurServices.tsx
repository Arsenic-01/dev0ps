'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ServicePageCards } from '@/data/index';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ServicesExpanded from './ui/ServicesExpanded';
interface Service {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  imgAlt: string;
}

export const BreadcrumbWithCustomSeparator = ({
  currentPage,
}: {
  currentPage: string;
}) => {
  return (
    <Breadcrumb className='mt-10 md:mt-16 pl-2 '>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href='/'>Home</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const OurServices = () => {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('serviceId');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    if (serviceId) {
      const service = ServicePageCards.find(
        (service) => service.id.toString() === serviceId
      );
      if (service) {
        setSelectedService(service);
        setIsModalOpen(true);
      } else {
        setIsInvalid(true);
        setIsModalOpen(true);
        const service = {
          id: 0,
          imgSrc: '/404_img.png',
          title: 'Service not available',
          description:
            'Hmm, seems like the service you are looking for is not available.',
          imgAlt: 'Service not available',
        };
        setSelectedService(service);
        setIsInvalid(true);
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
    window.history.pushState({}, '', '/services'); // Reset URL
  };

  return (
    <div className='xl:max-w-5xl 2xl:max-w-6xl  mb-10 px-8'>
      <BreadcrumbWithCustomSeparator currentPage='Services' />
      <div className='mt-10 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-7'>
        {ServicePageCards.map((service) => (
          <div
            key={service.id}
            className='cursor-pointer snap-y bg-black border-[0.5px] border-[#353535] md:border-[#1f1f1f] hover:bg-[#141414] transition-all active:bg-[#1F1F1F] rounded-lg pb-3'
          >
            <div className='flex flex-col gap-8 justify-between w-full h-full'>
              <div>
                <div className='w-full h-44 xl:h-36 2xl:h-44 relative overflow-hidden rounded-t-lg'>
                  <Image
                    src={service.imgSrc}
                    alt={service.imgAlt}
                    className='w-full h-full absolute rounded-t-lg object-cover select-none pointer-events-none'
                    width={1000}
                    height={600}
                    loading='eager'
                  />
                </div>
                <h1 className='mt-3 text-lg lg:text-xl px-3'>
                  {service.title}
                </h1>
                <p className='text-neutral-300 my-3 xl:mt-3 xl:mb-0 text-sm px-3'>
                  {service.description}
                </p>
              </div>
              <div className='flex flex-col gap-3 px-3'>
                <div>
                  <Button
                    as={Link}
                    href={`/contact`}
                    color='primary'
                    size='sm'
                    variant='solid'
                    radius='full'
                    className='w-full'
                  >
                    Request Quote
                  </Button>
                </div>

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
          isInvalid={isInvalid}
        />
      )}
    </div>
  );
};

export default OurServices;
