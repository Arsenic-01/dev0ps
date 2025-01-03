import React from 'react';
import { Playfair_Display, Bitter } from 'next/font/google';

const bitter = Bitter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

function Work() {
  return (
    <section className='mt-20 rounded-xl bg-black border-[0.5px]	border-[#353535] md:border-[#1f1f1f] '>
      <div className='flex flex-col gap-10 rounded-3xl py-10 md:py-14 px-4 text-white  h-3/6 w-full '>
        <h2
          className={` ${bitter.className} text-center text-3xl md:text-4xl xl:text-5xl`}
        >
          who do we <span className='text-red-400 font-medium'>work for</span>
        </h2>
        <div className='mt-4 sm:mt-7 flex flex-col lg:flex-row justify-center px-0 sm:px-8 gap-6 lg:text-4xl'>
          {/* Section 1: Individuals and Real Estate Developers */}
          {workData.map((data, index) => {
            return (
              <div
                key={index}
                className='text-left flex flex-col gap-7 sm:gap-10 rounded-lg p-5 bg-zinc-950 border-[0.5px] duration-300 border-[#353535] md:border-[#1f1f1f] hover:border-collapse hover:bg-[#1F1F1F] transition-all active:bg-[#1F1F1F] active:border-collapse hover:cursor-pointer'
              >
                <h2 className='text-red-400 text-3xl md:text-4xl font-semibold'>
                  {data.id}
                </h2>
                <p className='capitalize text-2xl md:text-3xl'>{data.title}</p>

                <p className='text-base'>{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;

const workData = [
  {
    id: '01',
    title: 'individuals & real estate developers',
    description:
      'We assist individuals and developers with services like capital gain tax valuation, housing loans, conversion of lands, redevelopment projects, and layout plotting.',
  },
  {
    id: '02',
    title: 'builders & corporates',
    description:
      'Builders and corporate clients benefit from our expertise in land conversion, non-agricultural (N.A.) approvals, colonization, and project consultancy services to streamline their operations.',
  },
  {
    id: '03',
    title: 'financial institutions & industries',
    description:
      'We provide specialized services for financial institutions and industries, including IPO insolvency assistance, valuation services, and capital gain tax consultations.',
  },
];
