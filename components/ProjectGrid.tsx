import { ProjectData } from '@/data';
import Image from 'next/image';
import React from 'react';
import { BreadcrumbWithCustomSeparator } from './OurServices';

const ProjectGrid = () => {
  return (
    <div className='xl:max-w-5xl 2xl:max-w-6xl mb-10 px-8'>
      <BreadcrumbWithCustomSeparator currentPage='Recent Projects' />
      <div className='mt-10 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-7'>
        {ProjectData.map((project) => (
          <div
            key={project.id}
            className='cursor-pointer snap-y bg-black border-[0.5px] border-[#353535] md:border-[#1f1f1f] hover:bg-[#141414] transition-all active:bg-[#1F1F1F] rounded-lg pb-3'
          >
            <div className='flex flex-col gap-8 justify-between w-full h-full'>
              <div>
                <div className='w-full h-48 xl:h-36 2xl:h-44 relative overflow-hidden rounded-t-lg'>
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    className='w-full h-full absolute rounded-t-lg object-cover'
                    width={1000}
                    height={600}
                    quality={100}
                    loading='eager'
                  />
                </div>
                <h1 className='mt-3 text-lg lg:text-xl px-3'>
                  {project.title}
                </h1>
                <div className='flex gap-2 font-semibold text-sm mt-2 flex-wrap mb-5 px-3'>
                  {/* <div className='bg-red-900/70 text-red-500 rounded-md px-2 py-1'>
                    {project.type}
                  </div> */}
                  <div className='bg-blue-900/50 text-blue-400 rounded-md px-2 py-1'>
                    {project.loc}
                  </div>
                  <div className='bg-green-900/60 text-green-500 rounded-md px-2 py-1'>
                    {project.type}
                  </div>
                </div>
                <p className='text-neutral-300 my-3 text-sm px-3'>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
