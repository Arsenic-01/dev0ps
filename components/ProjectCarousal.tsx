import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';

export function ProjectCarousal() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className='w-full h-full py-0'>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'
          >
            <p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
              <span className='font-bold text-neutral-700 dark:text-neutral-200'>
                The first rule of Apple club is that you boast about Apple club.
              </span>{' '}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src='https://assets.aceternity.com/macbook.png'
              alt='Macbook mockup from Aceternity UI'
              height='500'
              width='500'
              className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: 'High School',
    title: 'Flamingo International School',
    src: '/projects/Flemingo_School_Lohner.webp',
    content: <DummyContent />,
  },
  {
    category: 'Commercial',
    title: 'item 2',
    src: '/projects/Rawal_M_Nagar.webp',
    content: <DummyContent />,
  },
  {
    category: 'Residential',
    title: 'item 3',
    src: '/projects/Raju_Patil.webp',
    content: <DummyContent />,
  },

  {
    category: 'Bungalow',
    title: 'item 4',
    src: '/projects/Hekare_Kailas.webp',
    content: <DummyContent />,
  },
  {
    category: 'Business',
    title: 'item 5',
    src: '/projects/m_Bad_Maratha_Mangal_Karyalaya.webp',
    content: <DummyContent />,
  },
  {
    category: 'Bungalow',
    title: 'item 6',
    src: '/projects/Gaware_Swapnil.webp',
    content: <DummyContent />,
  },
  {
    category: 'Residential',
    title: 'item 7',
    src: '/projects/Ramnath_Jadhav.webp',
    content: <DummyContent />,
  },
  {
    category: 'Industrial',
    title: 'item 8',
    src: '/projects/Mahindra.webp',
    content: <DummyContent />,
  },
  {
    category: 'Industrial',
    title: 'item 9',
    src: '/projects/pernod1.webp',
    content: <DummyContent />,
  },
  {
    category: 'Commercial',
    title: 'item 10',
    src: '/projects/sahyadri.webp',
    content: <DummyContent />,
  },
  {
    category: 'Domestic',
    title: 'item 11',
    src: '/projects/ghat.webp',
    content: <DummyContent />,
  },
  {
    category: 'Industrial',
    title: 'item 12',
    src: '/projects/Vishal_Raut.webp',
    content: <DummyContent />,
  },
];
